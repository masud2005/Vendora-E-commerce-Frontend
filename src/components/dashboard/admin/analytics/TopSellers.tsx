"use client";

import React from "react";
import toast from "react-hot-toast";
import Link from "next/link";
import { Laptop, Leaf, Watch, Star, ArrowUpRight, ArrowDownRight } from "lucide-react";

const sellers = [
  {
    name: "TechNova",
    rating: "4.9",
    revenue: "$842K",
    change: "+12%",
    isPositive: true,
    icon: Laptop,
    bgIcon: "bg-blue-50 text-blue-600"
  },
  {
    name: "GreenLeaf",
    rating: "4.8",
    revenue: "$612K",
    change: "+8%",
    isPositive: true,
    icon: Leaf,
    bgIcon: "bg-emerald-50 text-emerald-600"
  },
  {
    name: "Zenith Time",
    rating: "4.7",
    revenue: "$498K",
    change: "-3%",
    isPositive: false,
    icon: Watch,
    bgIcon: "bg-teal-50 text-teal-600"
  }
];

export default function TopSellers() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 sm:p-6 shadow-3xs flex flex-col justify-between select-none min-h-[340px] text-left">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-100 pb-3">
        <h3 className="text-sm sm:text-base font-extrabold text-gray-900">
          Top Sellers
        </h3>
        <Link
          href="/admin/analytics/behavioral"
          className="text-[10px] sm:text-xs font-black text-[#0F4C81] hover:underline uppercase tracking-wide cursor-pointer"
        >
          See All
        </Link>
      </div>

      {/* Sellers List */}
      <div className="divide-y divide-gray-100 mt-4 flex-1 flex flex-col justify-center gap-3">
        {sellers.map((seller, idx) => {
          const Icon = seller.icon;
          return (
            <div key={idx} className="flex items-center justify-between pt-3.5 first:pt-0">
              
              {/* Left Brand details */}
              <div className="flex items-center gap-3 text-left">
                <span className={`p-2.5 rounded-lg border border-gray-100 shadow-3xs shrink-0 ${seller.bgIcon}`}>
                  <Icon className="size-4.5" />
                </span>
                <div className="leading-none space-y-1">
                  <h4 className="text-xs font-extrabold text-gray-900">
                    {seller.name}
                  </h4>
                  <div className="flex items-center gap-1">
                    <Star className="size-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-[10px] text-gray-500 font-bold mt-0.5">
                      {seller.rating}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Performance Stats */}
              <div className="text-right leading-none space-y-1">
                <span className="text-xs font-black text-gray-905 block">
                  {seller.revenue}
                </span>
                <span className={`inline-flex items-center gap-0.5 text-[9px] font-black tracking-wide ${
                  seller.isPositive ? "text-emerald-600" : "text-rose-600"
                }`}>
                  {seller.isPositive ? <ArrowUpRight className="size-2.5" /> : <ArrowDownRight className="size-2.5" />}
                  <span>{seller.change}</span>
                </span>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
}
