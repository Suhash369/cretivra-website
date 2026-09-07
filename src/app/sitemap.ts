import { MetadataRoute } from "next";
import { REGIONS } from "@/lib/regions";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://cretivra-website.vercel.app";

  const subPages = [
    "",
    "/services",
    "/industries",
    "/pricing",
    "/about",
    "/contact",
    "/case-studies",
    "/press",
    "/blog",
  ];

  const regionCodes = Object.keys(REGIONS);

  const sitemapEntries: MetadataRoute.Sitemap = [];

  subPages.forEach((page) => {
    regionCodes.forEach((code) => {
      const regionPrefix = code === "global" ? "" : `/${code}`;
      const pageUrl = `${baseUrl}${regionPrefix}${page}`;

      // Build hreflang alternates
      const alternates: Record<string, string> = {};
      regionCodes.forEach((altCode) => {
        const altPrefix = altCode === "global" ? "" : `/${altCode}`;
        const hreflangKey = REGIONS[altCode as keyof typeof REGIONS].hreflang;
        alternates[hreflangKey] = `${baseUrl}${altPrefix}${page}`;
      });

      sitemapEntries.push({
        url: pageUrl,
        lastModified: new Date(),
        changeFrequency: page === "" ? "daily" : "weekly",
        priority: page === "" ? 1.0 : 0.8,
        alternates: {
          languages: alternates,
        },
      });
    });
  });

  return sitemapEntries;
}
