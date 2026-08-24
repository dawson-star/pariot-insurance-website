import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function InternalLinkCallout({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 text-sm font-medium text-brick hover:underline"
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
}
