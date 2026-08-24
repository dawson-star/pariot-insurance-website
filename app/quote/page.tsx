import type { Metadata } from "next";
import { Suspense } from "react";
import QuoteForm from "../components/QuoteForm";
import CallButton from "../components/CallButton";

export const metadata: Metadata = {
  title: "Get a Quote | Patriot Insurance Group",
};

export default function Quote() {
  return (
    <div className="mx-auto max-w-xl px-6 py-20">
      <h1 className="text-3xl font-bold tracking-tight text-navy">
        Get a Free Insurance Quote
      </h1>
      <p className="mt-4 text-navy/80">
        No obligation, no pressure. Tell me a bit about what you need and
        I&apos;ll compare coverage and pricing across multiple carriers. If
        it&apos;s faster for you, just call instead.
      </p>
      <div className="mt-6">
        <CallButton label="Call (717) 579-1270" variant="outline" />
      </div>
      <div className="mt-8">
        <Suspense fallback={null}>
          <QuoteForm />
        </Suspense>
      </div>
    </div>
  );
}
