import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import { MuiAppProviders } from "@/components/MuiAppProviders";
import { SeoWebSiteJsonLd } from "@/components/SeoWebSiteJsonLd";
import { getSiteUrl, sitePath } from "@/lib/site";
import "./globals.css";

const GTM_ID = "GTM-TV33RWFX";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const rootDesc =
  "Free hiring resources, interview kits, and HR templates to help teams hire better and faster.";

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
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        <script dangerouslySetInnerHTML={{ __html: trailingSlashRedirectScript }} />
      </head>
      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        <SeoWebSiteJsonLd />
        <MuiAppProviders>{children}</MuiAppProviders>
      </body>
    </html>
  );
}
