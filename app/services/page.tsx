import ServicesGrid from "@/components/sections/ServicesGrid";

export default function ServicesPage() {
  return (
    <main>
      <div className="mx-auto max-w-6xl px-4 pt-10">
        <h1 className="text-4xl font-semibold tracking-tight text-white">
          Nos services
        </h1>
        <p className="mt-2 text-white/70">
          Écran, batterie, charge, caméra… contactez-nous pour un devis rapide.
        </p>
      </div>

      <ServicesGrid />
    </main>
  );
}
