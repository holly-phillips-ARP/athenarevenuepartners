import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { WhoWeWorkWith } from "@/components/WhoWeWorkWith";
import { Problem } from "@/components/Problem";
import { Approach } from "@/components/Approach";

import { Proof } from "@/components/Proof";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>Athena Revenue Partners — Predictable Revenue at Scale</title>
        <meta
          name="description"
          content="We help Series A–C tech companies achieve forecast accuracy within 10% in 6 months — built by operators, not consultants."
        />
        <link rel="canonical" href="https://athenarevenuepartners.com/" />
        <meta property="og:title" content="Athena Revenue Partners — Predictable Revenue at Scale" />
        <meta
          property="og:description"
          content="Forecast accuracy within 10% in 6 months — built by operators, not consultants."
        />
        <meta property="og:url" content="https://athenarevenuepartners.com/" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Navbar />
      <Hero />
      <WhoWeWorkWith />
      <Problem />
      <Approach />
      
      <Proof />
      <Footer />
    </main>
  );
};

export default Index;
