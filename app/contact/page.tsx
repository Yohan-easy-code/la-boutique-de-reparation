import { contactInfo } from "@/lib/content";
import { PhoneCall, MessageCircle, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
      <h1 className="text-4xl font-semibold tracking-tight text-white">
        Contact
      </h1>
      <p className="mt-2 max-w-2xl text-white/70">
        Appelle-nous, écris-nous sur WhatsApp, ou passe en boutique.
      </p>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {/* Info + map */}
        <div className="space-y-4">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-white">{contactInfo.businessName}</p>
            <div className="mt-2 text-white/60">
              {contactInfo.addressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>

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
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white transition hover:bg-white/10"
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
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-2">
            {/* Carte simple (iframe) */}
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps?q=Paris&output=embed"
              className="h-[320px] w-full rounded-2xl"
              loading="lazy"
            />
          </div>
        </div>

        {/* Form */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold text-white">
            Envoyer un message
          </h2>
          <p className="mt-2 text-sm text-white/70">
            Version simple via email. On pourra brancher un vrai formulaire
            ensuite.
          </p>

          <form
            className="mt-6 space-y-4"
            action="mailto:contact@example.com"
            method="post"
            encType="text/plain"
          >
            <input
              name="name"
              className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-white/40 focus:border-white/20"
              placeholder="Nom"
            />
            <input
              name="phone"
              className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-white/40 focus:border-white/20"
              placeholder="Téléphone"
            />
            <textarea
              name="message"
              rows={6}
              className="w-full resize-none rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-white/40 focus:border-white/20"
              placeholder="Modèle + problème + détails…"
            />
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-xl bg-white px-5 py-3 font-medium text-black transition hover:bg-white/90"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
