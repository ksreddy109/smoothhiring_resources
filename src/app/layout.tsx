import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { MuiAppProviders } from "@/components/MuiAppProviders";
import { SeoWebSiteJsonLd } from "@/components/SeoWebSiteJsonLd";
import { getSiteUrl, sitePath } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const rootDesc =
  "Free hiring resources, interview kits, and HR templates to help teams hire better and faster.";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "Hiring Resources and Templates | SmoothHiring",
    template: "%s | SmoothHiring Resources",
  },
  description: rootDesc,
  alternates: {
    canonical: sitePath("/resources/"),
  },
  openGraph: {
    type: "website",
    url: getSiteUrl(),
    title: "Hiring Resources and Templates | SmoothHiring",
    description: rootDesc,
    siteName: "SmoothHiring Resources",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hiring Resources and Templates | SmoothHiring",
    description: rootDesc,
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "YXtpRnHiDI-gqxrKJSOnrCJDLQqZYcCmplqpHHtzKYQ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <SeoWebSiteJsonLd />
        <Script id="gtm-smoothhiring-resources" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-N46J9TNH');`}
        </Script>
        <MuiAppProviders>{children}</MuiAppProviders>
      </body>
    </html>
  );
}
