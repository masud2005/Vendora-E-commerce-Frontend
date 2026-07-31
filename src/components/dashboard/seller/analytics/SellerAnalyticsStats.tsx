"use client";

import React from "react";
import { Wallet, ShoppingBag, Users, LineChart, ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function SellerAnalyticsStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 select-none text-left w-full">
      
      {/* 1. Total Revenue */}
      <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-3xs flex flex-col justify-between min-h-[125px]">
        <div className="flex items-center justify-between w-full">
          <span className="p-2.5 rounded bg-blue-50 text-[#0F4C81] shadow-3xs">
            <Wallet className="size-4.5" />
          </span>
          <span className="inline-flex items-center gap-0.5 bg-emerald-50 text-emerald-700 text-[10px] font-black border border-emerald-150 px-2 py-0.5 rounded-full">
            <ArrowUpRight className="size-3" />
            <span>+12.5%</span>
          </span>
        </div>
        <div className="mt-4.5 space-y-1">
          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">Total Revenue</span>
          <h3 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight leading-none">
            $124,592.00
          </h3>
        </div>
      </div>

      {/* 2. Total Orders */}
      <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-3xs flex flex-col justify-between min-h-[125px]">
        <div className="flex items-center justify-between w-full">
          <span className="p-2.5 rounded bg-blue-50 text-[#0F4C81] shadow-3xs">
            <ShoppingBag className="size-4.5" />
          </span>
          <span className="inline-flex items-center gap-0.5 bg-emerald-50 text-emerald-700 text-[10px] font-black border border-emerald-150 px-2 py-0.5 rounded-full">
            <ArrowUpRight className="size-3" />
            <span>+8.2%</span>
          </span>
        </div>
        <div className="mt-4.5 space-y-1">
          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">Total Orders</span>
          <h3 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight leading-none">
            1,842
          </h3>
        </div>
      </div>

      {/* 3. Unique Visitors */}
      <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-3xs flex flex-col justify-between min-h-[125px]">
        <div className="flex items-center justify-between w-full">
          <span className="p-2.5 rounded bg-blue-50 text-[#0F4C81] shadow-3xs">
            <Users className="size-4.5" />
          </span>
          <span className="inline-flex items-center gap-0.5 bg-rose-50 text-rose-700 text-[10px] font-black border border-rose-150 px-2 py-0.5 rounded-full">
            <ArrowDownRight className="size-3" />
            <span>-2.4%</span>
          </span>
        </div>
        <div className="mt-4.5 space-y-1">
          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">Unique Visitors</span>
          <h3 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight leading-none">
            48.2k
          </h3>
        </div>
      </div>

      {/* 4. Conversion Rate */}
      <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-3xs flex flex-col justify-between min-h-[125px]">
        <div className="flex items-center justify-between w-full">
          <span className="p-2.5 rounded bg-blue-50 text-[#0F4C81] shadow-3xs">
            <LineChart className="size-4.5" />
          </span>
          <span className="inline-flex items-center gap-0.5 bg-emerald-50 text-emerald-700 text-[10px] font-black border border-emerald-150 px-2 py-0.5 rounded-full">
            <ArrowUpRight className="size-3" />
            <span>+1.1%</span>
          </span>
        </div>
        <div className="mt-4.5 space-y-1">
          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">Conversion Rate</span>
          <h3 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight leading-none">
            3.82%
          </h3>
        </div>
      </div>

    </div>
  );
}
