"use client";

import React from "react";
import { Download } from "lucide-react";

interface EarningsHeaderProps {
  activeTab: "week" | "month";
  setActiveTab: (tab: "week" | "month") => void;
  onDownloadStatement: () => void;
}

export default function EarningsHeader({
  activeTab,
  setActiveTab,
  onDownloadStatement
}: EarningsHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-1 text-left select-none">
      <div>
        <h1 className="text-xl sm:text-2xl font-black text-gray-900 leading-tight">
          Earnings
        </h1>
        <p className="text-xs sm:text-sm text-gray-400 font-semibold mt-1">
          Delivery fees, incentives and tips — settled to your wallet every Monday
        </p>
      </div>

      {/* Tab & Statement button */}
      <div className="flex items-center gap-3 self-start md:self-auto shrink-0 select-none">
        <div className="border border-gray-150 rounded-lg p-1 bg-gray-50/50 text-[11px] font-bold text-gray-500 flex items-center select-none">
          <button
            onClick={() => setActiveTab("week")}
            className={`px-3 py-1 rounded-md transition-all text-[9px] uppercase tracking-wider cursor-pointer ${
              activeTab === "week"
                ? "bg-[#0F4C81] text-white shadow-3xs font-extrabold"
                : "hover:text-gray-805"
            }`}
          >
            This Week
          </button>
          <button
            onClick={() => setActiveTab("month")}
            className={`px-3 py-1 rounded-md transition-all text-[9px] uppercase tracking-wider cursor-pointer ${
              activeTab === "month"
                ? "bg-[#0F4C81] text-white shadow-3xs font-extrabold"
                : "hover:text-gray-805"
            }`}
          >
            This Month
          </button>
        </div>

        <button
          onClick={onDownloadStatement}
          className="flex items-center justify-center gap-1.5 border border-gray-250 bg-white hover:bg-gray-50 text-gray-700 font-bold py-2 px-4 rounded text-xs transition-colors cursor-pointer select-none"
        >
          <Download className="size-4 text-gray-500" />
          <span>Statement</span>
        </button>
      </div>
    </div>
  );
}
