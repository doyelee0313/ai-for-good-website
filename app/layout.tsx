import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { AI4G_LOGO_ALT, AI4G_LOGO_PATH, SITE_URL } from "@/lib/brand-assets";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

const siteDescription =
  "Scaling Inclusive AI from Singapore to the World. AI Singapore advances AI for Good by turning AI education into scalable social impact across Southeast Asia and beyond.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "AI for Good | AI Singapore",
  description: siteDescription,

  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "AI for Good | AI Singapore",
    title: "AI for Good | AI Singapore",
    description: siteDescription,
    locale: "en_SG",
    images: [
      {
        url: AI4G_LOGO_PATH,
        width: 464,
        height: 306,
        alt: AI4G_LOGO_ALT,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "AI for Good | AI Singapore",
    description: siteDescription,
    images: [AI4G_LOGO_PATH],
  },

  icons: {
    icon: [{ url: AI4G_LOGO_PATH, type: "image/png" }],
    apple: [{ url: AI4G_LOGO_PATH, type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
