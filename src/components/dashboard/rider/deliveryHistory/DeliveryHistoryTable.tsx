"use client";

import React from "react";
import { Search, Eye } from "lucide-react";

interface DeliveryHistoryItem {
  id: string;
  customerName: string;
  customerArea: string;
  sellerName: string;
  completedTime: string;
  paymentType: "COD" | "Prepaid";
  amount: number;
  status: "Delivered" | "Failed";
  proofType: "Signature" | "Photo" | "—";
}

interface DeliveryHistoryTableProps {
  filteredItems: DeliveryHistoryItem[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  activeFilter: "all" | "delivered" | "failed";
  setActiveFilter: (filter: "all" | "delivered" | "failed") => void;
  onRowClick: (item: DeliveryHistoryItem) => void;
  onProofClick: (item: DeliveryHistoryItem) => void;
}

export default function DeliveryHistoryTable({
  filteredItems,
  searchQuery,
  setSearchQuery,
  activeFilter,
  setActiveFilter,
  onRowClick,
  onProofClick
}: DeliveryHistoryTableProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 sm:p-6 shadow-3xs space-y-4 text-left">
      
      {/* Table Title and Filters Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-50 pb-4">
        <div className="leading-none space-y-1">
          <h3 className="text-sm sm:text-base font-extrabold text-gray-900 leading-tight">
            Completed Deliveries
          </h3>
          <p className="text-[10px] sm:text-xs text-gray-400 font-semibold">
            Tap any row to review the proof of delivery record
          </p>
        </div>

        {/* Filtering control pills */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Search filter input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search history"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full sm:w-48 pl-8 pr-3 py-1.5 border border-gray-200 rounded-lg text-xs bg-white focus:outline-none focus:border-[#0F4C81] font-semibold text-gray-805"
            />
            <Search className="size-3.5 text-gray-400 absolute left-2.5 top-2" />
          </div>

          {/* Status Tabs pills */}
          <div className="border border-gray-150 rounded-lg p-1 bg-gray-50/50 text-[11px] font-bold text-gray-500 flex items-center select-none">
            {(["all", "delivered", "failed"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-3 py-1 rounded-md transition-all uppercase tracking-wider text-[9px] cursor-pointer ${
                  activeFilter === tab
                    ? "bg-white text-gray-900 border border-gray-200 shadow-3xs font-extrabold"
                    : "hover:text-gray-850"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Data Table */}
      <div className="overflow-x-auto select-none border border-gray-150 rounded-lg">
        <table className="w-full text-xs text-left">
          <thead>
            <tr className="bg-gray-50/70 border-b border-gray-150 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
              <th className="py-3 px-4">Order</th>
              <th className="py-3 px-4">Customer</th>
              <th className="py-3 px-4">Seller</th>
              <th className="py-3 px-4">Completed</th>
              <th className="py-3 px-4">Payment</th>
              <th className="py-3 px-4">Amount</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Proof</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-700 font-semibold">
            {filteredItems.length === 0 ? (
              <tr>
                <td colSpan={8} className="py-8 text-center text-gray-400 font-bold text-sm">
                  No history matching the criteria.
                </td>
              </tr>
            ) : (
              filteredItems.map((item) => (
                <tr 
                  key={item.id}
                  onClick={() => {
                    if (item.status === "Delivered") {
                      onRowClick(item);
                    }
                  }}
                  className={`hover:bg-slate-50/50 transition-colors ${
                    item.status === "Delivered" ? "cursor-pointer" : "cursor-default"
                  }`}
                >
                  {/* Order ID */}
                  <td className="py-3.5 px-4 font-black text-[#0F4C81]">{item.id}</td>

                  {/* Customer */}
                  <td className="py-3.5 px-4 leading-normal">
                    <div className="font-extrabold text-gray-900">{item.customerName}</div>
                    <div className="text-[10px] text-gray-400 font-semibold">{item.customerArea}</div>
                  </td>

                  {/* Seller */}
                  <td className="py-3.5 px-4 font-bold text-gray-800">{item.sellerName}</td>

                  {/* Completed Date */}
                  <td className="py-3.5 px-4 text-gray-500 font-medium">{item.completedTime}</td>

                  {/* Payment Badge */}
                  <td className="py-3.5 px-4">
                    <span className={`px-2 py-0.5 rounded text-[9px] font-black border ${
                      item.paymentType === "COD" 
                        ? "bg-amber-50 text-amber-800 border-amber-100" 
                        : "bg-blue-50 text-blue-700 border-blue-100"
                    }`}>
                      {item.paymentType}
                    </span>
                  </td>

                  {/* Amount */}
                  <td className="py-3.5 px-4 font-black text-gray-955">
                    ৳{item.amount.toLocaleString()}
                  </td>

                  {/* Status Pill */}
                  <td className="py-3.5 px-4">
                    <span className={`px-2 py-0.5 rounded-full text-[9px] font-black border tracking-wide uppercase ${
                      item.status === "Delivered"
                        ? "bg-emerald-50 text-emerald-700 border-emerald-150"
                        : "bg-rose-50 text-rose-700 border-rose-150"
                    }`}>
                      ● {item.status}
                    </span>
                  </td>

                  {/* Proof Click */}
                  <td className="py-3.5 px-4">
                    {item.proofType !== "—" ? (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onProofClick(item);
                        }}
                        className="text-[#0F4C81] hover:text-[#0C447C] font-black hover:underline inline-flex items-center gap-1 text-[11px] cursor-pointer"
                      >
                        <Eye className="size-3.5" />
                        <span>{item.proofType}</span>
                      </button>
                    ) : (
                      <span className="text-gray-300 font-medium">—</span>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
}
