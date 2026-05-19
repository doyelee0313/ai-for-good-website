import type { StaticImageData } from "next/image";
import { AI4G_LOGO_PATH } from "@/lib/brand-assets";

export type GalleryRevealVariant =
  | "reveal"
  | "reveal-left"
  | "reveal-right"
  | "reveal-scale";

/** One tile in the gallery. Put files under `public/` and set `src` to `/photo.jpg`. */
export type GalleryItem = {
  src: string | StaticImageData;
  alt: string;
  caption?: string;
  reveal?: GalleryRevealVariant;
  /** Tailwind classes for width on large screens (`lg:grid-cols-12`). */
  layout?: string;
  minHeightClass?: string;
};

export const galleryItems: GalleryItem[] = [
  {
    src: "/map global.png",
    alt: "Global map highlighting AI for Good reach across regions",
    caption: "Reach across Southeast Asia and beyond",
    reveal: "reveal-scale",
    layout: "lg:col-span-12",
    minHeightClass: "min-h-[260px] sm:min-h-[320px]",
  },
  {
    src: AI4G_LOGO_PATH,
    alt: "AI for Good logo",
    caption: "Inclusive AI literacy",
    reveal: "reveal-right",
    layout: "lg:col-span-4",
  },
  {
    src: AI4G_LOGO_PATH,
    alt: "AI for Good logo",
    caption: "Trainings & workshops",
    reveal: "reveal-left",
    layout: "lg:col-span-4",
  },
  {
    src: AI4G_LOGO_PATH,
    alt: "AI for Good logo",
    caption: "Youth-led learning",
    reveal: "reveal",
    layout: "lg:col-span-4",
  },
  {
    src: AI4G_LOGO_PATH,
    alt: "AI for Good logo",
    caption: "Alliance & partners",
    reveal: "reveal-right",
    layout: "lg:col-span-6",
    minHeightClass: "min-h-[200px]",
  },
  {
    src: AI4G_LOGO_PATH,
    alt: "AI for Good logo",
    caption: "Momentum for good",
    reveal: "reveal-scale",
    layout: "lg:col-span-6",
    minHeightClass: "min-h-[200px]",
  },
];

const revealCycle: GalleryRevealVariant[] = [
  "reveal",
  "reveal-left",
  "reveal-right",
  "reveal-scale",
];

/** Used when `item.reveal` is omitted. */
export function getGalleryRevealFallback(index: number): GalleryRevealVariant {
  return revealCycle[index % revealCycle.length];
}
