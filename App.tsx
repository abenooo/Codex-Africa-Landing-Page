
import React from 'react';
import Navbar from './components/Navbar';
import AppDownload from './components/AppDownload';
import TeamSection from './components/TeamSection';
import ComparisonSection from "./components/ComparisonSection";
import { ArrowDown } from 'lucide-react';
import ValueDelaySection from './components/ValueDelaySection';
import ProcessTimeline from './components/ProcessTimeline';
import LogoCarousel from './components/LogoCarousel';

function App() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-gray-900 font-sans selection:bg-red-500 selection:text-white overflow-x-hidden">
      <Navbar />

      <main>
        {/* Modern Hero */}
        <section className="relative min-h-screen flex flex-col justify-center items-center px-4 pt-20 pb-12 text-center">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-40"></div>

          <div className="max-w-6xl mx-auto space-y-8 md:space-y-12 relative z-10">


            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-gray-900 leading-[0.9] sm:leading-[0.82]">
              Elevate Your <br />
              <span className="text-gray-500">Sacco Experience.</span>
            </h1>

            <p className="text-lg md:text-2xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-semibold px-4">
              The only SaaS platform built specifically for the modern cooperative economy. Secure, transparent, and built to scale.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center pt-4 md:pt-8">
              <button className="px-10 sm:px-12 py-4 sm:py-5 bg-black text-white rounded-full font-black uppercase tracking-widest text-xs hover:bg-red-600 transition-all shadow-[0_20px_40px_rgba(0,0,0,0.2)] active:scale-95">
                Join Now Free
              </button>
              <button className="px-10 sm:px-12 py-4 sm:py-5 bg-white text-gray-900 border-2 border-gray-100 rounded-full font-black uppercase tracking-widest text-xs hover:border-black transition-all active:scale-95 shadow-lg">
                View Pricing
              </button>
            </div>
          </div>

          <div className="absolute bottom-8 sm:bottom-16 left-1/2 -translate-x-1/2 animate-bounce text-gray-200">
            <ArrowDown size={32} strokeWidth={1.5} className="w-8 h-8 sm:w-10 sm:h-10" aria-hidden="true" focusable="false" />
          </div>
        </section>

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




        {/* Footer Teaser */}
        <footer className="bg-black text-white py-24 sm:py-40 text-center px-4 overflow-hidden relative">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:18px_18px]"></div>
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-4xl md:text-7xl lg:text-8xl font-black mb-6 sm:mb-10 tracking-tighter uppercase leading-none">The Future <br className="hidden sm:block" /> is Cooperative.</h2>
            <p className="text-base sm:text-xl text-gray-300 mb-10 sm:mb-14 font-medium max-w-xl mx-auto">Digitize your operations in minutes. No complex hardware, no massive upfront costs.</p>
            <button className="px-10 sm:px-14 py-5 sm:py-7 bg-red-600 text-white rounded-full font-black uppercase tracking-widest text-lg sm:text-xl hover:bg-red-700 transition-all shadow-[0_20px_50px_rgba(220,38,38,0.3)] active:scale-95">
              Start Your Trial
            </button>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
