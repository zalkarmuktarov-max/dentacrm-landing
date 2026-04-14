import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemsSolutions from "@/components/ProblemsSolutions";
import Features from "@/components/Features";
import InteractiveDemo from "@/components/InteractiveDemo";
import PatientBookingSection from "@/components/PatientBookingSection";
import Pricing from "@/components/Pricing";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="bg-[#09090b] min-h-screen">
      <Navbar />
      <Hero />
      <ProblemsSolutions />
      <Features />
      <InteractiveDemo />
      <PatientBookingSection />
      <Pricing />
      <FinalCTA />
      <Footer />
    </main>
  );
}
