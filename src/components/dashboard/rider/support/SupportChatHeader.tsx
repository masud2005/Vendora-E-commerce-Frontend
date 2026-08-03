"use client";

import React from "react";
import { ShieldAlert } from "lucide-react";
import toast from "react-hot-toast";

export default function SupportChatHeader() {
  const handleSOS = () => {
    toast.error("SOS Emergency Alert broadcasted to Admin Support!");
  };

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-1 text-left select-none">
      <div>
        <h1 className="text-xl sm:text-2xl font-black text-gray-900 leading-tight">
          Support Chat
        </h1>
        <p className="text-xs sm:text-sm text-gray-400 font-semibold mt-1">
          Direct line to Vendora admin support and the sellers on your route
        </p>
      </div>

      <div className="flex items-center gap-3 self-start md:self-auto shrink-0 select-none">
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            handleSOS();
          }}
          className="flex items-center justify-center gap-1.5 border border-rose-200 hover:bg-rose-50 text-rose-700 font-black py-2 px-4 rounded-lg text-xs transition-colors cursor-pointer select-none"
        >
          <ShieldAlert className="size-4" />
          <span>Emergency SOS</span>
        </button>
      </div>
    </div>
  );
}
