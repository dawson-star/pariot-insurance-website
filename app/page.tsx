import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Car, Home as HomeIcon, Building2, KeyRound, Star } from "lucide-react";
import CallButton from "./components/CallButton";
import GetQuoteButton from "./components/GetQuoteButton";
import RiskReversal from "./components/RiskReversal";
import ProcessSteps from "./components/ProcessSteps";

export const metadata: Metadata = {
  title: "Independent Insurance Agent Camp Hill PA | Patriot Insurance Group",
  description:
    "See if you could be paying less for insurance. Dawson Engle compares auto, home, renters, and business coverage from multiple companies — serving Perry, Cumberland & Dauphin Counties, PA.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  name: "Patriot Insurance Group",
  image: "https://dawsonengle.com/images/dawson-headshot.jpg",
  telephone: "+17175791270",
  email: "dawson@patriotinsgroup.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "4242 Carlisle Pike, Ste 106",
    addressLocality: "Camp Hill",
    addressRegion: "PA",
    postalCode: "17011",
    addressCountry: "US",
  },
  areaServed: ["Perry County, PA", "Cumberland County, PA", "Dauphin County, PA"],
  url: "https://dawsonengle.com",
};

const PRODUCTS = [
  {
    href: "/auto-insurance",
    icon: Car,
    label: "Auto Insurance",
    blurb: "Compare your current auto rate and coverage and see whether another option makes sense.",
    cta: "Compare Auto Insurance",
  },
  {
    href: "/home-insurance",
    icon: HomeIcon,
    label: "Home Insurance",
    blurb: "Review your existing homeowners policy or get insurance lined up for a new home.",
    cta: "Compare Home Insurance",
  },
  {
    href: "/renters-insurance",
    icon: KeyRound,
    label: "Renters Insurance",
    blurb: "Get the renters coverage you need without making the process complicated.",
    cta: "Get Renters Insurance",
  },
  {
    href: "/commercial-insurance",
    icon: Building2,
    label: "Business Insurance",
    blurb: "Insurance for contractors, trades, and other local businesses that need coverage that fits their actual operations.",
    cta: "Explore Business Insurance",
  },
];

const WHY_INDEPENDENT = [
  "Compare options from multiple insurance companies, not just one",
  "Have one person you can actually call",
  "Get help understanding what you're buying",
  "Ask questions without navigating a call center",
  "Review more than just price when comparing policies",
];

const WHY_SHOP_NOW = [
  "Your renewal premium went up",
  "You haven't compared rates in a few years",
  "You're buying a house",
  "You bought another vehicle",
  "You're adding a driver",
  "You're moving",
  "You're starting or growing a business",
  "You're simply curious whether your current policy is still competitive",
];

const REVIEWS = [
  {
    name: "Candace R.",
    text: "Dawson got us the absolute best rate on the homeowners insurance that we needed to close on our new home. He is super friendly and quickly answered all my questions. Highly recommend!!",
  },
  {
    name: "Mark D.",
    text: "Dawson was very helpful in answering all of my questions and made the process easy to understand. He is knowledgeable, professional, and communicates clearly without making things feel overwhelming.",
  },
  {
    name: "Sophia T.",
    text: "Had a great experience working with Dawson to get auto insurance. He made it quick, easy, and stress-free! Highly recommend!",
  },
];

const OBJECTIONS = [
  {
    q: "“I’m happy with my current company.”",
    a: "That's fine. Getting another quote doesn't mean you have to leave them. It simply gives you something to compare against.",
  },
  {
    q: "“I don’t want worse coverage just to save money.”",
    a: "Neither do I. A cheaper premium isn't much of a deal if important coverage disappears. I want to compare the coverage alongside the price.",
  },
  {
    q: "“I don’t know what coverage I have.”",
    a: "That's common. If you send me your current policy information, I can help you understand what you're looking at.",
  },
  {
    q: "“What if you can’t save me anything?”",
    a: "Then I'll tell you that. If your current policy is the better option, there's no reason to switch just for the sake of switching.",
  },
];

export default function Home() {
  return (
    <div>
      {/* eslint-disable-next-line react/no-danger */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-cream">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-navy sm:text-5xl">
              See If You Could Be Paying Less for Insurance
            </h1>
            <p className="mt-6 max-w-xl text-lg text-navy/70">
              I help homeowners, drivers, and businesses throughout Perry,
              Cumberland &amp; Dauphin Counties compare coverage and rates
              from multiple insurance companies.
            </p>
            <p className="mt-3 text-sm font-medium uppercase tracking-wide text-brick">
              Independent Insurance Agent • Based in Camp Hill
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <GetQuoteButton type="auto" label="Get a Free Quote" />
              <CallButton label="Call Dawson" variant="outline" />
            </div>
          </div>
          <div className="relative aspect-[1206/1101] w-full overflow-hidden rounded-lg">
            <Image
              src="/images/community-sponsorship.jpg"
              alt="Dawson Engle at a local community event"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Core offer */}
      <section className="mx-auto max-w-3xl px-6 py-16 text-center">
        <h2 className="text-2xl font-bold text-navy">
          Already Have Insurance? That&apos;s a Good Place to Start.
        </h2>
        <p className="mt-4 text-navy/80">
          Send me what you currently have. I&apos;ll look at your coverage
          and what you&apos;re paying, compare it against the options
          available to me, and explain what I find.
        </p>
        <div className="mt-10">
          <RiskReversal
            heading="If Your Current Policy Is Already the Better Deal, I'll Tell You."
            body="Getting a quote doesn't mean you have to switch. If your current option still makes the most sense, you can keep it."
          />
        </div>
      </section>

      {/* Product cards */}
      <section className="bg-white border-t border-gray-100">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-center text-2xl font-bold text-navy">
            What Are You Looking to Insure?
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PRODUCTS.map((p) => (
              <div
                key={p.href}
                className="flex flex-col rounded-lg border border-navy/10 p-6"
              >
                <p.icon className="h-8 w-8 text-brick" strokeWidth={1.75} />
                <p className="mt-4 font-semibold text-navy">{p.label}</p>
                <p className="mt-2 flex-1 text-sm text-navy/60">{p.blurb}</p>
                <Link
                  href={p.href}
                  className="mt-4 text-sm font-medium text-brick hover:underline"
                >
                  {p.cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why independent */}
      <section className="bg-cream">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="text-2xl font-bold text-navy">
            Why Work With an Independent Insurance Agent?
          </h2>
          <p className="mt-4 text-navy/80">
            I don&apos;t work for just one insurance company. When you ask me
            for a quote, I can look at options from multiple carriers rather
            than giving you one company&apos;s price and calling it a
            comparison.
          </p>
          <ul className="mt-6 space-y-2 text-navy/80">
            {WHY_INDEPENDENT.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-brick">—</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why shop now */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-2xl font-bold text-navy">
          When Does It Make Sense to Shop Your Insurance?
        </h2>
        <ul className="mt-6 grid gap-2 text-navy/80 sm:grid-cols-2">
          {WHY_SHOP_NOW.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-brick">—</span>
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-navy/60">
          Pricing and carrier appetite change over time — these are just
          reasonable moments to take a look.
        </p>
      </section>

      {/* How it works */}
      <section className="bg-cream">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="text-2xl font-bold text-navy">
            Getting a Second Look Shouldn&apos;t Be Complicated
          </h2>
          <div className="mt-8">
            <ProcessSteps
              steps={[
                {
                  title: "Tell Me What You Have",
                  body: "Send your current policy information or the basic details needed to get started.",
                },
                {
                  title: "I'll Compare the Options",
                  body: "I review available options from the companies I work with and compare coverage and price.",
                },
                {
                  title: "You Decide",
                  body: "I'll explain what I found. Switch if it makes sense, or keep what you have — no obligation.",
                },
              ]}
            />
          </div>
          <div className="mt-8">
            <GetQuoteButton type="auto" label="Get a Free Quote" />
          </div>
        </div>
      </section>

      {/* Local positioning */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-navy">
              Local Insurance Help for Central Pennsylvania
            </h2>
            <p className="mt-4 text-navy/80">
              I&apos;m based in Camp Hill and primarily work with
              individuals, families, and businesses throughout Perry,
              Cumberland &amp; Dauphin Counties.
            </p>
            <p className="mt-3 text-navy/60">
              I can also assist clients elsewhere in Pennsylvania.
            </p>
            <div className="mt-6 space-y-1 text-navy/80">
              <p>Patriot Insurance Group</p>
              <p>4242 Carlisle Pike, Ste 106, Camp Hill, PA 17011</p>
            </div>
            <div className="mt-6">
              <CallButton label="Call Dawson" variant="outline" />
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
        <div className="relative mt-10 aspect-[1206/718] w-full overflow-hidden rounded-lg">
          <Image
            src="/images/community-volunteer.jpg"
            alt="Patriot Insurance Group team volunteering at a local charity event"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-center text-2xl font-bold text-navy">
            What Clients Say
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {REVIEWS.map((r) => (
              <div key={r.name} className="rounded-lg bg-white p-6 shadow-sm">
                <div className="flex gap-0.5 text-brick">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-brick" />
                  ))}
                </div>
                <p className="mt-3 text-sm text-navy/80">&quot;{r.text}&quot;</p>
                <p className="mt-4 text-sm font-semibold text-navy">{r.name}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a
              href="https://share.google/MJW2emRVqBTsOBEk5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-brick hover:underline"
            >
              Read more reviews on Google →
            </a>
          </div>
        </div>
      </section>

      {/* Objections */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-2xl font-bold text-navy">
          &quot;But I&apos;m Already Happy With My Insurance.&quot;
        </h2>
        <div className="mt-8 space-y-6">
          {OBJECTIONS.map((item) => (
            <div key={item.q}>
              <p className="font-semibold text-navy">{item.q}</p>
              <p className="mt-1 text-navy/70">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-navy">
        <div className="mx-auto max-w-2xl px-6 py-16 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Want Me to Take a Look?
          </h2>
          <p className="mt-4 text-white/80">
            If you&apos;re curious whether your current insurance is still
            competitive, send me what you have and I&apos;ll take a look.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <GetQuoteButton type="auto" label="Get a Free Quote" />
            <CallButton
              label="Call Dawson"
              variant="outline"
              className="!border-white !text-white hover:!bg-white hover:!text-navy"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
