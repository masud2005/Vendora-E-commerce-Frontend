"use client";

import React from "react";
import { Download } from "lucide-react";

interface DeliveryHistoryHeaderProps {
  onExportCSV: () => void;
}

export default function DeliveryHistoryHeader({ onExportCSV }: DeliveryHistoryHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-1 text-left">
      <div>
        <h1 className="text-xl sm:text-2xl font-black text-gray-900 leading-tight">
          Delivery History
        </h1>
        <p className="text-xs sm:text-sm text-gray-400 font-semibold mt-1">
          A complete, auditable log of every completed and failed delivery
        </p>
      </div>

      <div className="flex items-center gap-3 self-start md:self-auto shrink-0 select-none">
        <button
          onClick={onExportCSV}
          className="flex items-center justify-center gap-1.5 border border-gray-250 bg-white hover:bg-gray-50 text-gray-700 font-bold py-2 px-4 rounded text-xs transition-colors cursor-pointer select-none"
        >
          <Download className="size-4 text-gray-500" />
          <span>Export CSV</span>
        </button>
      </div>
    </div>
  );
}
