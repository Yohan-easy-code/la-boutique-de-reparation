"use client";

import { useState } from "react";
import { motion, cubicBezier } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/content";

const ease = cubicBezier(0.16, 1, 0.3, 1);

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Questions fréquentes
        </h2>
        <p className="mt-2 text-white/70">
          Tout ce que tu dois savoir avant une réparation.
        </p>
      </div>

      <div className="mt-8 grid gap-3">
        {faqs.map((item, idx) => {
          const isOpen = openIndex === idx;

          return (
            <motion.div
              key={item.question}
              layout
              transition={{ duration: 0.45, ease }}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              {/* Header */}
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="flex w-full items-center justify-between gap-4 p-5 text-left"
              >
                <span className="text-base font-medium text-white">
                  {item.question}
                </span>

                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.35, ease }}
                  className="shrink-0"
                >
                  <ChevronDown className="h-5 w-5 text-white/70" />
                </motion.span>
              </button>

              {/* Content */}
              {isOpen && (
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.35, ease }}
                  className="px-5 pb-5"
                >
                  <p className="text-sm leading-relaxed text-white/70">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
