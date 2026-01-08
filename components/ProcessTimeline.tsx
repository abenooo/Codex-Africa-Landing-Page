import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ProcessStep } from '../types';

const steps: ProcessStep[] = [
  {
    id: '01',
    number: '01',
    title: 'Onboarding & Requirement Mapping',
    description: 'We align your SACCO’s policies, products, and workflows with our ready-built fintech platform.'
  },
  {
    id: '02',
    number: '02',
    title: 'Configuration & Customization',
    description: 'We configure modules—members, savings, loans, payments, reports, and roles—to match how your SACCO operates.'
  },
  {
    id: '03',
    number: '03',
    title: 'Deployment & Go-Live',
    description: 'Your system is deployed, tested, and launched with secure access for staff and members.'
  },
  {
    id: '04',
    number: '04',
    title: 'Support, Compliance & Scale',
    description: 'We provide ongoing support, updates, compliance alignment, and scalability as your SACCO grows.'
  }
];

const ProcessTimeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stepsContainerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of the specific steps container
  const { scrollYProgress } = useScroll({
    target: stepsContainerRef,
    offset: ["start center", "end center"]
  });

  // Smooth out the progress for the line
  const heightSpring = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Map progress to percentage string for height
  const height = useTransform(heightSpring, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative bg-[#FAFAFA] min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 h-full">
          
          {/* Left Column: Sticky Header */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-32 z-30">
              
              {/* Process Label with Slashes */}
              <div className="flex items-center gap-3 mb-8">
                <div className="flex gap-1">
                  <span className="w-[1.5px] h-3.5 bg-red-500 skew-x-[15deg] rounded-full"></span>
                  <span className="w-[1.5px] h-3.5 bg-red-500 skew-x-[15deg] rounded-full"></span>
                </div>
                <span className="text-gray-700 font-medium tracking-wide text-sm">Process</span>
                <div className="flex gap-1">
                  <span className="w-[1.5px] h-3.5 bg-red-500 -skew-x-[15deg] rounded-full"></span>
                  <span className="w-[1.5px] h-3.5 bg-red-500 -skew-x-[15deg] rounded-full"></span>
                </div>
              </div>
              
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-2">
                A proven fintech process <br/> for SACCOs.
              </h2>
              <h3 className="text-4xl sm:text-5xl font-bold text-gray-500 tracking-tight leading-[1.1] mb-8">
                Built. Tested. <br/> Ready to deploy.
              </h3>
              
              <p className="text-lg text-gray-600 leading-relaxed max-w-md">
                Codex Africa delivers a ready-to-use SACCO fintech platform—configured to your needs and launched fast, securely, and reliably.
              </p>
            </div>
          </div>

          {/* Right Column: Timeline & Cards */}
          <div className="lg:col-span-7 relative pl-0 lg:pl-8">
            
            {/* Steps Container Wrapper - Reduced Gap */}
            <div ref={stepsContainerRef} className="relative space-y-8 lg:space-y-16">
                
                {/* Vertical Line - Starts from bottom of first circle (approx 48px/88px down) */}
                <div className="absolute left-5 lg:left-10 top-12 lg:top-[5.5rem] bottom-0 w-[2px] bg-gray-200/60">
                    {/* The Filled Red Line */}
                    <motion.div 
                        style={{ height }}
                        className="absolute top-0 left-0 w-full bg-red-500 origin-top" 
                    >
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-red-500 rounded-full shadow-[0_0_10px_2px_rgba(239,68,68,0.6)] z-20"></div>
                    </motion.div>
                </div>

                {steps.map((step, index) => (
                    <TimelineStep 
                        key={step.id} 
                        step={step} 
                        index={index} 
                        total={steps.length} 
                    />
                ))}
            </div>
            
            {/* Spacer */}
            <div className="h-24"></div>

          </div>
        </div>
      </div>
    </div>
  );
};

// Individual Step Component
const TimelineStep: React.FC<{ step: ProcessStep; index: number; total: number }> = ({ step, index, total }) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "center center"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20
  });

  // Animations
  const opacity = useTransform(smoothProgress, [0.5, 1], [0, 1]);
  const fillOpacity = useTransform(smoothProgress, [0.8, 1], [0, 0.05]);
  const cardOpacity = useTransform(smoothProgress, [0, 0.8], [0, 1]);
  const cardY = useTransform(smoothProgress, [0, 1], [40, 0]);
  
  return (
    <div 
      ref={ref}
      className="relative flex items-stretch gap-8 lg:gap-12 group"
    >
      {/* Number Node */}
      <div className="flex-shrink-0 relative z-10 flex flex-col justify-start pt-2">
        <div className="flex items-center justify-center w-10 h-10 lg:w-20 lg:h-20 bg-[#FAFAFA] rounded-full border border-gray-200 group-hover:border-red-300 transition-colors duration-500 relative overflow-hidden">
           {/* Active Ring */}
           <motion.div 
             style={{ opacity }}
             className="absolute inset-0 rounded-full border-[2px] border-red-500" 
           />
           
           {/* Fill */}
           <motion.div 
             style={{ opacity: fillOpacity }}
             className="absolute inset-0 bg-red-500" 
           />

           <span className="text-sm lg:text-base font-mono font-medium text-gray-500 group-hover:text-gray-900 transition-colors relative z-10">
            {step.number}
           </span>
        </div>
      </div>

      {/* Card Content */}
      <motion.div 
        style={{ 
            opacity: cardOpacity, 
            y: cardY,
        }}
        className="flex-grow"
      >
        <div className="bg-white p-8 lg:p-10 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-500 border border-gray-100 h-full">
            <h3 className="text-xl lg:text-2xl font-medium text-gray-800 mb-3 tracking-tight">
                {step.title}
            </h3>
            <p className="text-gray-500 text-base lg:text-lg leading-relaxed">
                {step.description}
            </p>
        </div>
      </motion.div>
    </div>
  );
};

export default ProcessTimeline;