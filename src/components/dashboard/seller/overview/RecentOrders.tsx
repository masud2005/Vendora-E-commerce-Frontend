"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import { SlidersHorizontal, MoreVertical, ChevronLeft, ChevronRight } from "lucide-react";

const recentOrdersData = [
  {
    id: "#ORD-89420",
    time: "2 mins ago",
    customer: { name: "Jane Doe", initials: "JD", bg: "bg-emerald-100 text-emerald-700 font-bold" },
    product: "Sony FE 24-70mm f/2.8",
    amount: "$2,199.00",
    status: "PROCESSING",
    statusStyle: "bg-emerald-50 text-emerald-700 border-emerald-150"
  },
  {
    id: "#ORD-89418",
    time: "15 mins ago",
    customer: { name: "Marcus Smith", initials: "MS", bg: "bg-blue-100 text-blue-700 font-bold" },
    product: "Vendora ProBook X",
    amount: "$1,450.00",
    status: "SHIPPED",
    statusStyle: "bg-indigo-50 text-indigo-700 border-indigo-150"
  },
  {
    id: "#ORD-89415",
    time: "1 hour ago",
    customer: { name: "Alice Lu", initials: "AL", bg: "bg-yellow-100 text-yellow-750 font-bold" },
    product: "Audio-Z Wireless Pro",
    amount: "$349.00",
    status: "DELIVERED",
    statusStyle: "bg-gray-100 text-gray-700 border-gray-250"
  }
];

export default function RecentOrders() {
  const [selectedStatus, setSelectedStatus] = useState("All Status");

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 sm:p-6 shadow-3xs text-left select-none space-y-4">
      
      {/* Header Row */}
      <div className="flex items-center justify-between border-b border-gray-100 pb-3.5">
        <h3 className="text-sm sm:text-base font-extrabold text-gray-900 leading-tight">
          Recent Orders
        </h3>

        {/* Dropdown Filters */}
        <div className="flex items-center gap-2 text-xs select-none">
          <select 
            value={selectedStatus}
            onChange={(e) => {
              setSelectedStatus(e.target.value);
              toast.success(`Filtering orders by status: ${e.target.value}`);
            }}
            className="bg-white border border-gray-200 rounded px-2.5 py-1 text-gray-600 font-semibold focus:outline-none cursor-pointer"
          >
            <option>All Status</option>
            <option>Processing</option>
            <option>Shipped</option>
            <option>Delivered</option>
          </select>
          <button 
            onClick={() => toast.success("Opening advanced orders filter drawer...")}
            className="p-1.5 border border-gray-200 hover:bg-gray-50 text-gray-500 rounded cursor-pointer transition-colors"
            title="Advanced Filters"
          >
            <SlidersHorizontal className="size-3.5" />
          </button>
        </div>
      </div>

      {/* Table wrapper with custom scrollbar */}
      <div className="overflow-x-auto w-full custom-scrollbar pb-1">
        <table className="w-full text-xs text-left min-w-[620px]">
          <thead>
            <tr className="text-[10px] font-bold text-gray-400 uppercase border-b border-gray-150 bg-gray-50/50">
              <th className="py-2.5 px-3">Order ID</th>
              <th className="py-2.5 px-3">Customer</th>
              <th className="py-2.5 px-3">Product</th>
              <th className="py-2.5 px-3">Amount</th>
              <th className="py-2.5 px-3">Status</th>
              <th className="py-2.5 px-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 font-semibold text-gray-700">
            {recentOrdersData.map((row, idx) => (
              <tr key={idx} className="hover:bg-gray-50/30 transition-colors">
                
                {/* Order ID & Time */}
                <td className="py-3.5 px-3 whitespace-nowrap">
                  <div className="text-left leading-none space-y-1">
                    <h4 className="font-extrabold text-[#0F4C81] hover:underline cursor-pointer">{row.id}</h4>
                    <span className="text-[9px] text-gray-400 font-bold block">{row.time}</span>
                  </div>
                </td>

                {/* Customer with initials avatar */}
                <td className="py-3.5 px-3 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <span className={`size-6.5 rounded-full flex items-center justify-center text-[10px] uppercase shrink-0 ${row.customer.bg}`}>
                      {row.customer.initials}
                    </span>
                    <span className="text-gray-900 font-extrabold">{row.customer.name}</span>
                  </div>
                </td>

                {/* Product Name */}
                <td className="py-3.5 px-3 whitespace-nowrap text-gray-600 max-w-[200px] truncate">
                  {row.product}
                </td>

                {/* Order Amount */}
                <td className="py-3.5 px-3 whitespace-nowrap font-black text-gray-950">
                  {row.amount}
                </td>

                {/* Status Badges */}
                <td className="py-3.5 px-3 whitespace-nowrap">
                  <span className={`px-2 py-0.5 rounded text-[8px] font-bold border uppercase tracking-wider select-none ${row.statusStyle}`}>
                    {row.status}
                  </span>
                </td>

                {/* Actions Button */}
                <td className="py-3.5 px-3 whitespace-nowrap text-right">
                  <button 
                    onClick={() => toast.success(`Viewing details for order ${row.id}`)}
                    className="p-1 text-gray-400 hover:text-gray-700 hover:bg-gray-50 rounded transition-colors cursor-pointer"
                  >
                    <MoreVertical className="size-4" />
                  </button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination control footer bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] sm:text-xs font-semibold text-gray-400 pt-2 select-none border-t border-gray-50">
        <span>Showing 1-3 of 124 orders</span>

        <div className="flex items-center gap-1.5">
          <button 
            disabled 
            className="h-6 w-6 flex items-center justify-center rounded border border-gray-200 bg-white text-gray-300 hover:bg-gray-50 disabled:opacity-40 cursor-pointer"
          >
            <ChevronLeft className="size-3.5" />
          </button>
          <button 
            onClick={() => toast.success("Loading next orders page...")}
            className="h-6 w-6 flex items-center justify-center rounded border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 cursor-pointer"
          >
            <ChevronRight className="size-3.5" />
          </button>
        </div>
      </div>

    </div>
  );
}
