
import React from 'react';
import { MoreHorizontal, Calendar, Video, ArrowUpRight, ArrowDownRight, Users, TrendingUp, CheckCircle2, DollarSign, Plus, Settings } from 'lucide-react';

const WorkflowGrid: React.FC = () => {
  return (
    <section className="bg-white py-16 sm:py-32">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Designed to drive your <br className="hidden sm:block" /> Sacco workflow forward
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600 px-2">
            Explore features crafted with precision to help you stay ahead, maximizing productivity and financial health for your cooperative.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:grid-rows-2 lg:h-auto xl:h-[650px]">
          
          {/* 1. Analytics / Loan Performance (Top Left - Large) */}
          <div className="col-span-1 lg:col-span-5 row-span-1 bg-gray-50 rounded-[2rem] p-6 sm:p-8 border border-gray-100 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
             <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-white rounded-lg border border-gray-200">
                        <TrendingUp size={20} className="text-gray-900"/>
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg">Loan Disbursement</h3>
                </div>
                <button className="text-gray-400 hover:text-gray-600"><MoreHorizontal /></button>
             </div>
             
             <div className="flex items-end gap-2 sm:gap-4 h-40 sm:h-48 w-full mt-auto px-1 sm:px-2">
                 {[35, 55, 45, 70, 60, 85, 95].map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col justify-end group relative">
                        <div 
                          className={`w-full rounded-t-lg transition-all duration-500 group-hover:bg-opacity-90 ${i === 3 ? 'bg-black' : 'bg-gray-200'}`} 
                          style={{ height: `${h}%` }}
                        >
                        </div>
                    </div>
                 ))}
             </div>
             <div className="flex justify-between mt-4 sm:mt-6 text-[10px] sm:text-xs text-gray-400 font-semibold px-2">
                 <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
             </div>
          </div>

          {/* 2. Task Card (Top Center - Medium) */}
          <div className="col-span-1 lg:col-span-4 bg-white rounded-[2rem] p-6 sm:p-8 border border-gray-100 shadow-sm flex flex-col relative overflow-hidden group hover:border-gray-300 transition-colors">
              <div className="flex justify-between items-start mb-4 sm:mb-6">
                  <div className="p-2.5 bg-yellow-50 rounded-xl text-yellow-600 border border-yellow-100">
                      <CheckCircle2 size={24} />
                  </div>
                  <button className="text-gray-400 hover:text-gray-600"><MoreHorizontal /></button>
              </div>
              
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">Approve Dividend Payouts</h3>
              <p className="text-xs sm:text-sm text-gray-500 font-medium mb-4 sm:mb-8">Finance Department</p>
              
              <p className="text-sm sm:text-gray-600 mb-6 leading-relaxed">Review final dividend calculation for FY 2024 before AGM distribution.</p>
              
              <div className="mt-auto flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-[10px] sm:text-sm font-medium text-gray-500 bg-gray-50 px-3 py-1.5 rounded-full">
                      <Calendar size={14} />
                      <span className="whitespace-nowrap">2 days left</span>
                  </div>
                  <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-1 text-[10px] sm:text-xs font-bold text-blue-700 ring-1 ring-inset ring-blue-700/10 whitespace-nowrap">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-1.5"></span>
                    In Progress
                  </span>
              </div>
          </div>

          {/* 3. Event Card (Top Right - Medium) */}
          <div className="col-span-1 lg:col-span-3 bg-white rounded-[2rem] p-6 border border-gray-100 shadow-sm flex flex-col hover:border-gray-300 transition-colors">
               <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                   <div className="flex flex-col items-center bg-gray-50 px-2 sm:px-3 py-1.5 sm:py-2 rounded-xl text-gray-900 border border-gray-200 min-w-[3rem] sm:min-w-[3.5rem]">
                       <span className="text-[9px] sm:text-[10px] font-bold uppercase text-red-500 tracking-wider">NOV</span>
                       <span className="text-lg sm:text-xl font-bold">22</span>
                   </div>
                   <div className="flex-1">
                       <h3 className="font-bold text-gray-900 text-xs sm:text-sm leading-snug">Credit Review</h3>
                       <p className="text-[10px] sm:text-xs text-gray-500 mt-1">6:00 PM</p>
                   </div>
                   <div className="flex -space-x-2">
                       <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white bg-gray-200"></div>
                       <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white bg-gray-300"></div>
                   </div>
               </div>
               <button className="mt-auto w-full py-2.5 rounded-xl bg-blue-50 border border-blue-100 text-xs sm:text-sm font-bold text-blue-700 hover:bg-blue-100 flex items-center justify-center gap-2 transition-colors">
                   <Video size={16} />
                   Join the call
               </button>
          </div>

          {/* 4. Revenue / Interest Income (Bottom Left 1) */}
          <div className="col-span-1 lg:col-span-3 lg:col-start-1 row-start-2 bg-white rounded-[2rem] p-6 border border-gray-100 shadow-sm flex flex-col justify-between hover:border-gray-300 transition-colors">
              <div className="flex justify-between items-start">
                  <div className="p-2 bg-gray-50 rounded-full text-gray-900 border border-gray-200">
                      <DollarSign size={18} />
                  </div>
                  <ArrowUpRight size={16} className="text-gray-400" />
              </div>
              <div className="mt-4">
                  <p className="text-xs sm:text-sm font-medium text-gray-500">Interest Income</p>
                  <p className="text-xl sm:text-2xl font-bold text-gray-900 mt-1">$50,974</p>
                  <p className="text-[10px] sm:text-xs font-bold text-green-600 mt-1 flex items-center gap-1">
                      <ArrowUpRight size={12} strokeWidth={3}/> +25.2%
                  </p>
              </div>
          </div>

          {/* 5. Members (Bottom Left 2) */}
          <div className="col-span-1 lg:col-span-3 lg:col-start-4 row-start-2 bg-white rounded-[2rem] p-6 border border-gray-100 shadow-sm flex flex-col justify-between hover:border-gray-300 transition-colors">
               <div className="flex justify-between items-start">
                  <div className="p-2 bg-gray-50 rounded-full text-gray-900 border border-gray-200">
                      <Users size={18} />
                  </div>
                  <ArrowUpRight size={16} className="text-gray-400" />
              </div>
              <div className="mt-4">
                  <p className="text-xs sm:text-sm font-medium text-gray-500">New Members</p>
                  <p className="text-xl sm:text-2xl font-bold text-gray-900 mt-1">1,218</p>
                  <p className="text-[10px] sm:text-xs font-bold text-red-500 mt-1 flex items-center gap-1">
                      <ArrowDownRight size={12} strokeWidth={3}/> -12.4%
                  </p>
              </div>
          </div>

          {/* 6. Portfolio Mix (Bottom Right - Large) */}
          <div className="col-span-1 lg:col-span-6 lg:col-start-7 row-start-2 bg-white rounded-[2rem] p-6 sm:p-8 border border-gray-100 shadow-sm flex flex-col sm:grid sm:grid-cols-2 gap-6 sm:gap-8 items-center hover:border-gray-300 transition-colors">
              <div className="relative flex items-center justify-center">
                   <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-[10px] sm:border-[16px] border-orange-100 border-t-orange-500 rotate-[-45deg] relative"></div>
                   <div className="absolute inset-0 flex flex-col items-center justify-center">
                       <span className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">1,248</span>
                       <span className="text-[8px] sm:text-[10px] font-bold text-gray-400 uppercase">Loans</span>
                   </div>
              </div>
              <div className="w-full flex flex-col space-y-3 sm:space-y-4">
                  {[
                      { label: "Business", color: "bg-orange-500", val: "72%" },
                      { label: "Agriculture", color: "bg-orange-300", val: "28%" }
                  ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between text-xs sm:text-sm font-medium">
                          <div className="flex items-center gap-2">
                              <span className={`w-2 h-2 rounded-full ${item.color}`}></span>
                              <span className="text-gray-600">{item.label}</span>
                          </div>
                          <span className="font-bold text-gray-900">{item.val}</span>
                      </div>
                  ))}
                  <button className="mt-2 flex items-center gap-2 text-[10px] sm:text-xs font-bold text-gray-900 hover:text-gray-600 border border-dashed border-gray-300 rounded-lg p-2 justify-center">
                      <Plus size={14} /> Add integration
                  </button>
              </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
export default WorkflowGrid;
