"use client";

import React from "react";
import toast from "react-hot-toast";
import { Mail, Ban, Check, MapPin, Building2 } from "lucide-react";

export default function ProfileMetaCard() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 sm:p-6 shadow-3xs flex flex-col md:flex-row md:items-center justify-between gap-5 text-left select-none">
      
      {/* Left side: Brand Logo and Title details */}
      <div className="flex items-center gap-4">
        {/* Mock Brand Logo placeholder */}
        <div className="size-16 sm:size-20 rounded-xl bg-blue-50 border border-blue-100 flex flex-col items-center justify-center text-blue-700 shrink-0 font-extrabold shadow-3xs p-2">
          <span className="text-[10px] uppercase font-black tracking-tight leading-none text-blue-500 mb-1">LUXE DECOR</span>
          <span className="text-xl leading-none">🛋️</span>
        </div>

        {/* Brand details */}
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <h2 className="text-base sm:text-lg font-black text-gray-900 leading-tight">
              Luxe Decor Hub
            </h2>
            {/* Verified badge */}
            <span className="size-4.5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] font-bold select-none shrink-0" title="Verified Seller">
              ✓
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-gray-500 font-semibold">
            <span className="flex items-center gap-1">
              <Building2 className="size-3.5 text-gray-405" />
              <span>ID: SL-8842-DH</span>
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="size-3.5 text-gray-455" />
              <span>Oslo, Norway</span>
            </span>
            {/* Status active badge */}
            <span className="bg-emerald-50 text-emerald-700 text-[9px] font-black border border-emerald-250 px-2 py-0.5 rounded-full uppercase tracking-wider select-none leading-none">
              Active
            </span>
          </div>
        </div>
      </div>

      {/* Right side: Action Buttons */}
      <div className="flex flex-wrap items-center gap-3 shrink-0 self-start md:self-auto">
        <button
          onClick={() => toast.success("Message inbox opened with Luxe Decor Hub")}
          className="flex items-center justify-center gap-1.5 border border-blue-200 bg-blue-50/40 hover:bg-blue-50 text-[#0F4C81] font-bold py-2 px-4 rounded text-xs transition-colors shadow-3xs cursor-pointer"
        >
          <Mail className="size-3.5" />
          <span>Message Seller</span>
        </button>
        <button
          onClick={() => toast.error("Account suspension form triggered")}
          className="flex items-center justify-center gap-1.5 border border-rose-300 hover:bg-rose-50 text-rose-600 font-bold py-2 px-4 rounded text-xs transition-colors shadow-3xs cursor-pointer"
        >
          <Ban className="size-3.5" />
          <span>Suspend Account</span>
        </button>
        <button
          onClick={() => toast.success("Seller verification status approved!")}
          className="flex items-center justify-center gap-1.5 bg-[#0F4C81] hover:bg-[#0C447C] text-white font-bold py-2 px-4 rounded text-xs transition-colors shadow-3xs cursor-pointer"
        >
          <Check className="size-3.5" />
          <span>Approve Verification</span>
        </button>
      </div>

    </div>
  );
}
