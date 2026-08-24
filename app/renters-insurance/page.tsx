import type { Metadata } from "next";
import CallButton from "../components/CallButton";

export const metadata: Metadata = {
  title: "Renters Insurance | Patriot Insurance Group",
};

export default function RentersInsurance() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-3xl font-bold tracking-tight text-navy">
        Renters Insurance in Camp Hill, PA
      </h1>
      <p className="mt-6 text-navy/80">
        Protect your belongings and cover your liability as a renter — theft,
        fire, water damage, and more. We shop multiple carriers to find
        affordable coverage that fits your apartment or rental home.
      </p>
      <div className="mt-10">
        <CallButton label="Get a Quote — Call (717) 579-1270" />
      </div>
    </div>
  );
}
