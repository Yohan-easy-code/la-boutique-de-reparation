"use client";

import { useState } from "react";
import { faqs } from "@/lib/content";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          FAQ
        </h2>
        <p className="mt-2 text-white/70">
          Les réponses aux questions les plus fréquentes.
        </p>
      </div>

      <div className="mt-8 grid gap-3">
        {faqs.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <button
              key={item.question}
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              className="w-full rounded-2xl border border-white/10 bg-white/5 p-5 text-left transition hover:bg-white/10"
            >
              <div className="flex items-center justify-between gap-4">
                <p className="text-base font-medium text-white">
                  {item.question}
                </p>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-white/70 transition ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </div>

              {isOpen && (
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {item.answer}
                </p>
              )}
            </button>
          );
        })}
      </div>
    </section>
  );
}
