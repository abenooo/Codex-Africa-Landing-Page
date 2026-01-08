
import React from 'react';

const partners = [
  { 
    alt: "Commercial Bank of Ethiopia", 
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Commercial_Bank_of_Ethiopia_logo.png/512px-Commercial_Bank_of_Ethiopia_logo.png" 
  },
  { 
    alt: "Telebirr", 
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Telebirr_logo.png/512px-Telebirr_logo.png" 
  },
  { 
    alt: "Awash Bank", 
    src: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/Awash_Bank_logo.png/220px-Awash_Bank_logo.png" 
  },
  { 
    alt: "Dashen Bank", 
    src: "https://upload.wikimedia.org/wikipedia/en/thumb/1/14/Dashen_Bank_logo.png/220px-Dashen_Bank_logo.png" 
  },
  { 
    alt: "M-Pesa", 
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/M-Pesa_Logo.svg/512px-M-Pesa_Logo.svg.png" 
  },
  { 
    alt: "Mastercard", 
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/512px-Mastercard-logo.svg.png" 
  },
  { 
    alt: "Visa", 
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Visa_2021.svg/512px-Visa_2021.svg.png" 
  },
  { 
    alt: "Bank of Abyssinia", 
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Bank_of_Abyssinia_logo.png/512px-Bank_of_Abyssinia_logo.png" 
  }
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
                  className="h-7 sm:h-12 w-auto object-contain pointer-events-none transition-all duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent && !parent.querySelector('.fallback-text')) {
                      const span = document.createElement('span');
                      span.className = "fallback-text text-lg sm:text-2xl font-black italic text-gray-400 lowercase tracking-tighter";
                      span.innerText = partner.alt;
                      parent.appendChild(span);
                    }
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
