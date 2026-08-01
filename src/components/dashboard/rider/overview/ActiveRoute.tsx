"use client";

import React from "react";
import { Navigation, Store, MapPin, Clock, Package, ChevronRight } from "lucide-react";
import toast from "react-hot-toast";

interface RouteItem {
  id: string;
  price: string;
  status: "Assigned" | "Picked Up";
  statusStyle: string;
  isCOD: boolean;
  isExpress?: boolean;
  pickupName: string;
  pickupLoc: string;
  dropName: string;
  dropLoc: string;
  distance: string;
  deadline: string;
  itemsCount: string;
}

const activeRoutes: RouteItem[] = [
  {
    id: "#VD-90412",
    price: "৳3,240",
    status: "Assigned",
    statusStyle: "bg-blue-50 text-blue-700 border-blue-150",
    isCOD: true,
    isExpress: true,
    pickupName: "Chronos Luxe",
    pickupLoc: "Banani",
    dropName: "Nusrat Jahan",
    dropLoc: "House 42, Road 7, Sector 4, Uttara",
    distance: "6.4km",
    deadline: "Deliver by 12:30 PM",
    itemsCount: "2 item(s)"
  },
  {
    id: "#VD-90418",
    price: "৳1,190",
    status: "Assigned",
    statusStyle: "bg-blue-50 text-blue-700 border-blue-150",
    isCOD: false,
    pickupName: "EcoHome Tech",
    pickupLoc: "Mirpur 10",
    dropName: "Tanvir Ahmed",
    dropLoc: "Flat 5B, Green Villa, Shewrapara",
    distance: "2.1km",
    deadline: "Deliver by 01:00 PM",
    itemsCount: "1 item(s)"
  },
  {
    id: "#VD-90399",
    price: "৳2,450",
    status: "Picked Up",
    statusStyle: "bg-amber-50 text-amber-700 border-amber-150",
    isCOD: true,
    pickupName: "Velo Sports",
    pickupLoc: "Dhanmondi",
    dropName: "Sabbir Rahman",
    dropLoc: "House 19, Road 12A, Gulshan 1",
    distance: "4.8km",
    deadline: "Deliver by 12:00 PM",
    itemsCount: "3 item(s)"
  }
];

export default function ActiveRoute() {
  return (
    <div className="bg-white border border-gray-250 rounded-xl p-5 sm:p-6 shadow-3xs text-left select-none space-y-4">
      
      {/* Header Row */}
      <div className="flex items-center justify-between border-b border-gray-100 pb-3">
        <div>
          <h3 className="text-sm sm:text-base font-extrabold text-gray-900 leading-tight">
            Active Route
          </h3>
          <p className="text-[10px] sm:text-xs text-gray-400 font-semibold mt-0.5">
            Orders currently in your possession or awaiting pickup
          </p>
        </div>
        
        <button
          onClick={() => toast.success("Loading complete active route list...")}
          className="text-xs font-black text-[#0F4C81] hover:underline cursor-pointer flex items-center gap-0.5"
        >
          <span>View all</span>
          <ChevronRight className="size-3.5" />
        </button>
      </div>

      {/* Route Cards Stack */}
      <div className="space-y-4 pt-1">
        {activeRoutes.map((route, index) => (
          <div 
            key={index}
            className="border border-gray-200 hover:border-gray-300 rounded-xl p-4 space-y-4 transition-all bg-white hover:shadow-4xs text-xs font-semibold text-gray-700"
          >
            
            {/* 1. Card Header: Order tag, Status, Price */}
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-extrabold text-[#0F4C81] text-xs sm:text-sm">
                  {route.id}
                </span>
                
                {/* Status */}
                <span className={`px-2 py-0.5 rounded-full text-[9px] font-black border uppercase tracking-wider ${route.statusStyle}`}>
                  ● {route.status}
                </span>

                {/* COD/Prepaid badge */}
                <span className={`px-2 py-0.5 rounded-full text-[9px] font-black border ${
                  route.isCOD ? "bg-amber-50 text-amber-800 border-amber-100" : "bg-gray-50 text-gray-500 border-gray-150"
                }`}>
                  {route.isCOD ? "COD" : "Prepaid"}
                </span>

                {/* Express badge */}
                {route.isExpress && (
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-black bg-rose-50 text-rose-700 border border-rose-100 tracking-wide flex items-center gap-0.5">
                    ⚡ Express
                  </span>
                )}
              </div>

              {/* Price */}
              <div className="text-right">
                <span className="text-sm sm:text-base font-black text-gray-950">
                  {route.price}
                </span>
              </div>
            </div>

            {/* 2. Pickup & Dropoff Address Node details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-y border-gray-50 py-3 text-[11px] sm:text-xs">
              
              {/* Pickup location node */}
              <div className="flex items-start gap-2.5">
                <span className="p-1.5 bg-blue-50 text-blue-600 rounded-lg shrink-0 mt-0.5">
                  <Store className="size-4" />
                </span>
                <div className="leading-none space-y-1 truncate">
                  <span className="text-[9px] text-gray-400 font-bold block uppercase tracking-wider">Pickup</span>
                  <h4 className="font-black text-gray-900 truncate">{route.pickupName}</h4>
                  <p className="text-gray-500 font-bold truncate">{route.pickupLoc}</p>
                </div>
              </div>

              {/* Dropoff location node */}
              <div className="flex items-start gap-2.5">
                <span className="p-1.5 bg-emerald-50 text-emerald-600 rounded-lg shrink-0 mt-0.5">
                  <MapPin className="size-4" />
                </span>
                <div className="leading-none space-y-1 truncate">
                  <span className="text-[9px] text-gray-400 font-bold block uppercase tracking-wider">Drop-off</span>
                  <h4 className="font-black text-gray-900 truncate">{route.dropName}</h4>
                  <p className="text-gray-500 font-bold truncate">{route.dropLoc}</p>
                </div>
              </div>

            </div>

            {/* 3. Card Footer metrics & Open action link */}
            <div className="flex items-center justify-between gap-3 text-[10px] sm:text-xs font-bold text-gray-400 flex-wrap select-none pt-1">
              <div className="flex items-center gap-4.5 flex-wrap">
                {/* Distance */}
                <div className="flex items-center gap-1.5 text-gray-500">
                  <Navigation className="size-3.5 text-gray-400" />
                  <span>{route.distance}</span>
                </div>
                {/* Time deadline */}
                <div className="flex items-center gap-1.5 text-gray-500">
                  <Clock className="size-3.5 text-gray-450" />
                  <span>{route.deadline}</span>
                </div>
                {/* Items */}
                <div className="flex items-center gap-1.5 text-gray-500">
                  <Package className="size-3.5 text-gray-450" />
                  <span>{route.itemsCount}</span>
                </div>
              </div>

              {/* Open detail button */}
              <button
                onClick={() => toast.success(`Viewing details for delivery ${route.id}`)}
                className="text-xs font-black text-[#0F4C81] hover:underline cursor-pointer flex items-center gap-0.5"
              >
                <span>Open</span>
                <ChevronRight className="size-3.5" />
              </button>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
