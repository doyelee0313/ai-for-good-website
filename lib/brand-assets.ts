import type { StaticImageData } from "next/image";
import ai4gLogo from "@/public/ai4g-logo.png";

/** Canonical site URL for absolute metadata links (Open Graph, Twitter cards). */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://aiforgood.aisingapore.org";

/** Public URL for metadata, favicon, and static image paths. */
export const AI4G_LOGO_PATH = "/ai4g-logo.png";

export const AI4G_LOGO_ALT = "AI for Good Logo";

/** Optimized import for Next.js Image components. */
export const AI4G_LOGO: StaticImageData = ai4gLogo;
