import type { MetadataRoute } from "next";
import { chapters } from "@/lib/curriculum";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const pages = ["", "/curriculum", "/atlas", "/qbank", "/progress"].map((p) => ({ url: base + p }));
  const ch = chapters.flatMap((c) => [{ url: `${base}/curriculum/${c.n}` }, ...c.sections.map((s) => ({ url: `${base}/curriculum/${c.n}/${s.id}` }))]);
  return [...pages, ...ch];
}
