"use client";

import React from "react";
import { Wallet, ShoppingBag, Users, FileText, ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function SellerStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 select-none text-left w-full">
      
      {/* 1. Total Sales */}
      <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-3xs flex flex-col justify-between min-h-[140px]">
        <div className="flex items-center justify-between w-full">
          <span className="p-2.5 rounded bg-blue-50 text-blue-600 shadow-3xs">
            <Wallet className="size-4.5" />
          </span>
          <span className="inline-flex items-center gap-0.5 bg-emerald-50 text-emerald-700 text-[10px] font-black border border-emerald-150 px-2 py-0.5 rounded-full">
            <ArrowUpRight className="size-3" />
            <span>12.5%</span>
          </span>
        </div>
        <div className="mt-4.5 space-y-1">
          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">Total Sales</span>
          <h3 className="text-2xl font-black text-gray-900 tracking-tight leading-none">
            $142,580.00
          </h3>
          
          {/* Green Sparkline SVG Wave Chart */}
          <div className="pt-2">
            <svg className="w-full h-7 stroke-emerald-500 fill-none opacity-80" viewBox="0 0 100 30">
              <path 
                d="M 0 25 Q 15 12 30 20 T 60 8 T 85 18 T 100 12" 
                strokeWidth="2.2" 
                strokeLinecap="round" 
              />
            </svg>
          </div>
        </div>
      </div>

      {/* 2. Active Orders */}
      <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-3xs flex flex-col justify-between min-h-[140px]">
        <div className="flex items-center justify-between w-full">
          <span className="p-2.5 rounded bg-emerald-50 text-emerald-600 shadow-3xs">
            <ShoppingBag className="size-4.5" />
          </span>
          <span className="inline-flex items-center gap-0.5 bg-emerald-50 text-emerald-700 text-[10px] font-black border border-emerald-150 px-2 py-0.5 rounded-full">
            <ArrowUpRight className="size-3" />
            <span>5.2%</span>
          </span>
        </div>
        <div className="mt-4.5 space-y-1">
          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">Active Orders</span>
          <h3 className="text-2xl font-black text-gray-900 tracking-tight leading-none">
            1,284
          </h3>

          {/* Green Sparkline SVG Wave Chart */}
          <div className="pt-2">
            <svg className="w-full h-7 stroke-emerald-500 fill-none opacity-80" viewBox="0 0 100 30">
              <path 
                d="M 0 20 Q 20 28 45 15 T 75 18 T 100 10" 
                strokeWidth="2.2" 
                strokeLinecap="round" 
              />
            </svg>
          </div>
        </div>
      </div>

      {/* 3. Store Visitors */}
      <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-3xs flex flex-col justify-between min-h-[140px]">
        <div className="flex items-center justify-between w-full">
          <span className="p-2.5 rounded bg-amber-50 text-amber-600 shadow-3xs">
            <Users className="size-4.5" />
          </span>
          <span className="inline-flex items-center gap-0.5 bg-rose-50 text-rose-700 text-[10px] font-black border border-rose-150 px-2 py-0.5 rounded-full">
            <ArrowDownRight className="size-3" />
            <span>2.4%</span>
          </span>
        </div>
        <div className="mt-4.5 space-y-1">
          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">Store Visitors</span>
          <h3 className="text-2xl font-black text-gray-900 tracking-tight leading-none">
            42.8k
          </h3>

          {/* Red Sparkline SVG Downward Wave Chart */}
          <div className="pt-2">
            <svg className="w-full h-7 stroke-rose-500 fill-none opacity-80" viewBox="0 0 100 30">
              <path 
                d="M 0 8 Q 20 18 40 10 T 70 25 T 100 28" 
                strokeWidth="2.2" 
                strokeLinecap="round" 
              />
            </svg>
          </div>
        </div>
      </div>

      {/* 4. Net Revenue */}
      <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-3xs flex flex-col justify-between min-h-[140px]">
        <div className="flex items-center justify-between w-full">
          <span className="p-2.5 rounded bg-blue-50 text-blue-600 shadow-3xs">
            <FileText className="size-4.5" />
          </span>
          <span className="inline-flex items-center gap-0.5 bg-emerald-50 text-emerald-700 text-[10px] font-black border border-emerald-150 px-2 py-0.5 rounded-full">
            <ArrowUpRight className="size-3" />
            <span>18.7%</span>
          </span>
        </div>
        <div className="mt-4.5 space-y-1">
          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">Net Revenue</span>
          <h3 className="text-2xl font-black text-gray-900 tracking-tight leading-none">
            $98,420.00
          </h3>

          {/* Green Sparkline SVG Wave Chart */}
          <div className="pt-2">
            <svg className="w-full h-7 stroke-emerald-500 fill-none opacity-80" viewBox="0 0 100 30">
              <path 
                d="M 0 28 Q 15 20 35 25 T 65 14 T 85 10 T 100 5" 
                strokeWidth="2.2" 
                strokeLinecap="round" 
              />
            </svg>
          </div>
        </div>
      </div>

    </div>
  );
}
