"use client";

import React from "react";
import { Store, Phone, MessageSquare, MapPin, Compass } from "lucide-react";
import { AssignedOrderDetails } from "./types";

interface PartyDetailsCardProps {
  order: AssignedOrderDetails;
  onCallSeller: () => void;
  onChatSeller: () => void;
  onCallCustomer: () => void;
  onNavigateCustomer: () => void;
}

export default function PartyDetailsCard({
  order,
  onCallSeller,
  onChatSeller,
  onCallCustomer,
  onNavigateCustomer
}: PartyDetailsCardProps) {
  return (
    <div className="space-y-6 text-left">
      
      {/* 1. Pickup — Seller */}
      <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-3xs space-y-4">
        <h3 className="text-xs sm:text-sm font-black text-gray-900 uppercase tracking-wider border-b border-gray-50 pb-2">
          Pickup — Seller
        </h3>

        <div className="space-y-3.5">
          {/* Shop name details */}
          <div className="flex items-start gap-2.5">
            <span className="p-1.5 bg-gray-50 text-gray-600 rounded border border-gray-150 mt-0.5 shrink-0">
              <Store className="size-4.5 text-gray-455" />
            </span>
            <div className="leading-none space-y-1 truncate text-[11px] sm:text-xs text-left">
              <h4 className="font-extrabold text-gray-900 truncate">{order.pickupName}</h4>
              <p className="text-gray-400 font-semibold truncate">{order.pickupLoc}</p>
            </div>
          </div>

          {/* Phone details */}
          <div className="flex items-start gap-2.5">
            <span className="p-1.5 bg-gray-50 text-gray-600 rounded border border-gray-150 mt-0.5 shrink-0">
              <Phone className="size-4.5 text-gray-455" />
            </span>
            <div className="leading-none space-y-1 text-[11px] sm:text-xs">
              <span className="text-[9px] text-gray-400 font-bold block uppercase">Phone</span>
              <p className="text-gray-600 font-bold">{order.pickupPhone}</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3 text-xs font-semibold pt-1">
            <button
              onClick={onCallSeller}
              className="flex items-center justify-center gap-1.5 border border-gray-250 bg-white hover:bg-gray-50 text-gray-700 font-bold py-2 px-3 rounded cursor-pointer transition-colors"
            >
              <Phone className="size-3.5 text-gray-500" />
              <span>Call</span>
            </button>
            <button
              onClick={onChatSeller}
              className="flex items-center justify-center gap-1.5 border border-gray-250 bg-white hover:bg-gray-50 text-gray-700 font-bold py-2 px-3 rounded cursor-pointer transition-colors"
            >
              <MessageSquare className="size-3.5 text-gray-500" />
              <span>Chat</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Drop-off — Customer */}
      <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-3xs space-y-4">
        <h3 className="text-xs sm:text-sm font-black text-gray-900 uppercase tracking-wider border-b border-gray-50 pb-2">
          Drop-off — Customer
        </h3>

        <div className="space-y-3.5">
          {/* Customer details */}
          <div className="flex items-start gap-2.5">
            <span className="p-1.5 bg-gray-50 text-gray-600 rounded border border-gray-150 mt-0.5 shrink-0">
              <MapPin className="size-4.5 text-gray-450" />
            </span>
            <div className="leading-none space-y-1 truncate text-[11px] sm:text-xs text-left">
              <h4 className="font-extrabold text-gray-900 truncate">{order.dropName}</h4>
              <p className="text-gray-400 font-semibold truncate">{order.dropLoc}</p>
            </div>
          </div>

          {/* Phone details */}
          <div className="flex items-start gap-2.5">
            <span className="p-1.5 bg-gray-50 text-gray-600 rounded border border-gray-150 mt-0.5 shrink-0">
              <Phone className="size-4.5 text-gray-455" />
            </span>
            <div className="leading-none space-y-1 text-[11px] sm:text-xs">
              <span className="text-[9px] text-gray-400 font-bold block uppercase">Phone</span>
              <p className="text-gray-600 font-bold">{order.dropPhone}</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3 text-xs font-semibold pt-1">
            <button
              onClick={onCallCustomer}
              className="flex items-center justify-center gap-1.5 border border-gray-250 bg-white hover:bg-gray-50 text-gray-700 font-bold py-2 px-3 rounded cursor-pointer transition-colors"
            >
              <Phone className="size-3.5 text-gray-500" />
              <span>Call</span>
            </button>
            <button
              onClick={onNavigateCustomer}
              className="flex items-center justify-center gap-1.5 border border-gray-250 bg-white hover:bg-gray-50 text-gray-700 font-bold py-2 px-3 rounded cursor-pointer transition-colors"
            >
              <Compass className="size-3.5 text-gray-500" />
              <span>Navigate</span>
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
