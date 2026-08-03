"use client";

import React from "react";
import { X, AlertTriangle } from "lucide-react";
import { AssignedOrderDetails } from "./types";

interface ReportFailedModalProps {
  order: AssignedOrderDetails;
  isOpen: boolean;
  onClose: () => void;
  reasons: string[];
  selectedReason: string;
  setSelectedReason: (reason: string) => void;
  otherReasonText: string;
  setOtherReasonText: (text: string) => void;
  onSubmitReport: () => void;
}

export default function ReportFailedModal({
  order,
  isOpen,
  onClose,
  reasons,
  selectedReason,
  setSelectedReason,
  otherReasonText,
  setOtherReasonText,
  onSubmitReport
}: ReportFailedModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-3xs flex items-center justify-center z-50 p-4 select-none animate-fade-in text-left">
      
      <div className="bg-white rounded-xl shadow-xl w-full max-w-[460px] overflow-hidden flex flex-col text-left font-sans select-none border border-gray-150 animate-scale-up">
        
        {/* Modal Header */}
        <div className="px-5 py-4.5 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-rose-50 border border-rose-100 p-2 rounded-lg text-rose-500">
              <AlertTriangle className="size-5" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-black text-gray-900">Report Failed Delivery</h3>
              <p className="text-[10px] text-gray-400 font-bold mt-0.5">
                {order.id} · Admin and seller will be notified
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-455 hover:text-gray-750 hover:bg-gray-100 p-1.5 rounded-full transition-colors cursor-pointer"
          >
            <X className="size-4.5" />
          </button>
        </div>

        {/* Modal Body / Radio list */}
        <div className="px-5 py-4 space-y-2.5 overflow-y-auto max-h-[60vh] custom-scrollbar">
          {reasons.map((reason) => {
            const isSelected = selectedReason === reason;
            return (
              <div key={reason} className="space-y-2">
                <div
                  onClick={() => setSelectedReason(reason)}
                  className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all text-left select-none text-xs ${
                    isSelected
                      ? "border-rose-200 bg-rose-50/30 text-rose-750 font-bold"
                      : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50/50 font-semibold"
                  }`}
                >
                  {/* Double ring radio style */}
                  <div className={`size-4.5 rounded-full border flex items-center justify-center shrink-0 ${
                    isSelected ? "border-rose-500 bg-rose-500 text-white" : "border-gray-300 bg-white"
                  }`}>
                    {isSelected && <div className="size-1.5 rounded-full bg-white" />}
                  </div>
                  <span>{reason}</span>
                </div>

                {/* Conditional input text box for Other reason */}
                {reason === "Other reason" && isSelected && (
                  <textarea
                    value={otherReasonText}
                    onChange={(e) => setOtherReasonText(e.target.value)}
                    placeholder="Describe what happened"
                    className="w-full px-3 py-2 border border-gray-250 rounded text-xs bg-white focus:outline-none focus:border-rose-350 font-semibold text-gray-800 h-20 resize-none animate-fade-in"
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Modal Footer actions */}
        <div className="px-5 py-4.5 bg-gray-50/50 border-t border-gray-100 flex items-center justify-end gap-3 select-none">
          <button
            onClick={onClose}
            className="border border-gray-250 bg-white hover:bg-gray-50 text-gray-700 font-bold py-2.5 px-4.5 rounded text-xs transition-colors cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={onSubmitReport}
            className="bg-[#EF4444] hover:bg-[#DC2626] text-white font-bold py-2.5 px-4.5 rounded text-xs transition-colors cursor-pointer shadow-3xs"
          >
            Submit Report
          </button>
        </div>

      </div>

    </div>
  );
}
