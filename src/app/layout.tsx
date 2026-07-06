import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NovaTech — Premium Technology",
  description:
    "Discover our curated collection of premium smartphones and smartwatches.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050505",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakarta.className}>
      <body className="antialiased bg-[#050505] text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
