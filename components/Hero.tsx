
import React from 'react';
import { 
  LayoutDashboard, 
  CreditCard, 
  Receipt, 
  Settings,
  Plus,
  Search,
  ArrowUpRight,
  ChevronRight,
  Bell,
  Users,
  Briefcase,
  TrendingUp
} from 'lucide-react';

const MockupInternal: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center perspective-3000 transition-all duration-700 select-none">
      
      {/* Desktop Monitor Mockup (iMac-style) - Responsive scaling */}
      <div 
        className="relative transform-gpu z-10 scale-[0.25] sm:scale-[0.35] md:scale-[0.5] lg:scale-[0.65] xl:scale-[0.85]"
      >
        {/* Monitor Screen with integrated chin */}
        <div className="relative w-[800px] lg:w-[900px]">
          {/* Screen + Bezel */}
          <div className="relative bg-gray-900 rounded-t-[2rem] shadow-[0_50px_120px_rgba(0,0,0,0.5)] border-t-[12px] border-l-[12px] border-r-[12px] border-gray-900">
            {/* Screen Content */}
            <div className="relative bg-white overflow-hidden rounded-t-[1rem]">
              {/* Browser Chrome */}
              <div className="flex items-center justify-between bg-gray-50 px-5 py-3 border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-400" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>
                <div className="flex-1 mx-6">
                  <div className="bg-white border border-gray-200 rounded-lg px-4 py-1.5 text-xs font-medium text-gray-500 text-center">
                    app.codexafrica.com/dashboard
                  </div>
                </div>
                <div className="w-16" />
              </div>
              
              {/* Dashboard Screenshot */}
              <div className="w-full bg-white overflow-hidden">
                <img
                  src="/web.jpeg"
                  alt="Codex Africa Dashboard"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Chin (bottom bezel) - no gap */}
          <div className="w-full h-8 bg-gradient-to-b from-gray-800 to-gray-900 border-b-[12px] border-l-[12px] border-r-[12px] border-gray-900 rounded-b-[2rem]" />
        </div>

        {/* Monitor Stand */}
        <div className="flex flex-col items-center">
          {/* Stand neck */}
          <div className="w-4 h-12 bg-gradient-to-b from-gray-700 to-gray-800" />
          {/* Stand base */}
          <div className="w-48 h-3 rounded-full bg-gradient-to-b from-gray-700 to-gray-800 shadow-[0_10px_30px_rgba(0,0,0,0.4)]" />
        </div>
      </div>


      {/* Mobile Mockup - Positioned to the far right with gap */}
      <div 
        className="absolute right-0 bottom-4 sm:bottom-8 lg:bottom-16 z-50 scale-[0.25] sm:scale-[0.35] md:scale-[0.5] lg:scale-[0.65] xl:scale-[0.85] translate-x-[20%] sm:translate-x-[25%] md:translate-x-[30%] lg:translate-x-[35%] xl:translate-x-[40%]"
      >
        <div className="w-[260px] lg:w-[300px] h-[560px] lg:h-[640px] bg-black rounded-[48px] lg:rounded-[56px] border-[12px] lg:border-[16px] border-[#18181b] shadow-[0_40px_100px_rgba(0,0,0,0.8)] overflow-hidden">
          <img
            src="/mobile.jpg"
            alt="Codex Africa Mobile App"
            className="w-full h-full object-cover"
          />
          {/* Original mockup content replaced with real screenshot */}
          <div className="hidden w-full h-full bg-white flex flex-col">
            <div className="h-10 w-full flex justify-center items-end pb-2 bg-white">
              <div className="h-6 w-28 lg:w-32 bg-black rounded-full shadow-inner"></div>
            </div>
            <div className="px-6 pt-6 flex justify-between items-center">
              <div className="w-10 h-10 bg-black rounded-2xl flex items-center justify-center shadow-xl">
                  <div className="w-5 h-5 bg-[#e2ff31] rounded-md transform rotate-45"></div>
              </div>
              <div className="text-right">
                  <div className="text-[9px] font-black text-gray-300 uppercase tracking-widest">Available</div>
                  <div className="text-2xl font-black text-black leading-none">$8,241</div>
              </div>
            </div>
            <div className="px-6 py-6">
              <div className="w-full aspect-[1.58/1] bg-[#111] rounded-[24px] lg:rounded-[28px] p-5 lg:p-6 flex flex-col justify-between text-white shadow-xl relative overflow-hidden">
                  <div className="flex justify-between items-start z-10">
                    <span className="text-sm lg:text-base font-black italic tracking-tighter">ramp</span>
                    <div className="w-10 h-6 bg-white/10 rounded-lg border border-white/20 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-white/20"></div>
                      <div className="w-4 h-4 rounded-full bg-white/20 -ml-2"></div>
                    </div>
                  </div>
                  <div className="z-10">
                    <div className="text-[8px] font-bold text-gray-500 uppercase tracking-widest mb-1">Corporate</div>
                    <div className="text-xs lg:text-base font-mono tracking-[0.2em]">•••• 9904</div>
                  </div>
              </div>
            </div>
            <div className="flex-1 bg-white px-6 pt-8 rounded-t-[40px] shadow-[0_-20px_40px_rgba(0,0,0,0.03)] overflow-hidden">
              <div className="flex justify-between items-center mb-6">
                  <h4 className="font-black text-base lg:text-lg tracking-tight text-black">Latest activity</h4>
                  <ChevronRight size={18} className="text-gray-400" />
              </div>
              <div className="space-y-4 lg:space-y-6">
                  {[
                    { name: 'Zoom Video', price: '-$14.99', color: 'bg-blue-50 text-blue-600' },
                    { name: 'Uber Business', price: '-$32.10', color: 'bg-gray-50 text-black' },
                    { name: 'Apple Store', price: '-$1,299', color: 'bg-indigo-50 text-indigo-600' }
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center group">
                      <div className="flex items-center gap-4">
                          <div className={`w-10 h-10 lg:w-12 lg:h-12 ${item.color} rounded-xl flex items-center justify-center text-[10px] font-black`}>{item.name[0]}</div>
                          <div>
                            <div className="text-[11px] lg:text-xs font-black text-black leading-none mb-1">{item.name}</div>
                            <div className="text-[9px] text-gray-400 font-bold uppercase tracking-tight">Today</div>
                          </div>
                      </div>
                      <div className="text-[11px] lg:text-xs font-black text-black">{item.price}</div>
                    </div>
                  ))}
              </div>
            </div>
            <div className="h-20 lg:h-24 bg-white border-t border-gray-50 flex justify-around items-center px-6 lg:px-8 pb-4">
              {[LayoutDashboard, CreditCard, Plus, ArrowUpRight, Settings].map((Icon, i) => (
                <div key={i} className={`p-2.5 rounded-xl transition-all duration-300 ${i === 2 ? 'bg-[#e2ff31] text-black shadow-lg shadow-[#e2ff31]/40 -translate-y-4 scale-110' : 'text-gray-200 hover:text-black'}`}>
                  <Icon size={20} strokeWidth={2.5} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

 const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-24 pt-24 pb-12 sm:pt-20 sm:pb-16 overflow-hidden">
      <div className="grid grid-cols-1 xl:grid-cols-[1fr_2fr] gap-12 sm:gap-8 xl:gap-8 items-center max-w-7xl mx-auto w-full">
        
        {/* Column 1: Text & CTA (1/3 width) */}
        <div className="z-20 order-1 xl:order-1 text-center xl:text-left">
          {/* Eyebrow badge */}
          <div className="flex items-center justify-center xl:justify-start gap-3 mb-6 sm:mb-8">
            <span className="text-red-600 font-bold tracking-widest text-xs uppercase">// Codex Africa //</span>
          </div>

          {/* Headline */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-[1.15] mb-4">
            Modern SACCO software <br className="hidden sm:block" /> for Africa
          </h1>

          {/* Sub-headline */}
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-sm sm:max-w-md mx-auto xl:mx-0 mb-8 sm:mb-10">
            Launch member onboarding, savings, loans, and mobile banking from one secure platform — in minutes, not months.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center xl:items-start justify-center xl:justify-start gap-4">
            <a
              href="#app"
              className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-black px-5 sm:px-7 py-3 sm:py-4 text-xs sm:text-sm font-black uppercase tracking-widest text-white shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-all hover:bg-red-600 hover:shadow-[0_20px_60px_rgba(220,38,38,0.4)] active:scale-95 whitespace-nowrap"
            >
              Request demo
              <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="#comparison"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-white px-5 sm:px-7 py-3 sm:py-4 text-xs sm:text-sm font-black uppercase tracking-widest text-gray-900 shadow-sm ring-2 ring-gray-200 transition-all hover:ring-gray-900 active:scale-95 whitespace-nowrap"
            >
              View pricing
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center xl:justify-start gap-4 sm:gap-6 text-xs sm:text-sm font-bold text-gray-500">
            <div className="flex items-center gap-2 whitespace-nowrap">
              <svg className="h-5 w-5 flex-shrink-0 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>No setup fees</span>
            </div>
            <div className="flex items-center gap-2 whitespace-nowrap">
              <svg className="h-5 w-5 flex-shrink-0 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Bank-grade security</span>
            </div>
            <div className="flex items-center gap-2 whitespace-nowrap">
              <svg className="h-5 w-5 flex-shrink-0 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Launch in minutes</span>
            </div>
          </div>
        </div>

        {/* Right Column: Integrated High Fidelity 3D Mockup */}
        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[650px] xl:h-[800px] w-full flex items-center justify-center order-2 xl:order-2 overflow-hidden xl:overflow-visible">
           <MockupInternal />
        </div>
      </div>
      
      {/* Dynamic Background Accents */}
      <div className="absolute -top-24 -right-24 w-[600px] h-[600px] bg-blue-500/10 blur-[180px] -z-10 rounded-full"></div>
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/5 blur-[150px] -z-10 rounded-full"></div>
    </section>
  );
};
export default Hero;
