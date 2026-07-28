"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ProfileHeader() {
  return (
    <div className="flex items-center gap-3.5 text-left select-none pb-2 border-b border-gray-100">
      <Link 
        href="/admin/sellerMangement" 
        className="p-1.5 rounded-full hover:bg-gray-150 text-gray-500 hover:text-gray-900 transition-colors cursor-pointer flex items-center justify-center shrink-0 border border-gray-200 shadow-3xs"
      >
        <ArrowLeft className="size-4.5" />
      </Link>
      <div>
        <h1 className="text-lg sm:text-xl font-extrabold text-gray-900 leading-none">
          Seller Profile
        </h1>
        <span className="text-[10px] text-gray-400 font-bold block mt-1 uppercase tracking-wider">
          Platform Governance
        </span>
      </div>
    </div>
  );
}
