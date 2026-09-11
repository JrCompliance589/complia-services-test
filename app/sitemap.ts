import type { MetadataRoute } from "next";
import { legalPages, services } from "@/lib/site-data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://complia.services";
  const pages = ["", "/about", "/services", "/markets", "/industries", "/accreditation", "/contact"];
  return [
    ...pages.map((path) => ({ url: `${base}${path}`, changeFrequency: "monthly" as const, priority: path === "" ? 1 : 0.8 })),
    ...services.map((service) => ({ url: `${base}/services/${service.slug}`, changeFrequency: "monthly" as const, priority: 0.75 })),
    ...Object.keys(legalPages).map((slug) => ({ url: `${base}/legal/${slug}`, changeFrequency: "yearly" as const, priority: 0.3 })),
  ];
}
