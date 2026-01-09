
import React from 'react';
import Navbar from './components/Navbar';
import AppDownload from './components/AppDownload';
import TeamSection from './components/TeamSection';
import ComparisonSection from "./components/ComparisonSection";
import { ArrowDown } from 'lucide-react';
import ValueDelaySection from './components/ValueDelaySection';
import ProcessTimeline from './components/ProcessTimeline';
import LogoCarousel from './components/LogoCarousel';
import Hero from './components/Hero';

function App() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-gray-900 font-sans selection:bg-red-500 selection:text-white overflow-x-hidden">
      <Navbar />

      <main>
        {/* Hero (Ramp-inspired layout, original content) */}
        <Hero />

        <section id="logo-carousel" className="relative">
          <LogoCarousel />
        </section>

        {/* Sections with proper IDs for Nav */}
        <section id="process" className="relative">
          <ProcessTimeline />
        </section>

        {/* Sections with proper IDs for Nav */}
        {/* <section id="features" className="relative">
            <FeaturesStack />
          </section> */}


        <section id="team" className="relative">
          <TeamSection />
        </section>

        <section id="app" className="relative">
          <AppDownload />
        </section>

        <section id="comparison" className="relative">
          <ComparisonSection />
        </section>

        <section id="value-delay" className="relative">
          <ValueDelaySection />
        </section>




      
      </main>
    </div>
  );
}

export default App;
