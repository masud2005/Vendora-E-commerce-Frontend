"use client";

import React from "react";
import { Store, MapPin, Navigation, Clock, Package, ChevronRight } from "lucide-react";
import toast from "react-hot-toast";

interface AssignedOrder {
  id: string;
  price: number;
  status: "Assigned" | "Picked Up" | "In Transit" | "Delivered" | "Failed";
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

interface AssignedOrdersListProps {
  orders: AssignedOrder[];
  codValueInView: number;
}

export default function AssignedOrdersList({ orders, codValueInView }: AssignedOrdersListProps) {
  return (
    <div className="space-y-4 text-left select-none">
      
      {/* Stats Info Line */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-bold text-gray-500 select-none px-1">
        <span>
          Showing <span className="text-gray-900 font-extrabold">{orders.length}</span> orders
        </span>
        
        <span className="flex items-center gap-1 text-gray-500">
          COD value in view:{" "}
          <span className="text-[#B45309] font-black bg-amber-50 border border-amber-100 px-2 py-0.5 rounded text-xs select-none">
            ৳{codValueInView.toLocaleString()}
          </span>
        </span>
      </div>

      {/* Orders Grid List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        {orders.length === 0 ? (
          <div className="lg:col-span-2 bg-white border border-gray-200 rounded-xl p-12 text-center text-gray-400 font-bold text-sm select-none">
            No assigned orders matching the filters.
          </div>
        ) : (
          orders.map((order, index) => (
            <div
              key={index}
              className="border border-gray-250 hover:border-gray-300 rounded-xl p-4 sm:p-5 space-y-4 transition-all bg-white hover:shadow-4xs text-xs font-semibold text-gray-700 flex flex-col justify-between"
            >
              
              {/* Top Meta info */}
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-extrabold text-[#0F4C81] text-xs sm:text-sm">
                    {order.id}
                  </span>
                  
                  {/* Status badge */}
                  <span className={`px-2 py-0.5 rounded-full text-[9px] font-black border uppercase tracking-wider ${order.statusStyle}`}>
                    ● {order.status === "Assigned" ? "Awaiting Pickup" : order.status}
                  </span>

                  {/* COD/Prepaid */}
                  <span className={`px-2 py-0.5 rounded-full text-[9px] font-black border ${
                    order.isCOD ? "bg-amber-50 text-amber-805 border-amber-100" : "bg-gray-50 text-gray-500 border-gray-150"
                  }`}>
                    {order.isCOD ? "COD" : "Prepaid"}
                  </span>

                  {/* Express Tag */}
                  {order.isExpress && (
                    <span className="px-2 py-0.5 rounded-full text-[9px] font-black bg-rose-50 text-rose-700 border border-rose-100 tracking-wide flex items-center gap-0.5">
                      ⚡ Express
                    </span>
                  )}
                </div>

                {/* Price */}
                <div className="text-right">
                  <span className="text-sm sm:text-base font-black text-gray-950">
                    ৳{order.price.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Pickup & Dropoff Address Node details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-y border-gray-50 py-3.5 text-[11px] sm:text-xs my-2 flex-1 items-center">
                
                {/* Pickup location node */}
                <div className="flex items-start gap-2.5">
                  <span className="p-1.5 bg-blue-50 text-blue-600 rounded-lg shrink-0 mt-0.5">
                    <Store className="size-4" />
                  </span>
                  <div className="leading-none space-y-1 truncate">
                    <span className="text-[9px] text-gray-400 font-bold block uppercase tracking-wider">Pickup</span>
                    <h4 className="font-black text-gray-900 truncate">{order.pickupName}</h4>
                    <p className="text-gray-500 font-bold truncate">{order.pickupLoc}</p>
                  </div>
                </div>

                {/* Dropoff location node */}
                <div className="flex items-start gap-2.5">
                  <span className="p-1.5 bg-emerald-50 text-emerald-600 rounded-lg shrink-0 mt-0.5">
                    <MapPin className="size-4" />
                  </span>
                  <div className="leading-none space-y-1 truncate">
                    <span className="text-[9px] text-gray-400 font-bold block uppercase tracking-wider">Drop-off</span>
                    <h4 className="font-black text-gray-900 truncate">{order.dropName}</h4>
                    <p className="text-gray-500 font-bold truncate">{order.dropLoc}</p>
                  </div>
                </div>

              </div>

              {/* Card Footer metrics & Open action link */}
              <div className="flex items-center justify-between gap-3 text-[10px] sm:text-xs font-bold text-gray-400 flex-wrap select-none pt-1">
                <div className="flex items-center gap-4 flex-wrap">
                  {/* Distance */}
                  <div className="flex items-center gap-1.5 text-gray-500">
                    <Navigation className="size-3.5 text-gray-455" />
                    <span>{order.distance}</span>
                  </div>
                  {/* Time deadline */}
                  <div className="flex items-center gap-1.5 text-gray-500">
                    <Clock className="size-3.5 text-gray-450" />
                    <span>{order.deadline}</span>
                  </div>
                  {/* Items count */}
                  <div className="flex items-center gap-1.5 text-gray-500">
                    <Package className="size-3.5 text-gray-455" />
                    <span>{order.itemsCount}</span>
                  </div>
                </div>

                {/* Open details */}
                <button
                  onClick={() => toast.success(`Viewing details for assigned order ${order.id}`)}
                  className="text-xs font-black text-[#0F4C81] hover:underline cursor-pointer flex items-center gap-0.5"
                >
                  <span>Open</span>
                  <ChevronRight className="size-3.5" />
                </button>
              </div>

            </div>
          ))
        )}
      </div>

    </div>
  );
}
