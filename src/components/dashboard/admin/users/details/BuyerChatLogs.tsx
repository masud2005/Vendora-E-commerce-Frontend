"use client";

import React from "react";
import toast from "react-hot-toast";
import { Store, Headset } from "lucide-react";

export default function BuyerChatLogs() {
  return (
    <div className="space-y-6">
      {/* Chats logs list */}
      <div className="space-y-3">
        {/* Log 1 */}
        <div className="border border-gray-150 rounded-lg p-3.5 bg-white flex gap-3.5 items-start shadow-3xs hover:border-gray-200 transition-colors">
          <div className="p-2 rounded-full bg-gray-50 text-gray-500 shrink-0 border border-gray-100 flex items-center justify-center">
            <Store className="size-4.5" />
          </div>
          <div className="flex-1 min-w-0 text-left">
            <div className="flex items-center justify-between w-full">
              <h4 className="text-xs font-bold text-gray-900 truncate">TechHub Solutions</h4>
              <span className="text-[10px] text-gray-400 font-bold whitespace-nowrap">10:42 AM</span>
            </div>
            <p className="text-[11px] text-gray-500 font-semibold leading-relaxed mt-1">
              Hello Jordan, your request for bulk shipping has been approved...
            </p>
          </div>
        </div>

        {/* Log 2 */}
        <div className="border border-gray-150 rounded-lg p-3.5 bg-white flex gap-3.5 items-start shadow-3xs hover:border-gray-200 transition-colors">
          <div className="p-2 rounded-full bg-gray-50 text-gray-500 shrink-0 border border-gray-100 flex items-center justify-center">
            <Headset className="size-4.5" />
          </div>
          <div className="flex-1 min-w-0 text-left">
            <div className="flex items-center justify-between w-full">
              <h4 className="text-xs font-bold text-gray-900 truncate">Vendora Support</h4>
              <span className="text-[10px] text-gray-400 font-bold whitespace-nowrap">Yesterday</span>
            </div>
            <p className="text-[11px] text-gray-500 font-semibold leading-relaxed mt-1">
              Your ticket #4421 regarding payment processing has been resolved.
            </p>
          </div>
        </div>

        {/* Log 3 */}
        <div className="border border-gray-150 rounded-lg p-3.5 bg-white flex gap-3.5 items-start shadow-3xs hover:border-gray-200 transition-colors">
          <div className="p-2 rounded-full bg-gray-50 text-gray-500 shrink-0 border border-gray-100 flex items-center justify-center">
            <Store className="size-4.5" />
          </div>
          <div className="flex-1 min-w-0 text-left">
            <div className="flex items-center justify-between w-full">
              <h4 className="text-xs font-bold text-gray-900 truncate">Global Gadgets Inc.</h4>
              <span className="text-[10px] text-gray-400 font-bold whitespace-nowrap">Oct 22</span>
            </div>
            <p className="text-[11px] text-gray-500 font-semibold leading-relaxed mt-1">
              Thank you for your inquiry about the bulk discount rates.
            </p>
          </div>
        </div>
      </div>

      {/* Recent Seller Interactions stack */}
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

        <div className="space-y-3">
          <div className="border border-gray-150 rounded-lg p-3.5 bg-white flex gap-3.5 items-start shadow-3xs">
            <div className="p-2 rounded-full bg-gray-50 text-gray-500 shrink-0 border border-gray-100 flex items-center justify-center">
              <Store className="size-4.5" />
            </div>
            <div className="flex-1 min-w-0 text-left">
              <div className="flex items-center justify-between w-full">
                <h4 className="text-xs font-bold text-gray-900 truncate">TechHub Solutions</h4>
                <span className="text-[10px] text-gray-400 font-bold">10:42 AM</span>
              </div>
              <p className="text-[11px] text-gray-500 font-semibold mt-1">
                Hello Jordan, your request for bulk shipping has been approved...
              </p>
            </div>
          </div>

          <div className="border border-gray-150 rounded-lg p-3.5 bg-white flex gap-3.5 items-start shadow-3xs">
            <div className="p-2 rounded-full bg-gray-50 text-gray-500 shrink-0 border border-gray-100 flex items-center justify-center">
              <Headset className="size-4.5" />
            </div>
            <div className="flex-1 min-w-0 text-left">
              <div className="flex items-center justify-between w-full">
                <h4 className="text-xs font-bold text-gray-900 truncate">Vendora Support</h4>
                <span className="text-[10px] text-gray-400 font-bold">Yesterday</span>
              </div>
              <p className="text-[11px] text-gray-500 font-semibold mt-1">
                Your ticket #4421 regarding payment processing has been resolved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
