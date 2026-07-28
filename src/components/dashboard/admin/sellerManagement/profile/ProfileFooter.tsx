"use client";

import React from "react";
import toast from "react-hot-toast";

export default function ProfileFooter() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-5 shadow-3xs flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs font-semibold text-left select-none">
      
      {/* Left side: disputes count & store health */}
      <div className="flex flex-wrap items-center gap-6">
        <div className="text-left space-y-0.5">
          <span className="text-[9px] text-gray-400 font-bold block uppercase tracking-wider">Active Disputes</span>
          <span className="text-rose-600 font-extrabold text-sm block">0 Issues</span>
        </div>
        
        <div className="h-8 w-[1px] bg-gray-200 hidden md:block" />

        <div className="text-left space-y-0.5">
          <span className="text-[9px] text-gray-400 font-bold block uppercase tracking-wider">Store Health</span>
          <span className="text-emerald-600 font-extrabold text-sm block">Excellent</span>
        </div>
      </div>

      {/* Right side: Audit report download & updates terms */}
      <div className="flex flex-wrap items-center gap-4.5 shrink-0 self-start md:self-auto">
        <button
          onClick={() => toast.success("Downloading Full Audit Report PDF...")}
          className="text-gray-500 hover:text-gray-800 underline font-bold cursor-pointer transition-colors"
        >
          Download Full Audit Report
        </button>
        <button
          onClick={() => toast.success("Opening Settlement Terms Editor...")}
          className="bg-[#0F4C81] hover:bg-[#0C447C] text-white font-bold py-2.5 px-4.5 rounded text-xs transition-colors shadow-3xs cursor-pointer"
        >
          Update Settlement Terms
        </button>
      </div>

    </div>
  );
}
