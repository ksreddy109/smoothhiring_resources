import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/resources-data";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Hiring Resources and Templates | SmoothHiring",
    template: "%s | SmoothHiring Resources",
  },
  description: "Free hiring resources, interview kits, and HR templates to help teams hire better and faster.",
  alternates: {
    canonical: "/resources",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Hiring Resources and Templates | SmoothHiring",
    description: "Free hiring resources, interview kits, and HR templates to help teams hire better and faster.",
    siteName: "SmoothHiring Resources",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
