"use client";

import React, { useState } from "react";
import { Search, SlidersHorizontal, MoreVertical, ChevronLeft, ChevronRight } from "lucide-react";

interface OrderItem {
  id: string;
  time: string;
  customerName: string;
  customerImg: string;
  productName: string;
  productImg: string;
  sku: string;
  amount: string;
  dateTime: string;
  status: "Pending" | "Shipped" | "Cancelled";
  statusStyle: string;
}

const mockOrders: OrderItem[] = [
  {
    id: "#VEN-9402",
    time: "2 mins ago",
    customerName: "Julianna Reed",
    customerImg: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=80",
    productName: "Ergo-Grip Mouse",
    productImg: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&q=80&w=100",
    sku: "SKU: MO-992-GR",
    amount: "$89.00",
    dateTime: "Oct 24, 10:45 AM",
    status: "Pending",
    statusStyle: "bg-emerald-50 text-emerald-700 border-emerald-150"
  },
  {
    id: "#VEN-9401",
    time: "15 mins ago",
    customerName: "Marcus Chen",
    customerImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=80",
    productName: "KeyMaster Pro X",
    productImg: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&q=80&w=100",
    sku: "SKU: KB-101-BLK",
    amount: "$159.00",
    dateTime: "Oct 24, 09:12 AM",
    status: "Shipped",
    statusStyle: "bg-blue-50 text-blue-705 border-blue-200"
  },
  {
    id: "#VEN-9398",
    time: "1 hour ago",
    customerName: "Sarah Jenkins",
    customerImg: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=80",
    productName: "Aura Studio ANC",
    productImg: "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&q=80&w=100",
    sku: "SKU: HP-55-CRM",
    amount: "$299.00",
    dateTime: "Oct 23, 11:30 PM",
    status: "Cancelled",
    statusStyle: "bg-rose-50 text-rose-700 border-rose-150"
  },
  {
    id: "#VEN-9395",
    time: "3 hours ago",
    customerName: "David Kovac",
    customerImg: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=80",
    productName: "SonicFlow Mini",
    productImg: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&q=80&w=100",
    sku: "SKU: SP-08-BLK",
    amount: "$45.00",
    dateTime: "Oct 23, 08:20 PM",
    status: "Shipped",
    statusStyle: "bg-blue-50 text-blue-705 border-blue-200"
  }
];

type FilterStatus = "All Orders" | "Pending" | "Shipped" | "Cancelled";

export default function OrdersList() {
  const [activeTab, setActiveTab] = useState<FilterStatus>("All Orders");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter orders based on selected Tab and search query
  const filteredOrders = mockOrders.filter((order) => {
    // 1. Tab status matching
    const matchesTab = activeTab === "All Orders" || order.status === activeTab;

    // 2. Search string matching
    const normalizedQuery = searchQuery.toLowerCase().trim();
    const matchesSearch = 
      order.id.toLowerCase().includes(normalizedQuery) ||
      order.customerName.toLowerCase().includes(normalizedQuery) ||
      order.productName.toLowerCase().includes(normalizedQuery) ||
      order.sku.toLowerCase().includes(normalizedQuery);

    return matchesTab && matchesSearch;
  });

  return (
    <div className="bg-white border border-gray-250 rounded-lg p-5 sm:p-6 shadow-3xs text-left select-none space-y-5">
      
      {/* Search and Tabs Row */}
      <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
        
        {/* Left Side: Filter Tabs */}
        <div className="bg-gray-100 border border-gray-200 rounded-lg p-1 flex items-center shadow-3xs self-start">
          {(["All Orders", "Pending", "Shipped", "Cancelled"] as const).map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setCurrentPage(1);
                }}
                className={`px-3 py-1.5 rounded-md text-xs font-black transition-all cursor-pointer ${
                  isActive 
                    ? "bg-white text-gray-900 shadow-3xs" 
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Right Side: Search & Filter adjustments */}
        <div className="flex items-center gap-2 select-none w-full xl:w-auto">
          <div className="relative flex-1 xl:w-60 text-left">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <Search className="size-4" />
            </span>
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by ID or Name..."
              className="w-full pl-9 pr-3 py-1.5 border border-gray-200 rounded-lg text-xs bg-white focus:outline-none focus:border-[#0F4C81] font-semibold text-gray-700"
            />
          </div>
          <button 
            className="p-2 border border-gray-200 hover:bg-gray-50 text-gray-500 rounded-lg cursor-pointer transition-colors"
            title="Advanced Filters"
          >
            <SlidersHorizontal className="size-4" />
          </button>
        </div>

      </div>

      {/* Table wrapper with custom scrollbar */}
      <div className="overflow-x-auto w-full custom-scrollbar pb-1">
        <table className="w-full text-xs text-left min-w-[700px]">
          <thead>
            <tr className="text-[10px] font-bold text-gray-400 uppercase border-b border-gray-150 bg-gray-50/50">
              <th className="py-3 px-3">ORDER ID</th>
              <th className="py-3 px-3">CUSTOMER</th>
              <th className="py-3 px-3">PRODUCT INFO</th>
              <th className="py-3 px-3">AMOUNT</th>
              <th className="py-3 px-3">DATE/TIME</th>
              <th className="py-3 px-3">STATUS</th>
              <th className="py-3 px-3 text-right">ACTION</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 font-semibold text-gray-700">
            {filteredOrders.length === 0 ? (
              <tr>
                <td colSpan={7} className="py-8 text-center text-gray-400 font-bold text-xs">
                  No orders found matching the filter criteria.
                </td>
              </tr>
            ) : (
              filteredOrders.map((row, idx) => (
                <tr key={idx} className="hover:bg-gray-50/30 transition-colors">
                  
                  {/* Order ID & Time */}
                  <td className="py-3.5 px-3 whitespace-nowrap">
                    <div className="text-left leading-none space-y-1">
                      <h4 className="font-extrabold text-[#0F4C81] hover:underline cursor-pointer">{row.id}</h4>
                      <span className="text-[9px] text-gray-400 font-bold block">{row.time}</span>
                    </div>
                  </td>

                  {/* Customer details with image */}
                  <td className="py-3.5 px-3 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <img 
                        src={row.customerImg} 
                        alt={row.customerName}
                        className="size-7 rounded-full object-cover shrink-0 border border-gray-100"
                      />
                      <span className="text-gray-900 font-extrabold">{row.customerName}</span>
                    </div>
                  </td>

                  {/* Product Info details with image */}
                  <td className="py-3.5 px-3 whitespace-nowrap">
                    <div className="flex items-center gap-2.5">
                      <img 
                        src={row.productImg} 
                        alt={row.productName}
                        className="size-9.5 rounded object-cover shrink-0 border border-gray-100"
                      />
                      <div className="text-left leading-none space-y-1">
                        <h4 className="font-extrabold text-gray-900 max-w-[150px] truncate">{row.productName}</h4>
                        <span className="text-[9px] text-gray-400 font-bold block">{row.sku}</span>
                      </div>
                    </div>
                  </td>

                  {/* Amount */}
                  <td className="py-3.5 px-3 whitespace-nowrap font-black text-gray-950">
                    {row.amount}
                  </td>

                  {/* Date & Time */}
                  <td className="py-3.5 px-3 whitespace-nowrap text-gray-600 font-bold">
                    {row.dateTime}
                  </td>

                  {/* Status Badge */}
                  <td className="py-3.5 px-3 whitespace-nowrap">
                    <span className={`px-2.5 py-0.5 rounded text-[8px] font-bold border uppercase tracking-wider select-none ${row.statusStyle}`}>
                      {row.status}
                    </span>
                  </td>

                  {/* Actions vertical dots */}
                  <td className="py-3.5 px-3 whitespace-nowrap text-right">
                    <button 
                      className="p-1 text-gray-400 hover:text-gray-700 hover:bg-gray-50 rounded transition-colors cursor-pointer"
                    >
                      <MoreVertical className="size-4" />
                    </button>
                  </td>

                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] sm:text-xs font-semibold text-gray-400 pt-2 select-none border-t border-gray-50">
        <span>Showing 1-{filteredOrders.length} of 142 orders</span>

        <div className="flex items-center gap-1">
          {/* Prev */}
          <button className="h-6 px-1.5 rounded border border-gray-250 bg-white text-gray-400 hover:bg-gray-50 disabled:opacity-40 cursor-pointer" disabled>
            <ChevronLeft className="size-3.5" />
          </button>
          
          <span className="h-6 w-6 flex items-center justify-center bg-[#0F4C81] text-white font-bold rounded text-xs">
            1
          </span>
          <button className="h-6 w-6 flex items-center justify-center border border-gray-250 bg-white hover:bg-gray-50 text-gray-600 rounded text-xs cursor-pointer">
            2
          </button>
          <button className="h-6 w-6 flex items-center justify-center border border-gray-250 bg-white hover:bg-gray-50 text-gray-600 rounded text-xs cursor-pointer">
            3
          </button>

          {/* Next */}
          <button className="h-6 px-1.5 rounded border border-gray-250 bg-white text-gray-650 hover:bg-gray-50 cursor-pointer">
            <ChevronRight className="size-3.5" />
          </button>
        </div>
      </div>

    </div>
  );
}
