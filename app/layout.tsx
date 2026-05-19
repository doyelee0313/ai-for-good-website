import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "AI for Good | AI Singapore",
  description: "Scaling Inclusive AI for Impact",

  openGraph: {
    title: "AI for Good | AI Singapore",
    description: "Scaling Inclusive AI for Impact",
    images: [
      {
        url: "/ai4g-logo.png",
        width: 1200,
        height: 630,
      },
    ],
  },

  icons: {
    icon: "/ai4g-logo.png",
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
