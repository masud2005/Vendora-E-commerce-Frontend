"use client";

import React from "react";
import toast from "react-hot-toast";
import Link from "next/link";
import { ClipboardList, CheckCircle2, AlertTriangle, Hourglass } from "lucide-react";

export default function ApprovalQueue() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-3xs text-left select-none space-y-4">
      {/* Card Header */}
      <div className="flex items-center justify-between border-b border-gray-100 pb-3">
        <div className="flex items-center gap-2">
          <ClipboardList className="size-4.5 text-[#0F4C81]" />
          <h3 className="text-xs sm:text-sm font-bold text-gray-900">
            Approval Queue
          </h3>
        </div>
        <span className="text-[10px] font-extrabold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full select-none">
          12 Pending
        </span>
      </div>

      {/* Queue items */}
      <div className="divide-y divide-gray-100 space-y-4">
        
        {/* Item 1: Luxe Decor Hub */}
        <div className="space-y-3 pt-3 first:pt-0">
          <div className="flex items-center justify-between">
            <div className="text-left">
              <h4 className="text-xs font-bold text-gray-900 leading-tight">Luxe Decor Hub</h4>
              <span className="text-[10px] text-gray-400 font-semibold mt-0.5 block">Application #APP-8821</span>
            </div>
            <Link 
              href="/admin/sellerMangement/SL-8842-DH" 
              className="text-gray-400 hover:text-[#0F4C81] transition-colors font-bold cursor-pointer"
              title="View Application Details"
            >
              ➔
            </Link>
          </div>
          {/* Credentials Info block */}
          <div className="grid grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-2 text-[10px] font-bold">
            <div className="flex items-center gap-1 text-emerald-700">
              <CheckCircle2 className="size-3.5" />
              <span>NID Verification</span>
              <span className="ml-auto text-[9px] font-black uppercase bg-emerald-50 px-1 rounded">Verified</span>
            </div>
            <div className="flex items-center gap-1 text-amber-700">
              <Hourglass className="size-3.5" />
              <span>Trade License</span>
              <span className="ml-auto text-[9px] font-black uppercase bg-amber-50 px-1 rounded">Pending</span>
            </div>
          </div>
          {/* Action Row */}
          <div className="flex items-center gap-3 pt-1">
            <button
              onClick={() => toast.success("Luxe Decor Hub application approved!")}
              className="bg-[#0A4B3A] hover:bg-[#073F30] text-white font-bold text-[11px] py-1.5 rounded flex-1 cursor-pointer transition-colors"
            >
              Approve
            </button>
            <button
              onClick={() => toast.error("Luxe Decor Hub application rejected.")}
              className="border border-rose-300 hover:bg-rose-50 text-rose-600 font-bold text-[11px] py-1.5 rounded flex-1 cursor-pointer transition-colors"
            >
              Reject
            </button>
          </div>
        </div>

        {/* Item 2: Urban Wear Collective */}
        <div className="space-y-3 pt-4">
          <div className="flex items-center justify-between">
            <div className="text-left">
              <h4 className="text-xs font-bold text-gray-900 leading-tight">Urban Wear Collective</h4>
              <span className="text-[10px] text-gray-400 font-semibold mt-0.5 block">Application #APP-8824</span>
            </div>
            <Link 
              href="/admin/sellerMangement/SL-8824-UW" 
              className="text-gray-400 hover:text-[#0F4C81] transition-colors font-bold cursor-pointer"
              title="View Application Details"
            >
              ➔
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-2 text-[10px] font-bold">
            <div className="flex items-center gap-1 text-rose-600">
              <AlertTriangle className="size-3.5" />
              <span>NID Verification</span>
              <span className="ml-auto text-[9px] font-black uppercase bg-rose-50 px-1 rounded">Flagged</span>
            </div>
            <div className="flex items-center gap-1 text-emerald-700">
              <CheckCircle2 className="size-3.5" />
              <span>Trade License</span>
              <span className="ml-auto text-[9px] font-black uppercase bg-emerald-50 px-1 rounded">Valid</span>
            </div>
          </div>
          <Link
            href="/admin/sellerMangement/SL-8824-UW"
            className="w-full border text-center bg-blue-50/70 hover:bg-blue-100/70 text-[#0F4C81] font-bold text-[11px] py-2 rounded transition-colors cursor-pointer block"
          >
            View Details
          </Link>
        </div>

        {/* Item 3: Techno Gizmos */}
        <div className="space-y-3 pt-4">
          <div className="flex items-center justify-between">
            <div className="text-left">
              <h4 className="text-xs font-bold text-gray-900 leading-tight">Techno Gizmos</h4>
              <span className="text-[10px] text-gray-400 font-semibold mt-0.5 block">Application #APP-8830</span>
            </div>
            <Link 
              href="/admin/sellerMangement/SL-8830-TG" 
              className="text-gray-400 hover:text-[#0F4C81] transition-colors font-bold cursor-pointer"
              title="View Application Details"
            >
              ➔
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-2 text-[10px] font-bold">
            <div className="flex items-center gap-1 text-amber-700">
              <Hourglass className="size-3.5" />
              <span>NID Verification</span>
              <span className="ml-auto text-[9px] font-black uppercase bg-amber-50 px-1 rounded">Pending</span>
            </div>
            <div className="flex items-center gap-1 text-amber-700">
              <Hourglass className="size-3.5" />
              <span>Trade License</span>
              <span className="ml-auto text-[9px] font-black uppercase bg-amber-50 px-1 rounded">Pending</span>
            </div>
          </div>
          <Link
            href="/admin/sellerMangement/SL-8830-TG"
            className="w-full text-center bg-blue-50/70 hover:bg-blue-100/70 text-[#0F4C81] font-bold text-[11px] py-2 rounded transition-colors cursor-pointer block border"
          >
            View Details
          </Link>
        </div>

      </div>
    </div>
  );
}
