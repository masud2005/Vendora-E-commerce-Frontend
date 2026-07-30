"use client";

import React from "react";

const topProducts = [
  {
    name: "Elite Horizon Watch",
    sales: "412 Units Sold",
    revenue: "$24,310",
    share: "22% share",
    image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&q=80&w=150"
  },
  {
    name: "SonicPro X-100",
    sales: "328 Units Sold",
    revenue: "$18,920",
    share: "16% share",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=150"
  },
  {
    name: "Lumina Desk Arc",
    sales: "215 Units Sold",
    revenue: "$12,450",
    share: "11% share",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=150"
  },
  {
    name: "Obsidian Travel Bag",
    sales: "184 Units Sold",
    revenue: "$9,820",
    share: "9% share",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=150"
  }
];

export default function SellerTopProducts() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 sm:p-6 shadow-3xs flex flex-col justify-between select-none min-h-[340px] text-left">
      
      {/* Header */}
      <div className="border-b border-gray-100 pb-3 text-left">
        <h3 className="text-sm sm:text-base font-extrabold text-gray-900">
          Top Products
        </h3>
        <p className="text-[10px] sm:text-xs text-gray-400 font-semibold mt-0.5">
          Best performing items by revenue
        </p>
      </div>

      {/* Product List */}
      <div className="divide-y divide-gray-100 mt-4 flex-1 flex flex-col justify-center gap-3">
        {topProducts.map((prod, idx) => (
          <div key={idx} className="flex items-center justify-between pt-3 first:pt-0">
            
            {/* Left Image & details */}
            <div className="flex items-center gap-3 text-left">
              <img 
                src={prod.image} 
                alt={prod.name} 
                className="size-11 rounded-lg object-cover border border-gray-150 shrink-0 shadow-3xs"
              />
              <div className="leading-none space-y-1">
                <h4 className="text-xs font-extrabold text-gray-900 max-w-[130px] sm:max-w-none truncate">
                  {prod.name}
                </h4>
                <span className="text-[10px] text-gray-400 font-semibold block">
                  {prod.sales}
                </span>
              </div>
            </div>

            {/* Right Revenue and Share */}
            <div className="text-right shrink-0 leading-none space-y-1">
              <span className="text-xs font-black text-gray-900 block">
                {prod.revenue}
              </span>
              <span className="text-[9px] font-black text-emerald-600">
                {prod.share}
              </span>
            </div>

          </div>
        ))}
      </div>

      {/* Bottom Button */}
      <div className="mt-5 pt-3">
        <button
          className="w-full border border-gray-250 hover:bg-gray-50 text-gray-700 font-black py-2 rounded text-xs cursor-pointer transition-colors shadow-3xs text-center"
        >
          View All Products
        </button>
      </div>

    </div>
  );
}
