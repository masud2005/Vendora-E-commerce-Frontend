"use client";

import React from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import { Filter, Download } from "lucide-react";

export default function BuyerHeader() {
  return (
    <div className="space-y-4">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-1.5 text-xs text-gray-400 font-semibold select-none">
        <Link href="/admin" className="hover:text-gray-600 transition-colors">
          Dashboard
        </Link>
        <span>&gt;</span>
        <span className="text-[#0F4C81] font-bold">User Management</span>
      </div>

      {/* Main Title and Actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 text-left">
        <div>
          <h1 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight leading-none">
            Buyer Management
          </h1>
          <p className="text-xs md:text-sm text-gray-500 font-medium mt-1.5">
            Manage platform buyers, monitor activities, and handle account restrictions.
          </p>
        </div>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => toast.success("Opening search filters...")}
            className="flex items-center justify-center gap-2 border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 font-bold py-2 px-4 rounded text-xs sm:text-sm transition-colors cursor-pointer shadow-2xs"
          >
            <Filter className="size-4 text-gray-500" />
            <span>Filter</span>
          </button>
          <button
            onClick={() => toast.success("Exporting platform buyers list (CSV)...")}
            className="flex items-center justify-center gap-2 bg-[#0F4C81] hover:bg-[#0C447C] text-white font-medium py-2.5 px-4 lg:px-4 md:px-2 rounded text-xs lg:text-sm transition-colors shadow-lg cursor-pointer"
          >
            <Download className="size-4" />
            <span>Export CSV</span>
          </button>
        </div>
      </div>
    </div>
  );
}
