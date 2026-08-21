import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auto Insurance | Patriot Insurance Group",
};

export default function AutoInsurance() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-3xl font-bold tracking-tight">
        Auto Insurance in Camp Hill, PA
      </h1>
      <p className="mt-6 text-gray-700">
        We compare coverage and pricing across multiple carriers to help you
        find the right auto policy — liability, collision, and comprehensive
        coverage tailored to how you drive.
      </p>
      <div className="mt-10">
        <a
          href="tel:+17175791270"
          className="inline-block rounded-md bg-gray-900 px-6 py-3 text-white font-medium hover:bg-gray-800"
        >
          Get a Quote — Call (717) 579-1270
        </a>
      </div>
    </div>
  );
}
