"use client";

import React from "react";
import toast from "react-hot-toast";

const hotProducts = [
  {
    name: "Aero Buds Pro II",
    category: "Electronics",
    sales: "4.2k Sales",
    price: "$189.00",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=150"
  },
  {
    name: "ErgoSit Executive",
    category: "Office",
    sales: "2.8k Sales",
    price: "$450.00",
    image: "https://images.unsplash.com/photo-1505797149-43b0069ec26b?auto=format&fit=crop&q=80&w=150"
  },
  {
    name: "Vanguard Chrono",
    category: "Watches",
    sales: "1.1k Sales",
    price: "$1,299.00",
    image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&q=80&w=150"
  }
];

export default function HottestProducts() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 sm:p-6 shadow-3xs flex flex-col justify-between select-none min-h-[340px] text-left">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-100 pb-3">
        <h3 className="text-sm sm:text-base font-extrabold text-gray-900">
          Hottest Products
        </h3>
        <button
          onClick={() => toast.success("Opening complete products analytics breakdown...")}
          className="text-[10px] sm:text-xs font-black text-[#0F4C81] hover:underline uppercase tracking-wide cursor-pointer"
        >
          View All
        </button>
      </div>

      {/* Product List */}
      <div className="divide-y divide-gray-100 mt-4 flex-1 flex flex-col justify-center gap-3">
        {hotProducts.map((prod, idx) => (
          <div key={idx} className="flex items-center justify-between pt-3.5 first:pt-0">
            
            {/* Left Image & details */}
            <div className="flex items-center gap-3 text-left">
              <img 
                src={prod.image} 
                alt={prod.name} 
                className="size-11 sm:size-12 rounded-lg object-cover border border-gray-100 shrink-0 shadow-3xs"
              />
              <div className="leading-none space-y-1">
                <h4 className="text-xs font-extrabold text-gray-900">
                  {prod.name}
                </h4>
                <span className="text-[10px] text-gray-400 font-bold block">
                  {prod.category} • <span className="text-gray-500">{prod.sales}</span>
                </span>
              </div>
            </div>

            {/* Right Price */}
            <div className="text-right shrink-0">
              <span className="text-xs font-black text-[#0F4C81]">
                {prod.price}
              </span>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
