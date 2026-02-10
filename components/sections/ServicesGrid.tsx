"use client";

import { services } from "@/lib/content";
import { motion } from "framer-motion";
import { container, fadeUp, hoverLift } from "@/components/ui/motion";
import {
  Smartphone,
  Battery,
  Plug,
  Camera,
  Droplets,
  Stethoscope,
  Monitor,
  HardDrive,
  Fan,
  RefreshCcw,
} from "lucide-react";

const iconMap = {
  Smartphone,
  Battery,
  Plug,
  Camera,
  Droplets,
  Stethoscope,
  Monitor,
  HardDrive,
  Fan,
  RefreshCcw,
} as const;

type IconKey = keyof typeof iconMap;

export default function ServicesGrid() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-semibold tracking-tight text-base sm:text-4xl">
          Nos services
        </h2>
        <p className="mt-2 text-muted">
          Smartphones, PC et Mac. Diagnostic clair avant toute réparation.
        </p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {services.map((s) => {
          const Icon = iconMap[s.icon as IconKey];

          return (
            <motion.div
              key={s.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              whileHover={hoverLift}
              transition={{ duration: 0.35 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <div className="flex items-start gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10">
                  <Icon className="h-5 w-5 text-blue-500" />
                </div>

                <div>
                  <p className="text-base font-medium text-white">{s.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-white/70">
                    {s.description}
                  </p>
                  {s.duration && (
                    <p className="mt-3 text-xs text-white/60">
                      Durée estimée : {s.duration}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
