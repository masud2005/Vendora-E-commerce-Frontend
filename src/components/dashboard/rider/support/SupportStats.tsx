"use client";

import React from "react";
import { Headphones } from "lucide-react";

export default function SupportStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left select-none">
      
      {/* Card 1: Average response */}
      <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-center gap-4.5 shadow-3xs">
        <div className="bg-blue-50 text-[#0F4C81] p-3 rounded-lg">
          <Headphones className="size-5" />
        </div>
        <div className="leading-none space-y-1">
          <span className="text-[9px] text-gray-400 font-bold block uppercase tracking-wider">Average response</span>
          <h4 className="text-sm font-black text-gray-900">2 min</h4>
          <p className="text-[9px] text-gray-450 font-bold block">Admin support during shift hours</p>
        </div>
      </div>

      {/* Card 2: Escalation line */}
      <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-center gap-4.5 shadow-3xs">
        <div className="bg-blue-50 text-[#0F4C81] p-3 rounded-lg">
          <Headphones className="size-5" />
        </div>
        <div className="leading-none space-y-1">
          <span className="text-[9px] text-gray-400 font-bold block uppercase tracking-wider">Escalation line</span>
          <h4 className="text-sm font-black text-gray-900">16247</h4>
          <p className="text-[9px] text-gray-455 font-bold block">For accidents or safety incidents</p>
        </div>
      </div>

      {/* Card 3: Open tickets */}
      <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-center gap-4.5 shadow-3xs">
        <div className="bg-blue-50 text-[#0F4C81] p-3 rounded-lg">
          <Headphones className="size-5" />
        </div>
        <div className="leading-none space-y-1">
          <span className="text-[9px] text-gray-400 font-bold block uppercase tracking-wider">Open tickets</span>
          <h4 className="text-sm font-black text-gray-900">1</h4>
          <p className="text-[9px] text-gray-455 font-bold block">Damaged parcel report #TCK-2291</p>
        </div>
      </div>

    </div>
  );
}
