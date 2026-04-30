import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { WhoWeWorkWith } from "@/components/WhoWeWorkWith";
import { Problem } from "@/components/Problem";
import { Approach } from "@/components/Approach";
import { Offerings } from "@/components/Offerings";
import { Proof } from "@/components/Proof";
import { Engage } from "@/components/Engage";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <WhoWeWorkWith />
      <Problem />
      <Approach />
      <Offerings />
      <Proof />
      <Engage />
      <Footer />
    </main>
  );
};

export default Index;
