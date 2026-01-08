
import React, { useMemo, useRef } from 'react';
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRight,
  Users,
  LayoutGrid,
  CheckCircle2,
  Activity,
  Wallet,
  TrendingUp,
  Plus,
  Settings,
  MoreHorizontal,
} from 'lucide-react';

const FeaturesStack: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const features = useMemo(
    () => [
      {
        tag: 'Automate everything',
        tagColor: 'bg-orange-50 text-orange-600',
        title: 'Automated Workflows',
        description:
          'Stop repeating manual tasks. Set up custom triggers and actions that handle your SACCO operations while you focus on what really matters.',
        buttonText: 'Learn More',
        mockup: <WorkflowMockup />,
      },
      {
        tag: 'Financial Clarity',
        tagColor: 'bg-emerald-50 text-emerald-600',
        title: 'Integrated Finance',
        description:
          'Direct integration with major payment providers. Automated ledger, real-time balances, and audit-ready financial records with zero effort.',
        buttonText: 'Learn More',
        mockup: <FinanceMockup />,
      },
      {
        tag: 'Data Insights',
        tagColor: 'bg-purple-50 text-purple-600',
        title: 'AI Status Forecast',
        description:
          "Predict trends and member behavior with built-in analytics. Get a bird's-eye view of your cooperative's financial health and growth trajectory.",
        buttonText: 'Learn More',
        mockup: <AnalyticsMockup />,
      },
    ],
    []
  );

  // Scroll-driven stacking (animated):
  // - Card 1 stays pinned under the navbar.
  // - Card 2/3/4 slide from bottom to top and cover the previous card.
  const steps = features.length - 1;
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const stackProgress = useTransform(scrollYProgress, [0, 1], [0, steps]);

  return (
    <section ref={sectionRef} className="bg-white relative pt-10 sm:pt-20 pb-10" id="features">
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Give enough scroll distance for 4 cards */}
        <div className="relative bg-white" style={{ height: `${(steps + 1) * 100}vh` }}>
          {/* Sticky stage below navbar */}
          <div
            className="sticky bg-white flex justify-center"
            style={{
              top: '96px',
              height: 'calc(100vh - 96px)',
            }}
          >
            <div className="relative w-full">
              {features.map((feature, index) => (
                <FeatureCard
                  key={feature.title}
                  index={index}
                  total={features.length}
                  stackProgress={stackProgress}
                  {...feature}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  tag: string;
  tagColor: string;
  title: string;
  description: string;
  buttonText: string;
  mockup: React.ReactNode;
  index: number;
  total: number;
  stackProgress: MotionValue<number>;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  tag,
  tagColor,
  title,
  description,
  buttonText,
  mockup,
  index,
  total,
  stackProgress,
}) => {
  // 0..1 while this card is entering (from bottom)
  const enter = useTransform(stackProgress, [index - 1, index], [0, 1], { clamp: true });
  // 0..1 while this card is being covered by the next card
  const exit = useTransform(stackProgress, [index, index + 1], [0, 1], { clamp: true });

  // Slide in from bottom to 0
  const y = useTransform(enter, [0, 1], ['110%', '0%'], { clamp: true });

  // When going behind, show a tiny top gap/peek (so you see card 1 under card 2, etc.)
  // BUT: card 1 must stay stopped/pinned (no peek, no scale).
  const isBaseCard = index === 0;
  const peek = 12;

  const behindY = isBaseCard
    ? useTransform(exit, () => 0)
    : useTransform(exit, [0, 0.75, 1], [0, 0, -peek], { clamp: true });

  const scale = isBaseCard
    ? useTransform(exit, () => 1)
    : useTransform(exit, [0, 0.75, 1], [1, 1, 0.97], { clamp: true });

  const finalY = useTransform([y, behindY], ([a, b]) => {
    if (typeof a === 'string') {
      if (a === '0%') return `${b}px`;
      return a;
    }
    return b;
  });

  // Only show the card once it starts entering
  const opacity = useTransform(enter, [0, 0.05], [0, 1], { clamp: true });

  // Newest card always on top during the transition
  const zIndex = useTransform(stackProgress, (p) => {
    const topIndex = Math.min(total - 1, Math.max(0, Math.ceil(p)));
    if (index === topIndex) return 2000;
    if (index < topIndex) return 1500 - (topIndex - index);
    return 0;
  });

  // Only top card should receive pointer events
  const pointerEvents = useTransform(stackProgress, (p) => {
    const topIndex = Math.min(total - 1, Math.max(0, Math.ceil(p)));
    return index === topIndex ? 'auto' : 'none';
  });

  return (
    <motion.div
      style={{ y: finalY, scale, opacity, zIndex, pointerEvents }}
      className="absolute inset-x-0 top-0 mx-auto h-full w-full max-w-[92%] sm:max-w-[88%] lg:max-w-[85%] bg-white border border-gray-200/80 rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[3rem] shadow-[0_20px_80px_-10px_rgba(0,0,0,0.12)] overflow-hidden grid grid-cols-1 lg:grid-cols-12 will-change-transform"
    >
      {/* Content Side */}
      <div className="lg:col-span-5 p-8 sm:p-10 lg:p-20 flex flex-col justify-center bg-white z-10 overflow-y-auto lg:overflow-visible">
        <div
          className={`inline-flex self-start px-3 py-1 sm:px-4 sm:py-1.5 rounded-lg text-[10px] sm:text-[11px] font-bold tracking-tight mb-4 sm:mb-8 ${tagColor}`}
        >
          {tag}
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-8 tracking-tighter leading-[1.1] sm:leading-[1.05]">
          {title}
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-gray-500 leading-relaxed mb-8 sm:mb-12 max-w-md font-medium">
          {description}
        </p>
        <button className="self-start flex items-center gap-3 sm:gap-4 bg-black text-white px-8 py-4 sm:px-10 sm:py-5 rounded-full text-[10px] sm:text-xs font-bold transition-all shadow-xl hover:bg-gray-800 active:scale-95 group">
          {buttonText}
          <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/40 transition-colors">
            <ArrowRight className="w-3 h-3" />
          </div>
        </button>
      </div>

      {/* Visual Side */}
      <div className="hidden lg:flex lg:col-span-7 bg-[#EDF7F9] relative overflow-hidden items-center justify-center">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_50%_50%,#fff_0%,transparent_70%)]"></div>
        {mockup}
      </div>
    </motion.div>
  );
};

/* --- HIGH-FIDELITY MOCKUP COMPONENTS --- */

const CollaborationMockup = () => (
  <div className="relative w-[85%] h-[80%] flex flex-col items-center justify-center gap-6">
    <motion.div 
      initial={{ x: 30, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className="bg-white p-5 rounded-2xl rounded-tr-none shadow-2xl border border-gray-100 flex items-start gap-4 max-w-[320px] self-end z-20"
    >
      <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden shrink-0">
        <img
          src="https://i.pravatar.cc/100?u=sarah"
          alt="User"
          width={40}
          height={40}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="space-y-1">
        <p className="text-sm font-bold text-gray-900 leading-snug">Sure! I'll assign this to Daniel</p>
        <p className="text-[10px] text-gray-600 font-bold">2 min ago</p>
      </div>
    </motion.div>

    <motion.div 
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.8 }}
      className="bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 w-full max-w-[420px] overflow-hidden"
    >
      <div className="px-6 py-4 border-b border-gray-50 flex items-center justify-between bg-gray-50/30">
        <div className="flex items-center gap-3 bg-white px-3 py-1.5 rounded-full border border-gray-100 shadow-sm">
          <Users size={14} className="text-gray-500" aria-hidden="true" />
          <span className="text-xs font-bold text-gray-500">Team</span>
        </div>
        <LayoutGrid size={16} className="text-gray-300" />
      </div>
      <div className="p-8">
        <h3 className="text-sm font-bold text-gray-900 mb-8 flex justify-between items-center">
          Assign this task to...
          <MoreHorizontal size={16} className="text-gray-300" />
        </h3>
        <div className="space-y-7">
          {[
            { name: "Dana", role: "UX Designer", status: "Online", avatar: "https://i.pravatar.cc/150?u=dana" },
            { name: "Daniel", role: "UI Designer", status: "Assigned", avatar: "https://i.pravatar.cc/150?u=daniel", active: true },
          ].map((user, i) => (
            <div key={i} className={`flex items-center justify-between transition-all duration-300 ${user.active ? 'bg-blue-50/50 -mx-8 px-8 py-4' : ''}`}>
              <div className="flex items-center gap-4">
                <img
                  src={user.avatar}
                  alt={`${user.name} avatar`}
                  width={44}
                  height={44}
                  loading="lazy"
                  decoding="async"
                  className="w-11 h-11 rounded-full border-2 border-white shadow-sm"
                />
                <div>
                  <p className="text-sm font-bold text-gray-900 mb-1">{user.name}</p>
                  <p className="text-[10px] text-gray-600 font-bold tracking-tight uppercase">{user.role}</p>
                </div>
              </div>
              {user.active && <CheckCircle2 size={16} className="text-blue-600" />}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  </div>
);

const WorkflowMockup = () => (
  <div className="w-full h-full flex items-center justify-center p-12">
    <div className="bg-white rounded-[3rem] shadow-2xl border border-gray-100 w-full max-w-[450px] h-[85%] p-10 overflow-hidden relative">
      <div className="flex items-center gap-5 mb-12">
        <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-500 border border-orange-100 shadow-sm">
          <Activity size={28} />
        </div>
        <div className="space-y-2">
          <div className="h-4 w-32 bg-gray-900 rounded-full"></div>
          <div className="h-2 w-48 bg-gray-100 rounded-full"></div>
        </div>
      </div>
      <div className="space-y-6">
        {[1, 2, 3].map(i => (
          <div key={i} className="flex items-center justify-between p-5 border border-gray-50 rounded-2xl bg-gray-50/40">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-white border border-gray-100"></div>
              <div className="h-2.5 w-24 bg-gray-800 rounded-full"></div>
            </div>
            <div className="w-14 h-6 rounded-full bg-orange-100"></div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const FinanceMockup = () => (
  <div className="w-full h-full flex items-center justify-center p-12">
    <div className="bg-[#0A0D10] rounded-[3.5rem] shadow-2xl w-full max-w-[450px] h-[85%] p-12 text-white flex flex-col border border-white/5 relative overflow-hidden">
      <div className="flex justify-between items-start mb-16 relative z-10">
        <div className="space-y-4">
          <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em]">Available Balance</p>
          <h3 className="text-5xl font-bold tracking-tighter text-white">$1,248,500.00</h3>
        </div>
        <Wallet size={28} className="text-emerald-400" />
      </div>
      <div className="grid grid-cols-2 gap-4 mb-12 relative z-10">
        <div className="h-32 bg-white/5 rounded-[2.5rem] border border-white/10 p-6 flex flex-col justify-between">
          <div className="w-8 h-8 rounded-xl bg-emerald-500 shadow-lg shadow-emerald-500/30 flex items-center justify-center">
            <Plus size={16} className="text-white" />
          </div>
          <div className="h-2 w-16 bg-white/30 rounded-full"></div>
        </div>
        <div className="h-32 bg-white/5 rounded-[2.5rem] border border-white/10 p-6 flex flex-col justify-between">
          <div className="w-8 h-8 rounded-xl bg-blue-500 shadow-lg shadow-blue-500/30 flex items-center justify-center">
            <TrendingUp size={16} className="text-white" />
          </div>
          <div className="h-2 w-16 bg-white/30 rounded-full"></div>
        </div>
      </div>
    </div>
  </div>
);

const AnalyticsMockup = () => (
  <div className="w-full h-full flex items-center justify-center p-12">
    <div className="bg-white rounded-[3.5rem] shadow-2xl border border-gray-100 w-full max-w-[450px] h-[85%] p-12 flex flex-col relative overflow-hidden">
      <div className="flex justify-between items-center mb-12">
        <h3 className="text-xl font-bold text-gray-900 tracking-tight">AI Status Forecast</h3>
        <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></div>
      </div>
      <div className="flex-1 flex items-center justify-center relative">
        <svg className="w-64 h-64 transform -rotate-90">
          <circle cx="128" cy="128" r="110" stroke="currentColor" strokeWidth="24" fill="transparent" className="text-gray-50" />
          <motion.circle 
            initial={{ strokeDashoffset: 691 }}
            whileInView={{ strokeDashoffset: 124.38 }}
            transition={{ duration: 2, ease: "circOut" }}
            cx="128" cy="128" r="110" stroke="currentColor" strokeWidth="24" fill="transparent" strokeDasharray="691" className="text-red-600" strokeLinecap="round" 
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-6xl font-black tracking-tighter text-gray-900">82%</span>
          <span className="text-[12px] font-bold text-gray-600 uppercase tracking-[0.2em] mt-2">Growth</span>
        </div>
      </div>
      <div className="absolute top-24 right-10">
        <Settings size={20} className="text-purple-500" />
      </div>
    </div>
  </div>
);

export default FeaturesStack;
