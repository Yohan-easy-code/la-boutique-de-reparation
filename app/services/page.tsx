import PageHero from "@/components/ui/PageHero";
import ServicesGrid from "@/components/sections/ServicesGrid";

export default function ServicesPage() {
  return (
    <main className="pb-20 sm:pb-0">
      <PageHero
        title="Nos services"
        subtitle="Écran, batterie, charge, caméra… contacte-nous avec le modèle et le problème pour un devis rapide."
      />
      <ServicesGrid />
    </main>
  );
}
