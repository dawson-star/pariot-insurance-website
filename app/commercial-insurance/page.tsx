import type { Metadata } from "next";
import ProductHero from "../components/ProductHero";
import RiskReversal from "../components/RiskReversal";
import FaqAccordion from "../components/FaqAccordion";
import GetQuoteButton from "../components/GetQuoteButton";
import CallButton from "../components/CallButton";
import InternalLinkCallout from "../components/InternalLinkCallout";

export const metadata: Metadata = {
  title: "Commercial Insurance Camp Hill PA | Patriot Insurance Group",
  description:
    "Business insurance that fits the work you actually do. General liability, commercial auto, workers' comp, and more — serving Perry, Cumberland & Dauphin Counties, PA.",
};

const FAQS = [
  {
    q: "What information do you need for a commercial insurance quote?",
    a: "What kind of work you do, where you do it, whether you have employees or subcontractors, what vehicles and equipment are involved, and what your current policy looks like if you have one.",
  },
  {
    q: "Do you insure contractors?",
    a: "I work with a range of local trades and service businesses. Send me what your business does and I'll tell you straight whether it's something I can quote.",
  },
  {
    q: "Can you provide certificates of insurance?",
    a: "Yes. If a customer, landlord, or general contractor needs a certificate or an additional insured added, let me know what's required and I'll work on getting it handled.",
  },
  {
    q: "What is an additional insured?",
    a: "It's when another party — often a general contractor or property owner — is added to your policy so they're covered for liability arising from your work on their project. It's a common contractual requirement.",
  },
  {
    q: "Do I need workers' compensation in Pennsylvania?",
    a: "Most Pennsylvania employers are required to carry workers' comp for employees, with some narrow exceptions. I can go through your specific setup with you rather than give a blanket answer.",
  },
  {
    q: "Can you insure my work trucks?",
    a: "Yes — vehicles used for business need to be insured for that use, which is different from a personal auto policy. I'll make sure your trucks are actually covered for how you use them.",
  },
  {
    q: "What insurance does a small contractor need?",
    a: "It depends on the work. General liability is common across most trades; commercial auto, tools/equipment, and workers' comp come into play depending on your operation. I'll ask about your business before assuming what you need.",
  },
  {
    q: "Can you review my existing business insurance?",
    a: "Yes — send me your current policy and a description of what your business does, and I'll look at whether the coverage actually matches your operations.",
  },
  {
    q: "Do you insure tools and equipment?",
    a: "Often through an inland marine or equipment floater, especially for tools and mobile equipment that travel between job sites rather than staying in one building.",
  },
];

export default function CommercialInsurance() {
  return (
    <div>
      <ProductHero
        eyebrow="Commercial Insurance"
        headline="Business Insurance That Fits the Work You Actually Do"
        body="I work with small businesses throughout Central Pennsylvania to compare commercial insurance options and help make sure their coverage matches their actual operations."
        quoteType="commercial"
        quoteLabel="Request a Business Insurance Quote"
      />

      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-2xl font-bold text-navy">
          I Work With Local Businesses Like Yours
        </h2>
        <p className="mt-4 text-navy/80">
          Trades and service businesses I regularly work with include:
        </p>
        <ul className="mt-4 grid gap-2 text-navy/80 sm:grid-cols-2">
          {[
            "HVAC contractors",
            "Landscapers",
            "Excavation contractors",
            "Plumbers",
            "Painters",
            "Janitorial businesses",
            "Other local trades and service businesses",
          ].map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-brick">—</span>
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-navy/60">
          That&apos;s not a complete list, and not every business is a fit for
          every carrier I work with. Tell me what you do and I&apos;ll tell
          you honestly whether I can help.
        </p>
        <div className="mt-6">
          <GetQuoteButton type="commercial" label="Ask About Coverage for Your Business" />
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="text-2xl font-bold text-navy">
            Let&apos;s Look at What Your Business Actually Needs
          </h2>
          <div className="mt-6 space-y-6">
            <div>
              <p className="font-semibold text-navy">General Liability</p>
              <p className="mt-1 text-navy/70">
                For claims involving bodily injury, property damage, and other
                covered liability exposures arising from your business
                operations.
              </p>
            </div>
            <div>
              <p className="font-semibold text-navy">Commercial Auto</p>
              <p className="mt-1 text-navy/70">
                For vehicles being used in the business.
              </p>
            </div>
            <div>
              <p className="font-semibold text-navy">Workers&apos; Compensation</p>
              <p className="mt-1 text-navy/70">
                Where required or appropriate for employees and business
                operations.
              </p>
            </div>
            <div>
              <p className="font-semibold text-navy">
                Tools &amp; Equipment / Inland Marine
              </p>
              <p className="mt-1 text-navy/70">
                For eligible tools and mobile equipment that don&apos;t simply
                stay at one location.
              </p>
            </div>
            <div>
              <p className="font-semibold text-navy">Commercial Property</p>
              <p className="mt-1 text-navy/70">
                For eligible buildings, inventory, and business property.
              </p>
            </div>
            <div>
              <p className="font-semibold text-navy">Other Coverage</p>
              <p className="mt-1 text-navy/70">
                What you actually need depends on your business and its
                exposures — not every company needs every coverage above.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-2xl font-bold text-navy">
          Need a Certificate for a Job?
        </h2>
        <p className="mt-4 text-navy/80">
          If a customer, landlord, or general contractor needs proof of
          insurance, a certificate of insurance, or an additional insured
          added, I understand you often need it handled quickly so insurance
          doesn&apos;t hold up the job. Let me know what&apos;s required and
          I&apos;ll get moving on it.
        </p>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="text-2xl font-bold text-navy">
            If the Truck Is Working, Make Sure the Insurance Is Too.
          </h2>
          <p className="mt-4 text-navy/80">
            Vehicles used commercially need to be insured for that actual
            use — a personal auto policy doesn&apos;t always cover a truck
            that&apos;s hauling equipment to job sites every day. This is
            especially worth checking for contractors and service businesses
            running multiple vehicles.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-2xl font-bold text-navy">
          Already Have Business Insurance? Let Me Review It.
        </h2>
        <p className="mt-4 text-navy/80">
          Send me your current policy information and tell me a little about
          what your company actually does. I&apos;ll look at your existing
          coverage and see whether another option may make sense — not just
          on price. For a business, coverage that doesn&apos;t match your
          operations can cost a lot more than a modest premium difference
          ever would.
        </p>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="text-2xl font-bold text-navy">
            The Quote Should Start With Understanding Your Business
          </h2>
          <p className="mt-4 text-navy/80">
            Before I quote anything, these are the kinds of questions I&apos;m
            actually asking:
          </p>
          <ul className="mt-4 space-y-2 text-navy/80">
            {[
              "What type of work do you perform?",
              "Where do you perform it?",
              "Do you have employees?",
              "Do you use subcontractors?",
              "What vehicles are used in the business?",
              "What tools or equipment do you take to jobs?",
              "Do customers or general contractors require certificates?",
              "Are you asked to add others as additional insureds?",
              "What does your current insurance look like?",
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
        <h2 className="text-2xl font-bold text-navy">Common Questions</h2>
        <div className="mt-8 space-y-6">
          {[
            {
              q: "“I already have an agent.”",
              a: "That's fine — I can still provide a second look when it's useful to have one.",
            },
            {
              q: "“I just need the cheapest certificate possible.”",
              a: "The policy behind that certificate still has to actually fit your operation and whatever your contract requires. I won't cut corners that come back on you later.",
            },
            {
              q: "“I'm a very small business.”",
              a: "Small businesses still have real exposures. I'll figure out what's actually appropriate for your size and operation rather than assume.",
            },
            {
              q: "“I'm not sure what coverage I need.”",
              a: "That's exactly why the conversation starts with understanding what your business does, not with a generic package.",
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
            heading="Already Covered? I'll Tell You If It's Working."
            body="A review doesn't mean you have to change anything. If your current commercial policy already fits your operation, I'll tell you that."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <GetQuoteButton type="commercial" label="Request a Business Insurance Quote" />
            <CallButton label="Call Dawson" variant="outline" />
          </div>
          <div className="mt-6">
            <InternalLinkCallout href="/auto-insurance">
              Need coverage for vehicles used in your business? See
              Commercial Auto above.
            </InternalLinkCallout>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-2xl font-bold text-navy">
          Commercial Insurance FAQ
        </h2>
        <div className="mt-6">
          <FaqAccordion items={FAQS} />
        </div>
      </section>
    </div>
  );
}
