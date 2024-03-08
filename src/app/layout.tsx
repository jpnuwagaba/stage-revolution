import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { spacegrotesk } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Stage Revolution",
  description: "Create Music from a Stage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-black text-white ${spacegrotesk.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
