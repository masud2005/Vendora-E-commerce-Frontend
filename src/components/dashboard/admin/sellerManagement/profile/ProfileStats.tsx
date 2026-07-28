"use client";

import React from "react";
import { FileText, ShoppingCart, Percent, Star } from "lucide-react";

export default function ProfileStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 select-none text-left">
      
      {/* Stat 1: Total Revenue */}
      <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-3xs flex flex-col justify-between min-h-[110px]">
        <div className="flex items-center justify-between w-full">
          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Total Revenue</span>
          <span className="p-1.5 rounded bg-blue-50 text-blue-600">
            <FileText className="size-4" />
          </span>
        </div>
        <div className="mt-2.5 space-y-1">
          <h3 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight leading-none">
            $1,248,302.00
          </h3>
          <span className="text-[10px] text-emerald-600 font-bold block pt-1.5">
            ↑ +12.5% this month
          </span>
        </div>
      </div>

      {/* Stat 2: Total Orders */}
      <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-3xs flex flex-col justify-between min-h-[110px]">
        <div className="flex items-center justify-between w-full">
          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Total Orders</span>
          <span className="p-1.5 rounded bg-amber-50 text-amber-600">
            <ShoppingCart className="size-4" />
          </span>
        </div>
        <div className="mt-2.5 space-y-1">
          <h3 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight leading-none">
            14,289
          </h3>
          <span className="text-[10px] text-emerald-600 font-bold block pt-1.5">
            ↑ +3.2% vs last week
          </span>
        </div>
      </div>

      {/* Stat 3: Platform Commission */}
      <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-3xs flex flex-col justify-between min-h-[110px]">
        <div className="flex items-center justify-between w-full">
          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Platform Commission</span>
          <span className="p-1.5 rounded bg-emerald-50 text-emerald-600">
            <Percent className="size-4" />
          </span>
        </div>
        <div className="mt-2.5 space-y-1">
          <h3 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight leading-none">
            $187,245.30
          </h3>
          <span className="text-[10px] text-gray-500 font-bold block pt-1.5">
            Avg. Rate: 15%
          </span>
        </div>
      </div>

      {/* Stat 4: Average Rating */}
      <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-3xs flex flex-col justify-between min-h-[110px]">
        <div className="flex items-center justify-between w-full">
          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Avg. Rating</span>
          <span className="p-1.5 rounded bg-yellow-50 text-yellow-600">
            <Star className="size-4" />
          </span>
        </div>
        <div className="mt-2.5 space-y-1">
          <h3 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight leading-none">
            4.8 / 5.0
          </h3>
          <span className="text-[10px] text-gray-500 font-bold block pt-1.5">
            From 2,450 reviews
          </span>
        </div>
      </div>

    </div>
  );
}
