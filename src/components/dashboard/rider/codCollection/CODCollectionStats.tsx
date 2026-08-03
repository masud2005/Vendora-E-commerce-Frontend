"use client";

import React from "react";
import { Landmark, Clock, CheckCircle2, AlertTriangle, TrendingUp } from "lucide-react";

interface CODCollectionStatsProps {
  cashInHand: number;
  limitPercent: number;
  dailyLimit: number;
}

export default function CODCollectionStats({
  cashInHand,
  limitPercent,
  dailyLimit
}: CODCollectionStatsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
      
      {/* Card 1: Cash in Hand */}
      <div className="bg-white border border-gray-200 rounded-xl p-4.5 shadow-3xs relative flex flex-col justify-between min-h-28">
        <div className="flex items-center justify-between">
          <span className="text-[10px] text-gray-400 font-black uppercase tracking-wider">Cash in Hand</span>
          <span className="flex items-center gap-0.5 text-[9px] font-black text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full">
            {limitPercent}% of limit <TrendingUp className="size-2.5" />
          </span>
        </div>
        <div className="mt-3">
          <h3 className="text-xl sm:text-2xl font-black text-gray-900">৳{cashInHand.toLocaleString()}</h3>
          <p className="text-[10px] sm:text-xs text-gray-400 font-semibold mt-0.5">Daily limit ৳{dailyLimit.toLocaleString()}</p>
        </div>
        <div className="absolute right-4.5 bottom-4.5 bg-blue-50 text-[#0F4C81] rounded-lg p-2">
          <Landmark className="size-4.5" />
        </div>
      </div>

      {/* Card 2: Pending Collection */}
      <div className="bg-white border border-gray-200 rounded-xl p-4.5 shadow-3xs relative flex flex-col justify-between min-h-28">
        <div className="flex items-center justify-between">
          <span className="text-[10px] text-gray-400 font-black uppercase tracking-wider">Pending Collection</span>
        </div>
        <div className="mt-3">
          <h3 className="text-xl sm:text-2xl font-black text-gray-900">৳11,370</h3>
          <p className="text-[10px] sm:text-xs text-gray-400 font-semibold mt-0.5">3 COD orders on route</p>
        </div>
        <div className="absolute right-4.5 bottom-4.5 bg-amber-50 text-amber-600 rounded-lg p-2">
          <Clock className="size-4.5" />
        </div>
      </div>

      {/* Card 3: Settled This Week */}
      <div className="bg-white border border-gray-200 rounded-xl p-4.5 shadow-3xs relative flex flex-col justify-between min-h-28">
        <div className="flex items-center justify-between">
          <span className="text-[10px] text-gray-400 font-black uppercase tracking-wider">Settled This Week</span>
          <span className="flex items-center gap-0.5 text-[9px] font-black text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full">
            +5.2% <TrendingUp className="size-2.5" />
          </span>
        </div>
        <div className="mt-3">
          <h3 className="text-xl sm:text-2xl font-black text-gray-900">৳62,890</h3>
          <p className="text-[10px] sm:text-xs text-gray-400 font-semibold mt-0.5">Verified by finance</p>
        </div>
        <div className="absolute right-4.5 bottom-4.5 bg-emerald-50 text-emerald-600 rounded-lg p-2">
          <CheckCircle2 className="size-4.5" />
        </div>
      </div>

      {/* Card 4: Discrepancies */}
      <div className="bg-white border border-gray-200 rounded-xl p-4.5 shadow-3xs relative flex flex-col justify-between min-h-28">
        <div className="flex items-center justify-between">
          <span className="text-[10px] text-gray-400 font-black uppercase tracking-wider">Discrepancies</span>
        </div>
        <div className="mt-3">
          <h3 className="text-xl sm:text-2xl font-black text-gray-900">0</h3>
          <p className="text-[10px] sm:text-xs text-gray-400 font-semibold mt-0.5">No mismatched handovers</p>
        </div>
        <div className="absolute right-4.5 bottom-4.5 bg-emerald-50 text-emerald-600 rounded-lg p-2">
          <AlertTriangle className="size-4.5" />
        </div>
      </div>

    </div>
  );
}
