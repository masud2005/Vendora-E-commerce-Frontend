"use client";

import React from "react";
import toast from "react-hot-toast";
import { Download, Plus } from "lucide-react";

export default function SellerHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 text-left select-none">
      <div>
        <h1 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight leading-none">
          Seller Management
        </h1>
        <p className="text-xs md:text-sm text-gray-500 font-medium mt-1.5">
          Oversee onboarding, verify credentials, and manage platform commission structures.
        </p>
      </div>

      {/* Action buttons */}
      <div className="flex items-center gap-3 shrink-0">
        <button
          onClick={() => toast.success("Exporting seller directory (CSV)...")}
          className="flex items-center justify-center gap-2 border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 font-bold py-2.5 px-4 rounded text-xs sm:text-sm transition-colors cursor-pointer shadow-2xs"
        >
          <Download className="size-4 text-gray-500" />
          <span>Export Directory</span>
        </button>
        <button
          onClick={() => toast.success("Opening manual seller enrollment form...")}
          className="flex items-center justify-center gap-2 bg-[#0F4C81] hover:bg-[#0C447C] text-white font-bold py-2.5 px-4 rounded text-xs sm:text-sm transition-colors shadow-2xs cursor-pointer"
        >
          <Plus className="size-4" />
          <span>Manual Enrollment</span>
        </button>
      </div>
    </div>
  );
}
