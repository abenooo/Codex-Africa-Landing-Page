
import React from 'react';
import Navbar from './components/Navbar';
import ProcessTimeline from './components/ProcessTimeline';
import FeaturesStack from './components/FeaturesStack';
import WorkflowGrid from './components/WorkflowGrid';
import AppDownload from './components/AppDownload';
import TeamSection from './components/TeamSection';
import { ArrowDown } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-gray-900 font-sans selection:bg-red-100 selection:text-red-900">
      <Navbar />

      <main>
        {/* Simple Hero Section to allow scrolling */}
        <section className="relative h-screen flex flex-col justify-center items-center px-4 text-center overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
          
          <div className="max-w-4xl mx-auto space-y-8 relative z-10">
            <div className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              <span className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
                Sacco SaaS v2.0 is live
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900">
              Modern Banking for <br/>
              <span className="bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">Forward Thinking</span> Saccos.
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Digitize your cooperative operations with a secure, cloud-native platform designed for growth, transparency, and member happiness.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <button className="px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                Start Free Trial
              </button>
              <button className="px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-full font-medium hover:border-gray-400 transition-all">
                View Pricing
              </button>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-400">
            <ArrowDown size={24} />
          </div>
        </section>

        {/* The Process Section (Sticky & Scroll-Triggered) */}
        <ProcessTimeline />

        {/* The Features Stacking Section */}
        <FeaturesStack />

        {/* The Workflow Grid Section */}
        <WorkflowGrid />

        {/* Team Section (New) */}
        <TeamSection />

        {/* App Download Section */}
        <AppDownload />
        
        {/* Simple Footer Teaser */}
        <section className="bg-black text-white py-24 text-center px-4 overflow-hidden relative">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            <div className="max-w-4xl mx-auto relative z-10">
                <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to modernize your SACCO?</h2>
                <p className="text-xl text-gray-400 mb-12">Join 100+ forward-thinking SACCOs scaling with SaccoSaaS.</p>
                <button className="px-10 py-5 bg-red-600 text-white rounded-full font-bold text-lg hover:bg-red-700 transition-all shadow-2xl shadow-red-600/20">
                    Get Started Today
                </button>
            </div>
        </section>
      </main>
    </div>
  );
}

export default App;
