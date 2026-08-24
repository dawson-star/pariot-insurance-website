import Image from "next/image";
import Link from "next/link";
import { Car, Home as HomeIcon, Building2 } from "lucide-react";
import CallButton from "./components/CallButton";

const SERVICES = [
  {
    href: "/auto-insurance",
    icon: Car,
    label: "Auto Insurance",
    blurb: "Liability, collision, and comprehensive coverage.",
  },
  {
    href: "/home-insurance",
    icon: HomeIcon,
    label: "Home Insurance",
    blurb: "Protection against fire, theft, weather, and liability.",
  },
  {
    href: "/commercial-insurance",
    icon: Building2,
    label: "Commercial Insurance",
    blurb: "General liability, property, and business auto coverage.",
  },
];

const WHY_US = [
  {
    title: "Independent, not captive",
    body: "We compare multiple carriers instead of selling one company's policies, so the coverage fits you, not a quota.",
  },
  {
    title: "A real local agent",
    body: "Based in Camp Hill, PA — call and talk to the person who actually manages your policy, not a call center.",
  },
  {
    title: "No pressure quotes",
    body: "Call for a quote comparison with no obligation. We'll tell you honestly if your current coverage is already a good deal.",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-cream">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-navy sm:text-5xl">
              Call my office for a personalized insurance quote.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-navy/70">
              Patriot Insurance Group helps families and businesses in the Camp
              Hill area find the right home, auto, and commercial coverage — at
              the right price.
            </p>
            <div className="mt-8">
              <CallButton label="Call (717) 579-1270" />
            </div>
          </div>
          <div className="relative aspect-[1206/1101] w-full overflow-hidden rounded-lg">
            <Image
              src="/images/community-sponsorship.jpg"
              alt="Patriot Insurance Group sponsoring a local community golf outing"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Agent profile */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
          <div className="flex flex-col gap-6 sm:flex-row">
            <div className="relative h-40 w-32 flex-shrink-0 overflow-hidden rounded-lg sm:h-48 sm:w-[157px]">
              <Image
                src="/images/dawson-headshot.jpg"
                alt="Dawson Engle, owner of Patriot Insurance Group"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-wide text-brick">
                Independent Insurance Agent
              </p>
              <h2 className="mt-1 text-2xl font-bold text-navy">Dawson Engle</h2>
              <p className="text-navy/60">Patriot Insurance Group</p>
              <div className="mt-4 space-y-3 text-navy/80">
                <p>
                  Patriot Insurance Group is an independent insurance agency
                  based in Camp Hill, Pennsylvania, serving home, auto, and
                  commercial insurance clients throughout the area.
                </p>
                <p>
                  As an independent agency, we work with multiple carriers to
                  compare coverage and pricing on your behalf, rather than
                  selling a single company&apos;s policies.
                </p>
              </div>
              <div className="mt-6">
                <CallButton label="Call (717) 579-1270" variant="outline" />
              </div>
            </div>
          </div>

          {/* Quote card (call-only, no form) */}
          <div className="h-fit rounded-lg border border-navy/10 bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-navy">
              Want a personalized quote?
            </h3>
            <p className="mt-2 text-sm text-navy/60">
              Skip the online form — call and talk to a real local agent
              directly.
            </p>
            <div className="mt-4">
              <CallButton label="Call (717) 579-1270" className="w-full justify-center" />
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-white border-t border-gray-100">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-center text-2xl font-bold text-navy">
            What We Cover
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {SERVICES.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group rounded-lg border border-navy/10 p-6 text-center transition-colors hover:border-brick"
              >
                <s.icon className="mx-auto h-8 w-8 text-brick" strokeWidth={1.75} />
                <p className="mt-4 font-semibold text-navy">{s.label}</p>
                <p className="mt-2 text-sm text-navy/60">{s.blurb}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-center text-2xl font-bold text-navy">
            Why Work With Us
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {WHY_US.map((item) => (
              <div key={item.title}>
                <p className="font-semibold text-navy">{item.title}</p>
                <p className="mt-2 text-sm text-navy/70">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office info + map */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-navy">Office Info</h2>
            <div className="mt-4 space-y-1 text-navy/80">
              <p>Patriot Insurance Group</p>
              <p>4242 Carlisle Pike, Ste 106</p>
              <p>Camp Hill, PA 17011</p>
              <p className="pt-2">
                <a href="tel:+17175791270" className="font-medium text-brick">
                  (717) 579-1270
                </a>
              </p>
            </div>
            <div className="mt-6">
              <CallButton label="Call (717) 579-1270" variant="outline" />
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-navy/10">
            <iframe
              title="Office location map"
              className="h-64 w-full sm:h-full"
              loading="lazy"
              src="https://www.google.com/maps?q=4242+Carlisle+Pike+Ste+106+Camp+Hill+PA+17011&output=embed"
            />
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="bg-white border-t border-gray-100">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-bold text-navy">
            Involved in Our Community
          </h2>
          <p className="mt-3 max-w-2xl text-navy/70">
            We believe in showing up for the Camp Hill community, not just
            insuring it — from sponsoring local events to volunteering our
            time.
          </p>
          <div className="relative mt-6 aspect-[1206/718] w-full overflow-hidden rounded-lg">
            <Image
              src="/images/community-volunteer.jpg"
              alt="Patriot Insurance Group team volunteering at a local charity event"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
