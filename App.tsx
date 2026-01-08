
import React from 'react';
import Navbar from './components/Navbar';
import ProcessTimeline from './components/ProcessTimeline';
import FeaturesStack from './components/FeaturesStack';
import WorkflowGrid from './components/WorkflowGrid';
import AppDownload from './components/AppDownload';
import TeamSection from './components/TeamSection';
import { ArrowDown, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-gray-900 font-sans selection:bg-red-500 selection:text-white overflow-x-hidden">
      <Navbar />

      <main>
        {/* Modern Hero */}
        <section className="relative h-screen flex flex-col justify-center items-center px-4 text-center">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-40"></div>
          
          <div className="max-w-6xl mx-auto space-y-12 relative z-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-3 rounded-full border border-white bg-white/60 backdrop-blur px-5 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-gray-600 shadow-xl"
            >
              <Zap size={14} className="text-red-500" fill="currentColor" />
              Revolutionizing Sacco Management
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            </motion.div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-gray-900 leading-[0.82]">
              Elevate Your <br/>
              <span className="text-gray-400">Sacco Experience.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-semibold">
              The only SaaS platform built specifically for the modern cooperative economy. Secure, transparent, and built to scale.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <button className="px-12 py-5 bg-black text-white rounded-full font-black uppercase tracking-widest text-xs hover:bg-red-600 transition-all shadow-[0_20px_40px_rgba(0,0,0,0.2)] active:scale-95">
                Join Now Free
              </button>
              <button className="px-12 py-5 bg-white text-gray-900 border-2 border-gray-100 rounded-full font-black uppercase tracking-widest text-xs hover:border-black transition-all active:scale-95 shadow-lg">
                View Pricing
              </button>
            </div>
          </div>

          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 animate-bounce text-gray-200">
            <ArrowDown size={40} strokeWidth={1.5} />
          </div>
        </section>

        {/* Sections with proper IDs for Nav */}
        <section id="process" className="relative">
          <ProcessTimeline />
        </section>

        <section id="features" className="relative">
          <FeaturesStack />
        </section>

        <section className="relative">
          <WorkflowGrid />
        </section>

        <section id="team" className="relative">
          <TeamSection />
        </section>

        <section id="app" className="relative">
          <AppDownload />
        </section>
        
        {/* Footer Teaser */}
        <section className="bg-black text-white py-40 text-center px-4 overflow-hidden relative">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            <div className="max-w-4xl mx-auto relative z-10">
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-10 tracking-tighter uppercase leading-none">The Future <br/> is Cooperative.</h2>
                <p className="text-xl text-gray-400 mb-14 font-medium max-w-xl mx-auto">Digitize your operations in minutes. No complex hardware, no massive upfront costs.</p>
                <button className="px-14 py-7 bg-red-600 text-white rounded-full font-black uppercase tracking-widest text-xl hover:bg-red-700 transition-all shadow-[0_20px_50px_rgba(220,38,38,0.3)] active:scale-95">
                    Start Your Trial
                </button>
            </div>
        </section>
      </main>
    </div>
  );
}

export default App;
