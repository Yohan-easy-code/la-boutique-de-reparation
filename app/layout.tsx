import type { Metadata } from "next";
import "./globals.css";
import { Inter, Manrope } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileCtaBar from "@/components/layout/MobileCtaBar";
import ThemeProvider from "@/components/providers/ThemeProvider";

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
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${inter.variable} ${manrope.variable}`}>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
          <MobileCtaBar />
        </ThemeProvider>
      </body>
    </html>
  );
}
