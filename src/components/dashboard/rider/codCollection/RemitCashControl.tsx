"use client";

import React from "react";
import { Smartphone, Building, ArrowRightLeft } from "lucide-react";

interface RemitCashControlProps {
  cashInHand: number;
  limitPercent: number;
  dailyLimit: number;
  handoverMethod: "hub" | "bkash";
  setHandoverMethod: (method: "hub" | "bkash") => void;
  onSubmitHandover: () => void;
}

export default function RemitCashControl({
  cashInHand,
  limitPercent,
  dailyLimit,
  handoverMethod,
  setHandoverMethod,
  onSubmitHandover
}: RemitCashControlProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-3xs space-y-4 text-left h-full flex flex-col justify-between">
      <div className="leading-none space-y-1">
        <h3 className="text-sm font-extrabold text-gray-900 leading-tight">Remit Cash</h3>
        <p className="text-[10px] sm:text-xs text-gray-400 font-semibold">Choose your handover method</p>
      </div>

      {/* Amount Box */}
      <div className="bg-slate-50 border border-gray-100 rounded-lg p-3.5 space-y-2">
        <span className="text-[9px] text-gray-400 font-black block uppercase tracking-wider">Amount to hand over</span>
        <h2 className="text-xl sm:text-2xl font-black text-gray-955">৳{cashInHand.toLocaleString()}</h2>
        <div className="w-full bg-slate-200/80 rounded-full h-1.5 relative overflow-hidden mt-2">
          <div className="bg-[#0F4C81] h-full rounded-full transition-all" style={{ width: `${limitPercent}%` }} />
        </div>
        <span className="text-[9px] text-gray-400 font-bold block">{limitPercent}% of ৳{dailyLimit.toLocaleString()} daily limit</span>
      </div>

      {/* Radio selectors list */}
      <div className="space-y-3 pt-1">
        
        {/* Option 1: Hub Cash Desk */}
        <div 
          onClick={() => setHandoverMethod("hub")}
          className={`flex items-start gap-3 p-3.5 rounded-lg border cursor-pointer transition-all ${
            handoverMethod === "hub"
              ? "border-[#3B82F6] bg-blue-50/20 text-[#0F4C81]"
              : "border-gray-200 bg-white hover:bg-slate-50/50 text-gray-700"
          }`}
        >
          <div className={`size-4.5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${
            handoverMethod === "hub" ? "border-blue-600 bg-blue-600 text-white" : "border-gray-300 bg-white"
          }`}>
            {handoverMethod === "hub" && <div className="size-1.5 rounded-full bg-white" />}
          </div>
          <Building className="size-4 text-blue-650 shrink-0 mt-0.5" />
          <div className="leading-none space-y-1">
            <h4 className="text-xs font-black text-gray-900">Hub Cash Desk</h4>
            <p className="text-[9px] text-gray-400 font-semibold block leading-normal">Mirpur Hub · open until 09:00 PM</p>
          </div>
        </div>

        {/* Option 2: bKash Merchant */}
        <div 
          onClick={() => setHandoverMethod("bkash")}
          className={`flex items-start gap-3 p-3.5 rounded-lg border cursor-pointer transition-all ${
            handoverMethod === "bkash"
              ? "border-[#3B82F6] bg-blue-50/20 text-[#0F4C81]"
              : "border-gray-200 bg-white hover:bg-slate-50/50 text-gray-700"
          }`}
        >
          <div className={`size-4.5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${
            handoverMethod === "bkash" ? "border-blue-600 bg-blue-600 text-white" : "border-gray-300 bg-white"
          }`}>
            {handoverMethod === "bkash" && <div className="size-1.5 rounded-full bg-white" />}
          </div>
          <Smartphone className="size-4 text-blue-650 shrink-0 mt-0.5" />
          <div className="leading-none space-y-1">
            <h4 className="text-xs font-black text-gray-900">bKash Merchant</h4>
            <p className="text-[9px] text-gray-400 font-semibold block leading-normal">Instant transfer to Vendora merchant</p>
          </div>
        </div>

      </div>

      <button
        onClick={onSubmitHandover}
        className="w-full bg-[#0F4C81] hover:bg-[#0C447C] text-white font-black py-2.5 px-4 rounded text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer select-none"
      >
        <ArrowRightLeft className="size-4" />
        <span>Submit Handover</span>
      </button>

      <p className="text-[9px] text-gray-400 font-semibold text-center mt-1">
        Finance verifies every handover within 2 hours.
      </p>

    </div>
  );
}
