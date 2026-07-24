"use client";

import { CheckCircle2, MessageSquare } from "lucide-react";
import React from "react";

interface CartShopGroupProps {
  shopName: string;
  shipsFrom: string;
  isVerified?: boolean;
  children: React.ReactNode;
}

export default function CartShopGroup({
  shopName,
  shipsFrom,
  isVerified = true,
  children,
}: CartShopGroupProps) {
  // Generate a fallback avatar letter based on shop name
  const shopInitials = shopName
    ? shopName.split(" ").map((n) => n[0]).slice(0, 2).join("")
    : "S";

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden mb-6">
      {/* Shop Header */}
      <div className="flex items-center justify-between px-4 py-4 sm:px-6 bg-gray-50/50 border-b border-gray-100">
        <div className="flex items-center gap-3">
          {/* Shop Avatar */}
          <div className="size-9 sm:size-10 rounded-full bg-brand-primary-50 border border-brand-primary-200 flex items-center justify-center text-brand-primary-600 font-bold text-xs sm:text-sm shrink-0">
            {shopInitials}
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <h3 className="text-sm sm:text-base font-semibold text-gray-900 truncate hover:text-brand-primary-600 cursor-pointer transition-colors">
                {shopName}
              </h3>
              {isVerified && (
                <CheckCircle2 className="size-4 text-brand-teal fill-brand-secondary-50 shrink-0" />
              )}
            </div>
            <p className="text-[10px] sm:text-xs text-gray-500 font-medium mt-0.5">
              Ships from: <span className="text-gray-700">{shipsFrom}</span>
            </p>
          </div>
        </div>

        {/* Chat with Seller Link */}
        <button
          type="button"
          className="flex items-center gap-1.5 text-xs font-semibold text-brand-primary-600 hover:text-brand-primary-800 transition-colors py-1.5 px-2.5 rounded-lg hover:bg-brand-primary-50"
        >
          <MessageSquare className="size-3.5" />
          <span>Chat with Seller</span>
        </button>
      </div>

      {/* Shop Items List */}
      <div className="px-4 sm:px-6 divide-y divide-gray-100">
        {children}
      </div>
    </div>
  );
}
