
import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Zap, ArrowUpRight, History, LayoutGrid, Users, Smartphone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
    <div className={`fixed top-0 left-0 right-0 z-[100] px-4 sm:px-6 lg:px-12 transition-all duration-700 ease-out ${isScrolled ? 'pt-4' : 'pt-10'}`}>
      <nav 
        className={`mx-auto max-w-5xl h-16 sm:h-20 flex items-center justify-between px-6 sm:px-10 rounded-full border transition-all duration-500 ${
          isScrolled 
          ? 'bg-white/95 backdrop-blur-2xl border-white/50 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)]' 
          : 'bg-white/40 backdrop-blur-md border-white/20 shadow-sm'
        }`}
      >
        
        {/* Logo Section */}
        <div 
          className="flex items-center gap-4 cursor-pointer group" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
           <div className="flex flex-col">
             <span className="text-xl font-black text-gray-900 tracking-tight leading-none uppercase whitespace-nowrap">Codex Africa</span>
           </div>
        </div>

        {/* Desktop Navigation - Centered & Icon-Free for a cleaner look on large media */}
        <div className="hidden lg:flex items-center gap-2">
           {[
             { label: 'Process', href: '#process' },
             { label: 'Team', href: '#team' },
             { label: 'App', href: '#app' },
             { label: 'Comparison', href: '#comparison' },
             { label: 'Value', href: '#value-delay' }
           ].map((item) => (
             <a 
               key={item.label}
               href={item.href} 
               className="px-6 py-2.5 rounded-full text-[11px] font-bold text-gray-500 hover:text-black uppercase tracking-[0.25em] transition-all hover:bg-gray-50/80 active:scale-95"
             >
               {item.label}
             </a>
           ))}
        </div>

        {/* Right Action Section */}
        <div className="flex items-center gap-4">
           {/* Desktop CTA */}
           <button className="hidden sm:flex bg-black text-white text-[10px] font-bold px-8 py-4 rounded-full uppercase tracking-widest items-center gap-3 hover:bg-red-600 transition-all duration-500 shadow-xl active:scale-95">
             Get Started
             <ArrowUpRight size={14} strokeWidth={3} />
           </button>

           {/* Mobile Menu Button - Standard behavior, hidden on LG+ */}
           <button
             onClick={toggleMobileMenu}
             className="lg:hidden p-3 text-gray-900 bg-white/50 border border-white/50 rounded-full hover:bg-white transition-all shadow-sm active:scale-90"
             aria-label="Toggle Menu"
           >
             {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
           </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="absolute top-28 left-4 right-4 bg-white/98 backdrop-blur-3xl rounded-[3rem] p-10 shadow-2xl border border-white/40 lg:hidden flex flex-col gap-5"
          >
               {[
                 { label: 'Process', href: '#process', icon: History },
                 { label: 'Team', href: '#team', icon: Users },
                 { label: 'App', href: '#app', icon: Smartphone },
                 { label: 'Comparison', href: '#comparison', icon: LayoutGrid },
                 { label: 'Value', href: '#value-delay', icon: Zap }
               ].map((item) => (
                 <a 
                   key={item.label}
                   href={item.href} 
                   onClick={toggleMobileMenu} 
                   className="text-3xl font-bold text-gray-900 py-4 border-b border-gray-50 flex items-center justify-between group"
                 >
                   <div className="flex items-center gap-5">
                      <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-500 group-hover:text-red-600 transition-colors">
                        <item.icon size={26} />
                      </div>
                      {item.label} 
                   </div>
                   <ArrowRight size={24} className="text-gray-300 group-hover:text-black transition-colors" />
                 </a>
               ))}
               <div className="pt-8">
                 <button className="bg-black text-white w-full py-6 rounded-[2rem] font-bold text-xl flex justify-center items-center gap-4 active:scale-95 transition-transform hover:bg-red-600 shadow-2xl shadow-red-500/10">
                   Get Started
                   <Zap size={22} fill="currentColor" />
                 </button>
               </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
