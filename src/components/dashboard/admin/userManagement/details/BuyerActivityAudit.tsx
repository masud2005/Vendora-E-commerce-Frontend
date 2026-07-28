"use client";

import React from "react";
import toast from "react-hot-toast";
import { History, Flag, MapPin, Laptop } from "lucide-react";

export default function BuyerActivityAudit() {
  return (
    <div className="space-y-6 text-left select-none">
      
      {/* 1. Activity Audit Timeline */}
      <div className="relative pl-7 space-y-6">
        {/* Continuous vertical timeline indicator line */}
        <div className="absolute left-[13px] top-1 bottom-4 w-[1px] bg-gray-200" />

        {/* Timeline item 1: Password Reset Requested */}
        <div className="relative flex flex-col items-start gap-1">
          {/* Timeline Node Icon wrapper */}
          <div className="absolute -left-[27px] top-0.5 size-[27px] rounded-full border border-blue-200 bg-white text-blue-600 flex items-center justify-center shadow-3xs">
            <History className="size-3.5" />
          </div>
          <div className="flex items-center justify-between w-full gap-2">
            <h4 className="text-xs font-bold text-gray-900 leading-none">Password Reset Requested</h4>
            <span className="text-[10px] text-gray-400 font-semibold shrink-0">2 hours ago</span>
          </div>
          <p className="text-[11px] text-gray-500 font-medium mt-0.5">
            System-generated request following multiple failed login attempts from a new IP.
          </p>
        </div>

        {/* Timeline item 2: Account Flagged */}
        <div className="relative flex flex-col items-start gap-1">
          <div className="absolute -left-[27px] top-0.5 size-[27px] rounded-full border border-rose-200 bg-white text-rose-600 flex items-center justify-center shadow-3xs">
            <Flag className="size-3.5" />
          </div>
          <div className="flex items-center justify-between w-full gap-2">
            <h4 className="text-xs font-bold text-gray-900 leading-none">Account Flagged</h4>
            <span className="text-[10px] text-gray-400 font-semibold shrink-0">Oct 24, 14:20</span>
          </div>
          <p className="text-[11px] text-gray-500 font-medium mt-0.5">
            Flagged for suspicious login patterns by automated security protocol SEC-04.
          </p>
        </div>

        {/* Timeline item 3: Address Updated */}
        <div className="relative flex flex-col items-start gap-1">
          <div className="absolute -left-[27px] top-0.5 size-[27px] rounded-full border border-gray-200 bg-white text-gray-500 flex items-center justify-center shadow-3xs">
            <MapPin className="size-3.5" />
          </div>
          <div className="flex items-center justify-between w-full gap-2">
            <h4 className="text-xs font-bold text-gray-900 leading-none">Address Updated</h4>
            <span className="text-[10px] text-gray-400 font-semibold shrink-0">Oct 22, 09:15</span>
          </div>
          <p className="text-[11px] text-gray-500 font-medium mt-0.5">
            Primary shipping address changed to: 742 Evergreen Terrace, Springfield.
          </p>
        </div>

        {/* Timeline item 4: Login from New Device */}
        <div className="relative flex flex-col items-start gap-1">
          <div className="absolute -left-[27px] top-0.5 size-[27px] rounded-full border border-gray-200 bg-white text-gray-500 flex items-center justify-center shadow-3xs">
            <Laptop className="size-3.5" />
          </div>
          <div className="flex items-center justify-between w-full gap-2">
            <h4 className="text-xs font-bold text-gray-900 leading-none">Login from New Device</h4>
            <span className="text-[10px] text-gray-400 font-semibold shrink-0">Oct 20, 18:44</span>
          </div>
          <p className="text-[11px] text-gray-500 font-medium mt-0.5">
            Successful login from Chrome on MacOS (IP: 192.168.1.45).
          </p>
        </div>
      </div>

      {/* 2. Recent Seller Interactions Section with custom Message bubbles thread */}
      <div className="space-y-3.5 pt-4">
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
