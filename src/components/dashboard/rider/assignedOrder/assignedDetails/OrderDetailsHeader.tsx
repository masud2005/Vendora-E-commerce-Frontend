"use client";

import React from "react";
import { ArrowLeft, MessageSquare, Compass } from "lucide-react";
import Link from "next/link";
import { AssignedOrderDetails } from "./types";

interface OrderDetailsHeaderProps {
  order: AssignedOrderDetails;
  onContactSupport: () => void;
  onStartNavigation: () => void;
}

export default function OrderDetailsHeader({
  order,
  onContactSupport,
  onStartNavigation
}: OrderDetailsHeaderProps) {
  return (
    <div className="space-y-6 w-full text-left select-none">
      
      {/* Back Link */}
      <Link 
        href="/rider/assigned" 
        className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-900 transition-colors font-bold select-none cursor-pointer"
      >
        <ArrowLeft className="size-4 text-gray-450" />
        <span>Back to Assigned Orders</span>
      </Link>

      {/* Top Title Action Panel */}
      <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-5 pb-4 border-b border-gray-150">
        
        {/* ID & Time details */}
        <div>
          <h1 className="text-xl sm:text-2xl font-black text-gray-900 leading-tight">
            {order.id}
          </h1>
          <p className="text-xs text-gray-400 font-semibold mt-1">
            Assigned {order.assignedTime} · {order.deadlineTime}
          </p>

          <div className="flex items-center gap-2 mt-2">
            <span className={`px-2 py-0.5 rounded-full text-[9px] font-black border uppercase tracking-wider ${order.statusStyle}`}>
              ● {order.status === "Assigned" ? "Awaiting Pickup" : order.status}
            </span>
            <span className={`px-2 py-0.5 rounded-full text-[9px] font-black border ${
              order.isCOD ? "bg-amber-50 text-amber-800 border-amber-100" : "bg-gray-50 text-gray-500 border-gray-150"
            }`}>
              {order.isCOD ? "COD" : "Prepaid"}
            </span>
            {order.isExpress && (
              <span className="px-2 py-0.5 rounded-full text-[9px] font-black bg-rose-50 text-rose-700 border border-rose-100 tracking-wide flex items-center gap-0.5">
                ⚡ Express
              </span>
            )}
          </div>
        </div>

        {/* Buttons and Price */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4.5 xl:self-auto shrink-0 select-none">
          
          {/* Price */}
          <div className="text-left sm:text-right">
            <span className="text-[10px] text-gray-400 font-black uppercase tracking-wider block">Price Value</span>
            <h2 className="text-xl sm:text-2xl font-black text-gray-955 leading-none">
              ৳{order.price.toLocaleString()}
            </h2>
          </div>

          <div className="flex items-center gap-3 text-xs font-semibold">
            <button
              onClick={onContactSupport}
              className="flex items-center justify-center gap-1.5 border border-gray-250 bg-white hover:bg-gray-50 text-gray-700 font-bold py-2.5 px-4.5 rounded cursor-pointer transition-colors"
            >
              <MessageSquare className="size-4 text-gray-500" />
              <span>Contact Support</span>
            </button>

            <button
              onClick={onStartNavigation}
              className="flex items-center justify-center gap-1.5 bg-[#0F4C81] hover:bg-[#0C447C] text-white font-bold py-2.5 px-4.5 rounded transition-colors cursor-pointer shadow-3xs"
            >
              <Compass className="size-4" />
              <span>Start Navigation</span>
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
