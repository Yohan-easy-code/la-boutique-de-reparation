import Link from "next/link";
import { contactInfo } from "@/lib/content";
import { PhoneCall, MessageCircle, MapPin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/30">
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
                src="/images/logo.png"
                alt="La Boutique de Réparation"
                width={160}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              Réparation smartphone rapide : écran, batterie, charge, caméra,
              diagnostic.
            </p>
          </div>

          {/* Pages */}
          <div>
            <p className="text-sm font-semibold text-white">Pages</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/" className="text-white/70 hover:text-white">
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-white/70 hover:text-white"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/70 hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Infos */}
          <div>
            <p className="text-sm font-semibold text-white">Infos</p>
            <div className="mt-3 space-y-2 text-sm text-white/70">
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-white/70" />
                <div>
                  {contactInfo.addressLines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
              <p className="pt-1 text-xs text-white/50">
                Horaires : {contactInfo.hours[0]?.label}{" "}
                {contactInfo.hours[0]?.value} • {contactInfo.hours[1]?.label}{" "}
                {contactInfo.hours[1]?.value}
              </p>
            </div>
          </div>

          {/* CTA */}
          <div>
            <p className="text-sm font-semibold text-white">Devis rapide</p>
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
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-transparent px-4 py-2 text-sm font-medium text-white/90 transition hover:bg-white/5"
              >
                Itinéraire
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
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
              className="text-white/60 transition hover:text-white"
            >
              Powered by Yohan Zouari
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
