import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
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
    "Patriot Insurance Group offers home, auto, and commercial insurance in Camp Hill, PA.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col text-gray-900">
        <header className="border-b border-gray-200">
          <nav className="mx-auto max-w-5xl flex items-center justify-between px-6 py-4">
            <Link href="/" className="font-semibold text-lg">
              Patriot Insurance Group
            </Link>
            <div className="flex gap-6 text-sm">
              <Link href="/about">About</Link>
              <Link href="/privacy">Privacy Policy</Link>
            </div>
          </nav>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-gray-200 mt-16">
          <div className="mx-auto max-w-5xl px-6 py-8 text-sm text-gray-600 space-y-1">
            <p className="font-medium text-gray-900">Patriot Insurance Group</p>
            <p>4242 Carlisle Pike, Ste 106, Camp Hill, PA 17011</p>
            <p>
              <a href="mailto:dawson@patriotinsgroup.com" className="hover:underline">
                dawson@patriotinsgroup.com
              </a>
            </p>
            <p className="pt-2">
              &copy; {new Date().getFullYear()} Patriot Insurance Group. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
