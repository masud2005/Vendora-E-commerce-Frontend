"use client";

import React from "react";
import { CheckCircle2, AlertTriangle } from "lucide-react";
import { AssignedOrderDetails } from "./types";

interface DeliveryProgressTimelineProps {
  order: AssignedOrderDetails;
  onMarkDeliveredClick: () => void;
  onReportFailedClick: () => void;
}

export default function DeliveryProgressTimeline({
  order,
  onMarkDeliveredClick,
  onReportFailedClick
}: DeliveryProgressTimelineProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 sm:p-6 shadow-3xs space-y-5 text-left">
      <div className="leading-none space-y-1 text-left">
        <h3 className="text-sm sm:text-base font-extrabold text-gray-900 leading-tight">
          Delivery Progress
        </h3>
        <p className="text-[10px] sm:text-xs text-gray-400 font-semibold">
          Update the status as you move through the route
        </p>
      </div>

      {/* Vertical timeline stack */}
      <div className="relative pl-7 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[2px] before:bg-gray-100">
        {order.timeline.map((step, idx) => (
          <div key={idx} className="relative text-left text-xs font-bold text-gray-700 leading-none">
            
            {/* Timeline circle point */}
            <span className={`absolute -left-7 top-0.5 size-4.5 rounded-full flex items-center justify-center border-2 bg-white ${
              step.checked
                ? step.isFailed
                  ? "border-rose-500 text-rose-500"
                  : "border-emerald-500 text-emerald-500"
                : "border-gray-200 text-gray-200"
            }`}>
              <span className={`size-1.5 rounded-full ${
                step.checked
                  ? step.isFailed
                    ? "bg-rose-500"
                    : "bg-emerald-500"
                  : "bg-transparent"
              }`} />
            </span>

            {/* Text details */}
            <div className="space-y-1">
              <h4 className={`text-xs ${
                step.checked
                  ? step.isFailed
                    ? "font-extrabold text-rose-650"
                    : "font-extrabold text-gray-900"
                  : "text-gray-400 font-semibold"
              }`}>
                {step.title}
              </h4>
              {step.time && (
                <span className="text-[10px] text-gray-400 font-semibold">{step.time}</span>
              )}
            </div>

          </div>
        ))}
      </div>

      {/* In Transit/Picked up controls - Delivery Actions */}
      {order.status !== "Delivered" && order.status !== "Failed" && (
        <div className="flex flex-wrap items-center gap-3 pt-2 select-none border-t border-gray-50 pt-4">
          <button
            onClick={onMarkDeliveredClick}
            className="flex items-center justify-center gap-1.5 bg-[#10B981] hover:bg-[#059669] text-white font-bold py-2.5 px-4.5 rounded text-xs transition-colors cursor-pointer shadow-3xs"
          >
            <CheckCircle2 className="size-4" />
            <span>Mark Delivered with Proof</span>
          </button>

          <button
            onClick={onReportFailedClick}
            className="flex items-center justify-center gap-1.5 border border-rose-200 hover:bg-rose-50 text-rose-700 font-bold py-2.5 px-4.5 rounded text-xs transition-colors cursor-pointer"
          >
            <AlertTriangle className="size-4" />
            <span>Report Failed Delivery</span>
          </button>
        </div>
      )}

      {/* Fail specific alerts box inside delivery progress */}
      {order.alertMsg && (
        <div className="bg-rose-50/60 border border-rose-100 rounded-lg p-3.5 flex items-start gap-2.5 text-left">
          <AlertTriangle className="size-4.5 text-rose-600 shrink-0 mt-0.5" />
          <div className="leading-none space-y-1">
            <h4 className="text-xs font-black text-rose-950">Delivery failed</h4>
            <p className="text-[10px] text-rose-700 font-bold">{order.alertMsg}</p>
          </div>
        </div>
      )}
    </div>
  );
}
