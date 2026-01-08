
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
  const brandYellow = "#FFD700";

  return (
    <section className="bg-white py-16 sm:py-32 overflow-hidden" id="app">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left Side: Realistic Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end order-2 lg:order-1">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-radial-gradient from-yellow-100 to-transparent opacity-30 -z-10 blur-3xl"></div>
            
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-[280px] sm:max-w-[340px] h-[600px] sm:h-[700px] bg-black rounded-[3rem] sm:rounded-[3.5rem] p-[10px] sm:p-[12px] shadow-2xl border-[2px] sm:border-[3px] border-gray-800"
            >
              {/* Screen Content */}
              <div className="w-full h-full bg-[#FAFAFA] rounded-[2.4rem] sm:rounded-[2.8rem] overflow-hidden flex flex-col relative no-scrollbar overflow-y-auto">
                <div style={{ backgroundColor: brandYellow }} className="p-5 sm:p-6 pt-10 sm:pt-12 pb-12 sm:pb-14 rounded-b-[2.5rem] sm:rounded-b-[3rem] shadow-sm relative">
                  <div className="flex justify-between items-center mb-6">
                    <LayoutGrid size={20} className="text-white" />
                    <span className="text-xs sm:text-lg font-extrabold text-white">Abenezer Kifle</span>
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full"></div>
                  </div>
                  <div className="bg-gradient-to-br from-[#E6BC00] to-[#FFD700] p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-xl border border-white/25 text-white">
                    <div className="flex justify-between items-start mb-6 sm:mb-8">
                       <span className="font-bold text-xs sm:text-sm">Main Account</span>
                       <Eye size={18} className="opacity-80" />
                    </div>
                    <div className="text-lg sm:text-2xl tracking-[0.2em] font-mono opacity-80 mb-6 sm:mb-8">**** **** **** 8842</div>
                    <div className="flex justify-between items-end text-[8px] sm:text-[10px] font-bold">
                      <span>ETHIO SACCOS</span>
                      <span className="opacity-70">11/28</span>
                    </div>
                  </div>
                </div>

                <div className="px-4 sm:px-5 -mt-6 mb-6 sm:mb-8 z-10">
                  <div className="bg-white rounded-[1.5rem] sm:rounded-[2rem] shadow-lg border border-gray-50 p-4 sm:p-6 grid grid-cols-4 gap-2 sm:gap-4">
                    {[
                      { icon: PiggyBank, color: 'bg-orange-400' },
                      { icon: Landmark, color: 'bg-yellow-400' },
                      { icon: Calculator, color: 'bg-amber-400' },
                      { icon: History, color: 'bg-yellow-500' }
                    ].map((item, i) => (
                      <div key={i} className={`w-10 h-10 sm:w-12 sm:h-12 ${item.color} rounded-full mx-auto flex items-center justify-center text-white`}>
                        <item.icon size={18} sm:size={22} />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="px-6 sm:px-7 grid grid-cols-4 gap-x-4 sm:gap-x-5 gap-y-6 sm:gap-y-8 mb-6 sm:mb-10">
                   {[User, Calculator, TrendingUp, Wallet, History, FileText, CreditCard, PiggyBank].map((Icon, i) => (
                     <div key={i} className="flex flex-col items-center">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center border border-gray-100 shadow-sm text-gray-700">
                          <Icon size={18} sm:size={20} />
                        </div>
                     </div>
                   ))}
                </div>

                <div className="mt-auto bg-white border-t border-gray-100 px-6 sm:px-8 py-3 sm:py-5 flex justify-between items-center sticky bottom-0 z-30">
                  <Landmark size={18} sm:size={20} className="text-gray-400" />
                  <div className="relative -mt-10 sm:-mt-14">
                    <div style={{ backgroundColor: brandYellow }} className="w-10 h-10 sm:w-14 sm:h-14 rounded-full border-[4px] sm:border-[5px] border-[#FAFAFA] flex items-center justify-center text-gray-900 shadow-lg">
                      <House size={20} sm:size={26} />
                    </div>
                  </div>
                  <Settings size={18} sm:size={20} className="text-gray-400" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Content */}
          <div className="flex flex-col gap-6 sm:gap-8 max-w-xl order-1 lg:order-2">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2"
            >
              <div style={{ backgroundColor: brandYellow }} className="p-1.5 rounded-lg text-white">
                <SmartphoneIcon size={18} />
              </div>
              <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-gray-900">Download apps</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter text-gray-900 leading-[1.0] sm:leading-[0.95]"
            >
              Designed to work <br /> <span className="text-yellow-500">seamlessly</span> anywhere.
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-gray-500 leading-relaxed font-medium"
            >
              Our mobile experience puts the full power of a bank in your pocket. Access your savings, manage loans, and track investments with the most intuitive SACCO interface ever built.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-5 pt-4"
            >
              <button className="bg-black text-white px-8 py-4 sm:px-10 sm:py-5 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-gray-800 transition-all shadow-xl">
                Download Now <Download size={20} />
              </button>
              <button className="bg-white text-gray-900 border-2 border-gray-100 px-8 py-4 sm:px-10 sm:py-5 rounded-2xl font-black flex items-center justify-center gap-3 hover:border-yellow-400 transition-all">
                Explore Demo <ChevronRight size={20} />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SmartphoneIcon = ({ size, className }: { size: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
    <path d="M12 18h.01" />
  </svg>
);

export default AppDownload;
