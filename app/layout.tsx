import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI for Good | AI Singapore",
  description:
    "Scaling Inclusive AI from Singapore to the World. AI Singapore advances AI for Good by turning AI education into scalable social impact across Southeast Asia and beyond.",
  generator: "v0.app",
  icons: {
    icon: "/ai4g-logo.png", // Use the single logo for all purposes
    apple: "/ai4g-logo.png", // Use the same logo for Apple touch icon
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
