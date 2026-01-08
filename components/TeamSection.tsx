
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { TeamMember } from '../types';

const originalMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Matyas Abera',
    role: 'Co-Founder • Business Analyst',
    image: '/maty.png'
  },
  {
    id: '2',
    name: 'Abenezer Kifle',
    role: 'Founder • Full-Stack Developer',
    image: '/abenezer.png'
  },
  {
    id: '3',
    name: 'Daniel Lee',
    role: 'Financial & Growth Advisor',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '4',
    name: 'Sarah Mitchell',
    role: 'Lead Consultant',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop'
  }
];

// Triplicate the array for seamless infinite looping
const loopedMembers = [...originalMembers, ...originalMembers, ...originalMembers];

const TeamSection: React.FC = () => {
  const [itemsVisible, setItemsVisible] = useState(4);
  const [currentIndex, setCurrentIndex] = useState(originalMembers.length);
  const [isAnimating, setIsAnimating] = useState(false);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Responsive Breakpoints
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 640) setItemsVisible(1);
      else if (w < 768) setItemsVisible(2);
      else if (w < 1024) setItemsVisible(3);
      else setItemsVisible(4); // Shows 4 cards as per screenshot
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const moveSlide = useCallback((newIndex: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(newIndex);
  }, [isAnimating]);

  const handleNext = useCallback(() => moveSlide(currentIndex + 1), [currentIndex, moveSlide]);
  const handlePrev = useCallback(() => moveSlide(currentIndex - 1), [currentIndex, moveSlide]);

  const handleTransitionEnd = () => {
    setIsAnimating(false);
    // Seamless jump
    if (currentIndex >= originalMembers.length * 2) {
      setCurrentIndex(currentIndex - originalMembers.length);
    } else if (currentIndex <= originalMembers.length - 1) {
      setCurrentIndex(currentIndex + originalMembers.length);
    }
  };

  useEffect(() => {
    autoPlayRef.current = setInterval(handleNext, 6000);
    return () => { if (autoPlayRef.current) clearInterval(autoPlayRef.current); };
  }, [handleNext]);

  const resetAutoPlay = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(handleNext, 6000);
  };

  // The translation percentage is relative to the items container
  // Each item takes up (100 / itemsVisible)% of the viewport width.
  const itemWidthPercent = 100 / itemsVisible;
  const translateX = -(currentIndex * itemWidthPercent);

  return (
    <section className="bg-white py-24 sm:py-32 overflow-hidden" id="team">
      <div className="mx-auto max-w-[100rem] px-4 sm:px-6 lg:px-8">
        
        {/* Header Section: Exact match for the screenshot */}
        <div className="text-center mb-16 space-y-6">
          <div className="flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#1A4D4D]"></span>
            <span className="text-sm font-medium text-[#1A4D4D] tracking-wide">Our team</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-[#1A4D4D] tracking-tight max-w-4xl mx-auto leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
            Meet the experts behind your <br /> business success
          </h2>
        </div>

        {/* Carousel Viewport */}
        <div className="relative mb-12 overflow-hidden">
          <motion.div 
            className="flex"
            animate={{ x: `${translateX}%` }}
            onAnimationComplete={handleTransitionEnd}
            transition={isAnimating ? { 
              duration: 0.8,
              ease: [0.32, 0.72, 0, 1]
            } : { duration: 0 }}
          >
            {loopedMembers.map((member, idx) => (
              <div
                key={`${member.id}-${idx}`}
                className="px-2.5 shrink-0"
                style={{ width: `${itemWidthPercent}%` }}
              >
                <div className="relative h-[500px] sm:h-[600px] rounded-[2.5rem] overflow-hidden group bg-gray-100 shadow-md transition-all duration-700">
                  {/* Robust image rendering */}
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    loading="eager"
                  />
                  
                  {/* Gradient Overlay for the card style */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                  
                  {/* Content (Bottom Left) */}
                  <div className="absolute bottom-0 left-0 p-10 w-full z-10 text-white">
                    <h4 className="text-2xl font-semibold mb-1 tracking-tight">
                      {member.name}
                    </h4>
                    <p className="text-sm font-medium text-white/80">
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Navigation Controls: Matching the teal circle buttons from screenshot */}
        <div className="flex flex-col items-center gap-12 mt-16">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => { handlePrev(); resetAutoPlay(); }}
              className="w-14 h-14 rounded-full bg-[#1A4D4D] flex items-center justify-center text-white transition-all hover:scale-105 active:scale-95 shadow-xl"
            >
              <ArrowLeft size={24} strokeWidth={2.5} />
            </button>
            <button 
              onClick={() => { handleNext(); resetAutoPlay(); }}
              className="w-14 h-14 rounded-full bg-[#1A4D4D] flex items-center justify-center text-white transition-all hover:scale-105 active:scale-95 shadow-xl"
            >
              <ArrowRight size={24} strokeWidth={2.5} />
            </button>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#1A4D4D]"></span>
            <span className="text-xs font-bold text-[#1A4D4D] tracking-[0.2em] uppercase">FAQ</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TeamSection;
