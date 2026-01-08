
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowRight, 
  Users, 
  LayoutGrid, 
  CheckCircle2, 
  Activity, 
  Wallet, 
  TrendingUp, 
  MessageCircle,
  Plus,
  Settings,
  Bell,
  MoreHorizontal
} from 'lucide-react';

const FeaturesStack: React.FC = () => {
  const features = [
    {
      tag: "Stay in sync",
      tagColor: "bg-blue-50 text-blue-600",
      title: "Real-Time Collaboration",
      description: "Work together in real time — edit tasks, leave comments, and see updates instantly. Stay aligned without switching tools or waiting on status updates.",
      buttonText: "Learn More",
      mockup: <CollaborationMockup />
    },
    {
      tag: "Automate everything",
      tagColor: "bg-orange-50 text-orange-600",
      title: "Automated Workflows",
      description: "Stop repeating manual tasks. Set up custom triggers and actions that handle your SACCO operations while you focus on what really matters.",
      buttonText: "Learn More",
      mockup: <WorkflowMockup />
    },
    {
      tag: "Financial Clarity",
      tagColor: "bg-emerald-50 text-emerald-600",
      title: "Integrated Finance",
      description: "Direct integration with major payment providers. Automated ledger, real-time balances, and audit-ready financial records with zero effort.",
      buttonText: "Learn More",
      mockup: <FinanceMockup />
    },
    {
      tag: "Data Insights",
      tagColor: "bg-purple-50 text-purple-600",
      title: "AI Status Forecast",
      description: "Predict trends and member behavior with built-in analytics. Get a bird's-eye view of your cooperative's financial health and growth trajectory.",
      buttonText: "Learn More",
      mockup: <AnalyticsMockup />
    }
  ];

  return (
    <section className="bg-white pb-[20vh] relative pt-20" id="features">
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="relative">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              index={index}
              total={features.length}
              {...feature}
            />
          ))}
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
}

const FeatureCard: React.FC<FeatureCardProps> = ({ tag, tagColor, title, description, buttonText, mockup, index, total }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track the scroll of the card container to trigger scaling of the card underneath
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Each card sticks to the top. As the scroll continues through its container,
  // it creates space for the NEXT card to slide over.
  // We apply a scale and darken effect to the card *behind* as it's covered.
  const isLast = index === total - 1;
  const scale = useTransform(scrollYProgress, [0.5, 1], [1, isLast ? 1 : 0.94]);
  const opacity = useTransform(scrollYProgress, [0.5, 1], [1, isLast ? 1 : 0.7]);
  const filter = useTransform(scrollYProgress, [0.5, 1], ["brightness(1)", isLast ? "brightness(1)" : "brightness(0.85)"]);

  return (
    <div 
      ref={containerRef}
      className="relative h-[110vh] flex flex-col items-center"
      style={{ zIndex: index }}
    >
      <motion.div 
        style={{ scale, opacity, filter }}
        className="sticky top-[12vh] h-[80vh] w-full bg-[#FAFBFC] border border-gray-100 rounded-[3rem] lg:rounded-[4rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.06)] overflow-hidden grid lg:grid-cols-12 origin-top"
      >
        {/* Content Side */}
        <div className="lg:col-span-5 p-10 lg:p-20 flex flex-col justify-center bg-white z-10">
          <div className={`inline-flex self-start px-4 py-1.5 rounded-lg text-[11px] font-bold tracking-tight mb-8 ${tagColor}`}>
            {tag}
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8 tracking-tighter leading-[1.05]">
            {title}
          </h2>
          <p className="text-lg lg:text-xl text-gray-500 leading-relaxed mb-12 max-w-md font-medium">
            {description}
          </p>
          <button className="self-start flex items-center gap-4 bg-black text-white px-10 py-5 rounded-full text-xs font-bold transition-all shadow-xl hover:bg-gray-800 active:scale-95 group">
            {buttonText}
            <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/40 transition-colors">
              <ArrowRight className="w-3 h-3" />
            </div>
          </button>
        </div>
        
        {/* Visual Side */}
        <div className="lg:col-span-7 bg-[#EDF7F9] relative overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_50%_50%,#fff_0%,transparent_70%)]"></div>
          {mockup}
        </div>
      </motion.div>
    </div>
  );
};

/* --- HIGH-FIDELITY MOCKUP COMPONENTS --- */

const CollaborationMockup = () => (
  <div className="relative w-[85%] h-[80%] flex flex-col items-center justify-center gap-6">
    {/* Chat Bubble Component */}
    <motion.div 
      initial={{ x: 30, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className="bg-white p-5 rounded-2xl rounded-tr-none shadow-2xl border border-gray-100 flex items-start gap-4 max-w-[320px] self-end z-20"
    >
      <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden shrink-0">
        <img src="https://i.pravatar.cc/100?u=sarah" alt="User" />
      </div>
      <div className="space-y-1">
        <p className="text-sm font-bold text-gray-900 leading-snug">Sure! I'll assign this to Daniel</p>
        <p className="text-[10px] text-gray-400 font-bold">2 min ago</p>
      </div>
    </motion.div>

    {/* Assignment Card */}
    <motion.div 
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.8 }}
      className="bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 w-full max-w-[420px] overflow-hidden"
    >
      <div className="px-6 py-4 border-b border-gray-50 flex items-center justify-between bg-gray-50/30">
        <div className="flex items-center gap-3 bg-white px-3 py-1.5 rounded-full border border-gray-100 shadow-sm">
          <Users size={14} className="text-gray-400" />
          <span className="text-xs font-bold text-gray-500">Team</span>
          <div className="flex items-center gap-1 bg-gray-100 rounded-lg px-2 py-0.5">
            <span className="text-[10px] font-bold text-gray-600">Design</span>
            <span className="text-gray-400 text-[10px] cursor-pointer hover:text-red-500">✕</span>
          </div>
        </div>
        <LayoutGrid size={16} className="text-gray-300" />
      </div>
      <div className="p-8">
        <h4 className="text-sm font-bold text-gray-900 mb-8 flex justify-between items-center">
          Assign this task to...
          <MoreHorizontal size={16} className="text-gray-300" />
        </h4>
        <div className="space-y-7">
          {[
            { name: "Dana", role: "UX Designer", status: "Online", avatar: "https://i.pravatar.cc/150?u=dana" },
            { name: "Daniel", role: "UI Designer", status: "Assigned", avatar: "https://i.pravatar.cc/150?u=daniel", active: true },
            { name: "Alex", role: "Brand Designer", status: "Online", avatar: "https://i.pravatar.cc/150?u=alex" }
          ].map((user, i) => (
            <div key={i} className={`flex items-center justify-between transition-all duration-300 ${user.active ? 'bg-blue-50/50 -mx-8 px-8 py-4' : ''}`}>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img src={user.avatar} className="w-11 h-11 rounded-full border-2 border-white shadow-sm" />
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900 leading-none mb-1">{user.name}</p>
                  <p className="text-[10px] text-gray-400 font-bold tracking-tight uppercase">{user.role}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className={`text-[11px] font-bold ${user.active ? 'text-blue-600' : 'text-gray-400'}`}>{user.status}</span>
                {user.active && <CheckCircle2 size={16} className="text-blue-600" />}
              </div>
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
        {[1, 2, 3, 4, 5].map(i => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center justify-between p-5 border border-gray-50 rounded-2xl bg-gray-50/40 hover:bg-white hover:shadow-lg transition-all cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center">
                 <div className={`w-4 h-4 rounded-full ${i % 2 === 0 ? 'bg-orange-500' : 'bg-gray-200'}`}></div>
              </div>
              <div className="space-y-2">
                <div className="h-2.5 w-24 bg-gray-800 rounded-full"></div>
                <div className="h-1.5 w-16 bg-gray-300 rounded-full"></div>
              </div>
            </div>
            <div className={`w-14 h-6 rounded-full ${i % 2 === 0 ? 'bg-orange-100' : 'bg-gray-100'}`}></div>
          </motion.div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
    </div>
  </div>
);

const FinanceMockup = () => (
  <div className="w-full h-full flex items-center justify-center p-12">
    <div className="bg-[#0A0D10] rounded-[3.5rem] shadow-2xl w-full max-w-[450px] h-[85%] p-12 text-white flex flex-col border border-white/5 relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-500/10 blur-[120px] rounded-full"></div>
      
      <div className="flex justify-between items-start mb-16 relative z-10">
        <div className="space-y-4">
          <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em]">Available Balance</p>
          <h3 className="text-5xl font-bold tracking-tighter text-white">$1,248,500.00</h3>
        </div>
        <div className="w-14 h-14 rounded-3xl bg-emerald-500/20 backdrop-blur-md flex items-center justify-center text-emerald-400 border border-emerald-500/20">
          <Wallet size={28} />
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-12 relative z-10">
        <div className="h-32 bg-white/5 rounded-[2.5rem] border border-white/10 p-6 flex flex-col justify-between hover:bg-white/10 transition-colors">
          <div className="w-8 h-8 rounded-xl bg-emerald-500 shadow-lg shadow-emerald-500/30 flex items-center justify-center">
            <Plus size={16} className="text-white" />
          </div>
          <div className="space-y-1">
            <div className="h-2 w-16 bg-white/30 rounded-full"></div>
            <div className="h-1.5 w-10 bg-white/10 rounded-full"></div>
          </div>
        </div>
        <div className="h-32 bg-white/5 rounded-[2.5rem] border border-white/10 p-6 flex flex-col justify-between hover:bg-white/10 transition-colors">
          <div className="w-8 h-8 rounded-xl bg-blue-500 shadow-lg shadow-blue-500/30 flex items-center justify-center">
            <TrendingUp size={16} className="text-white" />
          </div>
          <div className="space-y-1">
            <div className="h-2 w-16 bg-white/30 rounded-full"></div>
            <div className="h-1.5 w-10 bg-white/10 rounded-full"></div>
          </div>
        </div>
      </div>
      
      <div className="space-y-5 mt-auto relative z-10">
        {[1, 2].map(i => (
          <div key={i} className="flex items-center justify-between py-5 border-t border-white/5">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10"></div>
              <div className="space-y-2">
                <div className="h-2.5 w-32 bg-white/30 rounded-full"></div>
                <div className="h-1.5 w-20 bg-white/10 rounded-full"></div>
              </div>
            </div>
            <div className="h-2 w-16 bg-white/20 rounded-full"></div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const AnalyticsMockup = () => (
  <div className="w-full h-full flex items-center justify-center p-12">
    <div className="bg-white rounded-[3.5rem] shadow-2xl border border-gray-100 w-full max-w-[450px] h-[85%] p-12 flex flex-col relative overflow-hidden">
      <div className="flex justify-between items-center mb-12">
        <h3 className="text-xl font-bold text-gray-900 tracking-tight">AI Status Forecast</h3>
        <div className="flex items-center gap-3 bg-red-50 px-3 py-1.5 rounded-full border border-red-100">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></div>
          <span className="text-[10px] font-bold text-red-600 uppercase tracking-widest">On track</span>
        </div>
      </div>
      
      {/* Circle Chart */}
      <div className="flex-1 flex items-center justify-center relative">
        <svg className="w-64 h-64 transform -rotate-90">
          <circle cx="128" cy="128" r="110" stroke="currentColor" strokeWidth="24" fill="transparent" className="text-gray-50" />
          <motion.circle 
            initial={{ strokeDashoffset: 691 }}
            whileInView={{ strokeDashoffset: 124.38 }}
            transition={{ duration: 2, ease: "circOut" }}
            cx="128" 
            cy="128" 
            r="110" 
            stroke="currentColor" 
            strokeWidth="24" 
            fill="transparent" 
            strokeDasharray="691" 
            className="text-red-500" 
            strokeLinecap="round" 
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-6xl font-black tracking-tighter text-gray-900">82%</span>
          <span className="text-[12px] font-bold text-gray-400 uppercase tracking-[0.2em] mt-2">Annual Growth</span>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 mt-12">
        {[45, 90, 65, 100].map((h, i) => (
          <div key={i} className="h-32 bg-gray-50 rounded-2xl flex flex-col justify-end p-2 border border-gray-100/50">
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: `${h}%` }}
              transition={{ delay: i * 0.1 + 0.5, duration: 1.2, ease: "easeOut" }}
              className={`w-full rounded-xl shadow-sm ${i === 3 ? 'bg-purple-500' : 'bg-gray-200'}`}
            />
          </div>
        ))}
      </div>
      
      <div className="absolute top-24 right-10 flex gap-2">
         <div className="w-10 h-10 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-500 border border-purple-100 shadow-sm cursor-pointer hover:bg-purple-100 transition-colors">
           <Settings size={20} />
         </div>
      </div>
    </div>
  </div>
);

export default FeaturesStack;
