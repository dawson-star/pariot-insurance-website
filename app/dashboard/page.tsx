"use client";

import { useEffect, useState } from "react";

type Campaign = {
  id: string;
  name: string;
  status: string;
  costMicros: number;
  conversions: number;
  conversionsValue: number;
};

type Recommendation = {
  resourceName: string;
  type: string;
  campaignName: string | null;
  dollarsRecoverable: number | null;
  description: string;
};

type DashboardData = {
  campaigns: Campaign[];
  recommendations: Recommendation[];
  fetchedAt: string;
  error?: string;
};

function formatCurrency(n: number) {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD" });
}

function CopyToClaudeButton({ rec }: { rec: Recommendation }) {
  const [copied, setCopied] = useState(false);

  const prompt = `Review this Google Ads recommendation for account 862-068-9415${
    rec.campaignName ? ` on campaign "${rec.campaignName}"` : ""
  }: "${rec.description}" (${rec.resourceName}). Explain what it would change, whether it fits our SKAG-discipline setup, and apply it only if I approve.`;

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API can fail without permissions/HTTPS — fail silently, button just won't confirm.
    }
  };

  return (
    <button
      onClick={handleClick}
      className="rounded-md border border-gray-300 px-3 py-1.5 text-sm font-medium hover:bg-gray-50 whitespace-nowrap"
    >
      {copied ? "Copied ✓" : "Send to Claude"}
    </button>
  );
}

export default function Dashboard() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/dashboard-data")
      .then((r) => r.json())
      .then((d) => setData(d))
      .catch((e) => setData({ campaigns: [], recommendations: [], fetchedAt: "", error: String(e) }))
      .finally(() => setLoading(false));
  }, []);

  const sortedRecs = data?.recommendations
    ? [...data.recommendations].sort(
        (a, b) => (b.dollarsRecoverable ?? -1) - (a.dollarsRecoverable ?? -1)
      )
    : [];

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
      <p className="mt-2 text-sm text-gray-500">
        Live from Google Ads account 862-068-9415
        {data?.fetchedAt ? ` · updated ${new Date(data.fetchedAt).toLocaleString()}` : ""}
      </p>

      {loading && <p className="mt-10 text-gray-500">Loading live account data…</p>}

      {data?.error && (
        <div className="mt-10 rounded-md border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          Couldn&apos;t load Google Ads data: {data.error}
        </div>
      )}

      {!loading && !data?.error && (
        <>
          <section className="mt-12">
            <h2 className="text-xl font-semibold">ROAS by Campaign</h2>
            <p className="mt-1 text-sm text-gray-500">Last 30 days</p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-gray-200 text-left text-gray-500">
                    <th className="py-2 pr-4 font-medium">Campaign</th>
                    <th className="py-2 pr-4 font-medium">Status</th>
                    <th className="py-2 pr-4 font-medium">Cost</th>
                    <th className="py-2 pr-4 font-medium">Conv. Value</th>
                    <th className="py-2 pr-4 font-medium">ROAS</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.campaigns.map((c) => {
                    const cost = c.costMicros / 1_000_000;
                    const roas = cost > 0 ? c.conversionsValue / cost : null;
                    return (
                      <tr key={c.id} className="border-b border-gray-100">
                        <td className="py-3 pr-4 font-medium">{c.name}</td>
                        <td className="py-3 pr-4">
                          <span
                            className={`rounded px-2 py-0.5 text-xs ${
                              c.status === "ENABLED"
                                ? "bg-green-100 text-green-700"
                                : "bg-gray-100 text-gray-600"
                            }`}
                          >
                            {c.status}
                          </span>
                        </td>
                        <td className="py-3 pr-4">{formatCurrency(cost)}</td>
                        <td className="py-3 pr-4">{formatCurrency(c.conversionsValue)}</td>
                        <td className="py-3 pr-4">
                          {roas !== null ? `${roas.toFixed(2)}x` : "No spend yet"}
                        </td>
                      </tr>
                    );
                  })}
                  {data?.campaigns.length === 0 && (
                    <tr>
                      <td colSpan={5} className="py-6 text-center text-gray-500">
                        No campaigns found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-xl font-semibold">Top Recommendations</h2>
            <p className="mt-1 text-sm text-gray-500">
              Ranked by estimated dollars recoverable, pulled from Google Ads&apos; own
              recommendations feed
            </p>
            <div className="mt-4 space-y-3">
              {sortedRecs.length === 0 && (
                <div className="rounded-md border border-gray-200 p-6 text-sm text-gray-500">
                  No recommendations yet. Google generates these once a campaign has real
                  traffic and spend history — check back once the account has been live for
                  a few days.
                </div>
              )}
              {sortedRecs.map((rec) => (
                <div
                  key={rec.resourceName}
                  className="flex items-center justify-between gap-4 rounded-md border border-gray-200 p-4"
                >
                  <div>
                    <div className="font-medium">{rec.type}</div>
                    <div className="mt-1 text-sm text-gray-500">
                      {rec.campaignName ?? "Account-level"}
                      {rec.dollarsRecoverable !== null && (
                        <> · Est. {formatCurrency(rec.dollarsRecoverable)} recoverable</>
                      )}
                    </div>
                  </div>
                  <CopyToClaudeButton rec={rec} />
                </div>
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
}
