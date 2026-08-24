import CallButton from "./CallButton";
import GetQuoteButton from "./GetQuoteButton";

export default function ProductHero({
  eyebrow,
  headline,
  body,
  quoteType,
  quoteLabel = "Get a Quote",
}: {
  eyebrow: string;
  headline: string;
  body: string;
  quoteType: "auto" | "home" | "renters" | "commercial";
  quoteLabel?: string;
}) {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-3xl px-6 py-16 text-center sm:py-20">
        <p className="text-sm font-medium uppercase tracking-wide text-brick">
          {eyebrow}
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
          {headline}
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg text-navy/70">{body}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <GetQuoteButton type={quoteType} label={quoteLabel} />
          <CallButton label="Call Dawson" variant="outline" />
        </div>
        <p className="mt-6 text-sm text-navy/60">
          Based in Camp Hill • Serving Perry, Cumberland &amp; Dauphin Counties
        </p>
      </div>
    </section>
  );
}
