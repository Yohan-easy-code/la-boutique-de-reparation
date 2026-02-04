"use client";
import { steps } from "@/lib/content";
import { Search, Wrench, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, hoverLift } from "@/components/ui/motion";

const iconMap = {
  Search,
  Wrench,
  CheckCircle2,
} as const;

type IconKey = keyof typeof iconMap;

export default function Steps() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Comment ça marche
        </h2>
        <p className="mt-2 text-white/70">
          Simple, rapide, transparent — du diagnostic à la récupération.
        </p>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {steps.map((s, index) => {
          const Icon = iconMap[s.icon as IconKey] ?? Search;
          return (
            <motion.div
              key={s.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              whileHover={hoverLift}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-white/10">
                  <Icon className="h-5 w-5 text-white" />
                </div>

                <span className="text-sm font-medium text-white/50">
                  0{index + 1}
                </span>
              </div>

              <p className="mt-4 text-lg font-medium text-white">{s.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                {s.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
