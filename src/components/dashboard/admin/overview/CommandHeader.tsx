"use client";

import React from "react";
import toast from "react-hot-toast";
import { Calendar, Download } from "lucide-react";

interface CommandHeaderProps {
  timeRange: string;
}

export default function CommandHeader({ timeRange }: CommandHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div>
        <h1 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight leading-none">
          Command Center
        </h1>
        <p className="text-xs md:text-sm text-gray-500 font-medium mt-1.5">
          Real-time overview of Vendora's platform ecosystem
        </p>
      </div>

      {/* Header action controls */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => toast.success("Select custom date range...")}
          className="flex items-center justify-center gap-2 border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 font-bold py-2.5 px-4 rounded text-xs sm:text-sm transition-colors cursor-pointer shadow-2xs"
        >
          <Calendar className="size-4 text-gray-500" />
          <span>{timeRange}</span>
        </button>
        <button
          onClick={() => toast.success("Exporting platform analytics...")}
          className="flex items-center justify-center gap-2 bg-[#0F4C81] hover:bg-[#0C447C] text-white font-bold py-2.5 px-4 rounded text-xs sm:text-sm transition-colors shadow-2xs cursor-pointer"
        >
          <Download className="size-4" />
          <span>Export Data</span>
        </button>
      </div>
    </div>
  );
}
