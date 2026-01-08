
import React from 'react';

const makeLogoDataUri = (label: string) =>
  `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='240' height='64'>` +
      `<rect width='100%' height='100%' fill='white'/>` +
      `<text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='#6b7280' font-family='ui-sans-serif,system-ui' font-size='14' font-weight='700'>${label}</text>` +
    `</svg>`
  )}`;

const partners = [
  { alt: 'Commercial Bank of Ethiopia', src: makeLogoDataUri('Commercial Bank of Ethiopia') },
  { alt: 'Telebirr', src: makeLogoDataUri('Telebirr') },
  { alt: 'Awash Bank', src: makeLogoDataUri('Awash Bank') },
  { alt: 'Dashen Bank', src: makeLogoDataUri('Dashen Bank') },
  { alt: 'M-Pesa', src: makeLogoDataUri('M-Pesa') },
  { alt: 'Mastercard', src: makeLogoDataUri('Mastercard') },
  { alt: 'Visa', src: makeLogoDataUri('Visa') },
  { alt: 'Bank of Abyssinia', src: makeLogoDataUri('Bank of Abyssinia') }
];

// Duplicate for seamless infinite loop
const duplicatedPartners = [...partners, ...partners, ...partners, ...partners];

const LogoCarousel: React.FC = () => {
  return (
    <div className="bg-white py-12 sm:py-20 border-y border-gray-100 overflow-hidden group relative select-none">
      {/* Header text */}
      <div className="max-w-7xl mx-auto px-4 mb-10 sm:mb-14">
        <p className="text-sm sm:text-lg font-medium text-gray-900 text-center tracking-tight">
          Trusted by the world’s most innovative teams
        </p>
      </div>

      <div className="relative flex items-center">
        {/* 
          The Marquee Container
          Speed is set to a crisp "glide" (70s)
        */}
        <div className="marquee-wrapper flex whitespace-nowrap items-center">
          {duplicatedPartners.map((partner, index) => (
            <div 
              key={index} 
              className="flex items-center px-8 sm:px-16 border-r border-gray-100 last:border-r-0 min-w-[150px] sm:min-w-[240px] justify-center"
            >
              <div className="flex items-center transition-all duration-700 grayscale hover:grayscale-0 opacity-40 hover:opacity-100">
                <img
                  src={partner.src}
                  alt={partner.alt}
                  width={160}
                  height={48}
                  loading="lazy"
                  decoding="async"
                  className="h-7 sm:h-12 w-auto object-contain pointer-events-none transition-all duration-500"
                  onError={(e) => {
                    const target = e.currentTarget;
                    // Avoid DOM mutations / forced reflow: swap to a tiny inline placeholder.
                    target.onerror = null;
                    target.src = `data:image/svg+xml,${encodeURIComponent(
                      `<svg xmlns='http://www.w3.org/2000/svg' width='160' height='48'>` +
                        `<rect width='100%' height='100%' fill='#f3f4f6'/>` +
                        `<text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='#9ca3af' font-family='ui-sans-serif,system-ui' font-size='12'>${partner.alt}</text>` +
                      `</svg>`
                    )}`;
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* High-Fidelity Soft Fades */}
        <div className="absolute inset-y-0 left-0 w-24 sm:w-64 bg-gradient-to-r from-white via-white/95 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-24 sm:w-64 bg-gradient-to-l from-white via-white/95 to-transparent z-10 pointer-events-none"></div>
      </div>
      
      <style>{`
        .marquee-wrapper {
          --duration: 70s;
          display: flex;
          width: max-content;
          animation: marquee-glide var(--duration) linear infinite;
          will-change: transform;
        }

        @keyframes marquee-glide {
          from { transform: translateX(0); }
          to { transform: translateX(-25%); } /* Adjusted for 4x duplication */
        }

        @media (max-width: 640px) {
          .marquee-wrapper {
            --duration: 40s;
          }
        }
      `}</style>

     
    </div>
  );
};

export default LogoCarousel;
