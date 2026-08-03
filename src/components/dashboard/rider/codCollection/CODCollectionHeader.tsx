"use client";

import React from "react";
import { Building } from "lucide-react";

interface CODCollectionHeaderProps {
  onRemitCash: () => void;
}

export default function CODCollectionHeader({ onRemitCash }: CODCollectionHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-1 text-left select-none">
      <div>
        <h1 className="text-xl sm:text-2xl font-black text-gray-900 leading-tight">
          COD Collection
        </h1>
        <p className="text-xs sm:text-sm text-gray-400 font-semibold mt-1">
          Track cash collected on your route and remit it to the hub before shift end
        </p>
      </div>

      <div className="flex items-center gap-3 self-start md:self-auto shrink-0 select-none">
        <button
          onClick={onRemitCash}
          className="flex items-center justify-center gap-1.5 bg-[#0F4C81] hover:bg-[#0C447C] text-white font-bold py-2.5 px-4.5 rounded text-xs transition-colors cursor-pointer select-none shadow-3xs"
        >
          <Building className="size-4" />
          <span>Remit Cash</span>
        </button>
      </div>
    </div>
  );
}
