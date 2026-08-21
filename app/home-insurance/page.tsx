import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Insurance | Patriot Insurance Group",
};

export default function HomeInsurance() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-3xl font-bold tracking-tight">
        Home Insurance in Camp Hill, PA
      </h1>
      <p className="mt-6 text-gray-700">
        Protect your home and belongings against fire, theft, weather, and
        liability. We shop multiple carriers to find coverage that fits your
        home and your budget.
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
