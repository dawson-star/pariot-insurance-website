import type { Metadata } from "next";
import CallButton from "../components/CallButton";

export const metadata: Metadata = {
  title: "Commercial Insurance | Patriot Insurance Group",
};

export default function CommercialInsurance() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-3xl font-bold tracking-tight text-navy">
        Commercial Insurance in Camp Hill, PA
      </h1>
      <p className="mt-6 text-navy/80">
        General liability, property, and business auto coverage for local
        businesses. We compare carriers to find coverage that fits your
        business and your risk.
      </p>
      <div className="mt-10">
        <CallButton label="Get a Quote — Call (717) 579-1270" />
      </div>
    </div>
  );
}
