import ServicesGrid from "@/components/sections/ServicesGrid";
import { contactInfo } from "@/lib/content";
import { PhoneCall, MessageCircle } from "lucide-react";

export default function ServicesPage() {
  return (
    <main className="pb-20 sm:pb-0">
      <section className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
        <h1 className="text-4xl font-semibold tracking-tight text-white">
          Nos services
        </h1>
        <p className="mt-2 max-w-2xl text-white/70">
          Écran, batterie, charge, caméra… Si tu as un doute, envoie le modèle +
          le problème et on te répond vite.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-medium text-black transition hover:bg-white/90"
          >
            <PhoneCall className="h-5 w-5" />
            Appeler
          </a>
          <a
            href={contactInfo.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white transition hover:bg-white/10"
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp
          </a>
        </div>
      </section>

      <ServicesGrid />
    </main>
  );
}
