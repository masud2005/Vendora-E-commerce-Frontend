"use client";

import React from "react";
import { Search } from "lucide-react";

interface OrderHeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function OrderHeader({ searchQuery, setSearchQuery }: OrderHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-5 border-b border-gray-150/60 select-none">
      <div className="text-left">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight leading-none">
          My Orders
        </h1>
        <p className="text-xs md:text-sm text-gray-500 font-medium mt-1.5">
          View and manage all your marketplace transactions.
        </p>
      </div>

      {/* Right Search Input */}
      <div className="relative w-full sm:w-72">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Order ID or Product Name"
          className="w-full rounded border border-gray-300 pl-10 pr-4 py-2 text-xs sm:text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#0F4C81] focus:ring-0 bg-[#F3F4F6]/50 transition-all"
        />
      </div>
    </div>
  );
}
