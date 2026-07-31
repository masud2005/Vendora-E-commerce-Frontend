"use client";

import React from "react";
import { Eye, ShoppingCart, FileText, ChevronsDown } from "lucide-react";

export default function ConversionFunnel() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 sm:p-6 shadow-3xs text-left select-none space-y-5">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-100 pb-3 text-left">
        <h3 className="text-sm sm:text-base font-extrabold text-gray-900">
          Conversion Funnel
        </h3>
        <button
          className="text-[10px] sm:text-xs font-black text-[#0F4C81] hover:underline uppercase tracking-wide cursor-pointer"
        >
          Detailed View
        </button>
      </div>

      {/* Funnel Steps */}
      <div className="flex flex-col items-center w-full space-y-2 mt-4">
        
        {/* Step 1: Views */}
        <div className="w-full bg-blue-50/60 border-l-4 border-blue-600 rounded-r-lg p-4 flex items-center justify-between">
          <div className="text-left space-y-1">
            <span className="text-[10px] text-blue-700 font-bold uppercase tracking-wider">Views</span>
            <h4 className="text-xl sm:text-2xl font-black text-gray-900 leading-none">142,800</h4>
          </div>
          <Eye className="size-6 text-blue-600/80 shrink-0" />
        </div>

        {/* Separator Chevron */}
        <ChevronsDown className="size-5 text-gray-300" />

        {/* Step 2: Added to Cart */}
        <div className="w-full bg-indigo-50/60 border-l-4 border-indigo-600 rounded-r-lg p-4 flex items-center justify-between">
          <div className="text-left space-y-1">
            <span className="text-[10px] text-indigo-700 font-bold uppercase tracking-wider">Added to Cart</span>
            <h4 className="text-xl sm:text-2xl font-black text-gray-900 leading-none">12,450</h4>
          </div>
          <ShoppingCart className="size-6 text-indigo-600/80 shrink-0" />
        </div>

        {/* Separator Chevron */}
        <ChevronsDown className="size-5 text-gray-300" />

        {/* Step 3: Checkouts */}
        <div className="w-full bg-blue-100/50 border-l-4 border-[#0F4C81] rounded-r-lg p-4 flex items-center justify-between">
          <div className="text-left space-y-1">
            <span className="text-[10px] text-[#0f4c81] font-bold uppercase tracking-wider">Checkouts</span>
            <h4 className="text-xl sm:text-2xl font-black text-gray-900 leading-none">5,430</h4>
          </div>
          <FileText className="size-6 text-[#0F4C81]/80 shrink-0" />
        </div>

      </div>

    </div>
  );
}
