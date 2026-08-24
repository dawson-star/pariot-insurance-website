import type { Metadata } from "next";
import Image from "next/image";
import CallButton from "../components/CallButton";

export const metadata: Metadata = {
  title: "About | Patriot Insurance Group",
};

export default function About() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-3xl font-bold tracking-tight text-navy">About Us</h1>

      <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-start">
        <div className="relative h-40 w-32 flex-shrink-0 overflow-hidden rounded-lg sm:h-48 sm:w-[157px]">
          <Image
            src="/images/dawson-headshot.jpg"
            alt="Dawson Engle, owner of Patriot Insurance Group"
            fill
            className="object-cover"
          />
        </div>
        <div className="space-y-4 text-navy/80">
          <p>
            Patriot Insurance Group is an independent insurance agency based
            in Camp Hill, Pennsylvania, serving home, auto, renters, and
            commercial insurance clients throughout the area.
          </p>
          <p>
            As an independent agency, we work with multiple carriers to
            compare coverage and pricing on your behalf, rather than selling
            a single company&apos;s policies.
          </p>
        </div>
      </div>

      <h2 className="mt-12 text-xl font-semibold text-navy">
        Involved in Our Community
      </h2>
      <div className="mt-4 space-y-4 text-navy/80">
        <p>
          We believe in showing up for the Camp Hill community, not just
          insuring it — from sponsoring local events to volunteering our
          time.
        </p>
        <div className="relative aspect-[1206/718] w-full overflow-hidden rounded-lg">
          <Image
            src="/images/community-volunteer.jpg"
            alt="Patriot Insurance Group team volunteering at a local charity event"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <h2 className="mt-10 text-xl font-semibold text-navy">Contact</h2>
      <div className="mt-4 space-y-1 text-navy/80">
        <p>Patriot Insurance Group</p>
        <p>4242 Carlisle Pike, Ste 106, Camp Hill, PA 17011</p>
      </div>
      <div className="mt-6">
        <CallButton label="Call (717) 579-1270" />
      </div>
    </div>
  );
}
