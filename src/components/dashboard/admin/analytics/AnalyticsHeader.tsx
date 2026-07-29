"use client";

import React from "react";
import toast from "react-hot-toast";
import { Download, Calendar, Globe, Award } from "lucide-react";

export default function AnalyticsHeader() {
  return (
    <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-5 text-left select-none pb-4 border-b border-gray-150">
      
      {/* Title & Breadcrumbs */}
      <div>
        <div className="flex items-center gap-1.5 text-xs text-gray-400 font-bold mb-1.5">
          <span>Analytics</span>
          <span>&gt;</span>
          <span className="text-[#0F4C81] hover:underline cursor-pointer">Executive Dashboard</span>
        </div>
        <h1 className="text-xl sm:text-2xl font-black text-gray-900 leading-tight">
          Platform Insights
        </h1>
        <p className="text-xs text-gray-400 font-medium mt-1">
          Comprehensive overview of system velocity and performance metrics.
        </p>
      </div>

      {/* Right Filters Container */}
      <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-3xs flex flex-wrap items-center gap-3 shrink-0 self-start xl:self-auto">
        
        {/* Date Filter */}
        <div className="flex items-center gap-1.5 border border-gray-150 rounded px-2.5 py-1.5 bg-gray-50/50 hover:bg-gray-50 cursor-pointer transition-colors text-xs font-semibold text-gray-600">
          <Calendar className="size-3.5 text-gray-400" />
          <select 
            onChange={() => toast.success("Filtered date range updated")}
            className="bg-transparent focus:outline-none cursor-pointer pr-1 text-[11px] font-bold"
          >
            <option>Last 30 Days</option>
            <option>Last 7 Days</option>
            <option>Last 90 Days</option>
          </select>
        </div>

        {/* Region Filter */}
        <div className="flex items-center gap-1.5 border border-gray-150 rounded px-2.5 py-1.5 bg-gray-50/50 hover:bg-gray-50 cursor-pointer transition-colors text-xs font-semibold text-gray-600">
          <Globe className="size-3.5 text-gray-400" />
          <select 
            onChange={() => toast.success("Region filter updated")}
            className="bg-transparent focus:outline-none cursor-pointer pr-1 text-[11px] font-bold"
          >
            <option>All Regions</option>
            <option>Europe</option>
            <option>North America</option>
            <option>Asia Pacific</option>
          </select>
        </div>

        {/* Seller Tier Filter */}
        <div className="flex items-center gap-1.5 border border-gray-150 rounded px-2.5 py-1.5 bg-gray-50/50 hover:bg-gray-50 cursor-pointer transition-colors text-xs font-semibold text-gray-600">
          <Award className="size-3.5 text-gray-400" />
          <select 
            onChange={() => toast.success("Seller Tier filter updated")}
            className="bg-transparent focus:outline-none cursor-pointer pr-1 text-[11px] font-bold"
          >
            <option>All Seller Tiers</option>
            <option>Elite Sellers</option>
            <option>Standard Sellers</option>
            <option>New Sellers</option>
          </select>
        </div>

        {/* Export CSV Button */}
        <button
          onClick={() => toast.success("Generating and downloading Platform Insights report...")}
          className="flex items-center justify-center gap-1.5 bg-[#0F4C81] hover:bg-[#0C447C] text-white font-bold py-1.5 px-4.5 rounded text-xs transition-colors shadow-3xs cursor-pointer h-[32px]"
        >
          <Download className="size-3.5" />
          <span>Export CSV</span>
        </button>

      </div>

    </div>
  );
}
