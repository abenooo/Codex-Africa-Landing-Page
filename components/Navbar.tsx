
import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 px-4 ${isScrolled ? 'pt-4' : 'pt-6'}`}>
      <nav 
        className={`bg-white/80 backdrop-blur-2xl border border-gray-200/50 rounded-full pl-6 pr-2 py-2 shadow-sm hover:shadow-xl transition-all duration-500 max-w-5xl w-full flex items-center justify-between`}
      >
        
        {/* Logo Section */}
        <div className="flex items-center gap-2.5 cursor-pointer select-none group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
           {/* Custom Logo Icon */}
           <div className="flex gap-[3px] items-end h-6 pb-1">
             <div className="w-[5px] h-5 bg-black -skew-x-[20deg] rounded-[1px] group-hover:bg-red-500 transition-colors"></div>
             <div className="w-[5px] h-5 bg-black -skew-x-[20deg] rounded-[1px] group-hover:bg-red-500 transition-colors delay-75"></div>
             <div className="w-[6px] h-[6px] bg-red-500 rounded-full mb-[1px] group-hover:scale-125 transition-transform"></div>
           </div>
           <span className="text-xl font-bold text-gray-900 tracking-tight">SaccoSaaS</span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
           <a href="#features" className="text-[14px] font-semibold text-gray-600 hover:text-black transition-colors">
             Features
           </a>
           <a href="#team" className="text-[14px] font-semibold text-gray-600 hover:text-black transition-colors">
             Team
           </a>
           <a href="#download" className="text-[14px] font-semibold text-gray-600 hover:text-black transition-colors">
             App
           </a>
           <a href="#" className="flex items-center gap-2 text-[14px] font-semibold text-gray-600 hover:text-black transition-colors">
             Pricing
             <span className="bg-red-500 text-white text-[9px] font-black px-1.5 py-0.5 rounded-full leading-none tracking-tighter">HOT</span>
           </a>
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex">
           <button className="bg-black text-white text-[14px] font-bold px-6 py-2.5 rounded-full flex items-center gap-2 hover:bg-red-600 transition-all duration-300 group shadow-lg shadow-black/5 hover:shadow-red-500/20">
             Try For Free
             <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/40 transition-colors">
               <ArrowRight size={12} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
             </div>
           </button>
        </div>

         {/* Mobile Menu Toggle */}
        <div className="lg:hidden pr-2">
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-gray-900 hover:bg-gray-100 rounded-full transition-colors"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`absolute top-24 left-4 right-4 bg-white/95 backdrop-blur-xl rounded-[2.5rem] p-8 shadow-2xl border border-gray-100 flex flex-col gap-6 lg:hidden origin-top transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${isMobileMenuOpen ? 'scale-100 opacity-100 visible' : 'scale-95 opacity-0 invisible translate-y-[-20px]'}`}
      >
           <a href="#features" onClick={toggleMobileMenu} className="text-xl font-bold text-gray-900 py-3 border-b border-gray-50 flex items-center justify-between">
             Features <ArrowRight size={18} className="text-gray-300" />
           </a>
           <a href="#team" onClick={toggleMobileMenu} className="text-xl font-bold text-gray-900 py-3 border-b border-gray-50 flex items-center justify-between">
             Our Team <ArrowRight size={18} className="text-gray-300" />
           </a>
           <a href="#download" onClick={toggleMobileMenu} className="text-xl font-bold text-gray-900 py-3 border-b border-gray-50 flex items-center justify-between">
             Mobile App <ArrowRight size={18} className="text-gray-300" />
           </a>
           <a href="#" onClick={toggleMobileMenu} className="text-xl font-bold text-gray-900 py-3 border-b border-gray-50 flex justify-between items-center">
             Pricing <span className="bg-red-500 text-white text-[10px] px-2 py-1 rounded-full">New</span>
           </a>
           <button className="bg-black text-white w-full py-4 rounded-2xl font-black text-lg flex justify-center items-center gap-3 shadow-xl active:scale-95 transition-transform">
             Get Started Free
             <ArrowRight size={20} />
           </button>
      </div>
    </div>
  );
};

export default Navbar;
