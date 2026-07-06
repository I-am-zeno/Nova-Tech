import type { Metadata, Viewport } from "next";
import { Rubik, Nunito_Sans } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import "./globals.css";

const rubik = Rubik({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rubik",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "NovaTech — Smartphones & Smartwatches in Nawabshah",
  description:
    "We offer a wide range of Android and iOS smartphones and smartwatches from top brands. Visit our Nawabshah store for genuine devices.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${rubik.variable} ${nunitoSans.variable}`}>
      <body className="antialiased bg-[#050505] text-white font-heading">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
