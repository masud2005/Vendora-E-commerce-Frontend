"use client";


import { SlidersHorizontal, Sparkles } from "lucide-react";
import toast from "react-hot-toast";

interface AssignedHeaderProps {
  onOptimizeRoute: () => void;
}

export default function AssignedHeader({ onOptimizeRoute }: AssignedHeaderProps) {
  return (
    <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-5 pb-4 border-b border-gray-150 text-left select-none">
      <div>
        <h1 className="text-xl sm:text-2xl font-black text-gray-900 leading-tight">
          Assigned Orders
        </h1>
        <p className="text-xs text-gray-400 font-semibold mt-1">
          Every order routed to you, from pickup confirmation through final delivery
        </p>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-3 shrink-0 self-start xl:self-auto text-xs font-semibold select-none">
        <button
          onClick={() => toast.success("Opening advanced search and filtering settings...")}
          className="flex items-center justify-center gap-2 border border-gray-250 bg-white hover:bg-gray-50 text-gray-700 font-bold py-2.5 px-4.5 rounded cursor-pointer transition-colors"
        >
          <SlidersHorizontal className="size-4 text-gray-500" />
          <span>Advanced Filters</span>
        </button>

        <button
          onClick={onOptimizeRoute}
          className="flex items-center justify-center gap-1.5 bg-[#0F4C81] hover:bg-[#0C447C] text-white font-bold py-2.5 px-4.5 rounded transition-colors cursor-pointer shadow-3xs"
        >
          <Sparkles className="size-4" />
          <span>Optimize Route</span>
        </button>
      </div>
    </div>
  );
}
