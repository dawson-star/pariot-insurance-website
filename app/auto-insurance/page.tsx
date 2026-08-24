import type { Metadata } from "next";
import Image from "next/image";
import ProductHero from "../components/ProductHero";
import ProcessSteps from "../components/ProcessSteps";
import RiskReversal from "../components/RiskReversal";
import FaqAccordion from "../components/FaqAccordion";
import GetQuoteButton from "../components/GetQuoteButton";
import CallButton from "../components/CallButton";
import InternalLinkCallout from "../components/InternalLinkCallout";

export const metadata: Metadata = {
  title: "Auto Insurance Camp Hill PA | Patriot Insurance Group",
  description:
    "See if you're paying too much for auto insurance. I compare your current coverage and rate against multiple carriers — serving Perry, Cumberland & Dauphin Counties, PA.",
};

const FAQS = [
  {
    q: "How often should I shop my auto insurance?",
    a: "There's no fixed rule, but it's worth checking anytime your premium jumps at renewal, your household changes, or it's just been a couple years since you last compared. Rates move over time even if nothing about you has changed.",
  },
  {
    q: "Can you bundle my home and auto insurance?",
    a: "Often, yes — I can look at both together and see whether bundling with one carrier makes sense for your overall cost and coverage. Sometimes it does, sometimes keeping them separate works out better. I'll tell you which.",
  },
  {
    q: "What information do you need to quote my car insurance?",
    a: "Your current policy or declarations page is the fastest starting point. If you don't have it handy, I can work from your vehicle info, drivers on the policy, and your current coverage limits.",
  },
  {
    q: "Do I have to cancel my current policy before getting a quote?",
    a: "No. Getting a quote doesn't commit you to anything. If you decide to switch, I'll help you time the change so there's no gap in coverage.",
  },
  {
    q: "Can you help me understand my current coverage?",
    a: "Yes — that's usually the first thing we go through. A lot of people aren't totally sure what their limits and deductibles actually mean until someone walks through it with them.",
  },
  {
    q: "What is full tort vs. limited tort in Pennsylvania?",
    a: "It's a Pennsylvania-specific choice that affects your right to sue for pain and suffering after an accident. Full tort preserves that right; limited tort restricts it in exchange for a lower premium. It's worth understanding which one you have — I can explain what your current policy says.",
  },
  {
    q: "Do you insure young drivers?",
    a: "Yes. Adding a teen or young driver to a policy is one of the more common reasons people reach out — I can walk through the options for your situation.",
  },
  {
    q: "Can you insure multiple vehicles?",
    a: "Yes, multi-vehicle households are routine. I'll quote the whole household together so you can see the full picture.",
  },
];

export default function AutoInsurance() {
  return (
    <div>
      <ProductHero
        eyebrow="Auto Insurance"
        headline="See If You're Paying Too Much for Auto Insurance"
        body="Already have car insurance? That's fine. I'll compare what you're currently paying and the coverage you have against options from multiple insurance companies. If there's a better fit, I'll show you. If what you already have makes more sense, I'll tell you that too."
        quoteType="auto"
        quoteLabel="Get an Auto Insurance Quote"
      />

      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-2xl font-bold text-navy">
          When Does It Make Sense to Shop Your Auto Insurance?
        </h2>
        <p className="mt-4 text-navy/80">
          Insurance pricing changes over time — a carrier that was competitive
          for you a few years ago isn&apos;t necessarily still the best option.
          It&apos;s worth checking if:
        </p>
        <ul className="mt-4 space-y-2 text-navy/80">
          {[
            "Your renewal premium just increased.",
            "You haven't compared rates in a few years.",
            "You bought another vehicle.",
            "You're adding a driver.",
            "You're moving.",
            "You're buying a home and may benefit from bundling.",
            "Your household has changed.",
            "You're simply wondering whether you're still getting a competitive rate.",
          ].map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-brick">—</span>
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-navy/60">
          None of that guarantees switching will save you money. It just means
          it&apos;s worth a look.
        </p>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="text-2xl font-bold text-navy">
            A Cheaper Quote Isn&apos;t Better If the Coverage Is Worse
          </h2>
          <p className="mt-4 text-navy/80">
            If I find a quote that&apos;s cheaper because it strips away
            coverage you actually need, that&apos;s not much of a deal. I
            compare the numbers alongside the coverage so you can see what
            you&apos;re actually getting — things like:
          </p>
          <ul className="mt-4 grid gap-2 text-navy/80 sm:grid-cols-2">
            {[
              "Liability limits",
              "Comprehensive & collision deductibles",
              "Uninsured/underinsured motorist coverage",
              "Rental reimbursement",
              "Roadside assistance",
              "Full tort vs. limited tort",
              "Coverage for additional vehicles/drivers",
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
          Shopping Your Auto Insurance Doesn&apos;t Have to Be Complicated
        </h2>
        <div className="mt-8">
          <ProcessSteps
            steps={[
              {
                title: "Tell Me What You Have",
                body: "Send your current policy information or give me the basic details I need.",
              },
              {
                title: "I'll Compare Your Options",
                body: "I'll look at available options from the carriers I work with and compare price and coverage.",
              },
              {
                title: "You Decide",
                body: "I'll explain what I found. Switch if it makes sense, or keep what you have.",
              },
            ]}
          />
        </div>
        <div className="mt-8">
          <GetQuoteButton type="auto" label="Get an Auto Insurance Quote" />
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="text-2xl font-bold text-navy">
            &quot;I&apos;m Pretty Happy With My Current Insurance.&quot;
          </h2>
          <p className="mt-4 text-navy/80">
            That&apos;s completely fine. Shopping your insurance doesn&apos;t
            mean you have to leave your current company — it just gives you
            something to compare it against.
          </p>
          <div className="mt-8 space-y-6">
            {[
              {
                q: "“I don’t know what coverage I have.”",
                a: "That's normal. Send me your current declarations page and I'll walk through what you're actually covered for.",
              },
              {
                q: "“I don’t want to lose coverage just to save money.”",
                a: "Agreed — that's why I compare coverage, not just the premium number.",
              },
              {
                q: "“Switching sounds like a hassle.”",
                a: "I handle the parts that are usually the hassle. You review and decide.",
              },
              {
                q: "“What if you can't beat my current price?”",
                a: "Then I tell you that, and you keep what you have.",
              },
            ].map((item) => (
              <div key={item.q}>
                <p className="font-semibold text-navy">{item.q}</p>
                <p className="mt-1 text-navy/70">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <RiskReversal
          heading="Already Have a Good Deal? I'll Tell You."
          body="I'm not going to tell you to switch insurance just so I can write a policy. If your current option looks better, I'll tell you. The point of getting a quote is to find out."
        />
        <div className="mt-8 flex flex-wrap gap-3">
          <GetQuoteButton type="auto" label="Get an Auto Insurance Quote" />
          <CallButton label="Call Dawson" variant="outline" />
        </div>
      </section>

      <section className="bg-white border-t border-gray-100">
        <div className="mx-auto max-w-3xl px-6 py-16">
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
              Camp Hill. I work with multiple carriers so the comparison is
              actually a comparison — not a pitch for one company&apos;s
              product.
            </p>
          </div>
          <div className="mt-6">
            <InternalLinkCallout href="/home-insurance">
              Own a home too? See how I approach Home Insurance.
            </InternalLinkCallout>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-2xl font-bold text-navy">Auto Insurance FAQ</h2>
        <div className="mt-6">
          <FaqAccordion items={FAQS} />
        </div>
      </section>
    </div>
  );
}
