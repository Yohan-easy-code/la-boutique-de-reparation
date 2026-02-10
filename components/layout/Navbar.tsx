"use client";

import Link from "next/link";
import { PhoneCall, MessageCircle } from "lucide-react";
import { contactInfo } from "@/lib/content";
import Image from "next/image";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // avoid hydration mismatch when reading theme
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  const current = mounted ? (theme === "system" ? systemTheme : theme) : null;
  const logoSrc = current === "light" ? "/images/logo-black.png" : "/images/logo.png";

  return (
    <header className="sticky top-0 z-50 border-b border-base bg-surface-2 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link
          href="/"
          aria-label="Retour à l'accueil"
          className="flex items-center"
        >
          <Image
            src={logoSrc}
            alt="La Boutique de Réparation"
            width={160}
            height={40}
            className="h-8 w-auto"
          />
        </Link>

        <div className="hidden items-center gap-6 sm:flex">
          <Link
            href="/services"
            className="text-sm text-muted hover:text-base"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="text-sm text-muted hover:text-base"
          >
            Contact
          </Link>

          <div className="ml-2 flex items-center gap-2">
            <a
              href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-white/90"
            >
              <PhoneCall className="h-4 w-4" />
              Appeler
            </a>
            <a
              href={contactInfo.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-blue-500 text-blue-400 hover:bg-blue-500/10 px-4 py-2 text-sm font-medium transition "
            >
              <MessageCircle className="h-4 w-4 " />
              WhatsApp
            </a>
          </div>
        </div>

        {/* Mobile: links */}
        <div className="sm:hidden flex items-center gap-2">
          <Link
            href="/services"
            className="rounded-lg border border-base bg-surface px-3 py-2 text-sm text-base hover:bg-surface-2"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="rounded-lg border border-base bg-surface px-3 py-2 text-sm text-base hover:bg-surface-2"
          >
            Contact
          </Link>
        </div>
        <ThemeToggle />
      </nav>
    </header>
  );
}
