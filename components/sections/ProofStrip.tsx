"use client";
import { motion } from "framer-motion";
import { proofs } from "@/lib/content";
import { Shield, Timer, BadgeCheck, Lock } from "lucide-react";

const iconMap = {
  Shield,
  Timer,
  BadgeCheck,
  Lock,
} as const;

type IconKey = keyof typeof iconMap;

export default function ProofStrip() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {proofs.map((p) => {
          const Icon = iconMap[p.icon as IconKey] ?? Shield;
          return (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <div className="flex items-start gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-base font-medium text-white">{p.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-white/70">
                    {p.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
