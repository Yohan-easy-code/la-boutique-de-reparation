"use client";

import Link from "next/link";
import { contactInfo } from "@/lib/content";
import { PhoneCall, MessageCircle, MapPin } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function Footer() {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // avoid hydration mismatch when reading theme
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  const current = mounted ? (theme === "system" ? systemTheme : theme) : null;
  const logoSrc = current === "light" ? "/images/logo-black.png" : "/images/logo.png";

  return (
    <footer className="border-t border-base bg-surface-2">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
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
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Réparation smartphone rapide : écran, batterie, charge, caméra,
              diagnostic.
            </p>
          </div>

          {/* Pages */}
          <div>
            <p className="text-sm font-semibold text-base">Pages</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted hover:text-base">
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-muted hover:text-base"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted hover:text-base"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Infos */}
          <div>
            <p className="text-sm font-semibold text-base">Infos</p>
            <div className="mt-3 space-y-2 text-sm text-muted">
            <div className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-muted" />
              <div>
                {contactInfo.addresses.map((addr) => (
                  <Link
                    key={addr.label}
                    href={addr.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="block text-muted hover:text-base"
                  >
                    {addr.lines.join(", ")}
                  </Link>
                ))}
              </div>
            </div>
              <p className="pt-1 text-xs text-muted-2">
                Horaires : {contactInfo.hours[0]?.label}{" "}
                {contactInfo.hours[0]?.value} • {contactInfo.hours[1]?.label}{" "}
                {contactInfo.hours[1]?.value}
              </p>
            </div>
          </div>

          {/* CTA */}
          <div>
            <p className="text-sm font-semibold text-base">Devis rapide</p>
            <div className="mt-3 flex flex-col gap-2">
              <a
                href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-white/90"
              >
                <PhoneCall className="h-4 w-4" />
                Appeler
              </a>
              <a
                href={contactInfo.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-blue-500 text-blue-400 hover:bg-blue-500/10 px-4 py-2 text-sm font-medium transition "
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
              <a
                href={contactInfo.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-base bg-transparent px-4 py-2 text-sm font-medium text-base transition hover:bg-surface"
              >
                Itinéraire
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-base pt-6 text-xs text-muted-2 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {contactInfo.businessName}. Tous droits
            réservés.
          </p>
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
            <p>Site vitrine • Mentions légales (à ajouter)</p>
            <a
              href="https://yohanzouari-dev.fr/"
              target="_blank"
              rel="noreferrer"
              className="text-muted transition hover:text-base"
            >
              Powered by Yohan Zouari
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
