import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import {
  GTM_HEAD_SCRIPT,
  GoogleTagManagerNoScript,
} from "@/components/GoogleTagManager";
import { MuiAppProviders } from "@/components/MuiAppProviders";
import { SeoWebSiteJsonLd } from "@/components/SeoWebSiteJsonLd";
import { getSiteUrl, sitePath } from "@/lib/site";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const rootDesc =
  "Free job description templates, interview kits, offer letters, HR policies, and AI hiring tools for recruiters and HR teams.";

const trailingSlashRedirectScript = `(function(){var p=location.pathname;if(p!=='/'&&!/\\.\\w+$/.test(p)&&!p.endsWith('/')){location.replace(p+'/'+location.search+location.hash);}})();`;

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
    <html lang="en" className={poppins.variable}>
      <head>
        <Script id="gtm-smoothhiring-resources" strategy="beforeInteractive">
          {GTM_HEAD_SCRIPT}
        </Script>
        <script dangerouslySetInnerHTML={{ __html: trailingSlashRedirectScript }} />
      </head>
      <body>
        <GoogleTagManagerNoScript />
        <SeoWebSiteJsonLd />
        <MuiAppProviders>{children}</MuiAppProviders>
      </body>
    </html>
  );
}
