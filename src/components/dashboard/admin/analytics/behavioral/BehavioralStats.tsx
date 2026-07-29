"use client";

import React from "react";
import { CreditCard, Users, ShoppingCart, Share2, ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function BehavioralStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 select-none text-left w-full">
      
      {/* 1. Gross Merchandise Value */}
      <div className="bg-white border border-gray-250 rounded-lg p-5 shadow-3xs flex flex-col justify-between min-h-[125px]">
        <div className="flex items-center justify-between w-full">
          <span className="p-2.5 rounded bg-blue-50 text-blue-600 shadow-3xs">
            <CreditCard className="size-4.5" />
          </span>
          <span className="inline-flex items-center gap-0.5 bg-emerald-50 text-emerald-700 text-[10px] font-black border border-emerald-150 px-2 py-0.5 rounded-full">
            <ArrowUpRight className="size-3" />
            <span>12.5%</span>
          </span>
        </div>
        <div className="mt-4 space-y-1">
          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">Gross Merchandise Value</span>
          <h3 className="text-2xl font-black text-gray-900 tracking-tight leading-none">
            $4.2M
          </h3>
          <div className="pt-2">
            <div className="w-full h-1 bg-[#0F4C81] rounded-full" />
          </div>
        </div>
      </div>

      {/* 2. Active Users (MAU) */}
      <div className="bg-white border border-gray-250 rounded-lg p-5 shadow-3xs flex flex-col justify-between min-h-[125px]">
        <div className="flex items-center justify-between w-full">
          <span className="p-2.5 rounded bg-amber-50 text-amber-600 shadow-3xs">
            <Users className="size-4.5" />
          </span>
          <span className="inline-flex items-center gap-0.5 bg-emerald-50 text-emerald-700 text-[10px] font-black border border-emerald-150 px-2 py-0.5 rounded-full">
            <ArrowUpRight className="size-3" />
            <span>8.2%</span>
          </span>
        </div>
        <div className="mt-4 space-y-1.5">
          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">Active Users (MAU)</span>
          <h3 className="text-2xl font-black text-gray-900 tracking-tight leading-none">
            128.4K
          </h3>
          
          {/* Avatar Row */}
          <div className="flex items-center gap-1.5 pt-1">
            <div className="flex -space-x-1.5 overflow-hidden">
              <img
                className="inline-block size-4.5 rounded-full ring-2 ring-white object-cover"
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=60"
                alt="User 1"
              />
              <img
                className="inline-block size-4.5 rounded-full ring-2 ring-white object-cover"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=60"
                alt="User 2"
              />
              <img
                className="inline-block size-4.5 rounded-full ring-2 ring-white object-cover"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=60"
                alt="User 3"
              />
            </div>
            <span className="text-[9px] text-[#0F4C81] bg-blue-50 px-1 py-0.5 rounded font-black">
              +12k
            </span>
          </div>
        </div>
      </div>

      {/* 3. Avg. Order Value */}
      <div className="bg-white border border-gray-250 rounded-lg p-5 shadow-3xs flex flex-col justify-between min-h-[125px]">
        <div className="flex items-center justify-between w-full">
          <span className="p-2.5 rounded bg-emerald-50 text-emerald-600 shadow-3xs">
            <ShoppingCart className="size-4.5" />
          </span>
          <span className="inline-flex items-center gap-0.5 bg-rose-50 text-rose-700 text-[10px] font-black border border-rose-150 px-2 py-0.5 rounded-full">
            <ArrowDownRight className="size-3" />
            <span>2.1%</span>
          </span>
        </div>
        <div className="mt-4 space-y-1">
          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">Avg. Order Value</span>
          <h3 className="text-2xl font-black text-gray-900 tracking-tight leading-none">
            $142.50
          </h3>
          <span className="text-[10px] text-gray-400 font-bold block pt-1">
            Benchmark: <span className="text-gray-700 font-black">$145.00</span>
          </span>
        </div>
      </div>

      {/* 4. Conversion Rate */}
      <div className="bg-white border border-gray-250 rounded-lg p-5 shadow-3xs flex flex-col justify-between min-h-[125px]">
        <div className="flex items-center justify-between w-full">
          <span className="p-2.5 rounded bg-gray-100 text-gray-500 shadow-3xs">
            <Share2 className="size-4.5" />
          </span>
          <span className="inline-flex items-center gap-0.5 bg-emerald-50 text-emerald-700 text-[10px] font-black border border-emerald-150 px-2 py-0.5 rounded-full">
            <ArrowUpRight className="size-3" />
            <span>0.5%</span>
          </span>
        </div>
        <div className="mt-4 space-y-1">
          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">Conversion Rate</span>
          <h3 className="text-2xl font-black text-gray-900 tracking-tight leading-none">
            4.82%
          </h3>
          
          {/* Gradient Indicator bar */}
          <div className="pt-2">
            <div className="w-full h-1.5 rounded-full overflow-hidden flex bg-gray-100">
              <div className="h-full bg-gradient-to-r from-amber-400 to-[#0F4C81] rounded-full" style={{ width: "75%" }} />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
