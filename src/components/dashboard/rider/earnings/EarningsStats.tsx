"use client";

import React from "react";
import { Wallet, TrendingUp, LineChart, Zap, Calendar } from "lucide-react";

export default function EarningsStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
      
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
        <div className="absolute right-4.5 bottom-4.5 bg-amber-50 text-amber-605 rounded-lg p-2">
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
  );
}
