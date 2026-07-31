"use client";

import React from "react";
import { Clock, ChevronLeft, ChevronRight } from "lucide-react";
import toast from "react-hot-toast";

export default function LiveSalesTimeline() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 sm:p-6 shadow-3xs text-left select-none space-y-6 flex flex-col justify-between h-full min-h-[420px]">
      
      {/* Header Row */}
      <div className="flex items-center justify-between border-b border-gray-100 pb-3">
        <div className="flex items-center gap-2 text-[#0F4C81]">
          <Clock className="size-5" />
          <h3 className="text-sm sm:text-base font-extrabold text-gray-900 leading-tight">
            Live Sales Timeline
          </h3>
        </div>
        
        {/* Navigation Arrows */}
        <div className="flex items-center gap-1">
          <button
            onClick={() => toast.success("Loading previous sales time window...")}
            className="p-1 border border-gray-200 hover:bg-gray-50 rounded text-gray-500 cursor-pointer transition-colors"
          >
            <ChevronLeft className="size-4" />
          </button>
          <button
            onClick={() => toast.success("Loading next sales time window...")}
            className="p-1 border border-gray-200 hover:bg-gray-50 rounded text-gray-500 cursor-pointer transition-colors"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>

      {/* Timeline Scroll Container for Responsiveness */}
      <div className="overflow-x-auto w-full custom-scrollbar pb-3 flex-1 flex flex-col justify-center">
        
        {/* Inner Timeline Grid */}
        <div className="min-w-[650px] relative h-64 pt-10 select-none">
          
          {/* Timeline Time Axis Line */}
          <div className="absolute top-10 left-0 right-0 border-t border-gray-100 h-0 flex justify-between select-none px-2.5">
            {["08:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00"].map((time, idx) => (
              <div key={idx} className="relative flex flex-col items-center">
                {/* Tick mark */}
                <div className="absolute -top-1 w-0.5 h-2 bg-gray-200" />
                <span className="text-[10px] text-gray-400 font-extrabold mt-2.5 block leading-none">
                  {time}
                </span>
              </div>
            ))}
          </div>

          {/* Current Time Red Line Indicator (10:14 AM) */}
          {/* Position calculation: 10:14 is 134 mins past 08:00. Total timeline represents 14 hours (840 mins). Percentage = 134/840 * 100 = ~16% */}
          <div className="absolute top-0 bottom-2 left-[16.2%] w-0.5 bg-red-500 z-10 select-none">
            {/* Circle pin on axis */}
            <div className="absolute top-[39px] -left-1 size-2.5 rounded-full bg-red-500 border border-white" />
            {/* Top red label pill */}
            <div className="absolute -top-1 -translate-x-1/2 bg-red-600 text-white text-[9px] font-black px-2 py-0.5 rounded shadow-3xs leading-none">
              10:14
            </div>
          </div>

          {/* Timeline Campaign Bars Area */}
          <div className="absolute top-18 bottom-0 left-0 right-0 flex flex-col justify-between py-1">
            
            {/* Row 1: Tech Monday Flash Sale (LIVE) */}
            {/* Position from ~09:30 (~10.7%) to ~15:30 (~53.5%). Width: ~42.8% */}
            <div className="relative w-full h-[52px]">
              <div className="absolute left-[10.7%] w-[42.8%] h-full bg-blue-50/60 border-l-4 border-blue-600 rounded-r-lg p-3 flex items-center justify-between text-left shadow-4xs select-none hover:bg-blue-50 transition-colors">
                <div className="leading-none space-y-1 truncate pr-2">
                  <h4 className="text-xs font-black text-gray-900 truncate">
                    Tech Monday Flash Sale
                  </h4>
                  <span className="text-[9px] text-gray-400 font-bold block">
                    45 Categories • 1.2k Products
                  </span>
                </div>
                <span className="px-2 py-0.5 bg-blue-600 text-white text-[8px] font-black rounded-full shrink-0 tracking-wider">
                  LIVE
                </span>
              </div>
            </div>

            {/* Row 2: Home & Decor Clearout (UPCOMING) */}
            {/* Position from ~12:30 (~32.1%) to ~18:30 (~75.0%). Width: ~42.9% */}
            <div className="relative w-full h-[52px]">
              <div className="absolute left-[32.1%] w-[42.9%] h-full bg-amber-50/50 border-l-4 border-amber-600 rounded-r-lg p-3 flex items-center justify-between text-left shadow-4xs select-none hover:bg-amber-50/70 transition-colors">
                <div className="leading-none space-y-1 truncate pr-2">
                  <h4 className="text-xs font-black text-gray-900 truncate">
                    Home & Decor Clearout
                  </h4>
                  <span className="text-[9px] text-gray-400 font-bold block">
                    Furniture & Garden • 342 Products
                  </span>
                </div>
                <span className="px-2 py-0.5 bg-amber-700/80 text-white text-[8px] font-black rounded-full shrink-0 tracking-wider">
                  UPCOMING
                </span>
              </div>
            </div>

            {/* Row 3: Global Apparel Rush (QUEUE) */}
            {/* Position from ~17:30 (~67.8%) to ~22:00 (~100%). Width: ~32.2% */}
            <div className="relative w-full h-[52px]">
              <div className="absolute left-[67.8%] w-[32.2%] h-full bg-emerald-50/50 border-l-4 border-emerald-600 rounded-r-lg p-3 flex items-center justify-between text-left shadow-4xs select-none hover:bg-emerald-50/70 transition-colors">
                <div className="leading-none space-y-1 truncate pr-2">
                  <h4 className="text-xs font-black text-gray-900 truncate">
                    Global Apparel Rush
                  </h4>
                  <span className="text-[9px] text-gray-400 font-bold block">
                    Clothing & Shoes • 8k Products
                  </span>
                </div>
                <span className="px-2 py-0.5 bg-emerald-700/90 text-white text-[8px] font-black rounded-full shrink-0 tracking-wider">
                  QUEUE
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
