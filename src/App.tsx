import React from "react";
import { NavBar } from "./components/NavBar";
import { HeroSection } from "./components/HeroSection";
import { ServicesSection } from "./components/ServicesSection";
import { TechnologiesSection } from "./components/TechnologiesSection";
import { CodeShowcase } from "./components/CodeShowcase";
import { AboutSection } from "./components/AboutSection";
import { CTASection } from "./components/CTASection";
// import { Footer } from "./components/Footer";
// import Particles from "./components/Particles";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col relative">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100" />
      </div>
      {/* <Particles color="rgba(255, 255, 255, 0.8)" count={75} /> */}
      <div className="relative z-20 flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-grow">
          <HeroSection />
          <ServicesSection />
          <TechnologiesSection />
          <CodeShowcase />
          <AboutSection />
          <CTASection />
        </main>
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default App;
