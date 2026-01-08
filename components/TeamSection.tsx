
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { TeamMember } from '../types';

const originalMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Sarah Mitchell',
    role: 'Lead Consultant',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '2',
    name: 'James Carter',
    role: 'Business Expert',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '3',
    name: 'Emily Ross',
    role: 'Efficiency Specialist',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '4',
    name: 'Daniel Lee',
    role: 'Financial & Growth Advisor',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '5',
    name: 'Michael Chen',
    role: 'Product Strategist',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop'
  }
];

// Triplicate the array for seamless infinite looping
const loopedMembers = [...originalMembers, ...originalMembers, ...originalMembers];

const TeamSection: React.FC = () => {
  const [itemsVisible, setItemsVisible] = useState(5);
  const [currentIndex, setCurrentIndex] = useState(originalMembers.length);
  const [isAnimating, setIsAnimating] = useState(false);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Responsive Breakpoints: Ensure "No Partial Images"
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 640) setItemsVisible(1);
      else if (w < 768) setItemsVisible(2);
      else if (w < 1024) setItemsVisible(3);
      else if (w < 1280) setItemsVisible(4);
      else setItemsVisible(5); // Large screens show all 5 fully
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
    // Instant jump for infinite loop
    if (currentIndex >= originalMembers.length * 2) {
      setCurrentIndex(currentIndex - originalMembers.length);
    } else if (currentIndex < originalMembers.length) {
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

  // Translation Math:
  // Each index move shifts the container by (100 / itemsVisible)% of the viewport
  const getTranslateX = () => -(currentIndex * (100 / itemsVisible));

  return (
    <section className="bg-white py-24 sm:py-32 overflow-hidden" id="team">
      <div className="mx-auto max-w-[95rem] px-4 sm:px-6 lg:px-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex items-center justify-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]"></span>
            <span className="text-sm font-bold text-gray-900 tracking-[0.2em] uppercase">Our Experts</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl xl:text-7xl font-black text-gray-900 tracking-tight max-w-5xl mx-auto leading-[0.9] lg:leading-[1]"
          >
            Meet the brains behind <br className="hidden md:block" /> your business success
          </motion.h2>
        </div>

        {/* The Carousel Container */}
        <div className="relative mb-20">
          <div className="overflow-visible">
            <motion.div 
              className="flex"
              style={{
                // Width is calculated based on total items relative to how many we want to show
                width: `${(loopedMembers.length / itemsVisible) * 100}%`
              }}
              animate={{ x: `${getTranslateX()}%` }}
              onAnimationComplete={handleTransitionEnd}
              transition={isAnimating ? { 
                type: "spring", 
                stiffness: 85, 
                damping: 20,
                mass: 1
              } : { duration: 0 }}
            >
              {loopedMembers.map((member, idx) => (
                <div
                  key={`${member.id}-${idx}`}
                  className="px-2.5 shrink-0"
                  style={{ width: `${100 / loopedMembers.length}%` }}
                >
                  <div className="relative h-[500px] md:h-[550px] xl:h-[650px] rounded-[3rem] overflow-hidden group bg-gray-100 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-700">
                    {/* Fallback color while image loads */}
                    <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                    
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      loading="lazy"
                    />
                    
                    {/* Dark Professional Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-500"></div>
                    
                    {/* Text Content */}
                    <div className="absolute bottom-0 left-0 p-8 lg:p-12 w-full z-10">
                      <h4 className="text-2xl lg:text-3xl font-black text-white mb-1 tracking-tight group-hover:translate-x-1 transition-transform duration-500">
                        {member.name}
                      </h4>
                      <p className="text-sm font-bold text-white/60 uppercase tracking-widest leading-none group-hover:translate-x-1 transition-transform duration-500 delay-75">
                        {member.role}
                      </p>
                    </div>

                    {/* Interaction Frame Highlight */}
                    <div className="absolute inset-4 border border-white/5 group-hover:border-white/10 transition-all duration-700 rounded-[2.5rem] pointer-events-none"></div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
          <div className="flex items-center gap-6">
            <motion.button 
              whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
              whileTap={{ scale: 0.9 }}
              onClick={() => { handlePrev(); resetAutoPlay(); }}
              className="w-16 h-16 rounded-full border-2 border-gray-100 flex items-center justify-center text-gray-900 transition-all duration-300 shadow-xl bg-white hover:border-black active:shadow-inner"
            >
              <ArrowLeft size={28} />
            </motion.button>
            
            <div className="flex gap-3 px-8 py-5 bg-gray-50 rounded-full border border-gray-100 shadow-sm">
              {originalMembers.map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => { setCurrentIndex(originalMembers.length + i); resetAutoPlay(); }}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    (currentIndex % originalMembers.length) === i 
                      ? 'w-14 bg-red-500' 
                      : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <motion.button 
              whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
              whileTap={{ scale: 0.9 }}
              onClick={() => { handleNext(); resetAutoPlay(); }}
              className="w-16 h-16 rounded-full border-2 border-gray-100 flex items-center justify-center text-gray-900 transition-all duration-300 shadow-xl bg-white hover:border-black active:shadow-inner"
            >
              <ArrowRight size={28} />
            </motion.button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TeamSection;
