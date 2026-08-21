import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Patriot Insurance Group",
};

export default function About() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-3xl font-bold tracking-tight">About Us</h1>
      <div className="mt-6 space-y-4 text-gray-700">
        <p>
          Patriot Insurance Group is an independent insurance agency based in
          Camp Hill, Pennsylvania, serving home, auto, and commercial
          insurance clients throughout the area.
        </p>
        <p>
          As an independent agency, we work with multiple carriers to compare
          coverage and pricing on your behalf, rather than selling a single
          company&apos;s policies.
        </p>
      </div>

      <h2 className="mt-10 text-xl font-semibold">Contact</h2>
      <div className="mt-4 text-gray-700 space-y-1">
        <p>Patriot Insurance Group</p>
        <p>4242 Carlisle Pike, Ste 106, Camp Hill, PA 17011</p>
        <p>
          <a
            href="mailto:dawson@patriotinsgroup.com"
            className="hover:underline"
          >
            dawson@patriotinsgroup.com
          </a>
        </p>
      </div>
    </div>
  );
}
