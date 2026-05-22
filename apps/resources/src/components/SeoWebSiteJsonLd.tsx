import { buildWebSiteJsonLd } from "@/lib/seo-metadata";

export const SeoWebSiteJsonLd = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(buildWebSiteJsonLd()),
      }}
    />
  );
};
