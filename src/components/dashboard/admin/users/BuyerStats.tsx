"use client";

import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

export default function BuyerStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Card 1: Total Buyers */}
      <div className="bg-white border border-gray-200 rounded p-4.5 shadow-3xs text-left flex flex-col justify-between h-24 select-none">
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">TOTAL BUYERS</span>
        <div className="flex items-baseline gap-2 mt-1">
          <span className="text-xl sm:text-2xl font-black text-gray-900">128,492</span>
          <span className="text-[10px] sm:text-xs font-bold text-emerald-600 flex items-center gap-0.5 select-none">
            <TrendingUp className="size-3.5" />
            <span>12%</span>
          </span>
        </div>
      </div>

      {/* Card 2: Active Sessions */}
      <div className="bg-white border border-gray-200 rounded p-4.5 shadow-3xs text-left flex flex-col justify-between h-24 select-none">
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">ACTIVE SESSIONS</span>
        <div className="flex items-baseline gap-2 mt-1">
          <span className="text-xl sm:text-2xl font-black text-gray-900">3,942</span>
          <span className="text-[10px] sm:text-xs font-bold text-amber-500 flex items-center gap-0.5 select-none">
            <span>-0%</span>
          </span>
        </div>
      </div>

      {/* Card 3: Flagged Accounts */}
      <div className="bg-white border border-gray-200 rounded p-4.5 shadow-3xs text-left flex flex-col justify-between h-24 select-none">
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">FLAGGED ACCOUNTS</span>
        <div className="flex items-baseline gap-2 mt-1">
          <span className="text-xl sm:text-2xl font-black text-gray-900">184</span>
          <span className="text-[10px] sm:text-xs font-bold text-rose-600 flex items-center gap-0.5 select-none">
            <TrendingUp className="size-3.5" />
            <span>4%</span>
          </span>
        </div>
      </div>

      {/* Card 4: Suspended Accounts */}
      <div className="bg-white border border-gray-200 rounded p-4.5 shadow-3xs text-left flex flex-col justify-between h-24 select-none">
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">SUSPENDED ACCOUNTS</span>
        <div className="flex items-baseline gap-2 mt-1">
          <span className="text-xl sm:text-2xl font-black text-gray-900">1,240</span>
          <span className="text-[10px] sm:text-xs font-bold text-rose-600 flex items-center gap-0.5 select-none">
            <TrendingDown className="size-3.5" />
            <span>2% vs LW</span>
          </span>
        </div>
      </div>
    </div>
  );
}
