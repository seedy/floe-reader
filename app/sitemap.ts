import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      changeFrequency: "monthly",
      lastModified: new Date(),
      priority: 1,
      url: "https://floegaubert.com",
    },
    {
      changeFrequency: "yearly",
      lastModified: new Date(),
      priority: 0.5,
      url: "https://floegaubert.com/legal",
    },
    {
      changeFrequency: "yearly",
      lastModified: new Date(),
      priority: 0.5,
      url: "https://floegaubert.com/privacy",
    },
  ];
}
