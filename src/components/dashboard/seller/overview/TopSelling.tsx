"use client";

import React from "react";
import toast from "react-hot-toast";

const topProducts = [
  {
    name: "Sony FE 24-70mm f/2.8",
    price: "$2,199.00",
    sales: "42 Units",
    growth: "+24%",
    image: "https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&q=80&w=150"
  },
  {
    name: "Vendora ProBook X",
    price: "$1,450.00",
    sales: "38 Units",
    growth: "+18%",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=150"
  },
  {
    name: "Audio-Z Wireless Pro",
    price: "$349.00",
    sales: "29 Units",
    growth: "+12%",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=150"
  },
  {
    name: "Apex Custom",
    price: "$89.00",
    sales: "15 Units",
    growth: "+8%",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=150"
  }
];

export default function TopSelling() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 sm:p-6 shadow-3xs flex flex-col justify-between select-none min-h-[340px] text-left">
      
      {/* Header */}
      <div className="border-b border-gray-100 pb-3">
        <h3 className="text-sm sm:text-base font-extrabold text-gray-900">
          Top Selling
        </h3>
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
                className="size-11 rounded-lg object-cover border border-gray-100 shrink-0 shadow-3xs"
              />
              <div className="leading-none space-y-1">
                <h4 className="text-xs font-extrabold text-gray-900 max-w-[130px] sm:max-w-none truncate">
                  {prod.name}
                </h4>
                <span className="text-[10px] text-gray-400 font-bold block">
                  {prod.price} • <span className="text-gray-500">{prod.sales}</span>
                </span>
              </div>
            </div>

            {/* Right Growth */}
            <div className="text-right shrink-0">
              <span className="text-xs font-black text-emerald-600">
                {prod.growth}
              </span>
            </div>

          </div>
        ))}
      </div>

      {/* Bottom Action Button */}
      <div className="border-t border-gray-50 pt-4 mt-5 text-center">
        <button
          onClick={() => toast.success("Redirecting to your full product catalog inventory...")}
          className="text-xs font-black text-[#0F4C81] hover:underline cursor-pointer transition-colors"
        >
          View All Inventory
        </button>
      </div>

    </div>
  );
}
