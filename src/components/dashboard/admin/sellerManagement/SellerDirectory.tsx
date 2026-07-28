"use client";

import React from "react";
import toast from "react-hot-toast";
import { Eye } from "lucide-react";
import Link from "next/link";

// Mock Seller directory list data matching mockup
const sellersList = [
  {
    name: "ElectroMart Global",
    id: "VEN-99210",
    initials: "EM",
    bgInitials: "bg-blue-100 text-blue-700",
    verification: "Verified",
    verificationStyle: "bg-emerald-50 text-emerald-800 border-emerald-200",
    status: "Active",
    statusStyle: "text-emerald-700",
    statusDot: "bg-emerald-500",
    revenue: "$42,500",
    orders: "1,248"
  },
  {
    name: "Nature's Secret",
    id: "VEN-10482",
    initials: "NS",
    bgInitials: "bg-purple-100 text-purple-700",
    verification: "Pending",
    verificationStyle: "bg-blue-50 text-blue-800 border-blue-200",
    status: "Active",
    statusStyle: "text-emerald-700",
    statusDot: "bg-emerald-500",
    revenue: "$2,840",
    orders: "98"
  },
  {
    name: "Vintage Horology",
    id: "VEN-00293",
    initials: "VH",
    bgInitials: "bg-amber-100 text-amber-700",
    verification: "Verified",
    verificationStyle: "bg-emerald-50 text-emerald-800 border-emerald-200",
    status: "Suspended",
    statusStyle: "text-rose-700",
    statusDot: "bg-rose-500",
    revenue: "$9,210",
    orders: "312"
  },
  {
    name: "Artisan Kitchen",
    id: "VEN-11928",
    initials: "AK",
    bgInitials: "bg-teal-100 text-teal-700",
    verification: "Flagged",
    verificationStyle: "bg-rose-50 text-rose-800 border-rose-200",
    status: "Active",
    statusStyle: "text-emerald-700",
    statusDot: "bg-emerald-500",
    revenue: "$5,280",
    orders: "156"
  }
];

export default function SellerDirectory() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-3xs text-left select-none space-y-4 flex flex-col justify-between">
      {/* Directory Header with filter dropdowns */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-100 pb-3.5">
        <h3 className="text-xs sm:text-sm font-bold text-gray-900">
          Seller Directory
        </h3>
        
        {/* Right side dropdown select dropdown simulated blocks */}
        <div className="flex items-center gap-2 select-none text-[10px] sm:text-xs">
          <select 
            onChange={() => toast.success("Filtering directory verification...")}
            className="bg-white border border-gray-200 rounded px-2.5 py-1 text-gray-600 font-semibold focus:outline-none cursor-pointer"
          >
            <option>All Verification</option>
            <option>Verified</option>
            <option>Pending</option>
            <option>Flagged</option>
          </select>
          <select 
            onChange={() => toast.success("Filtering directory status...")}
            className="bg-white border border-gray-200 rounded px-2.5 py-1 text-gray-600 font-semibold focus:outline-none cursor-pointer"
          >
            <option>Status: All</option>
            <option>Active</option>
            <option>Suspended</option>
          </select>
        </div>
      </div>

      {/* Directory Table Wrapper with custom scrollbar */}
      <div className="overflow-x-auto w-full custom-scrollbar pb-1.5">
        <table className="w-full text-xs text-left min-w-[550px]">
          <thead>
            <tr className="text-[10px] font-bold text-gray-400 uppercase border-b border-gray-150 bg-gray-50/50">
              <th className="py-2.5 px-3">SHOP NAME</th>
              <th className="py-2.5 px-3">VERIFICATION</th>
              <th className="py-2.5 px-3">STATUS</th>
              <th className="py-2.5 px-3">30D REVENUE</th>
              <th className="py-2.5 px-3">ORDERS</th>
              <th className="py-2.5 px-3 text-center"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 font-medium text-gray-700">
            {sellersList.map((row, idx) => (
              <tr key={idx} className="hover:bg-gray-50/30 transition-colors">
                
                {/* Shop details */}
                <td className="py-3.5 px-3 whitespace-nowrap">
                  <div className="flex items-center gap-2.5">
                    <span className={`size-7.5 rounded-full flex items-center justify-center text-[10px] font-black shrink-0 ${row.bgInitials}`}>
                      {row.initials}
                    </span>
                    <div className="text-left leading-none">
                      <h4 className="font-bold text-gray-900">{row.name}</h4>
                      <span className="text-[9px] text-gray-400 font-semibold mt-1 block">ID: {row.id}</span>
                    </div>
                  </div>
                </td>

                {/* Verification tag */}
                <td className="py-3.5 px-3 whitespace-nowrap">
                  <span className={`px-2 py-0.5 rounded text-[9px] font-bold border uppercase tracking-wider select-none ${row.verificationStyle}`}>
                    {row.verification}
                  </span>
                </td>

                {/* Status Dot pill indicator */}
                <td className="py-3.5 px-3 whitespace-nowrap">
                  <span className={`inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider select-none ${row.statusStyle}`}>
                    <span className={`size-1.5 rounded-full ${row.statusDot}`} />
                    <span>{row.status}</span>
                  </span>
                </td>

                {/* 30D Revenue */}
                <td className="py-3.5 px-3 font-extrabold text-gray-950">{row.revenue}</td>

                {/* Total Orders count */}
                <td className="py-3.5 px-3 font-bold text-gray-700">{row.orders}</td>

                {/* Options button */}
                <td className="py-3.5 px-3 text-center">
                  <Link 
                    href={`/admin/sellerMangement/${row.id}`}
                    className="p-1 rounded hover:bg-gray-100 text-gray-400 hover:text-[#0F4C81] transition-colors cursor-pointer flex items-center justify-center"
                    title="View Seller Profile"
                  >
                    <Eye className="size-4.5" />
                  </Link>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination panel footer block */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] sm:text-xs font-semibold text-gray-400 pt-2 select-none">
        <span>Showing 1 to 4 of 2,450 sellers</span>

        {/* Small numeric page selectors */}
        <div className="flex items-center gap-1">
          <button className="h-6 px-1.5 rounded border border-gray-250 bg-white text-gray-400 hover:bg-gray-50 disabled:opacity-40 cursor-pointer" disabled>
            &lt;
          </button>
          
          <span className="h-6 w-6 flex items-center justify-center bg-[#0F4C81] text-white font-bold rounded text-xs">
            1
          </span>
          <button onClick={() => toast.success("Loading page 2...")} className="h-6 w-6 flex items-center justify-center border border-gray-250 bg-white hover:bg-gray-50 text-gray-600 rounded text-xs cursor-pointer">
            2
          </button>
          <button onClick={() => toast.success("Loading page 3...")} className="h-6 w-6 flex items-center justify-center border border-gray-250 bg-white hover:bg-gray-50 text-gray-600 rounded text-xs cursor-pointer">
            3
          </button>

          <button onClick={() => toast.success("Loading next page...")} className="h-6 px-1.5 rounded border border-gray-250 bg-white text-gray-600 hover:bg-gray-50 cursor-pointer">
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
