import Link from "next/link";
import { contactInfo } from "@/lib/content";
import { PhoneCall, MessageCircle, MapPin, Clock } from "lucide-react";

export default function ContactBlock() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Left: Copy + CTAs */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Contact & devis rapide
          </h2>
          <p className="mt-2 max-w-xl text-white/70">
            Envoie le modèle + le problème (et une photo si besoin). On te
            répond vite avec un devis clair.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-medium text-black transition hover:bg-white/90"
            >
              <PhoneCall className="h-5 w-5" />
              Appeler
            </a>

            <a
              href={contactInfo.whatsapp}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-blue-500 text-blue-500 hover:bg-blue-500/10 px-5 py-3 font-medium transition"
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp
            </a>

            <a
              href={contactInfo.mapsUrl}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-transparent px-5 py-3 font-medium text-white/90 transition hover:bg-white/5"
              target="_blank"
              rel="noreferrer"
            >
              <MapPin className="h-5 w-5" />
              Itinéraire
            </a>
          </div>

          <div className="mt-8 space-y-4 text-sm text-white/70">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-white/80" />
                <div>
                  <p className="text-white">{contactInfo.businessName}</p>
                  {contactInfo.addresses.map((addr) => (
                    <a
                      key={addr.label}
                      href={addr.mapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="block text-white/60 hover:text-white"
                    >
                      {addr.lines.join(", ")}
                    </a>
                  ))}
                </div>
              </div>

            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 text-white/80" />
              <div className="w-full">
                <p className="text-white">Horaires</p>
                <div className="mt-1 space-y-1">
                  {contactInfo.hours.map((h) => (
                    <div key={h.label} className="flex justify-between gap-6">
                      <span className="text-white/60">{h.label}</span>
                      <span className="text-white/60">{h.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-medium text-white/90 hover:text-white"
              >
                Aller à la page contact →
              </Link>
            </div>
          </div>
        </div>

        {/* Right: Form (simple, sans backend) */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <h3 className="text-xl font-semibold text-white">
            Écrire un message
          </h3>
          <p className="mt-2 text-sm text-white/70">
            Pour l’instant, ce formulaire ouvre ton email (version simple). On
            pourra brancher un vrai envoi ensuite.
          </p>

          <form
            className="mt-6 space-y-4"
            action="mailto:contact@example.com"
            method="post"
            encType="text/plain"
          >
            <div>
              <label className="text-sm text-white/70">Nom</label>
              <input
                name="name"
                className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-white/40 focus:border-white/20"
                placeholder="Votre nom"
              />
            </div>

            <div>
              <label className="text-sm text-white/70">Téléphone</label>
              <input
                name="phone"
                className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-white/40 focus:border-white/20"
                placeholder="06…"
              />
            </div>

            <div>
              <label className="text-sm text-white/70">Message</label>
              <textarea
                name="message"
                rows={5}
                className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-white/40 focus:border-white/20"
                placeholder="Modèle du téléphone + problème + urgence…"
              />
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-xl bg-white px-5 py-3 font-medium text-black transition hover:bg-white/90"
            >
              Envoyer
            </button>
          </form>

          <p className="mt-3 text-xs text-white/50">
            (On remplacera “mailto” par un vrai envoi dès que tu veux.)
          </p>
        </div>
      </div>
    </section>
  );
}
