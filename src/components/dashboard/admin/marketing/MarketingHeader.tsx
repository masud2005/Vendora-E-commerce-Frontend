"use client";

import React from "react";
import { Plus } from "lucide-react";

export default function MarketingHeader() {
  return (
    <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-5 text-left select-none pb-4 border-b border-gray-150">
      
      {/* Breadcrumbs and Title */}
      <div>
        <div className="flex items-center gap-1.5 text-xs text-gray-400 font-bold mb-1.5">
          <span>Marketing</span>
          <span>/</span>
          <span className="text-[#0F4C81] hover:underline cursor-pointer">Campaign Overview</span>
        </div>
        <h1 className="text-xl sm:text-2xl font-black text-gray-900 leading-tight">
          Marketing Control Tower
        </h1>
      </div>

      {/* Action Button */}
      <div className="shrink-0 self-start xl:self-auto">
        <button
          className="flex items-center justify-center gap-2 bg-[#0F4C81] hover:bg-[#0C447C] text-white font-bold py-2.5 px-4.5 rounded-lg text-xs sm:text-sm transition-colors shadow-3xs cursor-pointer"
        >
          <Plus className="size-4" />
          <span>Create Campaign</span>
        </button>
      </div>

    </div>
  );
}
