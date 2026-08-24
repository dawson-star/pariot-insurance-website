"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";

const INSURANCE_TYPES = [
  { value: "auto", label: "Auto Insurance" },
  { value: "home", label: "Home Insurance" },
  { value: "renters", label: "Renters Insurance" },
  { value: "commercial", label: "Commercial Insurance" },
  { value: "other", label: "Not sure / other" },
];

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function QuoteForm() {
  const searchParams = useSearchParams();
  const defaultType = searchParams.get("type") ?? "";
  const validType = INSURANCE_TYPES.some((t) => t.value === defaultType) ? defaultType : "";

  const [insuranceType, setInsuranceType] = useState(validType);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: data.get("name"),
      phone: data.get("phone"),
      email: data.get("email"),
      insuranceType: INSURANCE_TYPES.find((t) => t.value === data.get("insuranceType"))?.label,
      businessName: data.get("businessName"),
      contactMethod: data.get("contactMethod"),
      message: data.get("message"),
    };

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong");
      }
      const sendTo = process.env.NEXT_PUBLIC_GADS_CONVERSION_LABEL;
      if (typeof window !== "undefined" && window.gtag && sendTo) {
        window.gtag("event", "conversion", { send_to: sendTo });
      }
      setStatus("success");
      form.reset();
      setInsuranceType("");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-lg border border-navy/10 bg-white p-6">
        <p className="font-semibold text-navy">Got it — thanks.</p>
        <p className="mt-2 text-sm text-navy/70">
          I&apos;ll be in touch shortly. If it&apos;s urgent, call{" "}
          <a href="tel:+17175791270" className="font-medium text-brick">
            (717) 579-1270
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-lg border border-navy/10 bg-white p-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-navy">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          className="mt-1 w-full rounded-md border border-navy/20 px-3 py-2 text-sm"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-navy">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="mt-1 w-full rounded-md border border-navy/20 px-3 py-2 text-sm"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-navy">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1 w-full rounded-md border border-navy/20 px-3 py-2 text-sm"
          />
        </div>
      </div>

      <div>
        <label htmlFor="insuranceType" className="block text-sm font-medium text-navy">
          Type of insurance
        </label>
        <select
          id="insuranceType"
          name="insuranceType"
          required
          value={insuranceType}
          onChange={(e) => setInsuranceType(e.target.value)}
          className="mt-1 w-full rounded-md border border-navy/20 bg-white px-3 py-2 text-sm"
        >
          <option value="" disabled>
            Select one
          </option>
          {INSURANCE_TYPES.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
      </div>

      {insuranceType === "commercial" && (
        <div>
          <label htmlFor="businessName" className="block text-sm font-medium text-navy">
            Business name
          </label>
          <input
            id="businessName"
            name="businessName"
            className="mt-1 w-full rounded-md border border-navy/20 px-3 py-2 text-sm"
          />
        </div>
      )}

      <div>
        <span className="block text-sm font-medium text-navy">
          Preferred contact method
        </span>
        <div className="mt-2 flex gap-6 text-sm text-navy/80">
          <label className="flex items-center gap-2">
            <input type="radio" name="contactMethod" value="Phone" defaultChecked />
            Phone
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="contactMethod" value="Email" />
            Email
          </label>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-navy">
          Anything I should know? <span className="text-navy/40">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          className="mt-1 w-full rounded-md border border-navy/20 px-3 py-2 text-sm"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-brick">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-md bg-brick px-6 py-3 text-center font-semibold text-white transition-colors hover:bg-brick-dark disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Get My Quote"}
      </button>
    </form>
  );
}
