import React from 'react';
import { ArrowRight, Check, User, BarChart3, PieChart, FileText, ShieldCheck, Wallet, ArrowUpRight, ArrowDownLeft, Download, Bell, Smartphone, Users, Search, CreditCard, LayoutGrid, Settings, DollarSign, Activity, FileCheck } from 'lucide-react';

const FeaturesStack: React.FC = () => {
  const features = [
    {
      tag: "Member Management",
      tagColor: "bg-blue-100 text-blue-700",
      title: "Digital Profiles & KYC",
      description: "Complete member registration with digital profiles. Manage KYC documents, track shares, and handle role-based access for admins, tellers, and auditors.",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      mockup: <MemberMockupScene />
    },
    {
      tag: "Savings & Loans",
      tagColor: "bg-orange-100 text-orange-700",
      title: "Automated Workflows",
      description: "Manage multiple savings products and streamline loan applications with automated approval workflows, guarantor management, and repayment tracking.",
      buttonColor: "bg-orange-600 hover:bg-orange-700",
      mockup: <LoanMockupScene />
    },
    {
      tag: "Payments & Accounting",
      tagColor: "bg-slate-100 text-slate-700",
      title: "Integrated Finance",
      description: "Direct integration with Telebirr, CBE Birr, and banks. Automated ledger, real-time balances, and audit-ready financial records with transaction reconciliation.",
      buttonColor: "bg-slate-900 hover:bg-black",
      mockup: <FinanceMockupScene />
    },
    {
      tag: "Reporting & Analytics",
      tagColor: "bg-purple-100 text-purple-700",
      title: "Compliance & Insights",
      description: "SACCO performance dashboards with real-time insights. Generate SASRA-compliant reports, member statements, and audit logs exportable to PDF/Excel.",
      buttonColor: "bg-purple-600 hover:bg-purple-700",
      mockup: <ReportingMockupScene />
    },
    {
      tag: "Member Experience",
      tagColor: "bg-emerald-100 text-emerald-700",
      title: "Portals & Notifications",
      description: "Empower members with self-service portals to view savings and loans. Automated SMS alerts, faster service, and a dedicated staff dashboard.",
      buttonColor: "bg-emerald-600 hover:bg-emerald-700",
      mockup: <ExperienceMockupScene />
    }
  ];

  return (
    <section className="bg-[#FAFAFA] pb-32 relative pt-20" id="features">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-40 pb-24">
               {features.map((feature, index) => (
                 <FeatureCard 
                   key={index}
                   index={index}
                   total={features.length}
                   {...feature}
                 >
                   {feature.mockup}
                 </FeatureCard>
               ))}
            </div>
        </div>
    </section>
  )
}

interface FeatureCardProps {
    tag: string;
    tagColor: string;
    title: string;
    description: string;
    children: React.ReactNode;
    index: number;
    total: number;
    buttonColor: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ tag, tagColor, title, description, children, index, total, buttonColor }) => {
    // Stacking logic
    const topOffset = 100 + (index * 40); 
    
    // Width logic: Cards get progressively wider, starting from 96% to 100%
    const widthPercent = 96 + (index * (4 / (total - 1))); 

    return (
        <div 
            className="sticky transition-all duration-700 ease-out mx-auto" 
            style={{ 
                top: `${topOffset}px`,
                width: `var(--card-width, 100%)`
            }}
        >
             <style>{`
                @media (min-width: 1024px) {
                    div[style*="top: ${topOffset}px"] {
                        --card-width: ${widthPercent}%;
                    }
                }
            `}</style>

            <div className="bg-white rounded-[2rem] lg:rounded-[3rem] border border-gray-200 shadow-2xl overflow-hidden grid lg:grid-cols-2 min-h-[550px] lg:h-[750px] relative z-10 group">
                {/* Content Side */}
                <div className="p-8 lg:p-20 flex flex-col justify-center order-2 lg:order-1 relative bg-white z-20">
                    <div className={`inline-flex self-start px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-8 ${tagColor}`}>
                        {tag}
                    </div>
                    <h2 className="text-3xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
                        {title}
                    </h2>
                    <p className="text-lg lg:text-xl text-gray-500 leading-relaxed mb-10 max-w-lg">
                        {description}
                    </p>
                    <button className={`self-start flex items-center gap-3 ${buttonColor} text-white px-8 py-4 rounded-full text-sm font-bold transition-all hover:pr-10 shadow-lg hover:shadow-xl hover:-translate-y-1`}>
                        Explore Features
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
                
                {/* Visual Side - Full Fill with Scene */}
                <div className="order-1 lg:order-2 bg-gray-50 relative overflow-hidden h-[350px] lg:h-full border-b lg:border-b-0 lg:border-l border-gray-100 group-hover:bg-gray-100/50 transition-colors duration-500">
                    {children}
                </div>
            </div>
        </div>
    )
}

// --- SHARED COMPONENTS ---

const SceneContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="w-full h-full bg-slate-50 relative overflow-hidden flex items-center justify-center p-8 lg:p-12">
        {/* Dot Pattern Background */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}></div>
        {/* Gradient Blob */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>
        
        {children}
    </div>
);

const BrowserWindow: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
    <div className={`bg-white rounded-xl shadow-2xl border border-gray-200/80 overflow-hidden flex flex-col ${className}`}>
        {/* Header */}
        <div className="h-9 bg-gray-50/80 backdrop-blur-sm border-b border-gray-200 flex items-center px-4 gap-3 select-none">
            <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#FF5F57] border border-[#E0443E]"></div>
                <div className="w-3 h-3 rounded-full bg-[#FEBC2E] border border-[#D89E24]"></div>
                <div className="w-3 h-3 rounded-full bg-[#28C840] border border-[#1AAB29]"></div>
            </div>
            <div className="flex-1 flex justify-center">
                 <div className="h-5 w-full max-w-xs bg-gray-200/50 rounded flex items-center justify-center">
                    <div className="flex items-center gap-1 text-[10px] text-gray-400">
                        <span className="w-2 h-2 rounded-full bg-gray-300"></span>
                        lamosa.app
                    </div>
                 </div>
            </div>
        </div>
        {/* Body */}
        <div className="flex-1 bg-white relative overflow-hidden">
            {children}
        </div>
    </div>
);

const SidebarItem: React.FC<{ icon: any; label: string; active?: boolean }> = ({ icon: Icon, label, active }) => (
    <div className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'}`}>
        <Icon size={16} />
        <span>{label}</span>
    </div>
);

// --- SPECIFIC SCENES ---

const MemberMockupScene = () => (
    <SceneContainer>
        {/* Main Browser Window */}
        <BrowserWindow className="w-full max-w-[90%] h-[400px] lg:h-[450px] transform lg:translate-x-8 lg:translate-y-8 lg:rotate-1 hover:rotate-0 transition-transform duration-700">
            <div className="flex h-full">
                {/* Sidebar */}
                <div className="w-48 bg-white border-r border-gray-100 p-4 hidden sm:block flex-shrink-0">
                     <div className="space-y-1">
                        <SidebarItem icon={LayoutGrid} label="Dashboard" />
                        <SidebarItem icon={Users} label="Members" active />
                        <SidebarItem icon={FileCheck} label="KYC" />
                        <SidebarItem icon={Settings} label="Settings" />
                     </div>
                </div>
                {/* Content */}
                <div className="flex-1 p-6 bg-gray-50/30 overflow-auto">
                     <div className="flex justify-between items-center mb-6">
                         <div>
                             <h3 className="text-xl font-bold text-gray-900">Sarah Jenkins</h3>
                             <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">Active Member</span>
                         </div>
                         <div className="h-10 w-10 rounded-full bg-gray-200 border-2 border-white shadow-sm overflow-hidden flex-shrink-0">
                             <img src="https://ui-avatars.com/api/?name=Sarah+J&background=0D8ABC&color=fff" alt="" />
                         </div>
                     </div>
                     
                     <div className="grid grid-cols-2 gap-4 mb-6">
                         <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                             <div className="flex items-center gap-2 text-gray-500 mb-1">
                                 <Wallet size={14} />
                                 <span className="text-xs font-semibold uppercase">Shares</span>
                             </div>
                             <p className="text-2xl font-bold text-gray-900">500</p>
                         </div>
                         <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                             <div className="flex items-center gap-2 text-gray-500 mb-1">
                                 <DollarSign size={14} />
                                 <span className="text-xs font-semibold uppercase">Savings</span>
                             </div>
                             <p className="text-2xl font-bold text-gray-900">$12,450</p>
                         </div>
                     </div>

                     <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
                         <h4 className="text-sm font-bold text-gray-900 mb-3">Documents</h4>
                         <div className="space-y-2">
                             <div className="flex items-center justify-between p-2 bg-gray-50 rounded border border-gray-100">
                                 <div className="flex items-center gap-2 text-sm text-gray-700">
                                     <FileText size={14} className="text-blue-500" />
                                     National ID.pdf
                                 </div>
                                 <Check size={14} className="text-green-500" />
                             </div>
                             <div className="flex items-center justify-between p-2 bg-gray-50 rounded border border-gray-100">
                                 <div className="flex items-center gap-2 text-sm text-gray-700">
                                     <FileText size={14} className="text-blue-500" />
                                     Photo.jpg
                                 </div>
                                 <Check size={14} className="text-green-500" />
                             </div>
                         </div>
                     </div>
                </div>
            </div>
        </BrowserWindow>
    </SceneContainer>
);

const LoanMockupScene = () => (
    <SceneContainer>
         <BrowserWindow className="w-full max-w-[90%] h-[400px] lg:h-[450px] transform lg:-translate-x-4 hover:translate-x-0 transition-transform duration-700 z-10 relative">
             <div className="flex h-full flex-col">
                 <div className="border-b border-gray-100 px-6 py-4 bg-white flex justify-between items-center">
                     <div>
                         <h3 className="text-lg font-bold text-gray-900">Loan Applications</h3>
                         <p className="text-xs text-gray-500">Queue Management</p>
                     </div>
                     <button className="bg-orange-600 text-white text-xs px-3 py-1.5 rounded-lg font-medium">New Application</button>
                 </div>
                 <div className="flex-1 bg-gray-50/50 p-6 overflow-hidden">
                     <div className="space-y-3">
                         {/* Card 1 */}
                         <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex gap-4">
                             <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 flex-shrink-0 font-bold">JD</div>
                             <div className="flex-1">
                                 <div className="flex justify-between items-start">
                                     <h4 className="font-bold text-gray-900">Business Loan</h4>
                                     <span className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded font-bold">Review</span>
                                 </div>
                                 <p className="text-sm text-gray-500">John Doe • $5,000</p>
                                 <div className="mt-2 w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                                     <div className="w-2/3 h-full bg-orange-500 rounded-full"></div>
                                 </div>
                                 <p className="text-[10px] text-gray-400 mt-1 text-right">Guarantors: 2/3</p>
                             </div>
                         </div>
                         {/* Card 2 */}
                          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex gap-4 opacity-75">
                             <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0 font-bold">AS</div>
                             <div className="flex-1">
                                 <div className="flex justify-between items-start">
                                     <h4 className="font-bold text-gray-900">Emergency Loan</h4>
                                     <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded font-bold">Approved</span>
                                 </div>
                                 <p className="text-sm text-gray-500">Alice Smith • $500</p>
                                 <div className="mt-2 flex gap-2">
                                     <button className="text-xs bg-gray-900 text-white px-2 py-1 rounded">Disburse</button>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </BrowserWindow>
         
         {/* Floating Element behind */}
         <div className="absolute top-10 right-10 bg-white p-4 rounded-xl shadow-xl border border-gray-200 w-48 hidden lg:block transform rotate-6">
             <div className="flex items-center gap-2 mb-2">
                 <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                 <span className="text-xs font-bold text-gray-900">Live Interest</span>
             </div>
             <p className="text-2xl font-mono text-gray-900">12.5%</p>
             <p className="text-[10px] text-gray-400">Reducing Balance</p>
         </div>
    </SceneContainer>
);

const FinanceMockupScene = () => (
    <SceneContainer>
        <BrowserWindow className="w-full max-w-[90%] h-[400px] lg:h-[480px] z-10">
            <div className="flex h-full">
                {/* Narrow Sidebar */}
                <div className="w-16 bg-gray-900 flex flex-col items-center py-6 gap-6 flex-shrink-0">
                    <div className="w-8 h-8 rounded bg-gray-800"></div>
                    <div className="w-8 h-8 rounded bg-gray-800/50"></div>
                    <div className="w-8 h-8 rounded bg-gray-800/50"></div>
                    <div className="mt-auto w-8 h-8 rounded-full bg-gray-700"></div>
                </div>
                {/* Main */}
                <div className="flex-1 bg-gray-50 p-6 overflow-auto">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                             <p className="text-xs text-gray-500 font-medium mb-1">Telebirr Balance</p>
                             <div className="flex items-center justify-between">
                                 <h3 className="text-xl font-bold text-gray-900">$42,300</h3>
                                 <div className="w-8 h-8 rounded bg-blue-500 flex items-center justify-center text-white text-[10px] font-bold">TB</div>
                             </div>
                        </div>
                        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                             <p className="text-xs text-gray-500 font-medium mb-1">CBE Birr Balance</p>
                             <div className="flex items-center justify-between">
                                 <h3 className="text-xl font-bold text-gray-900">$18,150</h3>
                                 <div className="w-8 h-8 rounded bg-purple-600 flex items-center justify-center text-white text-[10px] font-bold">CB</div>
                             </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                        <div className="px-4 py-3 border-b border-gray-100 flex justify-between">
                            <h4 className="text-sm font-bold text-gray-900">Recent Transactions</h4>
                        </div>
                        {[1,2,3].map(i => (
                            <div key={i} className="px-4 py-3 border-b border-gray-50 flex items-center justify-between hover:bg-gray-50">
                                <div className="flex items-center gap-3">
                                    <div className={`p-1.5 rounded ${i===2 ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
                                        {i===2 ? <ArrowUpRight size={14}/> : <ArrowDownLeft size={14}/>}
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-gray-900">Mobile Money</p>
                                        <p className="text-[10px] text-gray-400">Ref: 9928392</p>
                                    </div>
                                </div>
                                <span className="text-xs font-mono font-medium text-gray-900">{i===2 ? '-$200' : '+$500'}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </BrowserWindow>
    </SceneContainer>
);

const ReportingMockupScene = () => (
    <SceneContainer>
        <BrowserWindow className="w-full max-w-[90%] h-[400px] lg:h-[450px] transform lg:rotate-[-1deg]">
            <div className="flex h-full flex-col bg-white">
                <div className="border-b border-gray-100 p-4 flex justify-between items-center">
                    <div>
                        <h3 className="font-bold text-gray-900">Financial Reports</h3>
                        <p className="text-xs text-gray-500">FY 2024 - Q2</p>
                    </div>
                    <div className="flex gap-2">
                        <button className="p-2 hover:bg-gray-100 rounded text-gray-500"><Download size={16}/></button>
                    </div>
                </div>
                <div className="flex-1 p-6 grid grid-cols-3 gap-6 overflow-auto">
                    {/* Main Chart Area */}
                    <div className="col-span-2 space-y-6">
                        <div className="space-y-2">
                            <div className="flex justify-between text-xs font-medium text-gray-500">
                                <span>Revenue Growth</span>
                                <span className="text-green-600">+24%</span>
                            </div>
                            <div className="flex items-end gap-1 h-32">
                                {[40, 65, 50, 80, 75, 95, 85].map((h, i) => (
                                    <div key={i} className="flex-1 bg-purple-100 hover:bg-purple-500 transition-colors rounded-t-sm relative group" style={{ height: `${h}%` }}>
                                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] px-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">{h}%</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                             <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                                 <p className="text-xs text-gray-500">Liquidity Ratio</p>
                                 <p className="text-lg font-bold text-gray-900">32.1%</p>
                             </div>
                             <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                                 <p className="text-xs text-gray-500">PAR 30</p>
                                 <p className="text-lg font-bold text-red-500">4.2%</p>
                             </div>
                        </div>
                    </div>
                    {/* Right Side Stats */}
                    <div className="col-span-1 space-y-4 pt-2">
                        <div className="relative w-24 h-24 mx-auto">
                            <div className="w-full h-full rounded-full border-8 border-purple-500 border-r-transparent rotate-45"></div>
                            <div className="absolute inset-0 flex items-center justify-center flex-col">
                                <span className="text-xl font-bold">85%</span>
                            </div>
                        </div>
                        <p className="text-center text-xs text-gray-500">Compliance Score</p>
                        
                        <div className="pt-4 border-t border-gray-100">
                             <div className="flex items-center gap-2 mb-2">
                                 <FileText size={12} className="text-purple-600"/>
                                 <span className="text-xs font-medium">SASRA Form 2B</span>
                             </div>
                             <div className="flex items-center gap-2">
                                 <FileText size={12} className="text-purple-600"/>
                                 <span className="text-xs font-medium">Balance Sheet</span>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </BrowserWindow>
    </SceneContainer>
);

const ExperienceMockupScene = () => (
    <SceneContainer>
        {/* Floating Phone */}
        <div className="relative w-[280px] h-[540px] bg-gray-900 rounded-[3rem] border-[6px] border-gray-900 shadow-2xl overflow-hidden z-20 transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
             {/* Notch */}
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-gray-900 rounded-b-xl z-30"></div>
             
             {/* Screen */}
             <div className="w-full h-full bg-white flex flex-col pt-10">
                 <div className="px-5 mb-6 flex justify-between items-center">
                     <div>
                        <p className="text-[10px] text-gray-400 font-medium">WELCOME BACK</p>
                        <h3 className="text-lg font-bold text-gray-900">Sarah</h3>
                     </div>
                     <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                         <User size={14} className="text-gray-600"/>
                     </div>
                 </div>

                 {/* Balance Card */}
                 <div className="mx-5 p-5 bg-[#059669] rounded-2xl text-white shadow-lg shadow-emerald-200/50 mb-6 relative overflow-hidden group">
                      <div className="relative z-10">
                          <p className="text-[10px] text-emerald-100 mb-1 font-medium tracking-wide">TOTAL SAVINGS</p>
                          <h2 className="text-2xl font-bold mb-4">$12,450.00</h2>
                          <div className="flex gap-2">
                              <button className="flex-1 bg-white/20 py-1.5 rounded-lg text-[10px] font-bold backdrop-blur-sm hover:bg-white/30 transition-colors">DEPOSIT</button>
                              <button className="flex-1 bg-white/20 py-1.5 rounded-lg text-[10px] font-bold backdrop-blur-sm hover:bg-white/30 transition-colors">WITHDRAW</button>
                          </div>
                      </div>
                      <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-emerald-400 rounded-full opacity-30 group-hover:scale-150 transition-transform duration-700"></div>
                 </div>

                 {/* Menu Grid */}
                 <div className="px-5 grid grid-cols-2 gap-3 mb-6">
                     <div className="aspect-square bg-gray-50 rounded-xl flex flex-col items-center justify-center gap-2 hover:bg-gray-100 cursor-pointer transition-colors border border-gray-100">
                         <FileText size={20} className="text-emerald-600"/>
                         <span className="text-[10px] font-bold text-gray-700">Statement</span>
                     </div>
                     <div className="aspect-square bg-gray-50 rounded-xl flex flex-col items-center justify-center gap-2 hover:bg-gray-100 cursor-pointer transition-colors border border-gray-100">
                         <CreditCard size={20} className="text-emerald-600"/>
                         <span className="text-[10px] font-bold text-gray-700">Loans</span>
                     </div>
                 </div>
                 
                 {/* Toast */}
                 <div className="mx-4 mt-auto mb-6 bg-black/90 text-white p-3 rounded-xl flex items-center gap-3 shadow-xl backdrop-blur-md">
                     <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                         <Check size={12} strokeWidth={3} className="text-white"/>
                     </div>
                     <div>
                         <p className="text-[10px] font-bold">Loan Approved</p>
                         <p className="text-[8px] text-gray-400">Your $500 loan is ready.</p>
                     </div>
                 </div>
             </div>
        </div>

        {/* Web Portal Teaser Behind */}
        <BrowserWindow className="absolute top-1/2 left-1/2 -translate-x-[40%] -translate-y-[40%] w-[400px] h-[300px] z-10 opacity-40 blur-[1px] hidden lg:flex">
             <div className="bg-gray-50 w-full h-full p-4 space-y-3">
                 <div className="h-20 bg-white rounded border border-gray-200"></div>
                 <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                 <div className="h-4 bg-gray-200 rounded w-3/4"></div>
             </div>
        </BrowserWindow>
    </SceneContainer>
);

export default FeaturesStack;