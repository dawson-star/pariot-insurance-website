import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import GoogleTags from "./components/GoogleTags";
import CallButton from "./components/CallButton";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Patriot Insurance Group",
  description:
    "Patriot Insurance Group offers home, auto, renters, and commercial insurance in Camp Hill, PA.",
};

const NAV_LINKS = [
  { href: "/auto-insurance", label: "Auto" },
  { href: "/home-insurance", label: "Home" },
  { href: "/renters-insurance", label: "Renters" },
  { href: "/commercial-insurance", label: "Commercial" },
  { href: "/about", label: "About" },
];

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col text-foreground">
        <GoogleTags />
        <header className="border-b border-gray-200 bg-white">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" className="text-lg font-bold tracking-tight text-navy">
              Patriot Insurance Group
            </Link>
            <div className="hidden items-center gap-6 text-sm font-medium text-navy sm:flex">
              {NAV_LINKS.map((link) => (
                <Link key={link.href} href={link.href} className="hover:text-brick">
                  {link.label}
                </Link>
              ))}
            </div>
            <CallButton label="(717) 579-1270" variant="pill" />
          </nav>
        </header>

        <main className="flex-1">{children}</main>

        <div className="bg-navy py-6 text-center">
          <p className="text-lg font-semibold text-white">
            Local coverage. Real conversations. Call (717) 579-1270.
          </p>
        </div>

        <footer className="bg-cream">
          <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-navy">
            <div className="grid gap-8 sm:grid-cols-3">
              <div>
                <p className="font-semibold text-navy">Patriot Insurance Group</p>
                <p className="mt-1 text-navy/70">
                  4242 Carlisle Pike, Ste 106
                  <br />
                  Camp Hill, PA 17011
                </p>
              </div>
              <div>
                <p className="font-semibold text-navy">Contact</p>
                <p className="mt-1 text-navy/70">
                  <a href="tel:+17175791270" className="hover:text-brick">
                    (717) 579-1270
                  </a>
                  <br />
                  <a
                    href="mailto:dawson@patriotinsgroup.com"
                    className="hover:text-brick"
                  >
                    dawson@patriotinsgroup.com
                  </a>
                </p>
              </div>
              <div>
                <p className="font-semibold text-navy">Pages</p>
                <div className="mt-1 flex flex-col gap-1 text-navy/70">
                  <Link href="/about" className="hover:text-brick">
                    About
                  </Link>
                  <Link href="/privacy" className="hover:text-brick">
                    Privacy Policy
                  </Link>
                </div>
              </div>
            </div>
            <p className="mt-8 border-t border-navy/10 pt-6 text-xs text-navy/50">
              &copy; {new Date().getFullYear()} Patriot Insurance Group. All rights
              reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
