"use client";

import { Phone } from "lucide-react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const PHONE_TEL = "+17175791270";

const VARIANT_CLASSES = {
  primary:
    "inline-flex items-center gap-2 rounded-md bg-brick px-6 py-3 text-white font-semibold hover:bg-brick-dark transition-colors",
  pill: "inline-flex items-center gap-2 rounded-full border border-navy/20 px-4 py-2 text-sm font-medium text-navy hover:bg-navy hover:text-white transition-colors",
  outline:
    "inline-flex items-center justify-center gap-2 rounded-md border-2 border-navy px-6 py-3 text-navy font-semibold hover:bg-navy hover:text-white transition-colors",
} as const;

export default function CallButton({
  label,
  variant = "primary",
  className,
}: {
  label: string;
  variant?: keyof typeof VARIANT_CLASSES;
  className?: string;
}) {
  const handleClick = () => {
    const sendTo = process.env.NEXT_PUBLIC_GADS_CONVERSION_LABEL;
    if (typeof window !== "undefined" && window.gtag && sendTo) {
      window.gtag("event", "conversion", { send_to: sendTo });
    }
  };

  return (
    <a
      href={`tel:${PHONE_TEL}`}
      onClick={handleClick}
      className={`${VARIANT_CLASSES[variant]} ${className ?? ""}`}
    >
      <Phone className="h-4 w-4" strokeWidth={2.5} />
      {label}
    </a>
  );
}
