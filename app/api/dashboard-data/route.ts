import { GoogleAdsApi, enums } from "google-ads-api";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

type CampaignRow = {
  id: string;
  name: string;
  status: string;
  costMicros: number;
  conversions: number;
  conversionsValue: number;
};

type RecommendationRow = {
  resourceName: string;
  type: string;
  campaignName: string | null;
  dollarsRecoverable: number | null;
  description: string;
};

function humanizeType(type: string): string {
  return type
    .toLowerCase()
    .split("_")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export async function GET() {
  const client = new GoogleAdsApi({
    client_id: process.env.GOOGLE_ADS_CLIENT_ID!,
    client_secret: process.env.GOOGLE_ADS_CLIENT_SECRET!,
    developer_token: process.env.GOOGLE_ADS_DEVELOPER_TOKEN!,
  });

  const customer = client.Customer({
    customer_id: process.env.GOOGLE_ADS_CUSTOMER_ID!,
    login_customer_id: process.env.GOOGLE_ADS_LOGIN_CUSTOMER_ID!,
    refresh_token: process.env.GOOGLE_ADS_REFRESH_TOKEN!,
  });

  try {
    const campaignRows = await customer.query(`
      SELECT
        campaign.id,
        campaign.name,
        campaign.status,
        metrics.cost_micros,
        metrics.conversions,
        metrics.conversions_value
      FROM campaign
      WHERE segments.date DURING LAST_30_DAYS
    `);

    const campaigns: CampaignRow[] = campaignRows.map((row) => ({
      id: String(row.campaign?.id ?? ""),
      name: row.campaign?.name ?? "",
      status: String(enums.CampaignStatus[row.campaign?.status ?? 0]),
      costMicros: Number(row.metrics?.cost_micros ?? 0),
      conversions: Number(row.metrics?.conversions ?? 0),
      conversionsValue: Number(row.metrics?.conversions_value ?? 0),
    }));

    let recommendations: RecommendationRow[] = [];
    try {
      const recRows = await customer.query(`
        SELECT
          recommendation.resource_name,
          recommendation.type,
          recommendation.campaign,
          recommendation.dismissed
        FROM recommendation
        WHERE recommendation.dismissed = FALSE
      `);

      const campaignNameByResource = new Map(
        campaignRows.map((row) => [
          `customers/${process.env.GOOGLE_ADS_CUSTOMER_ID}/campaigns/${row.campaign?.id}`,
          row.campaign?.name ?? null,
        ])
      );

      recommendations = recRows.map((row) => {
        const r = row.recommendation;
        return {
          resourceName: r?.resource_name ?? "",
          type: humanizeType(String(enums.RecommendationType[r?.type ?? 0] ?? "Unknown")),
          campaignName: r?.campaign ? campaignNameByResource.get(r.campaign) ?? null : null,
          dollarsRecoverable: null,
          description: humanizeType(String(enums.RecommendationType[r?.type ?? 0] ?? "Unknown")),
        };
      });
    } catch {
      // Recommendations query can fail independently (e.g. no permission) — degrade gracefully.
      recommendations = [];
    }

    return NextResponse.json({ campaigns, recommendations, fetchedAt: new Date().toISOString() });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Unknown error fetching Google Ads data" },
      { status: 500 }
    );
  }
}
