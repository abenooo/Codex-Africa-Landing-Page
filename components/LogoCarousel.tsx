
import React from 'react';
import { 
  Zap, 
  Sparkles, 
  Box, 
  Activity, 
  Waves, 
  ZapOff,
  CircleDot
} from 'lucide-react';

const partners = [
  { name: 'ZenZap', icon: Zap, color: 'text-amber-500' },
  { name: 'sparkle', icon: Sparkles, color: 'text-indigo-500' },
  { name: 'LumLabs', icon: Box, color: 'text-gray-900' },
  { name: 'Pulse', icon: Activity, color: 'text-rose-500' },
  { name: 'techtide', icon: Waves, color: 'text-blue-600' },
  { name: 'innovio', icon: CircleDot, color: 'text-emerald-500' },
  { name: 'flashpay', icon: ZapOff, color: 'text-orange-500' }
];

// Duplicate for seamless infinite loop
const duplicatedPartners = [...partners, ...partners, ...partners, ...partners, ...partners];

const LogoCarousel: React.FC = () => {
  return (
    <div className="bg-white py-16 sm:py-20 border-y border-gray-100 overflow-hidden group relative select-none">
      {/* Header text */}
      <div className="max-w-7xl mx-auto px-4 mb-14">
        <p className="text-sm sm:text-lg font-medium text-gray-900 text-center tracking-tight">
          Trusted by the world’s most innovative teams
        </p>
      </div>

      <div className="relative flex items-center">
        {/* 
          The Marquee Container
          Speed increased by 10% (80s -> 72s)
        */}
        <div className="marquee-wrapper flex whitespace-nowrap items-center">
          {duplicatedPartners.map((partner, index) => (
            <div 
              key={index} 
              className="flex items-center group/item transition-all duration-700 px-10 sm:px-16 border-r border-gray-100 last:border-r-0"
            >
              <div className="flex items-center gap-3 grayscale group-hover/item:grayscale-0 transition-all duration-500 opacity-40 group-hover/item:opacity-100">
                <partner.icon size={24} className={partner.color} />
                <span className="text-xl sm:text-2xl font-black tracking-tighter text-gray-900 lowercase italic">
                  {partner.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Premium Soft Fades */}
        <div className="absolute inset-y-0 left-0 w-32 sm:w-64 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 sm:w-64 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
      </div>
      
      <style>{`
        .marquee-wrapper {
          --duration: 72s; /* Increased speed by 10% from original 80s */
          display: flex;
          width: max-content;
          animation: marquee-glide var(--duration) linear infinite;
          will-change: transform;
        }

        @keyframes marquee-glide {
          from { transform: translateX(0); }
          to { transform: translateX(-20%); } /* Based on 5x duplication */
        }

        /* Hover effect removed as per request */

        /* Handle responsive speeds for shorter screen widths */
        @media (max-width: 640px) {
          .marquee-wrapper {
            --duration: 45s;
          }
        }
      `}</style>

      {/* Modern minimal dots */}
      <div className="mt-14 flex justify-center gap-1.5 opacity-10">
        <div className="w-1 h-1 rounded-full bg-black"></div>
        <div className="w-1 h-1 rounded-full bg-black"></div>
        <div className="w-1 h-1 rounded-full bg-black"></div>
      </div>
    </div>
  );
};

export default LogoCarousel;
