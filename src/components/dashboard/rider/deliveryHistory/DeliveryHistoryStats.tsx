"use client";

import React from "react";
import { CheckCircle2, XCircle, History, Landmark, TrendingUp, TrendingDown } from "lucide-react";

export default function DeliveryHistoryStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
      
      {/* Card 1: Successful */}
      <div className="bg-white border border-gray-200 rounded-xl p-4.5 shadow-3xs relative flex flex-col justify-between min-h-28">
        <div className="flex items-center justify-between">
          <span className="text-[10px] text-gray-400 font-black uppercase tracking-wider">Successful</span>
          <span className="flex items-center gap-0.5 text-[9px] font-black text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full">
            +6.4% <TrendingUp className="size-2.5" />
          </span>
        </div>
        <div className="mt-3">
          <h3 className="text-xl sm:text-2xl font-black text-gray-900">3</h3>
          <p className="text-[10px] sm:text-xs text-gray-400 font-semibold mt-0.5">Completed deliveries</p>
        </div>
        <div className="absolute right-4.5 bottom-4.5 bg-emerald-50 text-emerald-600 rounded-lg p-2">
          <CheckCircle2 className="size-4.5" />
        </div>
      </div>

      {/* Card 2: Failed */}
      <div className="bg-white border border-gray-200 rounded-xl p-4.5 shadow-3xs relative flex flex-col justify-between min-h-28">
        <div className="flex items-center justify-between">
          <span className="text-[10px] text-gray-400 font-black uppercase tracking-wider">Failed</span>
          <span className="flex items-center gap-0.5 text-[9px] font-black text-rose-600 bg-rose-50 px-1.5 py-0.5 rounded-full">
            -2.1% <TrendingDown className="size-2.5" />
          </span>
        </div>
        <div className="mt-3">
          <h3 className="text-xl sm:text-2xl font-black text-gray-900">1</h3>
          <p className="text-[10px] sm:text-xs text-gray-400 font-semibold mt-0.5">Awaiting re-attempt</p>
        </div>
        <div className="absolute right-4.5 bottom-4.5 bg-rose-50 text-rose-600 rounded-lg p-2">
          <XCircle className="size-4.5" />
        </div>
      </div>

      {/* Card 3: Success Rate */}
      <div className="bg-white border border-gray-200 rounded-xl p-4.5 shadow-3xs relative flex flex-col justify-between min-h-28">
        <div className="flex items-center justify-between">
          <span className="text-[10px] text-gray-400 font-black uppercase tracking-wider">Success Rate</span>
          <span className="flex items-center gap-0.5 text-[9px] font-black text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full">
            +1.8% <TrendingUp className="size-2.5" />
          </span>
        </div>
        <div className="mt-3">
          <h3 className="text-xl sm:text-2xl font-black text-gray-900">75%</h3>
          <p className="text-[10px] sm:text-xs text-gray-400 font-semibold mt-0.5">Rolling 7-day average</p>
        </div>
        <div className="absolute right-4.5 bottom-4.5 bg-blue-50 text-blue-600 rounded-lg p-2">
          <History className="size-4.5" />
        </div>
      </div>

      {/* Card 4: COD Handled */}
      <div className="bg-white border border-gray-200 rounded-xl p-4.5 shadow-3xs relative flex flex-col justify-between min-h-28">
        <div className="flex items-center justify-between">
          <span className="text-[10px] text-gray-400 font-black uppercase tracking-wider">COD Handled</span>
          <span className="flex items-center gap-0.5 text-[9px] font-black text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full">
            +9.0% <TrendingUp className="size-2.5" />
          </span>
        </div>
        <div className="mt-3">
          <h3 className="text-xl sm:text-2xl font-black text-gray-900">৳2,740</h3>
          <p className="text-[10px] sm:text-xs text-gray-400 font-semibold mt-0.5">Cash collected on route</p>
        </div>
        <div className="absolute right-4.5 bottom-4.5 bg-amber-50 text-amber-600 rounded-lg p-2">
          <Landmark className="size-4.5" />
        </div>
      </div>

    </div>
  );
}
