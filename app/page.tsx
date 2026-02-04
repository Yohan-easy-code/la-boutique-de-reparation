import Hero from "@/components/sections/Hero";
import ProofStrip from "@/components/sections/ProofStrip";
import ServicesGrid from "@/components/sections/ServicesGrid";
import Steps from "@/components/sections/Steps";
import FAQ from "@/components/sections/FAQ";
import ContactBlock from "@/components/sections/ContactBlock";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <main className="pb-20 sm:pb-0">
      <Hero />
      <ProofStrip />
      <ServicesGrid />
      <Steps />
      <Testimonials />
      <FAQ />
      <ContactBlock />
    </main>
  );
}
