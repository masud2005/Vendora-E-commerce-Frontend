"use client";

import React from "react";
import toast from "react-hot-toast";
import { CheckCircle2, Truck, HelpCircle } from "lucide-react";

export interface OrderItem {
  id: string;
  date: string;
  status: "Completed" | "To Receive" | "Cancelled" | "Unpaid" | "To Ship";
  statusDetail?: string;
  productName: string;
  brand: string;
  variant: string;
  qty: number;
  price: number;
  originalPrice?: number;
  image: string;
}

interface OrderCardProps {
  order: OrderItem;
}

export default function OrderCard({ order }: OrderCardProps) {
  // Determine badge colors based on status
  const getStatusBadgeStyle = (status: string) => {
    switch (status) {
      case "Completed":
        return "text-[#065F46] bg-[#A7F3D0]/60";
      case "To Receive":
        return "text-[#0369A1] bg-[#E0F2FE]/80";
      case "Cancelled":
        return "text-gray-600 bg-gray-100";
      case "To Ship":
        return "text-amber-700 bg-amber-50";
      case "Unpaid":
        return "text-red-600 bg-red-50";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded p-4.5 sm:p-5 shadow-2xs flex flex-col gap-4 select-none">
      
      {/* Top Header of the Order Card */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3.5 border-b border-gray-100">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-left">
          <div className="flex items-center justify-between sm:justify-start w-full sm:w-auto gap-2">
            <span className={`px-2.5 py-1 rounded text-[10px] sm:text-xs font-bold uppercase tracking-wider ${getStatusBadgeStyle(order.status)}`}>
              {order.status}
            </span>
            
            {/* Mobile-only status detail shown on the far right */}
            {order.statusDetail && (
              <div className="flex sm:hidden items-center gap-1.5 text-xs font-bold">
                {order.status === "Completed" && <CheckCircle2 className="size-4 text-[#065F46]" />}
                {order.status === "To Receive" && <Truck className="size-4 text-[#0369A1]" />}
                <span className={order.status === "Completed" ? "text-[#065F46]" : order.status === "To Receive" ? "text-[#0369A1]" : "text-gray-500"}>
                  {order.statusDetail}
                </span>
              </div>
            )}
          </div>
          
          <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-medium text-gray-400">
            <span>Order #{order.id}</span>
            <span>•</span>
            <span>{order.date}</span>
          </div>
        </div>

        {/* Right Status Detail shown only on sm and larger */}
        {order.statusDetail && (
          <div className="hidden sm:flex items-center gap-1.5 text-xs font-bold">
            {order.status === "Completed" && <CheckCircle2 className="size-4 text-[#065F46]" />}
            {order.status === "To Receive" && <Truck className="size-4 text-[#0369A1]" />}
            <span className={order.status === "Completed" ? "text-[#065F46]" : order.status === "To Receive" ? "text-[#0369A1]" : "text-gray-500"}>
              {order.statusDetail}
            </span>
          </div>
        )}
      </div>

      {/* Main Order Content Area */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        
        {/* Product Info (Left side) */}
        <div className="flex gap-4 items-start text-left flex-1 min-w-0 w-full">
          {/* Thumbnail */}
          <div className="size-20 sm:size-24 rounded border border-gray-100 bg-gray-50 overflow-hidden shrink-0">
            <img
              src={order.image}
              alt={order.productName}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details */}
          <div className="space-y-1.5 min-w-0 flex-1">
            <h4 className="text-sm sm:text-base font-bold text-gray-900 leading-snug break-words line-clamp-2">
              {order.productName}
            </h4>
            <p className="text-[11px] sm:text-xs font-medium text-gray-400 leading-normal">
              Brand: {order.brand} | Variant: {order.variant} | Qty: {order.qty}
            </p>
            <div className="flex items-baseline gap-2 pt-0.5">
              <span className="text-sm sm:text-base font-extrabold text-gray-900 flex items-center">
                <span className="font-bengali mr-0.5">৳</span>
                {order.price.toFixed(2)}
              </span>
              {order.originalPrice && (
                <span className="text-xs font-semibold text-gray-400 line-through">
                  <span className="font-bengali">৳</span>
                  {order.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Action Buttons (Right/Bottom side) */}
        <div className="flex flex-row sm:flex-col gap-2 w-full sm:w-auto shrink-0 pt-3.5 sm:pt-0 border-t sm:border-t-0 border-gray-100 justify-end">
          {order.status === "Completed" && (
            <>
              <button
                onClick={() => toast.success("Opening order details...")}
                className="flex-1 sm:w-32 border border-gray-300 hover:bg-gray-50 text-gray-700 font-bold py-2 rounded text-xs transition-colors cursor-pointer select-none"
              >
                View Details
              </button>
              <button
                onClick={() => toast.success("Item added to cart for reorder!")}
                className="flex-1 sm:w-32 bg-[#0F4C81] hover:bg-[#0C447C] text-white font-bold py-2 rounded text-xs transition-colors shadow-2xs cursor-pointer select-none"
              >
                Reorder
              </button>
            </>
          )}

          {order.status === "To Receive" && (
            <>
              <button
                onClick={() => toast.success("Tracking delivery location...")}
                className="flex-1 sm:w-32 border border-gray-300 hover:bg-gray-50 text-gray-700 font-bold py-2 rounded text-xs transition-colors cursor-pointer select-none"
              >
                Track
              </button>
              <button
                onClick={() => toast.success("Opening order details...")}
                className="flex-1 sm:w-32 bg-[#0F4C81] hover:bg-[#0C447C] text-white font-bold py-2 rounded text-xs transition-colors shadow-2xs cursor-pointer select-none"
              >
                View Details
              </button>
            </>
          )}

          {order.status === "Cancelled" && (
            <>
              <button
                onClick={() => toast.success("Opening cancellation invoice details...")}
                className="flex-1 sm:w-32 border border-gray-300 hover:bg-gray-50 text-gray-700 font-bold py-2 rounded text-xs transition-colors cursor-pointer select-none"
              >
                Details
              </button>
              <button
                onClick={() => toast.success("Item added to cart for reorder!")}
                className="flex-1 sm:w-32 bg-[#A7F3D0] hover:bg-[#86EFAC] text-[#065F46] font-bold py-2 rounded text-xs transition-colors cursor-pointer select-none"
              >
                Reorder
              </button>
            </>
          )}

          {order.status !== "Completed" && order.status !== "To Receive" && order.status !== "Cancelled" && (
            <>
              <button
                onClick={() => toast.success("Opening order details...")}
                className="flex-1 sm:w-32 border border-gray-300 hover:bg-gray-50 text-gray-700 font-bold py-2 rounded text-xs transition-colors cursor-pointer select-none"
              >
                View Details
              </button>
              <button
                onClick={() => toast.error("Cancellation is not available at this step.")}
                className="flex-1 sm:w-32 bg-[#0F4C81] hover:bg-[#0C447C] text-white font-bold py-2 rounded text-xs transition-colors shadow-2xs cursor-pointer select-none"
              >
                Need Help
              </button>
            </>
          )}
        </div>

      </div>

    </div>
  );
}
