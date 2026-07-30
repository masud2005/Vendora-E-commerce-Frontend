"use client";

import React from "react";
import { Download, Calendar } from "lucide-react";

export default function SellerAnalyticsHeader() {
  return (
    <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-5 text-left select-none pb-4 border-b border-gray-150">
      
      {/* Title & Description */}
      <div>
        <h1 className="text-xl sm:text-2xl font-black text-gray-900 leading-tight">
          Seller Analytics
        </h1>
        <p className="text-xs text-gray-400 font-medium mt-1">
          Performance overview for the last 30 days
        </p>
      </div>

      {/* Right Filters */}
      <div className="flex items-center gap-3 shrink-0 self-start xl:self-auto text-xs font-semibold">
        
        {/* Date Filter selector */}
        <button
          className="flex items-center gap-1.5 border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 font-bold py-2 px-3 rounded shadow-3xs cursor-pointer transition-colors"
        >
          <Calendar className="size-3.5 text-gray-450" />
          <span>Last 30 Days</span>
        </button>

        {/* Export Report Button */}
        <button
          className="flex items-center justify-center gap-1.5 bg-[#0F4C81] hover:bg-[#0C447C] text-white font-bold py-2 px-4.5 rounded text-xs transition-colors shadow-3xs cursor-pointer h-[34px]"
        >
          <Download className="size-3.5" />
          <span>Export Report</span>
        </button>

      </div>

    </div>
  );
}
