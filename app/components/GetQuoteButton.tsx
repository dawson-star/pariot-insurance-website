import Link from "next/link";

const VARIANT_CLASSES = {
  primary:
    "inline-flex items-center justify-center gap-2 rounded-md bg-navy px-6 py-3 text-white font-semibold hover:bg-navy-light transition-colors",
  outline:
    "inline-flex items-center justify-center gap-2 rounded-md border-2 border-navy px-6 py-3 text-navy font-semibold hover:bg-navy hover:text-white transition-colors",
} as const;

export default function GetQuoteButton({
  type,
  label = "Get a Quote",
  variant = "primary",
  className,
}: {
  type: "auto" | "home" | "renters" | "commercial";
  label?: string;
  variant?: keyof typeof VARIANT_CLASSES;
  className?: string;
}) {
  return (
    <Link href={`/quote?type=${type}`} className={`${VARIANT_CLASSES[variant]} ${className ?? ""}`}>
      {label}
    </Link>
  );
}
