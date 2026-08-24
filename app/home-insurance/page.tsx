import type { Metadata } from "next";
import Image from "next/image";
import ProductHero from "../components/ProductHero";
import RiskReversal from "../components/RiskReversal";
import FaqAccordion from "../components/FaqAccordion";
import GetQuoteButton from "../components/GetQuoteButton";
import CallButton from "../components/CallButton";
import InternalLinkCallout from "../components/InternalLinkCallout";

export const metadata: Metadata = {
  title: "Home Insurance Camp Hill PA | Patriot Insurance Group",
  description:
    "See if you're getting the right home insurance for the right price. I compare your current policy against multiple carriers — serving Perry, Cumberland & Dauphin Counties, PA.",
};

const FAQS = [
  {
    q: "How much homeowners insurance do I need?",
    a: "Generally enough to rebuild your home at current construction costs — which isn't always the same as market value. I'll help you look at whether your current dwelling coverage is realistic.",
  },
  {
    q: "Is homeowners insurance based on market value?",
    a: "No — it's based on rebuild/replacement cost, which can be higher or lower than what your home would sell for. This is a common point of confusion worth clearing up.",
  },
  {
    q: "Can I change insurance companies if my mortgage escrows insurance?",
    a: "Yes. Your lender pays the premium out of escrow, but you still choose the carrier. Switching just means updating who the escrow payment goes to.",
  },
  {
    q: "Can you work directly with my mortgage lender?",
    a: "Yes — I can send the insurance documentation your lender needs for closing or for an existing mortgage.",
  },
  {
    q: "How quickly can you provide insurance for a closing?",
    a: "Send me the property address and closing date as soon as you have them, and I'll work around your timeline.",
  },
  {
    q: "Should I bundle home and auto?",
    a: "Sometimes it lowers your total household cost, sometimes it doesn't. I'll compare the bundled option against keeping them separate and show you both.",
  },
  {
    q: "What information do you need for a homeowners quote?",
    a: "Your current policy or declarations page if you have one, or basic details about the home — age, square footage, roof, and any updates — if you're a new purchase.",
  },
  {
    q: "Why did my homeowners premium increase?",
    a: "Rebuild costs, local claims trends, and your specific carrier's pricing all factor in. It's not always something you did — but it's a good reason to check whether another option is more competitive.",
  },
  {
    q: "What does my deductible mean?",
    a: "It's what you pay out of pocket before your coverage kicks in on a claim. Deductible level is one of the levers that affects your premium, and I can show you the tradeoff.",
  },
];

export default function HomeInsurance() {
  return (
    <div>
      <ProductHero
        eyebrow="Home Insurance"
        headline="See If You're Getting the Right Home Insurance for the Right Price"
        body="If you already own your home, I'll compare your current policy, deductible, coverage and premium against other options available to me. If you're buying a home, I can help you get the insurance in place and work with your lender so you're ready for closing."
        quoteType="home"
        quoteLabel="Get a Home Insurance Quote"
      />

      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-2xl font-bold text-navy">
          Already Have Homeowners Insurance? Start With What You Have.
        </h2>
        <p className="mt-4 text-navy/80">
          Send me your current policy information and I&apos;ll look at what
          you&apos;re paying, your deductible, dwelling coverage, and other
          important limits before comparing alternatives.
        </p>
        <p className="mt-4 text-navy/80">
          The question isn&apos;t just <em>&quot;can this be cheaper?&quot;</em> —
          it&apos;s <strong>what you&apos;re actually getting</strong> for the
          premium you&apos;re paying.
        </p>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="text-2xl font-bold text-navy">
            Home Insurance Is One Place I Wouldn&apos;t Compare Price Alone
          </h2>
          <p className="mt-4 text-navy/80">
            These are the things that actually matter when you put two quotes
            side by side:
          </p>
          <ul className="mt-4 grid gap-2 text-navy/80 sm:grid-cols-2">
            {[
              "Dwelling / replacement cost",
              "Deductibles",
              "Personal property coverage",
              "Liability coverage",
              "Water backup coverage, where applicable",
              "Other structures coverage",
              "Loss of use / additional living expense",
              "Roof settlement terms, where applicable",
              "Special limits and exclusions",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-brick">—</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-2xl font-bold text-navy">
          Buying a House? I Can Work With Your Lender.
        </h2>
        <p className="mt-4 text-navy/80">
          If you&apos;re under contract on a house, insurance is one of the
          items your lender will need before closing. Send me the property
          address and your basic information and I&apos;ll help you work
          through the insurance side of the purchase — including sending your
          lender or mortgage professional whatever documentation they need.
        </p>
        <div className="mt-6">
          <GetQuoteButton type="home" label="Get a Homebuyer Insurance Quote" />
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="text-2xl font-bold text-navy">
            Have Auto Insurance Too? Let&apos;s Compare the Bundle.
          </h2>
          <p className="mt-4 text-navy/80">
            Sometimes home and auto together produce a better overall result
            with one carrier — sometimes keeping them with separate carriers
            works out better. The goal is your total household cost and
            coverage, not just a home quote that&apos;s a little cheaper on
            its own.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-2xl font-bold text-navy">Common Questions</h2>
        <div className="mt-8 space-y-6">
          {[
            {
              q: "“My mortgage company already pays my insurance.”",
              a: "Escrow just means the payment comes from your mortgage account — you still choose the carrier. It doesn't lock you in.",
            },
            {
              q: "“I've been with my company forever.”",
              a: "That's fine — you don't have to switch. It still doesn't hurt to know what the alternatives look like.",
            },
            {
              q: "“I don't want cheaper insurance if the coverage is worse.”",
              a: "Agreed. That's why I compare both, not just the number at the bottom.",
            },
            {
              q: "“I don't understand my current policy.”",
              a: "That's part of what I help with — explaining what you're actually looking at.",
            },
            {
              q: "“What if my current insurance is already good?”",
              a: "Then I'll tell you that, plainly.",
            },
          ].map((item) => (
            <div key={item.q}>
              <p className="font-semibold text-navy">{item.q}</p>
              <p className="mt-1 text-navy/70">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <RiskReversal
            heading="If Your Current Home Policy Is the Better Deal, Keep It."
            body="Getting another quote doesn't obligate you to switch. If I compare the options and think you're better off where you are, I'll tell you."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <GetQuoteButton type="home" label="Get a Home Insurance Quote" />
            <CallButton label="Call Dawson" variant="outline" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
          <div className="relative h-32 w-28 flex-shrink-0 overflow-hidden rounded-lg">
            <Image
              src="/images/dawson-headshot.jpg"
              alt="Dawson Engle, independent insurance agent in Camp Hill, PA"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-navy/80">
            I&apos;m Dawson Engle, an independent insurance agent based in
            Camp Hill, helping homeowners throughout Central Pennsylvania
            compare coverage and rates from multiple carriers.
          </p>
        </div>
        <div className="mt-6">
          <InternalLinkCallout href="/auto-insurance">
            Have vehicles to insure? Compare your Auto Insurance too.
          </InternalLinkCallout>
        </div>
      </section>

      <section className="bg-white border-t border-gray-100">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="text-2xl font-bold text-navy">Home Insurance FAQ</h2>
          <div className="mt-6">
            <FaqAccordion items={FAQS} />
          </div>
        </div>
      </section>
    </div>
  );
}
