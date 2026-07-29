"use client";

import React from "react";
import { Wallet, ShoppingCart, Users, TrendingUp, ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function AnalyticsStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 select-none text-left w-full">
      
      {/* 1. Total GMV */}
      <div className="bg-white border border-gray-250 rounded-lg p-5 shadow-3xs flex flex-col justify-between min-h-[125px]">
        <div className="flex items-center justify-between w-full">
          {/* Icon */}
          <span className="p-2.5 rounded bg-blue-50 text-blue-600 shadow-3xs">
            <Wallet className="size-4.5" />
          </span>
          {/* Growth Badge */}
          <span className="inline-flex items-center gap-0.5 bg-emerald-50 text-emerald-700 text-[10px] font-black border border-emerald-150 px-2 py-0.5 rounded-full select-none">
            <ArrowUpRight className="size-3" />
            <span>14.2%</span>
          </span>
        </div>
        <div className="mt-4 space-y-1">
          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">Total GMV</span>
          <h3 className="text-2xl font-black text-gray-900 tracking-tight leading-none">
            $12.4M
          </h3>
          <span className="text-[10px] text-gray-400 font-bold block pt-1">
            Target: <span className="text-gray-650 font-black">$11.0M</span>
          </span>
        </div>
      </div>

      {/* 2. Total Orders */}
      <div className="bg-white border border-gray-250 rounded-lg p-5 shadow-3xs flex flex-col justify-between min-h-[125px]">
        <div className="flex items-center justify-between w-full">
          {/* Icon */}
          <span className="p-2.5 rounded bg-amber-50 text-amber-600 shadow-3xs">
            <ShoppingCart className="size-4.5" />
          </span>
          {/* Success rate description */}
          <span className="text-[10px] text-gray-500 font-black select-none">
            Success: <span className="text-[#0A4B3A]">{`98.4%`}</span>
          </span>
        </div>
        <div className="mt-4 space-y-1">
          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">Total Orders</span>
          <h3 className="text-2xl font-black text-gray-900 tracking-tight leading-none">
            84.2K
          </h3>
          
          {/* Progress bar */}
          <div className="pt-2">
            <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden flex">
              <div className="h-full bg-emerald-700 rounded-l-full" style={{ width: "98.4%" }} />
              <div className="h-full bg-rose-500" style={{ width: "1.6%" }} />
            </div>
          </div>
        </div>
      </div>

      {/* 3. Active Sellers */}
      <div className="bg-white border border-gray-250 rounded-lg p-5 shadow-3xs flex flex-col justify-between min-h-[125px]">
        <div className="flex items-center justify-between w-full">
          {/* Icon */}
          <span className="p-2.5 rounded bg-emerald-50 text-emerald-600 shadow-3xs">
            <Users className="size-4.5" />
          </span>
          {/* Growth Badge */}
          <span className="inline-flex items-center gap-0.5 bg-emerald-50 text-emerald-700 text-[10px] font-black border border-emerald-150 px-2 py-0.5 rounded-full select-none">
            <ArrowUpRight className="size-3" />
            <span>8.1%</span>
          </span>
        </div>
        <div className="mt-4 space-y-1">
          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">Active Sellers</span>
          <h3 className="text-2xl font-black text-gray-900 tracking-tight leading-none">
            4,201
          </h3>
          <span className="text-[10px] text-gray-400 font-bold block pt-1">
            <span className="text-emerald-700 font-extrabold">+342 new</span> this month
          </span>
        </div>
      </div>

      {/* 4. Avg Order Value */}
      <div className="bg-white border border-gray-250 rounded-lg p-5 shadow-3xs flex flex-col justify-between min-h-[125px]">
        <div className="flex items-center justify-between w-full">
          {/* Icon */}
          <span className="p-2.5 rounded bg-gray-100 text-gray-500 shadow-3xs">
            <TrendingUp className="size-4.5" />
          </span>
          {/* Downtrend Badge */}
          <span className="inline-flex items-center gap-0.5 bg-rose-50 text-rose-700 text-[10px] font-black border border-rose-150 px-2 py-0.5 rounded-full select-none">
            <ArrowDownRight className="size-3" />
            <span>2.4%</span>
          </span>
        </div>
        <div className="mt-4 space-y-1">
          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">Avg Order Value</span>
          <h3 className="text-2xl font-black text-gray-900 tracking-tight leading-none">
            $147.20
          </h3>
          <span className="text-[10px] text-gray-400 font-bold block pt-1">
            Previous: <span className="text-gray-650 font-black">$150.80</span>
          </span>
        </div>
      </div>

    </div>
  );
}
