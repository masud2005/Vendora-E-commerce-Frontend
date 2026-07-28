"use client";

import React from "react";
import toast from "react-hot-toast";

// Mock Top Sellers data
const topSellers = [
  { name: "Chronos Luxe", category: "Watches & Jewelry", revenue: 84200, trend: "+18.2%", isPositive: true },
  { name: "EcoHome Tech", category: "Smart Living", revenue: 52110, trend: "+12.5%", isPositive: true },
  { name: "Velo Sports", category: "Apparel & Gear", revenue: 41800, trend: "-2.4%", isPositive: false },
  { name: "Oak & Iron", category: "Furniture", revenue: 39400, trend: "+5.1%", isPositive: true }
];

export default function TopSellers() {
  return (
    <div className="bg-white border border-gray-200 rounded p-5 shadow-3xs text-left">
      <div className="flex items-center justify-between border-b border-gray-100 pb-3">
        <h3 className="text-xs sm:text-sm font-bold text-gray-900">
          Top Sellers
        </h3>
        <button 
          onClick={() => toast.success("Redirecting to sellers catalog...")}
          className="text-xs font-bold text-[#0F4C81] hover:text-[#0C447C] cursor-pointer"
        >
          View All
        </button>
      </div>

      {/* List */}
      <div className="divide-y divide-gray-100 mt-2">
        {topSellers.map((seller, idx) => (
          <div key={idx} className="flex items-center justify-between py-3 first:pt-2 last:pb-0 gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <div className="size-9 rounded-lg bg-gray-50 border border-gray-150 flex items-center justify-center font-bold text-gray-400 shrink-0">
                🏪
              </div>
              <div className="min-w-0">
                <h4 className="text-xs font-bold text-gray-900 truncate">{seller.name}</h4>
                <p className="text-[10px] text-gray-400 font-semibold mt-0.5">{seller.category}</p>
              </div>
            </div>

            <div className="text-right shrink-0">
              <div className="text-xs font-extrabold text-gray-900">
                <span className="font-bengali">৳</span>{seller.revenue.toLocaleString()}
              </div>
              <span className={`text-[10px] font-bold block mt-0.5 ${seller.isPositive ? "text-emerald-600" : "text-rose-600"}`}>
                {seller.trend}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
