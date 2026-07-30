"use client";

import React from "react";
import toast from "react-hot-toast";
import { Download, Calendar } from "lucide-react";

export default function SellerHeader() {
  return (
    <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-5 text-left select-none pb-4 border-b border-gray-150">
      
      {/* Title & Breadcrumbs */}
      <div>
        <div className="flex items-center gap-1.5 text-xs text-gray-400 font-bold mb-1.5">
          <span>Seller Dashboard</span>
          <span>/</span>
          <span className="text-[#0F4C81] hover:underline cursor-pointer">Overview</span>
        </div>
        <h1 className="text-xl sm:text-2xl font-black text-gray-900 leading-tight">
          Store Overview
        </h1>
        <p className="text-xs text-gray-400 font-medium mt-1">
          Real-time performance metrics for <span className="text-gray-700 font-bold">Vendora Enterprise</span>
        </p>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-3 shrink-0 self-start xl:self-auto text-xs font-semibold">
        
        {/* Date Filter selector */}
        <button
          onClick={() => toast.success("Opening calendar date range picker...")}
          className="flex items-center gap-1.5 border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 font-bold py-2 px-3 rounded shadow-3xs cursor-pointer transition-colors"
        >
          <Calendar className="size-3.5 text-gray-450" />
          <span>Last 30 Days</span>
        </button>

        {/* Export Report Button */}
        <button
          onClick={() => toast.success("Generating and exporting Store Performance Report PDF...")}
          className="flex items-center justify-center gap-1.5 bg-[#0F4C81] hover:bg-[#0C447C] text-white font-bold py-2 px-4 rounded text-xs transition-colors shadow-3xs cursor-pointer"
        >
          <Download className="size-3.5" />
          <span>Export Report</span>
        </button>

      </div>

    </div>
  );
}
