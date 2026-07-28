"use client";

import React from "react";
import toast from "react-hot-toast";

const orderHistory = [
  {
    id: "#ORD-99281",
    date: "Oct 24, 2023",
    amount: "$1,240.00",
    status: "Delivered",
    statusStyle: "text-emerald-700 bg-emerald-50 border border-emerald-200"
  },
  {
    id: "#ORD-98102",
    date: "Oct 12, 2023",
    amount: "$450.50",
    status: "Delivered",
    statusStyle: "text-emerald-700 bg-emerald-50 border border-emerald-200"
  },
  {
    id: "#ORD-97554",
    date: "Sep 28, 2023",
    amount: "$2,100.00",
    status: "Processing",
    statusStyle: "text-amber-700 bg-amber-50 border border-amber-200"
  },
  {
    id: "#ORD-96441",
    date: "Sep 15, 2023",
    amount: "$89.99",
    status: "Cancelled",
    statusStyle: "text-rose-700 bg-rose-50 border border-rose-200"
  }
];

export default function BuyerOrderHistory() {
  return (
    <div className="space-y-6 text-left select-none">
      
      {/* 1. Order History Table */}
      <div className="overflow-x-auto w-full custom-scrollbar pb-1.5 border border-gray-100 rounded-lg">
        <table className="w-full text-xs text-left min-w-[400px]">
          <thead>
            <tr className="text-[10px] font-bold text-gray-400 uppercase border-b border-gray-150 bg-gray-50/50">
              <th className="py-2.5 px-3">ORDER ID</th>
              <th className="py-2.5 px-3">DATE</th>
              <th className="py-2.5 px-3">AMOUNT</th>
              <th className="py-2.5 px-3">STATUS</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 font-medium text-gray-700">
            {orderHistory.map((row, idx) => (
              <tr key={idx} className="hover:bg-gray-50/30 transition-colors">
                <td className="py-3 px-3 font-bold text-gray-800">{row.id}</td>
                <td className="py-3 px-3 text-gray-400 font-semibold">{row.date}</td>
                <td className="py-3 px-3 font-extrabold text-gray-900">{row.amount}</td>
                <td className="py-3 px-3">
                  <span className={`inline-block px-2 py-0.5 rounded-full text-[9px] font-bold border uppercase tracking-wider select-none ${row.statusStyle}`}>
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 2. Recent Seller Interactions Section with custom Message bubbles thread */}
      <div className="space-y-3.5 pt-2">
        <div className="flex items-center justify-between border-b border-gray-150 pb-2">
          <h3 className="text-xs sm:text-sm font-bold text-gray-900">Recent Seller Interactions</h3>
          <button 
            onClick={() => toast.success("Opening seller interactions...")}
            className="text-xs font-bold text-[#0F4C81] hover:text-[#0C447C] cursor-pointer"
          >
            View All
          </button>
        </div>

        {/* Chat Thread Bubbles */}
        <div className="space-y-4 pt-1">
          {/* Seller bubble (left-aligned) */}
          <div className="flex items-start gap-2.5 max-w-[90%]">
            <img 
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=60" 
              alt="Seller avatar" 
              className="size-7 rounded-full object-cover shrink-0 border border-gray-100 mt-1"
            />
            <div className="bg-[#EFF6FF] text-gray-800 border border-blue-100 rounded-lg p-3 text-[11px] leading-relaxed relative">
              <div className="flex items-center justify-between gap-6 mb-1 text-[10px]">
                <span className="font-extrabold text-blue-800">TechHub Solutions (Seller)</span>
                <span className="text-gray-400 font-bold">10:42 AM</span>
              </div>
              <p className="font-semibold text-gray-700">
                Hello Jordan, your request for bulk shipping has been approved. Please check your invoice.
              </p>
            </div>
          </div>

          {/* Buyer bubble (right-aligned) */}
          <div className="flex items-start justify-center gap-2.5 w-full">
            <div className="bg-[#0F4C81] text-white rounded-lg p-3 text-[11px] leading-relaxed max-w-[80%] text-left shadow-2xs">
              <div className="flex items-center justify-between gap-6 mb-1 text-[10px]">
                <span className="font-extrabold text-blue-200">Jordan Vance (Buyer)</span>
                <span className="text-blue-200/85 font-bold">10:45 AM</span>
              </div>
              <p className="font-semibold">
                Excellent, thank you for the quick turnaround!
              </p>
            </div>
            
            {/* Round Buyer initials bubble */}
            <div className="size-7 rounded-full bg-blue-100 text-blue-700 font-black text-[10px] flex items-center justify-center shrink-0 border border-blue-200 mt-1 select-none">
              JV
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
