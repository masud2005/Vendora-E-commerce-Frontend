"use client";

import React from "react";
import { ClipboardList, Truck, Landmark, XCircle, ArrowUpRight, ArrowDownRight, TrendingUp } from "lucide-react";

export default function OrdersStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 select-none text-left w-full">
      
      {/* 1. Pending Fulfillment */}
      <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-3xs flex flex-col justify-between min-h-[125px]">
        <div className="flex items-center justify-between w-full">
          <span className="p-2.5 rounded bg-emerald-50 text-emerald-600 shadow-3xs">
            <ClipboardList className="size-4.5" />
          </span>
          <span className="inline-flex items-center gap-0.5 bg-rose-50 text-rose-700 text-[10px] font-black border border-rose-150 px-2 py-0.5 rounded-full">
            <ArrowUpRight className="size-3" />
            <span>+12%</span>
          </span>
        </div>
        <div className="mt-4 space-y-1">
          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">Pending Fulfillment</span>
          <h3 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight leading-none">
            142 Orders
          </h3>
        </div>
      </div>

      {/* 2. Shipped Today */}
      <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-3xs flex flex-col justify-between min-h-[125px]">
        <div className="flex items-center justify-between w-full">
          <span className="p-2.5 rounded bg-blue-50 text-blue-600 shadow-3xs">
            <Truck className="size-4.5" />
          </span>
          <span className="inline-flex items-center gap-0.5 bg-emerald-50 text-emerald-700 text-[10px] font-black border border-emerald-150 px-2.5 py-0.5 rounded-full">
            <TrendingUp className="size-3" />
            <span>Steady</span>
          </span>
        </div>
        <div className="mt-4 space-y-1">
          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">Shipped Today</span>
          <h3 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight leading-none">
            56 Orders
          </h3>
        </div>
      </div>

      {/* 3. Daily Revenue */}
      <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-3xs flex flex-col justify-between min-h-[125px]">
        <div className="flex items-center justify-between w-full">
          <span className="p-2.5 rounded bg-yellow-50 text-yellow-600 shadow-3xs">
            <Landmark className="size-4.5" />
          </span>
          <span className="inline-flex items-center gap-0.5 bg-emerald-50 text-emerald-700 text-[10px] font-black border border-emerald-150 px-2.5 py-0.5 rounded-full">
            <ArrowUpRight className="size-3" />
            <span>+$4.2k</span>
          </span>
        </div>
        <div className="mt-4 space-y-1">
          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">Daily Revenue</span>
          <h3 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight leading-none">
            $12,840.00
          </h3>
        </div>
      </div>

      {/* 4. Cancelled (7d) */}
      <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-3xs flex flex-col justify-between min-h-[125px]">
        <div className="flex items-center justify-between w-full">
          <span className="p-2.5 rounded bg-rose-50 text-rose-600 shadow-3xs">
            <XCircle className="size-4.5" />
          </span>
          <span className="inline-flex items-center gap-0.5 bg-gray-50 text-gray-500 text-[10px] font-black border border-gray-200 px-2 py-0.5 rounded-full">
            <ArrowDownRight className="size-3" />
            <span>-2%</span>
          </span>
        </div>
        <div className="mt-4 space-y-1">
          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">Cancelled (7d)</span>
          <h3 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight leading-none">
            8 Orders
          </h3>
        </div>
      </div>

    </div>
  );
}
