import type { Metadata } from "next";
import ProductHero from "../components/ProductHero";
import ProcessSteps from "../components/ProcessSteps";
import FaqAccordion from "../components/FaqAccordion";
import InternalLinkCallout from "../components/InternalLinkCallout";

export const metadata: Metadata = {
  title: "Renters Insurance Camp Hill PA | Patriot Insurance Group",
  description:
    "Need renters insurance for a new apartment or your landlord's requirements? I make it simple — serving Central Pennsylvania.",
};

const FAQS = [
  {
    q: "How much does renters insurance cost?",
    a: "It varies by coverage amount and location, but it's typically one of the more affordable policies to add. I'll get you an actual number rather than a guess.",
  },
  {
    q: "Does my landlord's insurance cover my belongings?",
    a: "No — your landlord's policy generally covers the building itself, not what's inside your unit. That's what a renters policy is for.",
  },
  {
    q: "Can I bundle renters and auto insurance?",
    a: "Often, yes. If you already have auto insurance, it's worth seeing whether adding renters coverage through the same carrier makes sense.",
  },
  {
    q: "Can you send proof of insurance to my landlord?",
    a: "Yes — once your policy is in place I can send your landlord or property manager whatever proof they need.",
  },
  {
    q: "What information do you need?",
    a: "Your address, roughly what your belongings are worth, and a little about the unit. That's usually enough to get started.",
  },
  {
    q: "How much personal property coverage should I have?",
    a: "Enough to replace what you own — furniture, electronics, clothing, and so on. I can help you land on a reasonable number without over- or under-insuring.",
  },
  {
    q: "Does renters insurance include liability coverage?",
    a: "Typically, yes — it can help if someone's injured in your rental or you're responsible for accidental damage. I'll walk through what your specific policy includes.",
  },
];

export default function RentersInsurance() {
  return (
    <div>
      <ProductHero
        eyebrow="Renters Insurance"
        headline="Need Renters Insurance? Let's Make It Easy."
        body="Whether your landlord requires it or you simply want coverage for your belongings and personal liability, I can help you get a renters policy in place without making the process complicated."
        quoteType="renters"
        quoteLabel="Get a Renters Insurance Quote"
      />

      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-2xl font-bold text-navy">
          Moving Into a New Apartment?
        </h2>
        <p className="mt-4 text-navy/80">
          If your landlord or property manager told you that you need renters
          insurance before move-in, send me the information and I&apos;ll
          help you get the coverage set up — and send them proof once
          it&apos;s in place.
        </p>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="text-2xl font-bold text-navy">
            What Are You Actually Insuring?
          </h2>
          <p className="mt-4 text-navy/80">
            Your landlord generally insures the building. A renters policy
            can help cover things like:
          </p>
          <ul className="mt-4 space-y-2 text-navy/80">
            {[
              "Your personal belongings",
              "Personal liability",
              "Certain additional living expenses after a covered loss",
              "Other protections depending on the policy",
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
          Already Have Car Insurance? Let&apos;s Look at Both.
        </h2>
        <p className="mt-4 text-navy/80">
          Renters insurance can sometimes make sense as part of a
          multi-policy relationship with your auto carrier. I&apos;ll show
          you what that looks like — no promises on a specific discount, just
          a real comparison.
        </p>
        <div className="mt-6">
          <InternalLinkCallout href="/auto-insurance">
            Have a car? Ask about Auto + Renters.
          </InternalLinkCallout>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="text-2xl font-bold text-navy">
            Getting Covered Shouldn&apos;t Take a Dozen Steps
          </h2>
          <div className="mt-8">
            <ProcessSteps
              steps={[
                {
                  title: "Send Me Your Information",
                  body: "Your address and a sense of what you own.",
                },
                {
                  title: "I'll Put Together the Option",
                  body: "A real quote from a carrier that fits your situation.",
                },
                {
                  title: "Get Your Coverage in Place",
                  body: "Sign and you're covered — proof sent to your landlord if needed.",
                },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-2xl font-bold text-navy">Renters Insurance FAQ</h2>
        <div className="mt-6">
          <FaqAccordion items={FAQS} />
        </div>
      </section>
    </div>
  );
}
