"use client";

import React from "react";
import toast from "react-hot-toast";
import { AlertCircle } from "lucide-react";

export default function SystemAlerts() {
  return (
    <div className="bg-white border border-gray-200 rounded p-5 shadow-3xs flex-1 text-left space-y-4">
      <div className="flex items-center gap-2 border-b border-gray-100 pb-2.5">
        <AlertCircle className="size-4.5 text-amber-500" />
        <h3 className="text-xs sm:text-sm font-bold text-gray-900">
          System Alerts
        </h3>
      </div>

      {/* Alerts List */}
      <div className="space-y-3.5">
        {/* Alert 1 */}
        <div className="flex items-center justify-between p-3 rounded-lg border border-red-100 bg-red-50/50">
          <div className="min-w-0">
            <h4 className="text-xs font-bold text-red-700">Pending Refunds</h4>
            <p className="text-[10px] text-red-500 font-semibold mt-0.5">12 High Priority requests</p>
          </div>
          <button 
            onClick={() => toast.success("Opening refunds reviews...")}
            className="text-xs font-bold text-red-700 hover:text-red-900 bg-white shadow-2xs border border-red-200 px-2.5 py-1 rounded cursor-pointer"
          >
            Review
          </button>
        </div>

        {/* Alert 2 */}
        <div className="flex items-center justify-between p-3 rounded-lg border border-amber-150 bg-amber-50/50">
          <div className="min-w-0">
            <h4 className="text-xs font-bold text-amber-700">Low Stock Items</h4>
            <p className="text-[10px] text-amber-500 font-semibold mt-0.5">84 Products under threshold</p>
          </div>
          <button 
            onClick={() => toast.success("Notifying low-stock vendors...")}
            className="text-xs font-bold text-amber-700 hover:text-amber-900 bg-white shadow-2xs border border-amber-200 px-2.5 py-1 rounded cursor-pointer"
          >
            Notify
          </button>
        </div>

        {/* Alert 3 */}
        <div className="flex items-center justify-between p-3 rounded-lg border border-blue-100 bg-blue-50/40">
          <div className="min-w-0">
            <h4 className="text-xs font-bold text-blue-700">Seller Payouts</h4>
            <p className="text-[10px] text-blue-500 font-semibold mt-0.5">Next batch in 4 hours</p>
          </div>
          <button 
            onClick={() => toast.success("Releasing next payout batch...")}
            className="text-xs font-bold text-blue-700 hover:text-blue-900 bg-white shadow-2xs border border-blue-200 px-2.5 py-1 rounded cursor-pointer"
          >
            Release
          </button>
        </div>
      </div>
    </div>
  );
}
