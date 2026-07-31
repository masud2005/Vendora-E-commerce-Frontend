"use client";

import React from "react";
import { TrendingUp, Gift, Users } from "lucide-react";

export default function MarketingStats() {
  return (
    <div className="flex flex-col gap-4.5 w-full h-full justify-between">
      
      {/* Card 1: Marketing ROI */}
      <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-3xs flex items-center gap-4 text-left select-none transition-all hover:shadow-2xs">
        {/* Left Icon Area */}
        <div className="p-3.5 bg-blue-50 text-blue-600 rounded-xl shrink-0">
          <TrendingUp className="size-6" />
        </div>
        {/* Right Metric Details */}
        <div className="leading-none space-y-1.5 flex-1 min-w-0">
          <span className="text-[10px] sm:text-xs text-gray-400 font-bold block uppercase tracking-wider">
            Marketing ROI
          </span>
          <h4 className="text-xl sm:text-2xl font-black text-gray-900 leading-none">
            4.8x
          </h4>
          <span className="text-[9px] sm:text-[10px] text-emerald-600 font-black flex items-center gap-0.5 mt-0.5">
            <span>↑</span> 12.5% vs last mon
          </span>
        </div>
      </div>

      {/* Card 2: Total Coupons Redeemed */}
      <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-3xs flex items-center gap-4 text-left select-none transition-all hover:shadow-2xs">
        {/* Left Icon Area */}
        <div className="p-3.5 bg-amber-50 text-amber-600 rounded-xl shrink-0">
          <Gift className="size-6" />
        </div>
        {/* Right Metric Details */}
        <div className="leading-none space-y-1.5 flex-1 min-w-0">
          <span className="text-[10px] sm:text-xs text-gray-400 font-bold block uppercase tracking-wider">
            Total Coupons Redeemed
          </span>
          <h4 className="text-xl sm:text-2xl font-black text-gray-900 leading-none">
            8,921
          </h4>
          <span className="text-[9px] sm:text-[10px] text-gray-450 font-bold block mt-0.5">
            Today's throughput
          </span>
        </div>
      </div>

      {/* Card 3: Active Participants */}
      <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-3xs flex items-center gap-4 text-left select-none transition-all hover:shadow-2xs">
        {/* Left Icon Area */}
        <div className="p-3.5 bg-teal-50 text-teal-650 rounded-xl shrink-0">
          <Users className="size-6" />
        </div>
        {/* Right Metric Details */}
        <div className="leading-none space-y-1.5 flex-1 min-w-0">
          <span className="text-[10px] sm:text-xs text-gray-400 font-bold block uppercase tracking-wider">
            Active Participants
          </span>
          <h4 className="text-xl sm:text-2xl font-black text-gray-900 leading-none">
            45.2k
          </h4>
          <span className="text-[9px] sm:text-[10px] text-gray-450 font-bold block mt-0.5">
            Unique active shoppers
          </span>
        </div>
      </div>

    </div>
  );
}
