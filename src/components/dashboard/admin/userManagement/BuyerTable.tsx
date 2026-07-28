"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import { Eye } from "lucide-react";
import BuyerDetailsDrawer from "./details/BuyerDetailsDrawer";

// Mock Buyers data matching mockup
const buyers = [
  {
    id: "#BUY-8219",
    name: "Jordan Vance",
    email: "j.vance@example.com",
    initials: "JV",
    bgInitials: "bg-blue-100 text-blue-700",
    status: "Active",
    statusStyle: "text-emerald-700 bg-emerald-50 border border-emerald-200",
    statusDot: "bg-emerald-500",
    totalOrders: 142,
    lastActive: "2 mins ago",
    joinedDate: "Oct 12, 2021",
    phone: "+880 1712-345678",
    address: "123 Green Road, Dhanmondi, Dhaka"
  },
  {
    id: "#BUY-4309",
    name: "Elena Rodriguez",
    email: "elena.rod@webmail.io",
    initials: "ER",
    bgInitials: "bg-amber-100 text-amber-700",
    status: "Flagged",
    statusStyle: "text-amber-700 bg-amber-50 border border-amber-200",
    statusDot: "bg-amber-500",
    totalOrders: 8,
    lastActive: "Oct 24, 2023",
    joinedDate: "Mar 05, 2022",
    phone: "+880 1833-987654",
    address: "House 45, Road 11, Banani, Dhaka"
  },
  {
    id: "#BUY-9921",
    name: "Marcus Thorne",
    email: "m.thorne@services.com",
    initials: "MT",
    bgInitials: "bg-rose-100 text-rose-700",
    status: "Suspended",
    statusStyle: "text-rose-700 bg-rose-50 border border-rose-200",
    statusDot: "bg-rose-500",
    totalOrders: 21,
    lastActive: "Sep 12, 2023",
    joinedDate: "Jan 18, 2021",
    phone: "+880 1515-443322",
    address: "Block C, Bashundhara R/A, Dhaka"
  },
  {
    id: "#BUY-2201",
    name: "Sarah Jenkins",
    email: "sarah.j@fastmail.com",
    initials: "SJ",
    bgInitials: "bg-emerald-100 text-emerald-700",
    status: "Active",
    statusStyle: "text-emerald-700 bg-emerald-50 border border-emerald-200",
    statusDot: "bg-emerald-500",
    totalOrders: 56,
    lastActive: "4 hours ago",
    joinedDate: "Nov 30, 2022",
    phone: "+880 1912-887766",
    address: "Flat 4B, Sector 7, Uttara, Dhaka"
  }
];

export default function BuyerTable() {
  const [selectedBuyer, setSelectedBuyer] = useState<any | null>(null);

  return (
    <div className="bg-white border border-gray-200 rounded shadow-3xs text-left flex flex-col justify-between overflow-hidden">
      
      {/* Responsive Table Wrapper with custom scrollbar */}
      <div className="overflow-x-auto w-full custom-scrollbar pb-1.5">
        <table className="w-full text-xs text-left min-w-[700px]">
          <thead>
            <tr className="text-[10px] font-bold text-gray-400 uppercase border-b border-gray-150 bg-gray-50/50">
              <th className="py-3 px-4 sm:px-6">BUYER NAME</th>
              <th className="py-3 px-4">STATUS</th>
              <th className="py-3 px-4 text-center sm:text-left">TOTAL ORDERS</th>
              <th className="py-3 px-4">LAST ACTIVE</th>
              <th className="py-3 px-4 text-center">ACTIONS</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 font-medium text-gray-700">
            {buyers.map((row, idx) => (
              <tr key={idx} className="hover:bg-gray-50/40 transition-colors">
                
                {/* Buyer Name & Email */}
                <td className="py-4 px-4 sm:px-6 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <span className={`size-8.5 rounded-full flex items-center justify-center text-[11px] font-black shrink-0 ${row.bgInitials}`}>
                      {row.initials}
                    </span>
                    <div className="text-left">
                      <h4 className="font-bold text-gray-900 leading-none">{row.name}</h4>
                      <span className="text-[10px] text-gray-400 font-semibold mt-1 block">{row.email}</span>
                    </div>
                  </div>
                </td>

                {/* Status Badges with indicators */}
                <td className="py-4 px-4 whitespace-nowrap">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold border uppercase tracking-wider select-none ${row.statusStyle}`}>
                    <span className={`size-1.5 rounded-full ${row.statusDot}`} />
                    <span>{row.status}</span>
                  </span>
                </td>

                {/* Total Orders */}
                <td className="py-4 px-4 font-bold text-gray-900 text-center sm:text-left">
                  {row.totalOrders}
                </td>

                {/* Last Active */}
                <td className="py-4 px-4 text-gray-500 whitespace-nowrap">
                  {row.lastActive}
                </td>

                {/* Action details */}
                <td className="py-4 px-4 text-center whitespace-nowrap">
                  <button
                    onClick={() => {
                      setSelectedBuyer(row);
                    
                    }}
                    className="p-1 rounded hover:bg-gray-100 text-gray-400 hover:text-[#0F4C81] transition-colors cursor-pointer"
                    title="View Buyer Profile"
                  >
                    <Eye className="size-4.5" />
                  </button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="border-t border-gray-150 bg-gray-50/30 px-4 sm:px-6 py-3.5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-semibold text-gray-500">
        <span>Showing 1-4 of 128,492 buyers</span>
        
        {/* Pagination arrows */}
        <div className="flex items-center gap-1.5 select-none">
          {/* Double left */}
          <button className="h-6 px-1.5 rounded border border-gray-250 bg-white hover:bg-gray-50 text-gray-400 disabled:opacity-40 disabled:hover:bg-white cursor-pointer" disabled>
            |&lt;
          </button>
          {/* Single left */}
          <button className="h-6 px-2 rounded border border-gray-250 bg-white hover:bg-gray-50 text-gray-400 disabled:opacity-40 disabled:hover:bg-white cursor-pointer" disabled>
            &lt;
          </button>
          
          {/* Active number */}
          <span className="h-6 w-6 flex items-center justify-center bg-[#0F4C81] text-white font-bold rounded text-xs">
            1
          </span>

          {/* Single right */}
          <button onClick={() => toast.error("Next pages pagination are not mocked.")} className="h-6 px-2 rounded border border-gray-250 bg-white hover:bg-gray-50 text-gray-600 cursor-pointer">
            &gt;
          </button>
          {/* Double right */}
          <button onClick={() => toast.error("Last pages pagination are not mocked.")} className="h-6 px-1.5 rounded border border-gray-250 bg-white hover:bg-gray-50 text-gray-600 cursor-pointer">
            &gt;|
          </button>
        </div>
      </div>

      {/* Buyer Details Slide-over Panel Overlay */}
      {selectedBuyer && (
        <BuyerDetailsDrawer 
          selectedBuyer={selectedBuyer} 
          onClose={() => setSelectedBuyer(null)} 
        />
      )}
    </div>
  );
}
