"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, hoverLift, container } from "@/components/ui/motion";
import { services } from "@/lib/content";
import {
  Smartphone,
  Battery,
  Plug,
  Camera,
  Droplets,
  Stethoscope,
  ArrowRight,
} from "lucide-react";

const iconMap = {
  Smartphone,
  Battery,
  Plug,
  Camera,
  Droplets,
  Stethoscope,
} as const;

type IconKey = keyof typeof iconMap;

export default function ServicesGrid() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
      <div className="flex items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Services
          </h2>
          <p className="mt-2 max-w-2xl text-white/70">
            Les réparations les plus demandées, avec un diagnostic clair et un
            devis rapide.
          </p>
        </div>

        <Link
          href="/services"
          className="hidden items-center gap-2 rounded-xl border border-blue-500 text-blue-400 hover:bg-blue-500/10 px-3 py-2 text-sm font-medium transition sm:inline-flex"
        >
          Voir tous les services <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => {
          const Icon = iconMap[s.icon as IconKey] ?? Smartphone;

          return (
            <motion.div
              key={s.id}
              variants={fadeUp}
              whileHover={hoverLift}
              className="rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-lg font-medium text-white">{s.title}</p>
                    <p className="text-sm text-white/60">{s.duration}</p>
                  </div>
                </div>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-white/70">
                {s.description}
              </p>

              <div className="mt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-medium text-white/90 hover:text-white"
                >
                  Demander un devis <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Mobile CTA */}
      <div className="mt-8 sm:hidden">
        <Link
          href="/services"
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/10"
        >
          Voir tous les services <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
