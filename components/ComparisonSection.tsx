
import React from 'react';
import { motion } from 'framer-motion';
import { X, Check, ArrowRight, Rocket } from 'lucide-react';

const ComparisonSection: React.FC = () => {
  const comparisonData = [
    {
      feature: "Member Onboarding",
      manual: "Slow, paper-based registration with manual data entry.",
      platform: "Digital onboarding & KYC in minutes.",
      upgrade: "100% Digital Process"
    },
    {
      feature: "Data Accuracy",
      manual: "Prone to human errors and catastrophic data loss.",
      platform: "Centralized, accurate, real-time data sync.",
      upgrade: "Verified Accuracy"
    },
    {
      feature: "Savings & Interest",
      manual: "Manual calculations with frequent math errors.",
      platform: "Automated, precise interest calculations.",
      upgrade: "Error-Free Math"
    },
    {
      feature: "Transaction Fees",
      manual: "Often missed or inconsistently applied by staff.",
      platform: "Automatically configured & collected.",
      upgrade: "Zero Leakage"
    },
    {
      feature: "Loan Processing",
      manual: "Delayed approvals and manual disbursements.",
      platform: "Fast, digital automated loan workflows.",
      upgrade: "Instant Approval"
    },
    {
      feature: "Risk & Defaults",
      manual: "Poor borrower visibility and manual tracking.",
      platform: "Deep tracking and repayment monitoring.",
      upgrade: "Risk Reduced"
    },
    {
      feature: "Reporting & Insights",
      manual: "Delayed, manual month-end reports.",
      platform: "Real-time dashboards & instant analytics.",
      upgrade: "SASRA-Ready"
    },
    {
      feature: "Fraud & Security",
      manual: "High risk of manipulation and insider fraud.",
      platform: "Role-based access & immutable audit trails.",
      upgrade: "Bank-Grade"
    },
    {
      feature: "Compliance & Audits",
      manual: "High risk of non-compliance and fines.",
      platform: "Audit-ready, compliance-friendly system.",
      upgrade: "100% Compliant"
    },
    {
      feature: "Scalability",
      manual: "Hard to scale as the SACCO grows.",
      platform: "Built to scale with multi-branch support.",
      upgrade: "Future-Proof"
    }
  ];

  return (
    <section className="bg-white py-20 sm:py-32 overflow-hidden">
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 lg:mb-24">
          <div className="max-w-3xl text-left">
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 mb-4"
            >
              <span className="w-10 h-[2px] bg-red-500"></span>
              <span className="text-[10px] font-black text-red-600 tracking-[0.4em] uppercase">The Transformation</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-black text-gray-900 tracking-tight leading-[0.95]"
            >
              Legacy Ops vs <br />
              <span className="text-gray-400">Codex Platform</span>
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="lg:text-right"
          >
            <p className="text-base sm:text-lg text-gray-500 font-medium max-w-sm lg:ml-auto">
              Replace operational bottlenecks with high-performance digital infrastructure.
            </p>
          </motion.div>
        </div>

        {/* Column Labels (Desktop Only) */}
        <div className="hidden lg:grid grid-cols-12 gap-6 mb-6 px-4">
          <div className="col-span-3">
            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-400">Core Feature</span>
          </div>
          <div className="col-span-4">
             <span className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-400">Manual Operations</span>
          </div>
          <div className="col-span-5">
             <span className="text-[9px] font-black uppercase tracking-[0.3em] text-emerald-600">Codex Africa Digital</span>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="space-y-3 sm:space-y-4">
          {comparisonData.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.03 }}
              viewport={{ once: true }}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-2 lg:gap-6 items-stretch"
            >
              {/* Feature Label */}
              <div className="lg:col-span-3 flex items-center py-2 px-4 lg:px-2 border-l-2 lg:border-l-0 lg:border-r border-gray-100 group-hover:border-emerald-500 transition-colors duration-300">
                 <div>
                    <h3 className="text-sm sm:text-base font-black text-gray-900 tracking-tight">
                        {item.feature}
                    </h3>
                 </div>
              </div>

              {/* Manual Side - Compact */}
              <div className="lg:col-span-4">
                 <div className="h-full bg-white border border-gray-100 p-4 sm:p-5 rounded-2xl sm:rounded-3xl flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-50 flex items-center justify-center text-red-500">
                       <X size={10} strokeWidth={3} />
                    </div>
                    <p className="text-xs sm:text-sm text-gray-500 font-medium leading-snug">
                       {item.manual}
                    </p>
                 </div>
              </div>

              {/* Platform Side - Compact & Louder */}
              <div className="lg:col-span-5">
                 <div className="h-full bg-emerald-50/40 border border-emerald-100 p-4 sm:p-5 rounded-2xl sm:rounded-3xl flex items-center gap-4 relative overflow-hidden">
                    <div className="flex-shrink-0 w-7 h-7 rounded-xl bg-emerald-500 flex items-center justify-center text-white shadow-md">
                       <Check size={14} strokeWidth={3} />
                    </div>
                    <div>
                      <p className="text-sm sm:text-base text-gray-900 font-black leading-tight mb-1">
                         {item.platform}
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="text-[8px] font-black text-emerald-600 uppercase tracking-widest px-2 py-0.5 bg-emerald-100/50 rounded-md">
                           {item.upgrade}
                        </span>
                      </div>
                    </div>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ComparisonSection;
