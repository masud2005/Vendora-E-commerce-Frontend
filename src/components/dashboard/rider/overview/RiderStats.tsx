"use client";

import React from "react";
import { ClipboardList, CheckCircle2, Wallet, Banknote, AlertTriangle } from "lucide-react";

export default function RiderStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4.5 w-full select-none">
      
      {/* 1. Active Orders */}
      <div className="bg-white border border-gray-250 rounded-xl p-4 shadow-3xs text-left transition-all hover:shadow-2xs">
        <div className="flex items-center justify-between">
          <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
            <ClipboardList className="size-5" />
          </div>
          <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded flex items-center gap-0.5">
            +2 ↗
          </span>
        </div>
        <div className="mt-3 leading-none space-y-1.5">
          <span className="text-[10px] text-gray-400 font-bold block uppercase tracking-wider">
            Active Orders
          </span>
          <h4 className="text-xl sm:text-2xl font-black text-gray-900 leading-none">
            5
          </h4>
          <span className="text-[9px] text-gray-400 font-semibold block">
            2 awaiting pickup
          </span>
        </div>
      </div>

      {/* 2. Delivered Today */}
      <div className="bg-white border border-gray-250 rounded-xl p-4 shadow-3xs text-left transition-all hover:shadow-2xs">
        <div className="flex items-center justify-between">
          <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
            <CheckCircle2 className="size-5" />
          </div>
          <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded flex items-center gap-0.5">
            +12.5% ↗
          </span>
        </div>
        <div className="mt-3 leading-none space-y-1.5">
          <span className="text-[10px] text-gray-400 font-bold block uppercase tracking-wider">
            Delivered Today
          </span>
          <h4 className="text-xl sm:text-2xl font-black text-gray-900 leading-none">
            3
          </h4>
          <span className="text-[9px] text-gray-400 font-semibold block">
            On-time rate 96%
          </span>
        </div>
      </div>

      {/* 3. Today's Earnings */}
      <div className="bg-white border border-gray-250 rounded-xl p-4 shadow-3xs text-left transition-all hover:shadow-2xs">
        <div className="flex items-center justify-between">
          <div className="p-2 bg-amber-50 text-amber-600 rounded-lg">
            <Wallet className="size-5" />
          </div>
          <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded flex items-center gap-0.5">
            +8.2% ↗
          </span>
        </div>
        <div className="mt-3 leading-none space-y-1.5">
          <span className="text-[10px] text-gray-400 font-bold block uppercase tracking-wider">
            Today's Earnings
          </span>
          <h4 className="text-xl sm:text-2xl font-black text-gray-900 leading-none">
            ৳1,050
          </h4>
          <span className="text-[9px] text-gray-400 font-semibold block">
            Base + bonus + tips
          </span>
        </div>
      </div>

      {/* 4. Cash in Hand */}
      <div className="bg-white border border-gray-250 rounded-xl p-4 shadow-3xs text-left transition-all hover:shadow-2xs">
        <div className="flex items-center justify-between">
          <div className="p-2 bg-cyan-50 text-cyan-600 rounded-lg">
            <Banknote className="size-5" />
          </div>
          <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded flex items-center gap-0.5">
            0% ↗
          </span>
        </div>
        <div className="mt-3 leading-none space-y-1.5">
          <span className="text-[10px] text-gray-400 font-bold block uppercase tracking-wider">
            Cash in Hand
          </span>
          <h4 className="text-xl sm:text-2xl font-black text-gray-900 leading-none">
            ৳0
          </h4>
          <span className="text-[9px] text-gray-400 font-semibold block">
            Limit ৳15,000
          </span>
        </div>
      </div>

      {/* 5. Failed Attempts */}
      <div className="bg-white border border-gray-250 rounded-xl p-4 shadow-3xs text-left transition-all hover:shadow-2xs">
        <div className="flex items-center justify-between">
          <div className="p-2 bg-rose-50 text-rose-600 rounded-lg">
            <AlertTriangle className="size-5" />
          </div>
          <span className="text-[10px] font-black text-rose-600 bg-rose-50 px-1.5 py-0.5 rounded flex items-center gap-0.5">
            -1.4% ↘
          </span>
        </div>
        <div className="mt-3 leading-none space-y-1.5">
          <span className="text-[10px] text-gray-400 font-bold block uppercase tracking-wider">
            Failed Attempts
          </span>
          <h4 className="text-xl sm:text-2xl font-black text-gray-900 leading-none">
            1
          </h4>
          <span className="text-[9px] text-gray-400 font-semibold block">
            Needs re-attempt
          </span>
        </div>
      </div>

    </div>
  );
}
