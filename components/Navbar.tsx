
import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Zap, ArrowUpRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className={`fixed top-0 left-0 right-0 z-[100] px-4 sm:px-6 lg:px-10 transition-all duration-700 ease-out ${isScrolled ? 'pt-4' : 'pt-8'}`}>
      <nav 
        className={`mx-auto max-w-7xl h-16 sm:h-20 flex items-center justify-between px-5 sm:px-10 rounded-full border transition-all duration-500 ${
          isScrolled 
          ? 'bg-white/90 backdrop-blur-2xl border-white/50 shadow-2xl' 
          : 'bg-white/40 backdrop-blur-md border-white/20 shadow-sm'
        }`}
      >
        
        {/* Interactive Logo */}
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
           <div className="w-10 h-10 rounded-2xl bg-black flex items-center justify-center text-white group-hover:bg-red-600 transition-all duration-500 shadow-xl group-hover:rotate-12 group-hover:scale-110">
             <Zap size={20} fill="currentColor" strokeWidth={0} />
           </div>
           <span className="text-xl font-black text-gray-900 tracking-tighter uppercase hidden sm:block">SaccoSaaS</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10">
           {['Features', 'Process', 'Team', 'App'].map((item) => (
             <a 
               key={item}
               href={`#${item.toLowerCase()}`} 
               className="text-[11px] font-black text-gray-400 hover:text-black uppercase tracking-[0.2em] transition-all hover:-translate-y-0.5"
             >
               {item}
             </a>
           ))}
        </div>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-3">
           <button className="hidden sm:flex bg-black text-white text-[11px] font-black px-8 py-3.5 rounded-full uppercase tracking-widest items-center gap-2 hover:bg-red-600 transition-all duration-500 shadow-xl hover:shadow-red-500/30 active:scale-95">
             Get Started
             <ArrowUpRight size={14} strokeWidth={3} />
           </button>

           <button
             onClick={toggleMobileMenu}
             className="p-3 text-gray-900 bg-white/50 border border-white/50 rounded-full hover:bg-white transition-all shadow-sm active:scale-90"
           >
             {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
           </button>
        </div>
      </nav>

      {/* Modern Mobile Menu */}
      <div 
        className={`absolute top-28 left-4 right-4 bg-white/95 backdrop-blur-3xl rounded-[3.5rem] p-10 shadow-2xl border border-white/20 lg:hidden flex flex-col gap-6 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0 scale-100 visible' : 'opacity-0 translate-y-[-20px] scale-95 invisible'
        }`}
      >
           {['Features', 'Process', 'Team', 'App'].map((item) => (
             <a 
               key={item}
               href={`#${item.toLowerCase()}`} 
               onClick={toggleMobileMenu} 
               className="text-3xl font-black text-gray-900 py-4 border-b border-gray-50 flex items-center justify-between group"
             >
               {item} 
               <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-red-500 group-hover:text-white transition-all duration-300">
                  <ArrowRight size={24} />
               </div>
             </a>
           ))}
           <button className="bg-black text-white w-full py-6 rounded-3xl font-black text-xl flex justify-center items-center gap-4 shadow-2xl mt-4 active:scale-95 transition-transform hover:bg-red-600">
             Try For Free
             <Zap size={24} fill="currentColor" />
           </button>
      </div>
    </div>
  );
};

export default Navbar;
