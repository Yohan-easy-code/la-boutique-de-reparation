"use client";

import { motion } from "framer-motion";
import { computerRepair } from "@/lib/content";
import { fadeUp, container, hoverLift } from "@/components/ui/motion";
import { Laptop, Monitor } from "lucide-react";

export default function ComputerRepair() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        className="max-w-2xl"
      >
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Réparation PC / Mac
        </h2>
        <p className="mt-2 text-white/70">
          Optimisation, sauvegarde, réinstallation, surchauffe… on s’occupe
          aussi des ordinateurs.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-8 grid gap-6 md:grid-cols-2"
      >
        {computerRepair.map((b, idx) => (
          <motion.div
            key={b.title}
            variants={fadeUp}
            whileHover={hoverLift}
            className="rounded-3xl border border-white/10 bg-white/5 p-7"
          >
            <div className="flex items-center justify-between">
              <p className="text-lg font-medium text-white">{b.title}</p>
              {idx === 0 ? (
                <Laptop className="h-5 w-5 text-white/70" />
              ) : (
                <Monitor className="h-5 w-5 text-white/70" />
              )}
            </div>

            <ul className="mt-4 grid gap-2 text-sm text-white/70">
              {b.points.map((p) => (
                <li key={p} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
