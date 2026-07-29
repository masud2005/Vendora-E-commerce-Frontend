"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import Link from "next/link";
import { Download } from "lucide-react";

export default function BehavioralHeader() {
  const [activeSegment, setActiveSegment] = useState("Last 30 Days");

  return (
    <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-5 text-left select-none pb-4 border-b border-gray-150">
      
      {/* Title & Breadcrumbs */}
      <div>
        <div className="flex items-center gap-1.5 text-xs text-gray-400 font-bold mb-1.5">
          <span>Analytics</span>
          <span>&gt;</span>
          <Link 
            href="/admin/analytics" 
            className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
          >
            Executive Dashboard
          </Link>
          <span>&gt;</span>
          <span className="text-[#0F4C81]">Behavioral Reports</span>
        </div>
        <h1 className="text-xl sm:text-2xl font-black text-gray-900 leading-tight">
          System Behavioral Intelligence
        </h1>
        <p className="text-xs text-gray-400 font-medium mt-1">
          Real-time deep dive into platform velocity and user interaction patterns.
        </p>
      </div>

      {/* Right Filters & Segment Controls */}
      <div className="flex flex-wrap items-center gap-3.5 shrink-0 self-start xl:self-auto">
        
        {/* Segmented Button Group (Last 30 Days, Quarterly, Yearly) */}
        <div className="bg-gray-100/80 border border-gray-200 rounded-lg p-1 flex items-center shadow-3xs">
          {["Last 30 Days", "Quarterly", "Yearly"].map((segment) => {
            const isActive = activeSegment === segment;
            return (
              <button
                key={segment}
                onClick={() => {
                  setActiveSegment(segment);
                  toast.success(`Reports timeframe set to: ${segment}`);
                }}
                className={`px-3 py-1 rounded text-xs font-bold transition-all cursor-pointer ${
                  isActive 
                    ? "bg-white text-gray-900 shadow-3xs" 
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                {segment}
              </button>
            );
          })}
        </div>

        {/* Export Report Button */}
        <button
          onClick={() => toast.success("Generating and downloading System Behavioral Intelligence report PDF...")}
          className="flex items-center justify-center gap-1.5 bg-[#0F4C81] hover:bg-[#0C447C] text-white font-bold py-2 px-4.5 rounded text-xs transition-colors shadow-3xs cursor-pointer h-[34px]"
        >
          <Download className="size-3.5" />
          <span>Export Report</span>
        </button>

      </div>

    </div>
  );
}
