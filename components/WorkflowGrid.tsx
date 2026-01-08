import React from 'react';
import { MoreHorizontal, Calendar, Video, ArrowUpRight, ArrowDownRight, Users, TrendingUp, CheckCircle2, DollarSign, Plus, Settings } from 'lucide-react';

const WorkflowGrid: React.FC = () => {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Designed to drive your <br /> Sacco workflow forward
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Explore features crafted with precision to help you stay ahead, maximizing productivity and financial health for your cooperative.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:grid-rows-2 lg:h-[650px]">
          
          {/* 1. Analytics / Loan Performance (Top Left - Large) */}
          <div className="col-span-1 lg:col-span-5 row-span-1 bg-gray-50 rounded-[2rem] p-8 border border-gray-100 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
             <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-white rounded-lg border border-gray-200">
                        <TrendingUp size={20} className="text-gray-900"/>
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg">Loan Disbursement</h3>
                </div>
                <button className="text-gray-400 hover:text-gray-600"><MoreHorizontal /></button>
             </div>
             
             <div className="flex items-end gap-3 sm:gap-4 h-48 w-full mt-auto px-2">
                 {/* Mock Bars */}
                 {[35, 55, 45, 70, 60, 85, 95].map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col justify-end group relative">
                        <div 
                          className={`w-full rounded-t-lg transition-all duration-500 group-hover:bg-opacity-90 ${i === 3 ? 'bg-black' : 'bg-gray-200'}`} 
                          style={{ height: `${h}%` }}
                        >
                             {i === 3 && (
                                 <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white shadow-xl border border-gray-100 px-3 py-1.5 rounded-lg text-sm font-bold whitespace-nowrap z-10 flex flex-col items-center">
                                     <span className="text-gray-900">$19,740</span>
                                     <div className="w-2 h-2 bg-white rotate-45 absolute -bottom-1 border-r border-b border-gray-100"></div>
                                 </div>
                             )}
                        </div>
                    </div>
                 ))}
             </div>
             <div className="flex justify-between mt-6 text-xs text-gray-400 font-semibold px-2">
                 <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
             </div>
          </div>

          {/* 2. Task Card (Top Center - Medium) */}
          <div className="col-span-1 lg:col-span-4 bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm flex flex-col relative overflow-hidden group hover:border-gray-300 transition-colors">
              <div className="flex justify-between items-start mb-6">
                  <div className="p-2.5 bg-yellow-50 rounded-xl text-yellow-600 border border-yellow-100">
                      <CheckCircle2 size={24} />
                  </div>
                  <button className="text-gray-400 hover:text-gray-600"><MoreHorizontal /></button>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-1">Approve Dividend Payouts</h3>
              <p className="text-sm text-gray-500 font-medium mb-8">Finance Department</p>
              
              <p className="text-gray-600 mb-6 leading-relaxed">Review final dividend calculation for FY 2024 before AGM distribution.</p>
              
              <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm font-medium text-gray-500 bg-gray-50 px-3 py-1.5 rounded-full">
                      <Calendar size={14} />
                      <span>2 days left</span>
                  </div>
                  <div className="flex items-center gap-2">
                      <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-1 text-xs font-bold text-blue-700 ring-1 ring-inset ring-blue-700/10">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-1.5 animate-pulse"></span>
                        In Progress
                      </span>
                  </div>
              </div>
              
              <div className="mt-6 flex items-center gap-4">
                  <span className="text-xs font-bold text-gray-900">Progress</span>
                  <div className="h-2 flex-1 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gray-900 w-[72%] rounded-full"></div>
                  </div>
                  <span className="text-xs font-bold text-gray-900">72%</span>
              </div>
          </div>

          {/* 3. Event Card (Top Right - Medium) */}
          <div className="col-span-1 lg:col-span-3 bg-white rounded-[2rem] p-6 border border-gray-100 shadow-sm flex flex-col hover:border-gray-300 transition-colors">
               <div className="flex items-start gap-4 mb-6">
                   <div className="flex flex-col items-center bg-gray-50 px-3 py-2 rounded-xl text-gray-900 border border-gray-200 min-w-[3.5rem]">
                       <span className="text-[10px] font-bold uppercase text-red-500 tracking-wider">NOV</span>
                       <span className="text-xl font-bold">22</span>
                   </div>
                   <div>
                       <h3 className="font-bold text-gray-900 text-sm leading-snug">Credit Committee Review</h3>
                       <p className="text-xs text-gray-500 mt-1">6:00 PM - 7:00 PM</p>
                   </div>
                   <div className="flex -space-x-2 ml-auto">
                       <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-200"></div>
                       <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-300"></div>
                   </div>
               </div>
               
               <div className="flex items-center gap-2 mb-6">
                   <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                   </span>
                   <span className="text-xs font-medium text-gray-600">Live Meeting</span>
                   <span className="ml-auto bg-green-50 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full border border-green-100">Going</span>
               </div>
               
               <div className="bg-gray-50 rounded-xl p-3 mb-4">
                   <p className="text-xs font-bold text-gray-900 mb-1">Meeting Notes</p>
                   <p className="text-[10px] text-gray-500 leading-relaxed">Loan applications for Group B are finalized. Risk assessment report attached for review.</p>
               </div>

               <button className="mt-auto w-full py-3 rounded-xl bg-blue-50 border border-blue-100 text-sm font-bold text-blue-700 hover:bg-blue-100 flex items-center justify-center gap-2 transition-colors">
                   <Video size={16} />
                   Join the call
               </button>
          </div>

          {/* 4. Revenue / Interest Income (Bottom Left 1) */}
          <div className="col-span-1 lg:col-span-3 lg:col-start-1 row-start-2 bg-white rounded-[2rem] p-6 border border-gray-100 shadow-sm flex flex-col justify-between hover:border-gray-300 transition-colors">
              <div className="flex justify-between items-start">
                  <div className="p-2.5 bg-gray-50 rounded-full text-gray-900 border border-gray-200">
                      <DollarSign size={20} />
                  </div>
                  <div className="p-1.5 rounded-full hover:bg-gray-50 text-gray-400 cursor-pointer">
                      <ArrowUpRight size={16} />
                  </div>
              </div>
              <div className="mt-4">
                  <p className="text-sm font-medium text-gray-500">Interest Income</p>
                  <div className="flex items-baseline gap-2 mt-1">
                      <p className="text-2xl font-bold text-gray-900">$50,974</p>
                  </div>
                  <p className="text-xs font-bold text-green-600 mt-2 flex items-center gap-1">
                      <ArrowUpRight size={12} strokeWidth={3}/> +25.2%
                  </p>
              </div>
              <div className="h-12 mt-4 relative">
                 <svg viewBox="0 0 100 25" className="w-full h-full overflow-visible preserve-3d">
                     <path d="M0 20 C 20 20, 30 5, 50 12 C 70 18, 80 0, 100 8" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" />
                     <path d="M0 20 C 20 20, 30 5, 50 12 C 70 18, 80 0, 100 8 V 30 H 0 Z" fill="url(#gradientGreen)" opacity="0.1" />
                     <defs>
                        <linearGradient id="gradientGreen" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#22c55e" />
                            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                        </linearGradient>
                     </defs>
                 </svg>
              </div>
          </div>

          {/* 5. Members (Bottom Left 2) */}
          <div className="col-span-1 lg:col-span-3 lg:col-start-4 row-start-2 bg-white rounded-[2rem] p-6 border border-gray-100 shadow-sm flex flex-col justify-between hover:border-gray-300 transition-colors">
               <div className="flex justify-between items-start">
                  <div className="p-2.5 bg-gray-50 rounded-full text-gray-900 border border-gray-200">
                      <Users size={20} />
                  </div>
                  <div className="p-1.5 rounded-full hover:bg-gray-50 text-gray-400 cursor-pointer">
                      <ArrowUpRight size={16} />
                  </div>
              </div>
              <div className="mt-4">
                  <p className="text-sm font-medium text-gray-500">New Members</p>
                  <div className="flex items-baseline gap-2 mt-1">
                      <p className="text-2xl font-bold text-gray-900">1,218</p>
                  </div>
                  <p className="text-xs font-bold text-red-500 mt-2 flex items-center gap-1">
                      <ArrowDownRight size={12} strokeWidth={3}/> -12.4%
                  </p>
              </div>
              <div className="h-12 mt-4">
                 <svg viewBox="0 0 100 25" className="w-full h-full overflow-visible">
                     <path d="M0 20 C 20 20, 30 10, 50 15 C 70 20, 80 5, 100 15" fill="none" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" />
                 </svg>
              </div>
          </div>

          {/* 6. Portfolio Mix (Bottom Right - Large) */}
          <div className="col-span-1 lg:col-span-6 lg:col-start-7 row-start-2 bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-8 items-center hover:border-gray-300 transition-colors">
              <div className="relative flex items-center justify-center">
                   {/* Donut Chart Simulation */}
                   <div className="w-40 h-40 rounded-full border-[16px] border-orange-100 border-t-orange-500 border-r-orange-400 rotate-[-45deg] relative"></div>
                   <div className="absolute top-0 right-0 w-8 h-8 bg-gray-50 rounded-full flex items-center justify-center border border-gray-200">
                       <Settings size={14} className="text-gray-500"/>
                   </div>
                   <div className="absolute inset-0 flex flex-col items-center justify-center">
                       <span className="text-3xl font-bold text-gray-900 tracking-tight">1,248</span>
                       <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">Total Loans</span>
                   </div>
              </div>
              
              <div className="flex flex-col h-full justify-center space-y-5">
                  <div className="flex items-center justify-between group cursor-pointer">
                      <div className="flex items-center gap-3">
                          <span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span>
                          <span className="text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors">Business</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-gray-900">72%</span>
                        <span className="bg-green-100 text-green-700 text-[10px] font-bold px-1.5 py-0.5 rounded">↗ 19.8%</span>
                      </div>
                  </div>
                   <div className="flex items-center justify-between group cursor-pointer">
                      <div className="flex items-center gap-3">
                          <span className="w-2.5 h-2.5 rounded-full bg-orange-300"></span>
                          <span className="text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors">Organic Search</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-gray-900">28%</span>
                        <span className="bg-red-100 text-red-700 text-[10px] font-bold px-1.5 py-0.5 rounded">↘ 12.4%</span>
                      </div>
                  </div>
                   <div className="flex items-center justify-between group cursor-pointer">
                      <div className="flex items-center gap-3">
                          <span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>
                          <span className="text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors">Direct Traffic</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-gray-900">16%</span>
                        <span className="bg-green-100 text-green-700 text-[10px] font-bold px-1.5 py-0.5 rounded">↗ 14.5%</span>
                      </div>
                  </div>
                  
                  <div className="pt-4 mt-auto">
                      <button className="flex items-center gap-2 text-sm font-bold text-gray-900 hover:text-gray-600 transition-colors w-full px-4 py-3 rounded-xl border border-dashed border-gray-300 hover:border-gray-400 hover:bg-gray-50">
                          <Plus size={16} />
                          Add integration
                      </button>
                  </div>
              </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
export default WorkflowGrid;