export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="text-4xl font-bold tracking-tight">
        Home, Auto & Commercial Insurance in Camp Hill, PA
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-gray-600">
        Patriot Insurance Group helps families and businesses in the
        Camp Hill area find the right coverage at the right price. We shop
        multiple carriers so you don&apos;t have to.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        <div className="rounded-lg border border-gray-200 p-6">
          <h2 className="font-semibold">Home Insurance</h2>
          <p className="mt-2 text-sm text-gray-600">
            Protect your home and belongings against fire, theft, weather,
            and liability.
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 p-6">
          <h2 className="font-semibold">Auto Insurance</h2>
          <p className="mt-2 text-sm text-gray-600">
            Liability, collision, and comprehensive coverage tailored to how
            you drive.
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 p-6">
          <h2 className="font-semibold">Commercial Insurance</h2>
          <p className="mt-2 text-sm text-gray-600">
            General liability, property, and business auto coverage for
            local businesses.
          </p>
        </div>
      </div>

      <div className="mt-12">
        <a
          href="mailto:dawson@patriotinsgroup.com"
          className="inline-block rounded-md bg-gray-900 px-6 py-3 text-white font-medium hover:bg-gray-800"
        >
          Get a Quote
        </a>
      </div>
    </div>
  );
}
