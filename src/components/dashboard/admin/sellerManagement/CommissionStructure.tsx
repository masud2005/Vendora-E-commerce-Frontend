"use client";

import React from "react";
import toast from "react-hot-toast";
import { Percent, Edit, Settings, Info } from "lucide-react";

export default function CommissionStructure() {
  return (
    <div className="bg-[#EEF2FF]/40 border border-[#CBD5E1] rounded-lg p-5 text-left select-none space-y-5">
      
      {/* Header of Commission Panel */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#CBD5E1]/55 pb-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Percent className="size-4.5 text-[#0F4C81]" />
            <h3 className="text-xs sm:text-sm font-bold text-gray-900">
              Global Commission & Fee Structure
            </h3>
          </div>
          <p className="text-[10px] sm:text-xs text-gray-500 font-medium">
            Configure platform revenue cuts based on product categories.
          </p>
        </div>
        
        <button
          onClick={() => toast.success("Opening commission structure editor...")}
          className="flex items-center justify-center gap-1.5 bg-[#0F4C81] hover:bg-[#0C447C] text-white font-bold py-2 px-4 rounded text-xs transition-colors cursor-pointer shadow-3xs shrink-0 self-start sm:self-auto"
        >
          <Edit className="size-3.5" />
          <span>Update Fee Table</span>
        </button>
      </div>

      {/* 3 Categories Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        
        {/* Card 1: Electronics */}
        <div className="bg-white border border-gray-200 rounded-lg p-4.5 shadow-2xs space-y-3.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="p-1 rounded bg-blue-50 text-[#0F4C81] text-xs">
                💻
              </span>
              <span className="text-xs font-bold text-gray-800">Electronics</span>
            </div>
            <span className="text-sm font-black text-gray-900">8.0%</span>
          </div>
          {/* Progress bar */}
          <div className="space-y-1.5">
            <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden relative">
              <div className="absolute left-0 top-0 bottom-0 w-[40%] bg-[#0F4C81] rounded-full" />
            </div>
            <div className="flex items-center justify-between text-[9px] font-bold text-gray-400">
              <span>MIN: 2%</span>
              <span>MAX: 20%</span>
            </div>
          </div>
        </div>

        {/* Card 2: Fashion */}
        <div className="bg-white border border-gray-200 rounded-lg p-4.5 shadow-2xs space-y-3.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="p-1 rounded bg-amber-50 text-amber-600 text-xs">
                👕
              </span>
              <span className="text-xs font-bold text-gray-800">Fashion</span>
            </div>
            <span className="text-sm font-black text-gray-900">12.0%</span>
          </div>
          <div className="space-y-1.5">
            <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden relative">
              <div className="absolute left-0 top-0 bottom-0 w-[60%] bg-amber-500 rounded-full" />
            </div>
            <div className="flex items-center justify-between text-[9px] font-bold text-gray-400">
              <span>MIN: 2%</span>
              <span>MAX: 20%</span>
            </div>
          </div>
        </div>

        {/* Card 3: Home & Decor */}
        <div className="bg-white border border-gray-200 rounded-lg p-4.5 shadow-2xs space-y-3.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="p-1 rounded bg-emerald-50 text-emerald-600 text-xs">
                🏠
              </span>
              <span className="text-xs font-bold text-gray-800">Home & Decor</span>
            </div>
            <span className="text-sm font-black text-gray-900">10.0%</span>
          </div>
          <div className="space-y-1.5">
            <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden relative">
              <div className="absolute left-0 top-0 bottom-0 w-[50%] bg-emerald-500 rounded-full" />
            </div>
            <div className="flex items-center justify-between text-[9px] font-bold text-gray-400">
              <span>MIN: 2%</span>
              <span>MAX: 20%</span>
            </div>
          </div>
        </div>

      </div>

      {/* Flat Fees info and settings */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-gray-200/60 pt-4 text-xs font-semibold">
        <div className="flex flex-wrap items-center gap-6 text-gray-500">
          <div className="text-left">
            <span className="text-[9px] text-gray-400 font-bold block uppercase tracking-wider">
              Flat Transaction Fee
            </span>
            <span className="text-gray-800 font-extrabold">$0.30</span>{" "}
            <span className="text-[10px] text-gray-400 font-semibold">per successful order</span>
          </div>
          
          <div className="h-8 w-[1px] bg-gray-200 hidden sm:block" />

          <div className="text-left">
            <span className="text-[9px] text-gray-400 font-bold block uppercase tracking-wider">
              Settlement Window
            </span>
            <span className="text-gray-800 font-extrabold">T+3</span>{" "}
            <span className="text-[10px] text-gray-400 font-semibold">Business Days</span>
          </div>
        </div>

        <button
          onClick={() => toast.success("Opening advanced fee settings...")}
          className="flex items-center gap-1.5 text-xs font-bold text-[#0F4C81] hover:text-[#0C447C] cursor-pointer shadow-3xs hover:underline"
        >
          <Settings className="size-3.5" />
          <span>Advanced Settings</span>
        </button>
      </div>

      {/* Warning Notification Alert Banner */}
      <div className="bg-amber-50 border border-amber-200 text-amber-800 rounded-lg p-3 text-[11px] font-semibold leading-relaxed flex items-start sm:items-center justify-between gap-4 mt-2">
        <div className="flex items-center gap-2">
          <Info className="size-4 text-amber-600 shrink-0 mt-0.5 sm:mt-0" />
          <p className="text-left">
            Note: Changes to Commission Structure will only apply to new orders placed after the deployment. Historical payouts remain locked to the rate at the time of sale.
          </p>
        </div>
        <button 
          onClick={() => toast.success("Loading documentation...")}
          className="text-amber-800 hover:text-amber-950 underline font-extrabold shrink-0 cursor-pointer"
        >
          Learn more
        </button>
      </div>

    </div>
  );
}
