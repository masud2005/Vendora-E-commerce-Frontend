"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import { MoreVertical, AlertTriangle, Search } from "lucide-react";

// Mock Products list matching figma image 4
const initialProducts = [
  {
    title: "Nordic Comfort Armchair",
    sku: "FUR-NC-001",
    qty: 124,
    price: "$890.00",
    status: "Active",
    statusStyle: "text-emerald-700 bg-emerald-50 border-emerald-200",
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=150",
    flagged: false
  },
  {
    title: "Aura Geometric Pendant",
    sku: "LGT-AG-099",
    qty: 42,
    price: "$345.00",
    status: "Active",
    statusStyle: "text-emerald-700 bg-emerald-50 border-emerald-200",
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=150",
    flagged: false
  },
  {
    title: "Elite Chrono Edition",
    sku: "WTC-EC-007",
    qty: 0,
    price: "$4,200.00",
    status: "Flagged: IP Policy",
    statusStyle: "text-rose-700 bg-rose-50 border-rose-200",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=150",
    flagged: true
  }
];

export default function ProductCatalogTab() {
  const [activeFilter, setActiveFilter] = useState("All Products");

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 sm:p-6 shadow-3xs text-left select-none space-y-5">
      
      {/* Filters & Search Row */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-100 pb-4">
        
        {/* Left side categories buttons */}
        <div className="flex flex-wrap items-center gap-2 text-[10px] sm:text-xs font-bold">
          <button
            onClick={() => setActiveFilter("All Products")}
            className={`px-3.5 py-1.5 rounded transition-colors cursor-pointer ${
              activeFilter === "All Products" 
                ? "bg-[#0F4C81] text-white" 
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            All Products (482)
          </button>
          <button
            onClick={() => setActiveFilter("Active")}
            className={`px-3.5 py-1.5 rounded transition-colors cursor-pointer ${
              activeFilter === "Active" 
                ? "bg-[#0F4C81] text-white" 
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Active (476)
          </button>
          <button
            onClick={() => setActiveFilter("Pending")}
            className={`px-3.5 py-1.5 rounded transition-colors cursor-pointer ${
              activeFilter === "Pending" 
                ? "bg-[#0F4C81] text-white" 
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Pending (4)
          </button>
          <button
            onClick={() => setActiveFilter("Flagged")}
            className={`px-3.5 py-1.5 rounded transition-colors border cursor-pointer ${
              activeFilter === "Flagged" 
                ? "bg-rose-600 text-white border-rose-700" 
                : "bg-rose-50 text-rose-700 border-rose-100 hover:bg-rose-100"
            }`}
          >
            Flagged (2)
          </button>
        </div>

        {/* Right side search box */}
        <div className="relative w-full md:max-w-[200px]">
          <input
            type="text"
            placeholder="Filter products..."
            onChange={() => toast.success("Filtering product list...")}
            className="w-full pl-8 pr-3 py-1.5 bg-white border border-gray-200 rounded text-xs focus:outline-none focus:border-[#0F4C81]"
          />
          <Search className="absolute left-2.5 top-2.5 size-3.5 text-gray-400" />
        </div>

      </div>

      {/* Products Grid list */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4.5">
        {initialProducts.map((prod, idx) => {
          return (
            <div
              key={idx}
              className={`rounded-lg p-3.5 flex gap-3.5 items-center justify-between shadow-3xs transition-all ${
                prod.flagged 
                  ? "border border-rose-350 bg-rose-50/10 hover:bg-rose-50/20" 
                  : "border border-gray-150 bg-white hover:border-gray-200"
              }`}
            >
              
              {/* Product Thumbnail & Details */}
              <div className="flex items-center gap-3">
                <img 
                  src={prod.image} 
                  alt={prod.title} 
                  className="size-14 rounded-md object-cover border border-gray-100 shrink-0 shadow-3xs"
                />
                <div className="text-left leading-none space-y-1.5">
                  <h4 className="text-xs font-bold text-gray-900 truncate max-w-[150px]" title={prod.title}>
                    {prod.title}
                  </h4>
                  <span className="text-[9px] text-gray-400 font-bold block uppercase tracking-tight">
                    SKU: {prod.sku} • QTY: {prod.qty}
                  </span>
                  
                  {/* Price & status tags row */}
                  <div className="flex items-center gap-2 pt-0.5">
                    <span className="text-xs font-black text-gray-905">{prod.price}</span>
                    <span className={`px-2 py-0.5 rounded text-[8px] font-bold border uppercase tracking-wider ${prod.statusStyle}`}>
                      {prod.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Column */}
              <div className="shrink-0">
                {prod.flagged ? (
                  <div className="flex items-center gap-1.5">
                    <button 
                      onClick={() => toast.error("Intellectual Property Policy violation detected!")}
                      className="p-1 rounded hover:bg-rose-50 text-rose-600 transition-colors cursor-pointer"
                    >
                      <AlertTriangle className="size-4" />
                    </button>
                    <button 
                      onClick={() => toast.success(`Opening options for ${prod.title}`)}
                      className="p-1 rounded hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-colors cursor-pointer"
                    >
                      <MoreVertical className="size-4" />
                    </button>
                  </div>
                ) : (
                  <button 
                    onClick={() => toast.success(`Opening options for ${prod.title}`)}
                    className="p-1 rounded hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-colors cursor-pointer"
                  >
                    <MoreVertical className="size-4" />
                  </button>
                )}
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
}
