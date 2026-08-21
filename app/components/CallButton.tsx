"use client";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const PHONE_TEL = "+17175791270";

export default function CallButton({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  const handleClick = () => {
    const sendTo = process.env.NEXT_PUBLIC_GADS_CONVERSION_LABEL;
    if (typeof window !== "undefined" && window.gtag && sendTo) {
      window.gtag("event", "conversion", { send_to: sendTo });
    }
  };

  return (
    <a href={`tel:${PHONE_TEL}`} onClick={handleClick} className={className}>
      {label}
    </a>
  );
}
