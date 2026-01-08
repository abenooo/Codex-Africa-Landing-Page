
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Download, 
  ChevronRight, 
  LayoutGrid, 
  Landmark, 
  Wallet, 
  Eye, 
  User, 
  Calculator, 
  TrendingUp, 
  Settings, 
  House, 
  History, 
  CreditCard,
  MessageCircle,
  PiggyBank,
  FileText,
  Clock
} from 'lucide-react';

const AppDownload: React.FC = () => {
  // Brand Color Constants
  const brandYellow = "#FFD700";
  const brandDarkYellow = "#E6BC00";

  return (
    <section className="bg-white py-24 sm:py-32 overflow-hidden" id="download">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Realistic Phone Mockup (Ethio Saccos Brand) */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Background decorative elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-radial-gradient from-yellow-100 to-transparent opacity-30 -z-10 blur-3xl"></div>
            
            {/* Phone Frame */}
            <motion.div 
              initial={{ opacity: 0, y: 50, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-[340px] h-[700px] bg-black rounded-[3.5rem] p-[12px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border-[3px] border-gray-800"
            >
              {/* Screen Content - Recreating User Image Pixel-Perfectly */}
              <div className="w-full h-full bg-[#FAFAFA] rounded-[2.8rem] overflow-hidden flex flex-col relative no-scrollbar overflow-y-auto">
                
                {/* 1. Yellow Header Section */}
                <div style={{ backgroundColor: brandYellow }} className="p-6 pt-12 pb-14 rounded-b-[3rem] shadow-sm relative">
                  <div className="flex justify-between items-center mb-6">
                    <div className="p-2.5 bg-white/25 rounded-2xl backdrop-blur-md cursor-pointer hover:bg-white/40 transition-colors">
                      <LayoutGrid size={22} className="text-white" />
                    </div>
                    <div className="flex flex-col items-center">
                       <span className="text-[10px] text-white/90 font-medium uppercase tracking-widest mb-0.5">Welcome back,</span>
                       <span className="text-lg font-extrabold text-white tracking-tight">Abenezer Kifle</span>
                    </div>
                    <div className="p-2.5 bg-white/25 rounded-2xl backdrop-blur-md cursor-pointer hover:bg-white/40 transition-colors">
                       <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center p-0.5">
                         <div style={{ backgroundColor: brandYellow }} className="w-full h-full rounded-full"></div>
                       </div>
                    </div>
                  </div>

                  {/* 2. Virtual Card Component */}
                  <div className="bg-gradient-to-br from-[#E6BC00] to-[#FFD700] p-6 rounded-3xl shadow-2xl border border-white/25 text-white relative overflow-hidden group">
                    {/* Gloss effect */}
                    <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[45deg] group-hover:left-full transition-all duration-1000"></div>
                    
                    <div className="flex justify-between items-start mb-8">
                       <div className="flex items-center gap-2.5">
                         <div className="w-7 h-7 bg-white/40 rounded-lg flex items-center justify-center font-black text-[11px] backdrop-blur-sm">C</div>
                         <span className="font-bold text-sm tracking-tight">Abenezer Kifle</span>
                       </div>
                       <Eye size={20} className="opacity-80" />
                    </div>
                    
                    <div className="mb-8 text-2xl tracking-[0.25em] font-mono opacity-80 select-none">
                      ****************
                    </div>

                    <div className="flex justify-between items-end">
                      <div className="space-y-0.5">
                        <p className="text-[10px] font-medium opacity-80 tracking-widest">1213123123123123</p>
                        <p className="text-[10px] font-black uppercase opacity-60">mainAccount</p>
                      </div>
                      <div className="text-right space-y-0.5">
                        <p className="text-[10px] font-black tracking-tight">ETHIO SACCOS</p>
                        <p className="text-[9px] opacity-70 font-medium">Nov 28, 2025 08:42</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Pagination Dots Styling */}
                  <div className="flex justify-center gap-1.5 mt-5">
                    <div className="w-5 h-2 bg-black rounded-full"></div>
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-black/10 rounded-full"></div>
                    ))}
                  </div>
                </div>

                {/* 3. Main Services Bar (Floating Overlap) */}
                <div className="px-5 -mt-6 mb-8 z-10">
                  <div className="bg-white rounded-[2rem] shadow-[0_15px_30px_-5px_rgba(0,0,0,0.05)] border border-gray-50 p-6 grid grid-cols-4 gap-4">
                    {[
                      { icon: PiggyBank, label: 'Saving', sub: 'Deposit', color: 'bg-orange-400' },
                      { icon: Landmark, label: 'Loan', sub: 'Apply', color: 'bg-yellow-400' },
                      { icon: Calculator, label: 'Pay', sub: 'Payment', color: 'bg-amber-400' },
                      { icon: History, label: 'View', sub: 'History', color: 'bg-yellow-500' }
                    ].map((item, i) => (
                      <div key={i} className="flex flex-col items-center gap-2 group cursor-pointer">
                        <div className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center text-white shadow-lg shadow-orange-100 group-hover:scale-110 transition-transform`}>
                          <item.icon size={22} strokeWidth={2.5} />
                        </div>
                        <div className="text-center">
                          <p className="text-[10px] font-black text-gray-800 tracking-tight">{item.label}</p>
                          <p className="text-[8px] text-gray-400 font-bold uppercase">{item.sub}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4. Secondary Services 4x2 Grid */}
                <div className="px-7 grid grid-cols-4 gap-x-5 gap-y-8 mb-10">
                   {[
                     { icon: User, label: 'Membership', sub: 'Info' },
                     { icon: Calculator, label: 'Loan', sub: 'Calculator' },
                     { icon: TrendingUp, label: 'Buy', sub: 'Shares' },
                     { icon: Wallet, label: 'Dividends', sub: 'Earnings' },
                     { icon: History, label: 'Apply', sub: 'Loan' },
                     { icon: FileText, label: 'Statements', sub: 'History' },
                     { icon: CreditCard, label: 'Payment', sub: 'Method' },
                     { icon: PiggyBank, label: 'Savings', sub: 'Deposit' }
                   ].map((item, i) => (
                     <div key={i} className="flex flex-col items-center gap-2 group cursor-pointer">
                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center border border-gray-100 shadow-sm text-gray-700 group-hover:bg-gray-50 transition-colors">
                          <item.icon size={20} />
                        </div>
                        <div className="text-center">
                          <p className="text-[9px] font-black text-gray-800 leading-tight">{item.label}</p>
                          <p className="text-[7px] text-gray-400 font-bold uppercase mt-0.5">{item.sub}</p>
                        </div>
                     </div>
                   ))}
                </div>

                {/* 5. Custom Ad Banner */}
                <div className="px-6 mb-10">
                  <div className="bg-[#FFFCEB] rounded-[2rem] p-5 border border-yellow-100 flex items-center justify-between overflow-hidden relative shadow-sm h-32">
                    <div className="relative z-10 max-w-[65%]">
                       <h4 className="text-[12px] font-black text-gray-900 leading-tight mb-1.5 uppercase tracking-tighter">Empowering SACCOs with Digital Solutions</h4>
                       <p className="text-[8px] text-gray-600 mb-3 font-medium">Transform your SACCO operations with our comprehensive digital platform for Ethiopia.</p>
                       <button className="bg-green-600 text-white text-[8px] px-4 py-1.5 rounded-lg font-black uppercase tracking-wider shadow-md active:scale-95 transition-transform">Get Started Today</button>
                    </div>
                    {/* Illustration/Image placeholder as seen in screenshot */}
                    <div className="absolute right-0 bottom-0 w-[45%] h-full">
                       <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=400&auto=format&fit=crop&q=60')] bg-cover opacity-20 grayscale"></div>
                       {/* People silhouettes overlay */}
                       <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#FFFCEB]/40 to-[#FFFCEB]"></div>
                    </div>
                  </div>
                </div>

                <div className="px-6 mb-6">
                   <h5 className="text-[11px] font-black text-gray-900 mb-4 tracking-tight">Additional Services</h5>
                   {/* Chat Floating Button from screenshot */}
                   <div className="absolute bottom-24 right-6 z-20">
                      <div className="w-12 h-12 bg-[#FFD700] rounded-2xl flex items-center justify-center text-gray-900 shadow-xl shadow-yellow-200 cursor-pointer hover:scale-110 transition-transform">
                        <MessageCircle size={22} fill="currentColor" strokeWidth={0} />
                      </div>
                   </div>
                </div>

                {/* 6. Custom Bottom Navigation Bar */}
                <div className="mt-auto bg-white border-t border-gray-100 px-8 py-5 flex justify-between items-center sticky bottom-0 z-30">
                  <div className="flex flex-col items-center gap-1 cursor-pointer group">
                    <Landmark size={20} className="text-gray-400 group-hover:text-yellow-500 transition-colors" />
                  </div>
                  <div className="flex flex-col items-center gap-1 cursor-pointer group">
                    <Wallet size={20} className="text-gray-400 group-hover:text-yellow-500 transition-colors" />
                  </div>
                  
                  {/* Central FAB-like button */}
                  <div className="relative -mt-14">
                    <div style={{ backgroundColor: brandYellow }} className="w-14 h-14 rounded-full border-[5px] border-[#FAFAFA] flex items-center justify-center text-gray-900 shadow-xl shadow-yellow-200 cursor-pointer active:scale-90 transition-all">
                      <House size={26} strokeWidth={2.5} />
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-center gap-1 cursor-pointer group">
                    <Clock size={20} className="text-gray-400 group-hover:text-yellow-500 transition-colors" />
                  </div>
                  <div className="flex flex-col items-center gap-1 cursor-pointer group">
                    <Settings size={20} className="text-gray-400 group-hover:text-yellow-500 transition-colors" />
                  </div>
                </div>
              </div>

              {/* Dynamic Island Hardware Detail */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-black rounded-3xl"></div>
            </motion.div>
          </div>

          {/* Right Side: Content Refined with Brand Colors */}
          <div className="flex flex-col gap-8 max-w-xl">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2"
            >
              <div style={{ backgroundColor: brandYellow }} className="p-1.5 rounded-lg text-white">
                <SmartphoneIcon size={18} />
              </div>
              <span className="text-sm font-black uppercase tracking-widest text-gray-900">Download apps</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-black tracking-tighter text-gray-900 leading-[0.95]"
            >
              Designed to work <br /> <span className="text-yellow-500">seamlessly</span> anywhere.
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-500 leading-relaxed font-medium"
            >
              Our mobile experience puts the full power of a bank in your pocket. Access your savings, manage loans, and track investments with the most intuitive SACCO interface ever built.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-5 pt-4"
            >
              <button className="bg-black text-white px-10 py-5 rounded-2xl font-black flex items-center gap-3 hover:bg-gray-800 transition-all shadow-2xl shadow-black/20 hover:-translate-y-1">
                Download Now
                <Download size={20} />
              </button>
              <button className="bg-white text-gray-900 border-2 border-gray-100 px-10 py-5 rounded-2xl font-black flex items-center gap-3 hover:border-yellow-400 hover:text-yellow-600 transition-all hover:-translate-y-1">
                Explore Demo
                <ChevronRight size={20} />
              </button>
            </motion.div>

            {/* Platform Badges with high fidelity */}
            <div className="flex flex-wrap gap-6 mt-12 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
               <div className="flex items-center gap-3 border border-gray-200 px-5 py-3 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" className="h-6" />
                  <div className="flex flex-col">
                    <span className="text-[8px] font-bold uppercase leading-none text-gray-400">Download on the</span>
                    <span className="text-sm font-black text-gray-900 leading-none mt-1">App Store</span>
                  </div>
               </div>
               <div className="flex items-center gap-3 border border-gray-200 px-5 py-3 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-8" />
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// Internal icon for the "Download Apps" tag
const SmartphoneIcon = ({ size, className }: { size: number; className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
    <path d="M12 18h.01" />
  </svg>
);

export default AppDownload;
