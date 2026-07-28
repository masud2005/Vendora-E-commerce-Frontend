"use client";

import React from "react";
import toast from "react-hot-toast";
import { FileText, Eye, CheckCircle2 } from "lucide-react";

export default function OverviewTab() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-left select-none">
      
      {/* 1. Left Card: Business Information */}
      <div className="bg-white border border-gray-200 rounded-lg p-5 sm:p-6 space-y-4 shadow-3xs">
        <h3 className="text-sm sm:text-base font-extrabold text-gray-900 border-b border-gray-100 pb-2">
          Business Information
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold">
          {/* Owner Name */}
          <div className="space-y-1">
            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">Owner Name</span>
            <span className="text-gray-800 font-bold block">Erik Gustafsson</span>
          </div>

          {/* Official Email */}
          <div className="space-y-1">
            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">Official Email</span>
            <span className="text-gray-850 font-bold block break-all">erik@luxedecor.no</span>
          </div>

          {/* Phone Number */}
          <div className="space-y-1">
            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">Phone Number</span>
            <span className="text-gray-800 font-bold block">+47 22 34 56 78</span>
          </div>

          {/* Member Since */}
          <div className="space-y-1">
            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">Member Since</span>
            <span className="text-gray-800 font-bold block">Jan 12, 2022</span>
          </div>

          {/* Registered Address */}
          <div className="col-span-1 sm:col-span-2 space-y-1">
            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">Registered Address</span>
            <span className="text-gray-700 font-bold block leading-relaxed">
              Karl Johans gate 22, 0154 Oslo, Norway
            </span>
          </div>
        </div>
      </div>

      {/* 2. Right Card: Compliance & Verification documents list */}
      <div className="bg-white border border-gray-200 rounded-lg p-5 sm:p-6 space-y-4 shadow-3xs">
        <h3 className="text-sm sm:text-base font-extrabold text-gray-900 border-b border-gray-100 pb-2">
          Compliance & Verification
        </h3>

        <div className="space-y-3.5">
          {/* Document 1: Trade License */}
          <div className="border border-gray-150 rounded-lg p-3 bg-white flex items-center justify-between shadow-3xs">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded bg-blue-50 text-blue-600 shrink-0">
                <FileText className="size-4.5" />
              </div>
              <div className="text-left">
                <h4 className="text-xs font-bold text-gray-900">Trade License #NO-883921</h4>
                <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wider mt-0.5 block">
                  Expiry: DEC 2025
                </span>
              </div>
            </div>
            <button 
              onClick={() => toast.success("Opening Trade License PDF...")}
              className="text-xs font-bold text-[#0F4C81] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <Eye className="size-3.5" />
              <span>View PDF</span>
            </button>
          </div>

          {/* Document 2: Tax ID Certificate */}
          <div className="border border-gray-150 rounded-lg p-3 bg-white flex items-center justify-between shadow-3xs">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded bg-blue-50 text-blue-600 shrink-0">
                <FileText className="size-4.5" />
              </div>
              <div className="text-left">
                <h4 className="text-xs font-bold text-gray-900">Tax ID Certificate</h4>
                <span className="text-[9px] text-emerald-600 font-bold uppercase tracking-wider mt-0.5 flex items-center gap-0.5">
                  <CheckCircle2 className="size-3" />
                  <span>Verified by Platform</span>
                </span>
              </div>
            </div>
            <button 
              onClick={() => toast.success("Opening Tax ID Document...")}
              className="text-xs font-bold text-[#0F4C81] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <Eye className="size-3.5" />
              <span>View Doc</span>
            </button>
          </div>

          {/* Document 3: Bank Verification Letter */}
          <div className="border border-gray-150 rounded-lg p-3 bg-white flex items-center justify-between shadow-3xs">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded bg-blue-50 text-blue-600 shrink-0">
                <FileText className="size-4.5" />
              </div>
              <div className="text-left">
                <h4 className="text-xs font-bold text-gray-900">Bank Verification Letter</h4>
                <span className="text-[9px] text-emerald-600 font-bold uppercase tracking-wider mt-0.5 flex items-center gap-0.5">
                  <CheckCircle2 className="size-3" />
                  <span>Settlement Account Active</span>
                </span>
              </div>
            </div>
            <button 
              onClick={() => toast.success("Opening Bank Verification Letter Details...")}
              className="text-xs font-bold text-[#0F4C81] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <Eye className="size-3.5" />
              <span>View Detail</span>
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
