import Link from "next/link";
import { PhoneCall, MessageCircle } from "lucide-react";
import { contactInfo } from "@/lib/content";

type Props = {
  title: string;
  subtitle?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
};

export default function PageHero({
  title,
  subtitle,
  primaryCtaLabel = "Appeler",
  primaryCtaHref,
  secondaryCtaLabel = "WhatsApp",
  secondaryCtaHref,
}: Props) {
  const phoneHref = `tel:${contactInfo.phone.replace(/\s/g, "")}`;

  return (
    <section className="relative overflow-hidden">
      {/* soft background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
        <div className="rounded-[28px] border border-white/10 bg-white/5 p-7 sm:p-10">
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-3 max-w-2xl text-white/70">{subtitle}</p>
          ) : null}

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href={primaryCtaHref ?? phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-medium text-black transition hover:bg-white/90"
            >
              <PhoneCall className="h-5 w-5" />
              {primaryCtaLabel}
            </a>

            <a
              href={secondaryCtaHref ?? contactInfo.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-5 py-3 font-medium text-white transition hover:bg-blue-600"
            >
              <MessageCircle className="h-5 w-5" />
              {secondaryCtaLabel}
            </a>

            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white transition hover:bg-white/10"
            >
              Voir les services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
