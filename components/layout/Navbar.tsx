import Link from "next/link";
import { PhoneCall, MessageCircle } from "lucide-react";
import { contactInfo } from "@/lib/content";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Image
          src="/images/logo.png"
          alt="La Boutique de Réparation"
          width={160}
          height={40}
          className="h-8 w-auto"
        />

        <div className="hidden items-center gap-6 sm:flex">
          <Link
            href="/services"
            className="text-sm text-white/70 hover:text-white"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="text-sm text-white/70 hover:text-white"
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

        {/* Mobile: simple link */}
        <Link
          href="/contact"
          className="sm:hidden rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
