import type { Metadata } from "next";
import CallButton from "../components/CallButton";

export const metadata: Metadata = {
  title: "Free Quote | Patriot Insurance Group",
};

export default function Quote() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-3xl font-bold tracking-tight">
        Get a Free Insurance Quote
      </h1>
      <p className="mt-6 text-gray-700">
        No obligation, no pressure. Call us and we&apos;ll compare coverage
        and pricing across multiple carriers to find the right policy for
        you.
      </p>
      <div className="mt-10">
        <CallButton
          label="Call (717) 579-1270"
          className="inline-block rounded-md bg-gray-900 px-6 py-3 text-white font-medium hover:bg-gray-800"
        />
      </div>
    </div>
  );
}
