import type { Metadata } from "next";
import "./globals.css";
import { Inter, Manrope } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileCtaBar from "@/components/layout/MobileCtaBar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "La Boutique de Réparation",
  description: "Réparation smartphone rapide : écran, batterie, connecteur…",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${manrope.variable}`}>
        <Navbar />
        {children}
        <Footer />
        <MobileCtaBar />
      </body>
    </html>
  );
}
