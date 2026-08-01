"use client";

import React from "react";
import { Scan, Map } from "lucide-react";
import toast from "react-hot-toast";

export default function RiderHeader() {
  return (
    <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-5 text-left select-none pb-4 border-b border-gray-150">
      
      {/* Welcome Title */}
      <div>
        <h1 className="text-xl sm:text-2xl font-black text-gray-900 leading-tight">
          Good morning, Rakib
        </h1>
        <p className="text-xs text-gray-400 font-semibold mt-1">
          Dhaka North · Zone 4 · Shift <span className="text-gray-700">09:00 AM - 07:00 PM</span> · <span className="text-[#0F4C81]">5 active deliveries</span> on your route
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-3 shrink-0 self-start xl:self-auto text-xs font-semibold select-none">
        <button
          
          className="flex items-center justify-center gap-1.5 border border-gray-250 bg-white hover:bg-gray-50 text-gray-700 font-bold py-2.5 px-4.5 rounded-lg transition-colors cursor-pointer"
        >
          <Scan className="size-4 text-gray-500" />
          <span>Scan Parcel</span>
        </button>

        <button
         
          className="flex items-center justify-center gap-1.5 bg-[#0F4C81] hover:bg-[#0C447C] text-white font-bold py-2.5 px-4.5 rounded-lg transition-colors cursor-pointer shadow-3xs"
        >
          <Map className="size-4" />
          <span>View Route</span>
        </button>
      </div>

    </div>
  );
}
