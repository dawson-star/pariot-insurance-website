import type { Metadata } from "next";
import Image from "next/image";

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

      <hr className="mt-16 border-gray-200" />

      <h2 className="mt-16 text-2xl font-bold tracking-tight">About Us</h2>
      <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-start">
        <div className="relative h-40 w-32 flex-shrink-0 overflow-hidden rounded-lg sm:h-48 sm:w-[157px]">
          <Image
            src="/images/dawson-headshot.jpg"
            alt="Dawson Engle, owner of Patriot Insurance Group"
            fill
            className="object-cover"
          />
        </div>
        <div className="space-y-4 text-gray-700">
          <p>
            Patriot Insurance Group is an independent insurance agency based
            in Camp Hill, Pennsylvania, serving home, auto, and commercial
            insurance clients throughout the area.
          </p>
          <p>
            As an independent agency, we work with multiple carriers to
            compare coverage and pricing on your behalf, rather than selling
            a single company&apos;s policies.
          </p>
        </div>
      </div>

      <h2 className="mt-12 text-xl font-semibold">Involved in Our Community</h2>
      <div className="mt-4 space-y-4 text-gray-700">
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
