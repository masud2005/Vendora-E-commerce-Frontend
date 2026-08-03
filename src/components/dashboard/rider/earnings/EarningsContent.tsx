"use client";

import React, { useState } from "react";
import { 
  Wallet, 
  TrendingUp, 
  TrendingDown, 
  LineChart, 
  Zap, 
  Calendar, 
  Download, 
  ArrowUpRight,
  Gift
} from "lucide-react";
import toast from "react-hot-toast";

interface EarningsLedgerItem {
  date: string;
  deliveries: number;
  baseFee: number;
  bonus: number;
  tips: number;
  total: number;
}

const ledgerDb: EarningsLedgerItem[] = [
  { date: "Mon, Jun 3", deliveries: 13, baseFee: 780, bonus: 180, tips: 90, total: 1050 },
  { date: "Sun, Jun 2", deliveries: 16, baseFee: 960, bonus: 200, tips: 130, total: 1290 },
  { date: "Sat, Jun 1", deliveries: 21, baseFee: 1260, bonus: 220, tips: 130, total: 1610 },
  { date: "Fri, May 31", deliveries: 18, baseFee: 1080, bonus: 200, tips: 140, total: 1420 },
  { date: "Thu, May 30", deliveries: 11, baseFee: 660, bonus: 120, tips: 80, total: 860 },
  { date: "Wed, May 29", deliveries: 15, baseFee: 900, bonus: 180, tips: 100, total: 1180 },
  { date: "Tue, May 28", deliveries: 12, baseFee: 720, bonus: 140, tips: 80, total: 940 }
];

export default function EarningsContent() {
  const [activeTab, setActiveTab] = useState<"week" | "month">("week");
  const [hoveredBarIndex, setHoveredBarIndex] = useState<number | null>(null);

  const handleDownloadStatement = () => {
    toast.success("Downloading weekly earnings statement PDF...");
  };

  const handleRequestWithdrawal = () => {
    toast.success("Withdrawal request of ৳8,350 has been submitted for Monday settlement.");
  };

  return (
    <div className="space-y-6 w-full text-left select-none relative font-sans">
      
      {/* 1. Header Area */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-1">
        <div>
          <h1 className="text-xl sm:text-2xl font-black text-gray-900 leading-tight">
            Earnings
          </h1>
          <p className="text-xs sm:text-sm text-gray-400 font-semibold mt-1">
            Delivery fees, incentives and tips — settled to your wallet every Monday
          </p>
        </div>

        {/* Tab & Statement button */}
        <div className="flex items-center gap-3 self-start md:self-auto shrink-0 select-none">
          <div className="border border-gray-150 rounded-lg p-1 bg-gray-50/50 text-[11px] font-bold text-gray-500 flex items-center select-none">
            <button
              onClick={() => setActiveTab("week")}
              className={`px-3 py-1 rounded-md transition-all text-[9px] uppercase tracking-wider cursor-pointer ${
                activeTab === "week"
                  ? "bg-[#0F4C81] text-white shadow-3xs font-extrabold"
                  : "hover:text-gray-800"
              }`}
            >
              This Week
            </button>
            <button
              onClick={() => setActiveTab("month")}
              className={`px-3 py-1 rounded-md transition-all text-[9px] uppercase tracking-wider cursor-pointer ${
                activeTab === "month"
                  ? "bg-[#0F4C81] text-white shadow-3xs font-extrabold"
                  : "hover:text-gray-800"
              }`}
            >
              This Month
            </button>
          </div>

          <button
            onClick={handleDownloadStatement}
            className="flex items-center justify-center gap-1.5 border border-gray-250 bg-white hover:bg-gray-50 text-gray-700 font-bold py-2 px-4 rounded text-xs transition-colors cursor-pointer select-none"
          >
            <Download className="size-4 text-gray-500" />
            <span>Statement</span>
          </button>
        </div>
      </div>

      {/* 2. Top Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Card 1: Total Earned */}
        <div className="bg-white border border-gray-200 rounded-xl p-4.5 shadow-3xs relative flex flex-col justify-between min-h-28">
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-gray-400 font-black uppercase tracking-wider">Total Earned</span>
            <span className="flex items-center gap-0.5 text-[9px] font-black text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full">
              +12.5% <TrendingUp className="size-2.5" />
            </span>
          </div>
          <div className="mt-3">
            <h3 className="text-xl sm:text-2xl font-black text-gray-900">৳8,350</h3>
            <p className="text-[10px] sm:text-xs text-gray-400 font-semibold mt-0.5">106 deliveries</p>
          </div>
          <div className="absolute right-4.5 bottom-4.5 bg-blue-50 text-[#0F4C81] rounded-lg p-2">
            <Wallet className="size-4.5" />
          </div>
        </div>

        {/* Card 2: Avg / Delivery */}
        <div className="bg-white border border-gray-200 rounded-xl p-4.5 shadow-3xs relative flex flex-col justify-between min-h-28">
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-gray-400 font-black uppercase tracking-wider">Avg / Delivery</span>
            <span className="flex items-center gap-0.5 text-[9px] font-black text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full">
              +3.1% <TrendingUp className="size-2.5" />
            </span>
          </div>
          <div className="mt-3">
            <h3 className="text-xl sm:text-2xl font-black text-gray-900">৳79</h3>
            <p className="text-[10px] sm:text-xs text-gray-400 font-semibold mt-0.5">Base fee + distance</p>
          </div>
          <div className="absolute right-4.5 bottom-4.5 bg-emerald-50 text-emerald-600 rounded-lg p-2">
            <LineChart className="size-4.5" />
          </div>
        </div>

        {/* Card 3: Incentives */}
        <div className="bg-white border border-gray-200 rounded-xl p-4.5 shadow-3xs relative flex flex-col justify-between min-h-28">
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-gray-400 font-black uppercase tracking-wider">Incentives</span>
            <span className="flex items-center gap-0.5 text-[9px] font-black text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full">
              +18.2% <TrendingUp className="size-2.5" />
            </span>
          </div>
          <div className="mt-3">
            <h3 className="text-xl sm:text-2xl font-black text-gray-900">৳1,550</h3>
            <p className="text-[10px] sm:text-xs text-gray-400 font-semibold mt-0.5">Express & streak bonuses</p>
          </div>
          <div className="absolute right-4.5 bottom-4.5 bg-amber-50 text-amber-600 rounded-lg p-2">
            <Zap className="size-4.5 text-[#D97706]" />
          </div>
        </div>

        {/* Card 4: Next Payout */}
        <div className="bg-white border border-gray-200 rounded-xl p-4.5 shadow-3xs relative flex flex-col justify-between min-h-28">
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-gray-400 font-black uppercase tracking-wider">Next Payout</span>
            <span className="flex items-center gap-0.5 text-[9px] font-black text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full">
              +9.0% <TrendingUp className="size-2.5" />
            </span>
          </div>
          <div className="mt-3">
            <h3 className="text-xl sm:text-2xl font-black text-gray-900">৳8,350</h3>
            <p className="text-[10px] sm:text-xs text-gray-400 font-semibold mt-0.5">Mon, 10 Jun · bKash</p>
          </div>
          <div className="absolute right-4.5 bottom-4.5 bg-blue-50 text-blue-600 rounded-lg p-2">
            <Calendar className="size-4.5" />
          </div>
        </div>

      </div>

      {/* 3. Center Section: Grid details layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        
        {/* Left main block (2/3 width) - Daily Earnings Chart */}
        <div className="lg:col-span-2 bg-white border border-gray-200 rounded-xl p-5 sm:p-6 shadow-3xs space-y-6 flex flex-col justify-between h-[360px]">
          <div className="leading-none space-y-1 text-left">
            <h3 className="text-sm sm:text-base font-extrabold text-gray-900 leading-tight">
              Daily Earnings
            </h3>
            <p className="text-[10px] sm:text-xs text-gray-400 font-semibold">
              Fees earned per working day
            </p>
          </div>

          {/* Premium Vector Chart drawing wrapper */}
          <div className="relative flex-1 w-full flex items-end justify-between pt-6 px-2">
            
            {/* Horizontal Grid lines */}
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none select-none text-[8px] text-gray-300 font-bold opacity-75">
              <div className="border-b border-gray-100 w-full pb-0.5 text-right">৳1,500</div>
              <div className="border-b border-gray-100 w-full pb-0.5 text-right">৳1,000</div>
              <div className="border-b border-gray-100 w-full pb-0.5 text-right">৳500</div>
              <div className="border-b border-gray-150 w-full pb-0.5 text-right">0</div>
            </div>

            {/* Daily Bars */}
            {[
              { label: "Tue", value: 940 },
              { label: "Wed", value: 1180 },
              { label: "Thu", value: 860 },
              { label: "Fri", value: 1420 },
              { label: "Sat", value: 1610 },
              { label: "Sun", value: 1290 },
              { label: "Mon", value: 1050 }
            ].map((day, idx) => {
              const maxVal = 1800; // max scale
              const heightPercent = (day.value / maxVal) * 100;
              const isHovered = hoveredBarIndex === idx;

              return (
                <div 
                  key={idx} 
                  className="flex flex-col items-center gap-2 group flex-1 z-10"
                  onMouseEnter={() => setHoveredBarIndex(idx)}
                  onMouseLeave={() => setHoveredBarIndex(null)}
                >
                  {/* Tooltip bar */}
                  <div className={`absolute bottom-[240px] bg-gray-900 text-white font-extrabold text-[9px] py-1 px-2 rounded shadow-sm transition-all pointer-events-none ${
                    isHovered ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  }`}>
                    ৳{day.value.toLocaleString()}
                  </div>

                  {/* SVG/CSS Bar */}
                  <div className="relative w-7 sm:w-9 bg-slate-50 border border-gray-100 rounded-t-md overflow-hidden h-44 flex items-end">
                    <div 
                      style={{ height: `${heightPercent}%` }} 
                      className={`w-full transition-all duration-500 rounded-t-sm ${
                        isHovered 
                          ? "bg-gradient-to-t from-[#0C447C] to-[#0F4C81]" 
                          : "bg-gradient-to-t from-[#0F4C81] to-[#3B82F6] opacity-85"
                      }`}
                    />
                  </div>

                  <span className="text-[10px] text-gray-400 font-extrabold uppercase">
                    {day.label}
                  </span>
                </div>
              );
            })}

          </div>
        </div>

        {/* Right side panels (1/3 width) */}
        <div className="lg:col-span-1 space-y-6">
          
          {/* Wallet Balance box */}
          <div className="bg-[#0F4C81] border border-[#0C447C] text-white rounded-xl p-5 shadow-3xs space-y-4 text-left">
            <div>
              <span className="text-[9px] text-blue-200 font-black uppercase tracking-wider">Wallet Balance</span>
              <h2 className="text-2xl sm:text-3xl font-black mt-1 leading-none text-white">৳8,350</h2>
              <p className="text-[10px] text-blue-100 font-bold mt-2 leading-relaxed">
                Available for withdrawal after Monday settlement
              </p>
            </div>
            
            <button
              onClick={handleRequestWithdrawal}
              className="w-full bg-[#F59E0B] hover:bg-[#D97706] text-white font-black py-2.5 px-4 rounded text-xs transition-colors flex items-center justify-center gap-1 cursor-pointer select-none"
            >
              <span>Request Withdrawal</span>
              <ArrowUpRight className="size-4" />
            </button>
          </div>

          {/* Active Incentives list */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-3xs space-y-4 text-left">
            <h3 className="text-xs sm:text-sm font-black text-gray-900 uppercase tracking-wider border-b border-gray-50 pb-2">
              Active Incentives
            </h3>

            <div className="space-y-4">
              {/* Incentive 1 */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-black text-gray-900 leading-none">Weekend Streak</h4>
                    <span className="text-[9px] text-gray-400 font-semibold block mt-1">Complete 20 deliveries Sat–Sun</span>
                  </div>
                  <span className="bg-amber-50 border border-amber-100 text-amber-805 px-2 py-0.5 rounded text-[9px] font-black tracking-wide inline-flex items-center gap-0.5">
                    <Gift className="size-3 text-amber-700" />
                    ৳500
                  </span>
                </div>
                <div className="w-full bg-slate-50 border border-gray-100 rounded-full h-2 relative overflow-hidden">
                  <div className="bg-emerald-500 h-full rounded-full" style={{ width: "80%" }} />
                </div>
                <span className="text-[9px] text-gray-400 font-bold block">16 of 20 completed</span>
              </div>

              {/* Incentive 2 */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-black text-gray-900 leading-none">Express Champion</h4>
                    <span className="text-[9px] text-gray-400 font-semibold block mt-1">10 express orders delivered on time</span>
                  </div>
                  <span className="bg-amber-50 border border-amber-100 text-amber-850 px-2 py-0.5 rounded text-[9px] font-black tracking-wide inline-flex items-center gap-0.5">
                    <Gift className="size-3 text-amber-700" />
                    ৳350
                  </span>
                </div>
                <div className="w-full bg-slate-50 border border-gray-100 rounded-full h-2 relative overflow-hidden">
                  <div className="bg-emerald-500 h-full rounded-full" style={{ width: "70%" }} />
                </div>
                <span className="text-[9px] text-gray-400 font-bold block">7 of 10 completed</span>
              </div>

              {/* Incentive 3 */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-black text-gray-900 leading-none">Perfect Rating</h4>
                    <span className="text-[9px] text-gray-400 font-semibold block mt-1">Maintain 4.8+ for 7 days</span>
                  </div>
                  <span className="bg-amber-50 border border-amber-100 text-amber-850 px-2 py-0.5 rounded text-[9px] font-black tracking-wide inline-flex items-center gap-0.5">
                    <Gift className="size-3 text-amber-700" />
                    ৳250
                  </span>
                </div>
                <div className="w-full bg-slate-50 border border-gray-100 rounded-full h-2 relative overflow-hidden">
                  <div className="bg-emerald-500 h-full rounded-full" style={{ width: "85.7%" }} />
                </div>
                <span className="text-[9px] text-gray-400 font-bold block">6 of 7 completed</span>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* 4. Bottom Table: Earnings Ledger */}
      <div className="bg-white border border-gray-200 rounded-xl p-5 sm:p-6 shadow-3xs space-y-4">
        <div className="leading-none space-y-1 text-left">
          <h3 className="text-sm sm:text-base font-extrabold text-gray-900 leading-tight">
            Earnings Ledger
          </h3>
          <p className="text-[10px] sm:text-xs text-gray-400 font-semibold">
            Day-by-day breakdown of your payouts
          </p>
        </div>

        {/* Table data structure */}
        <div className="overflow-x-auto border border-gray-150 rounded-lg">
          <table className="w-full text-xs text-left">
            <thead>
              <tr className="bg-gray-50/70 border-b border-gray-150 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4 text-center">Deliveries</th>
                <th className="py-3 px-4">Base Fee</th>
                <th className="py-3 px-4">Bonus</th>
                <th className="py-3 px-4">Tips</th>
                <th className="py-3 px-4 text-right">Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-gray-700 font-semibold">
              {ledgerDb.map((item) => (
                <tr key={item.date} className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-3 px-4 font-extrabold text-gray-900">{item.date}</td>
                  <td className="py-3 px-4 text-center text-gray-500 font-bold">{item.deliveries}</td>
                  <td className="py-3 px-4 text-gray-600">৳{item.baseFee}</td>
                  <td className="py-3 px-4 text-emerald-600 font-bold">+ ৳{item.bonus}</td>
                  <td className="py-3 px-4 text-amber-705 font-bold">+ ৳{item.tips}</td>
                  <td className="py-3 px-4 text-right font-black text-gray-950">৳{item.total.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
