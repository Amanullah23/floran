import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Work from "@/components/Work";
import CTA from "@/components/CTA";
import StatsBand from "@/components/StatsBand";

export default function Home() {
  return (
    <main>
      <Hero />

      <StatsBand />
      <Services />
      <Work />
      <CTA />
    </main>
  );
}
