import { Hero } from "@/components/landing/Hero";
import { Problem } from "@/components/landing/Problem";
import { Solution } from "@/components/landing/Solution";
import { Modules } from "@/components/landing/Modules";
import { Audience } from "@/components/landing/Audience";
import { Benefits } from "@/components/landing/Benefits";
import { Authority } from "@/components/landing/Authority";
import { Offer } from "@/components/landing/Offer";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Problem />
      <Solution />
      <Modules />
      <Audience />
      <Benefits />
      <Authority />
      <Offer />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
