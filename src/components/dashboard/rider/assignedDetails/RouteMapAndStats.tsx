"use client";

import React from "react";
import { Store, MapPin, Navigation, Clock } from "lucide-react";
import { AssignedOrderDetails } from "./types";

interface RouteMapAndStatsProps {
  order: AssignedOrderDetails;
}

export default function RouteMapAndStats({ order }: RouteMapAndStatsProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-3xs space-y-4 text-left">
      <h3 className="text-xs sm:text-sm font-black text-gray-900 uppercase tracking-wider border-b border-gray-50 pb-2">
        Route
      </h3>

      {/* SVG Vector Map Placeholder */}
      <div className="relative bg-slate-50 border border-gray-200 rounded-lg h-36 w-full overflow-hidden flex items-center justify-center">
        
        {/* Map grid lines background styling */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#E5E7EB_1px,transparent_1px),linear-gradient(to_bottom,#E5E7EB_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-35" />
        
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {/* Curved dashed line for route */}
          <path 
            d="M 50 80 Q 150 20 250 80" 
            fill="none" 
            stroke="#0F4C81" 
            strokeWidth="2.5" 
            strokeDasharray="5,5" 
          />
        </svg>

        {/* Start node */}
        <div className="absolute left-[38px] top-[66px] flex items-center justify-center bg-blue-600 text-white rounded-full size-6.5 shadow-sm border-2 border-white z-10">
          <Store className="size-3.5" />
        </div>

        {/* Destination node */}
        <div className="absolute right-[38px] top-[66px] flex items-center justify-center bg-emerald-600 text-white rounded-full size-6.5 shadow-sm border-2 border-white z-10">
          <MapPin className="size-3.5" />
        </div>

      </div>

      {/* Route Stats row */}
      <div className="grid grid-cols-3 gap-2 text-center pt-1.5">
        {/* Distance */}
        <div className="bg-blue-50/30 border border-blue-100/50 rounded-lg py-2.5 text-center leading-none space-y-1">
          <Navigation className="size-4.5 text-blue-650 mx-auto" />
          <span className="text-[9px] text-gray-400 font-bold block uppercase">Distance</span>
          <h4 className="text-xs font-black text-gray-900">{order.distance}</h4>
        </div>

        {/* ETA */}
        <div className="bg-blue-50/30 border border-blue-100/50 rounded-lg py-2.5 text-center leading-none space-y-1">
          <Clock className="size-4.5 text-blue-650 mx-auto" />
          <span className="text-[9px] text-gray-400 font-bold block uppercase">ETA</span>
          <h4 className="text-xs font-black text-gray-900">{order.eta}</h4>
        </div>

        {/* Deadline */}
        <div className="bg-blue-50/30 border border-blue-100/50 rounded-lg py-2.5 text-center leading-none space-y-1">
          <Clock className="size-4.5 text-blue-650 mx-auto" />
          <span className="text-[9px] text-gray-400 font-bold block uppercase">Deadline</span>
          <h4 className="text-xs font-black text-gray-900">{order.deadlineTime.replace("Deliver by ", "")}</h4>
        </div>
      </div>
    </div>
  );
}
