"use client";

import { Award, RefreshCcw, Sparkles } from "lucide-react";

export default function RedeemPoints() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg  shadow-2xs space-y-5 p-4 lg:p-3">
      
      {/* Widget Header */}
      <div className="flex items-start gap-3 lg:gap-2">
        <div className="size-10 rounded-full bg-brand-accent-50 text-brand-accent-600 flex items-center justify-center shrink-0">
          <Award className="size-5.5 fill-brand-accent-200" />
        </div>
        <div>
          <h3 className="text-sm md:text-base font-bold text-gray-900 leading-tight">
            Redeem Points
          </h3>
          <p className="text-xs text-gray-400 font-medium mt-0.5">
            Convert points to cash
          </p>
        </div>
      </div>

      {/* Points conversion details */}
      <div className="bg-gray-50 border border-gray-150 rounded-lg p-4 md:p-4 lg:p-2 space-y-3 text-xs md:text-sm font-semibold">
        <div className="flex items-center justify-between">
          <span className="text-gray-500">Available Points</span>
          <span className="text-gray-900 font-bold text-sm">1,240</span>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200/60 pt-3">
          <span className="text-gray-500">Point Value</span>
          <span className="text-brand-secondary-600 font-extrabold text-sm flex items-center gap-1">
            <span><span className="font-bengali">৳</span> 124.00</span>
          </span>
        </div>
      </div>

      {/* Action button */}
      <button className="w-full border border-brand-primary-600 hover:bg-brand-primary-50 text-brand-primary-600 font-bold py-2.5 rounded text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs active:translate-y-px">
        <RefreshCcw className="size-3.5" />
        <span>REDEEM NOW</span>
      </button>

      {/* Disclaimer disclaimer */}
      <p className="text-[10px] md:text-xs text-gray-400 font-medium text-center leading-normal italic">
        * Minimum 500 points required to redeem. 10 points = <span className="font-bengali">৳</span> 1.
      </p>

    </div>
  );
}
