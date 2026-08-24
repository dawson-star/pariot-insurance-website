import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Patriot Insurance Group",
};

export default function Privacy() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-3xl font-bold tracking-tight text-navy">Privacy Policy</h1>
      <p className="mt-2 text-sm text-gray-500">
        Last updated: {new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>

      <div className="mt-8 space-y-6 text-gray-700">
        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            Information We Collect
          </h2>
          <p className="mt-2">
            When you request a quote or contact us through this website, we
            collect the information you provide directly, such as your name,
            phone number, email address, and details about the coverage
            you&apos;re interested in. We also collect standard technical
            information automatically, such as your IP address, browser
            type, and pages visited, through cookies and similar
            technologies.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            How We Use Your Information
          </h2>
          <p className="mt-2">
            We use the information you provide to respond to quote requests,
            communicate with you about your insurance needs, and improve this
            website. We do not sell your personal information.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            Cookies and Advertising
          </h2>
          <p className="mt-2">
            This site may use cookies and similar technologies, including
            Google Ads and Google Analytics, to measure the performance of
            our advertising and understand how visitors use the site. You
            can control cookies through your browser settings.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            Third-Party Sharing
          </h2>
          <p className="mt-2">
            We may share information with insurance carriers you request a
            quote from, and with service providers who help us operate this
            website (e.g. hosting and analytics providers). We do not share
            your information with third parties for their own marketing
            purposes without your consent.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            Data Retention
          </h2>
          <p className="mt-2">
            We retain the information you submit for as long as needed to
            respond to your request and maintain our business records, and
            in accordance with applicable insurance recordkeeping
            requirements.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            Contact Us
          </h2>
          <p className="mt-2">
            If you have questions about this privacy policy or how we handle
            your information, contact us at{" "}
            <a
              href="mailto:dawson@patriotinsgroup.com"
              className="hover:underline"
            >
              dawson@patriotinsgroup.com
            </a>{" "}
            or by mail at 4242 Carlisle Pike, Ste 106, Camp Hill, PA 17011.
          </p>
        </section>
      </div>
    </div>
  );
}
