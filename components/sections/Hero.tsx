import Image from "next/image";
import Link from "next/link";
import { PhoneCall, MessageCircle, MapPin } from "lucide-react";
import SplineScene from "../ui/SplineScene";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* background */}
      <div className="absolute inset-0 -z-10">
        <SplineScene scene="https://prod.spline.design/yGa6yoL7bfCPHG4X/scene.splinecode" />
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* copy */}
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80">
              Réparation smartphone • Rapide • Garantie
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Réparez votre téléphone{" "}
              <span className="text-white/80">sans prise de tête.</span>
            </h1>

            <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/70">
              Écran, batterie, connecteur de charge, caméra… Diagnostic clair et
              réparation express selon disponibilité.
            </p>

            {/* CTAs */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:+33000000000"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-medium text-black transition hover:bg-white/90"
              >
                <PhoneCall className="h-5 w-5" />
                Appeler
              </a>

              <a
                href="https://wa.me/33000000000"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-blue-500 text-blue-400 hover:bg-blue-500/10 px-5 py-3 font-medium transition "
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-transparent px-5 py-3 font-medium text-white/90 transition hover:bg-white/5"
              >
                <MapPin className="h-5 w-5" />
                Nous trouver
              </Link>
            </div>

            {/* trust */}
            <div className="mt-8 grid max-w-xl grid-cols-2 gap-3 text-sm text-white/70 sm:grid-cols-3">
              <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                <p className="text-white">30–60 min</p>
                <p className="text-white/60">Réparations courantes</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                <p className="text-white">Garantie</p>
                <p className="text-white/60">Selon intervention</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                <p className="text-white">Devis rapide</p>
                <p className="text-white/60">Par téléphone/WhatsApp</p>
              </div>
            </div>
          </div>

          {/* visual */}
          <div className="relative">
            {/* Placeholder Spline zone */}
            <div className="absolute inset-0 -z-10 rounded-3xl border border-white/10 bg-white/5" />
            <div className="pointer-events-none absolute -top-10 left-1/2 h-44 w-44 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />

            <div className="grid gap-4">
              <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl border border-white/10 bg-black/30">
                {/* phone visual */}
                <Image
                  src="/images/phones/phone-hero.png"
                  alt="Téléphone réparé - visuel"
                  fill
                  priority
                  className="object-contain p-6"
                />
              </div>

              <div className="mx-auto w-full max-w-sm rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">
                <p className="text-white">Astuce</p>
                <p className="mt-1">
                  Décris le problème + modèle du téléphone sur WhatsApp pour un
                  devis rapide.
                </p>
              </div>
            </div>

            {/* NOTE: quand on intégrera Spline, on remplacera le fond/placeholder */}
          </div>
        </div>
      </div>
    </section>
  );
}
