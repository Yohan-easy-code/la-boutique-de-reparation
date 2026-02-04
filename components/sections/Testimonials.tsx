"use client";

import { motion } from "framer-motion";
import { testimonials, google } from "@/lib/content";
import { ExternalLink, Star } from "lucide-react";

type Testimonial = {
  author: string;
  rating: number;
  date: string;
  text: string;
};

function Stars({ value }: { value: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < value ? "text-yellow-400" : "text-black/20"}`}
          fill={i < value ? "currentColor" : "none"}
        />
      ))}
    </div>
  );
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function Testimonials() {
  const items = (testimonials ?? []) as Testimonial[];

  return (
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        {/* CARD SECTION (blanc cassé) */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="rounded-[32px] bg-[#F7F8FA] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.06)] sm:p-12"
        >
          {/* Header */}
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-tight text-black/90 sm:text-4xl">
                Avis clients
              </h2>
              <p className="mt-2 text-black/60">
                Des retours clients — et tu peux consulter la fiche Google de la
                boutique.
              </p>
            </div>

            {google?.reviewsUrl ? (
              <a
                href={google.reviewsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-black/10 bg-black/5 px-5 py-3 text-sm font-medium text-black/80 transition hover:bg-black/10"
              >
                Voir sur Google
                <ExternalLink className="h-4 w-4 text-black/60" />
              </a>
            ) : null}
          </div>

          {/* Grid */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="mt-10 grid gap-6 md:grid-cols-3"
          >
            {items.map((t) => (
              <motion.article
                key={`${t.author}-${t.date}`}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="rounded-2xl border border-black/5 bg-[#FAFAFB] p-6 shadow-[0_6px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_10px_22px_rgba(0,0,0,0.08)]"
              >
                <div className="flex items-center justify-between">
                  <Stars value={t.rating} />
                  <span className="text-xs text-black/45">{t.date}</span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-black/70">
                  “{t.text}”
                </p>

                <p className="mt-6 text-sm font-medium text-black/85">
                  {t.author}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
