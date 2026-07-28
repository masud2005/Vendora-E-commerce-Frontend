"use client";

import React from "react";
import { Banknote, ShoppingCart, Store, Users, Landmark, TrendingUp, TrendingDown } from "lucide-react";

export default function AdminStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
      {/* Card 1: Total Sales */}
      <div className="bg-white border border-gray-200 rounded p-4.5 shadow-3xs flex flex-col justify-between h-28">
        <div className="flex items-center justify-between">
          <div className="p-2 rounded bg-blue-50">
            <Banknote className="size-4.5 text-[#0F4C81]" />
          </div>
          <span className="text-[10px] sm:text-xs font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded flex items-center gap-0.5">
            <span>+12.5%</span>
            <TrendingUp className="size-3.5" />
          </span>
        </div>
        <div className="mt-3.5">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block ">TOTAL SALES</span>
          <span className="text-base font-black text-gray-900 mt-1  flex items-center">
            <span className="font-bengali mr-0.5">৳</span>1,284,500
          </span>
        </div>
      </div>

      {/* Card 2: Total Orders */}
      <div className="bg-white border border-gray-200 rounded p-4.5 shadow-3xs flex flex-col justify-between h-28">
        <div className="flex items-center justify-between">
          <div className="p-2 rounded bg-amber-50">
            <ShoppingCart className="size-4.5 text-amber-600" />
          </div>
          <span className="text-[10px] sm:text-xs font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded flex items-center gap-0.5">
            <span>+8.2%</span>
            <TrendingUp className="size-3.5" />
          </span>
        </div>
        <div className="mt-3.5">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">TOTAL ORDERS</span>
          <span className="text-base font-black text-gray-900 mt-1 block">42,108</span>
        </div>
      </div>

      {/* Card 3: Active Sellers */}
      <div className="bg-white border border-gray-200 rounded p-4.5 shadow-3xs flex flex-col justify-between h-28">
        <div className="flex items-center justify-between">
          <div className="p-2 rounded bg-emerald-50">
            <Store className="size-4.5 text-emerald-600" />
          </div>
          <span className="text-[10px] sm:text-xs font-bold text-rose-600 bg-rose-50 px-1.5 py-0.5 rounded flex items-center gap-0.5">
            <span>-1.4%</span>
            <TrendingDown className="size-3.5" />
          </span>
        </div>
        <div className="mt-3.5">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">ACTIVE SELLERS</span>
          <span className="text-base font-black text-gray-900 mt-1 block">1,842</span>
        </div>
      </div>

      {/* Card 4: New Users */}
      <div className="bg-white border border-gray-200 rounded p-4.5 shadow-3xs flex flex-col justify-between h-28">
        <div className="flex items-center justify-between">
          <div className="p-2 rounded bg-indigo-50">
            <Users className="size-4.5 text-indigo-600" />
          </div>
          <span className="text-[10px] sm:text-xs font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded flex items-center gap-0.5">
            <span>+24.0%</span>
            <TrendingUp className="size-3.5" />
          </span>
        </div>
        <div className="mt-3.5">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">NEW USERS</span>
          <span className="text-base font-black text-gray-900 mt-1 block">8,924</span>
        </div>
      </div>

      {/* Card 5: Total Revenue */}
      <div className="bg-white border border-gray-200 rounded p-4.5 shadow-3xs flex flex-col justify-between h-28">
        <div className="flex items-center justify-between">
          <div className="p-2 rounded bg-cyan-50">
            <Landmark className="size-4.5 text-cyan-600" />
          </div>
          <span className="text-[10px] sm:text-xs font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded flex items-center gap-0.5">
            <span>+5.2%</span>
            <TrendingUp className="size-3.5" />
          </span>
        </div>
        <div className="mt-3.5">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">TOTAL REVENUE</span>
          <span className="text-base font-black text-gray-900 mt-1  flex items-center">
            <span className="font-bengali mr-0.5">৳</span>242,910
          </span>
        </div>
      </div>
    </div>
  );
}
