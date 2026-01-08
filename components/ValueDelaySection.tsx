
import React from 'react';
import { motion } from 'framer-motion';

const ValueDelaySection: React.FC = () => {
  const data = [
    {
      id: "01 /",
      label: "MEMBER ONBOARDING",
      highlight: "DIGITAL FROM DAY ONE",
      value: "+92%",
      category: "/ SPEED",
      progress: 0.92,
      description: "Replace paper-based registration with instant digital onboarding and KYC to grow membership faster."
    },
    {
      id: "02 /",
      label: "LOAN PROCESSING",
      highlight: "FASTER, SMARTER APPROVALS",
      value: "+75%",
      category: "/ VOLUME",
      progress: 0.75,
      description: "Automate loan appraisal, scoring, and approvals to disburse more loans without increasing risk."
    },
    {
      id: "03 /",
      label: "SAVINGS & INTEREST",
      highlight: "ZERO CALCULATION ERRORS",
      value: "100%",
      category: "/ ACCURACY",
      progress: 1.0,
      description: "Automate savings tracking and interest calculations to eliminate losses and member disputes."
    },
    {
      id: "04 /",
      label: "COMPLIANCE & REPORTING",
      highlight: "ONE-CLICK VISIBILITY",
      value: "-80%",
      category: "/ WORKLOAD",
      progress: 0.8,
      description: "Generate audit-ready regulatory and management reports in seconds, not weeks."
    },
    {
      id: "05 /",
      label: "REVENUE & SECURITY",
      highlight: "NO LEAKAGE, FULL CONTROL",
      value: "LIVE",
      category: "/ TRACKING",
      progress: 0.65,
      description: "Capture every fee, prevent fraud, and monitor operations with full audit trails and role-based access."
    }
  ];

  return (
    <section className="bg-white py-24 sm:py-40 relative overflow-hidden">
      {/* Background Subtle Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="h-full w-[1px] bg-emerald-500/5 absolute left-1/4"></div>
        <div className="h-full w-[1px] bg-emerald-500/5 absolute left-2/4"></div>
        <div className="h-full w-[1px] bg-emerald-500/5 absolute left-3/4"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-50 rounded-full blur-[120px] -mr-64 -mt-64 opacity-50"></div>
      </div>

      <div className="max-w-[100rem] mx-auto px-6 lg:px-12 relative z-10">
        {/* Header Section */}
        <div className="mb-20 sm:mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-10 h-[2px] bg-emerald-500"></div>
            <span className="text-[10px] font-black text-emerald-600 tracking-[0.3em] uppercase">THE CODEX AFRICA VALUE</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black text-gray-900 tracking-tight leading-[0.95] max-w-6xl"
          >
            Efficiency isn’t just <br className="hidden sm:block" />
            a feature — it’s how <br />
            <span className="text-gray-400">SACCOs protect </span> 
            <span className="text-emerald-500">revenue and scale.</span>
          </motion.h2>
        </div>

        {/* List of Impact Rows */}
        <div className="space-y-4">
          {data.map((item, index) => (
            <div key={index} className="bg-gray-50/50 group relative h-24 sm:h-32 flex items-center px-4 sm:px-10 overflow-hidden rounded-[2rem] border border-gray-100 transition-all duration-500 hover:bg-white hover:shadow-xl hover:shadow-emerald-500/5">
              
              {/* Row Label (Left) */}
              <div className="flex flex-col z-20 min-w-[180px] sm:min-w-[320px] lg:min-w-[380px]">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-[10px] font-mono text-emerald-500 font-bold">{item.id}</span>
                  <p className="text-[11px] sm:text-xs font-black tracking-[0.15em] text-gray-400 uppercase">
                    {item.label}
                  </p>
                </div>
                <h3 className="text-xs sm:text-base font-black text-gray-900 uppercase tracking-tighter">
                  {item.highlight}
                </h3>
              </div>

              {/* Progress Track & Animated Bubble (Center) */}
              <div className="flex-grow relative h-full flex items-center px-8 lg:px-16">
                {/* Background Line */}
                <div className="absolute left-0 right-0 h-[2px] bg-gray-200/50 rounded-full"></div>
                
                {/* Progress Trail */}
                <motion.div 
                  initial={{ width: "0%" }}
                  whileInView={{ width: `${item.progress * 100}%` }}
                  transition={{ duration: 1.5, ease: [0.32, 0.72, 0, 1], delay: index * 0.1 }}
                  className="absolute left-0 h-[2px] bg-emerald-500 rounded-full z-10"
                />
                
                {/* Percentage Bubble */}
                <motion.div 
                  initial={{ left: "0%" }}
                  whileInView={{ left: `${item.progress * 100}%` }}
                  transition={{ duration: 1.5, ease: [0.32, 0.72, 0, 1], delay: index * 0.1 }}
                  className="absolute -translate-x-1/2 flex flex-col items-center z-20"
                >
                  <div className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white w-14 h-14 sm:w-20 sm:h-20 rounded-[1.5rem] sm:rounded-[2rem] flex items-center justify-center text-sm sm:text-xl font-black shadow-[0_20px_40px_-10px_rgba(16,185,129,0.4)] group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    {item.value}
                  </div>
                </motion.div>
              </div>

              {/* Category & Description (Right) */}
              <div className="z-20 text-right hidden sm:block">
                <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest block mb-1">
                  {item.category}
                </span>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter max-w-[200px] leading-tight">
                  {item.description}
                </p>
              </div>

              {/* Mobile-only category */}
              <div className="z-20 text-right sm:hidden">
                <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Teaser */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 flex justify-center"
        >
          <p className="text-gray-400 font-bold text-xs uppercase tracking-[0.3em] text-center">
            Optimized for SASRA Compliance & Member Trust across Africa
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ValueDelaySection;
