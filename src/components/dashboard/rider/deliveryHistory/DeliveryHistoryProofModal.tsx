"use client";

import React from "react";
import { X, User, Calendar, FileText } from "lucide-react";

interface DeliveryHistoryItem {
  id: string;
  customerName: string;
  customerArea: string;
  sellerName: string;
  completedTime: string;
  paymentType: "COD" | "Prepaid";
  amount: number;
  status: "Delivered" | "Failed";
  proofType: "Signature" | "Photo" | "—";
  receivedBy?: string;
  notes?: string;
}

interface DeliveryHistoryProofModalProps {
  item: DeliveryHistoryItem | null;
  onClose: () => void;
}

export default function DeliveryHistoryProofModal({
  item,
  onClose
}: DeliveryHistoryProofModalProps) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-3xs flex items-center justify-center z-50 p-4 select-none animate-fade-in text-left">
      
      <div className="bg-white rounded-xl shadow-xl w-full max-w-[420px] overflow-hidden flex flex-col text-left font-sans select-none border border-gray-150 animate-scale-up">
        
        {/* Modal Header */}
        <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
          <div>
            <h3 className="text-sm sm:text-base font-black text-gray-900">Proof of Delivery</h3>
            <p className="text-[10px] text-gray-400 font-bold mt-0.5">
              {item.id} • {item.customerName}
            </p>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-450 hover:text-gray-700 hover:bg-gray-100 p-1.5 rounded-full transition-colors cursor-pointer"
          >
            <X className="size-4.5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 space-y-4">
          
          {/* Proof Details Grid */}
          <div className="grid grid-cols-2 gap-3.5 border-b border-gray-100 pb-4 text-[11px] sm:text-xs">
            <div>
              <span className="text-[9px] text-gray-400 font-bold block uppercase tracking-wider">Received By</span>
              <div className="font-extrabold text-gray-800 flex items-center gap-1 mt-1">
                <User className="size-3.5 text-gray-400" />
                <span>{item.receivedBy || item.customerName}</span>
              </div>
            </div>
            <div>
              <span className="text-[9px] text-gray-400 font-bold block uppercase tracking-wider">Completed At</span>
              <div className="font-extrabold text-gray-800 flex items-center gap-1 mt-1">
                <Calendar className="size-3.5 text-gray-400" />
                <span>{item.completedTime}</span>
              </div>
            </div>
            <div>
              <span className="text-[9px] text-gray-400 font-bold block uppercase tracking-wider">Paid Amount</span>
              <div className="font-extrabold text-gray-800 flex items-center gap-1 mt-1">
                <span className="text-gray-400 font-extrabold">৳</span>
                <span>{item.amount.toLocaleString()} ({item.paymentType})</span>
              </div>
            </div>
            <div>
              <span className="text-[9px] text-gray-400 font-bold block uppercase tracking-wider">Proof Verification</span>
              <span className="mt-1 px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-100 font-black text-[9px] uppercase tracking-wider inline-block">
                ✓ Verified
              </span>
            </div>
          </div>

          {/* Delivery Notes */}
          {item.notes && (
            <div className="bg-slate-50 border border-gray-150 rounded-lg p-3 text-[11px] sm:text-xs leading-relaxed font-semibold text-gray-600">
              <span className="text-[9px] text-gray-400 font-black block uppercase tracking-wider mb-1">Rider Note</span>
              "{item.notes}"
            </div>
          )}

          {/* Signature/Photo Content block */}
          <div>
            <span className="text-[9px] text-gray-400 font-black block uppercase tracking-wider mb-2">
              Uploaded Proof ({item.proofType})
            </span>

            {item.proofType === "Signature" ? (
              <div className="bg-slate-50 border border-gray-200 rounded-lg p-5 flex flex-col items-center justify-center h-28 relative">
                <svg className="w-48 h-16" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
                  <path 
                    d="M 20 40 Q 50 10, 80 45 T 140 25 T 180 30" 
                    fill="none" 
                    stroke="#0F4C81" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  />
                  <path 
                    d="M 60 30 L 160 30" 
                    fill="none" 
                    stroke="#0F4C81" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeDasharray="3,3"
                  />
                </svg>
                <span className="text-[9px] text-gray-400 font-semibold absolute bottom-2 right-3">Verified Recipient Sign</span>
              </div>
            ) : (
              <div className="bg-slate-50 border border-gray-200 rounded-lg overflow-hidden h-32 flex flex-col items-center justify-center gap-1.5 select-none relative p-3">
                <div className="w-16 h-12 bg-white border border-gray-200 rounded flex items-center justify-center shadow-3xs">
                  <FileText className="size-6.5 text-[#0F4C81] opacity-70" />
                </div>
                <span className="text-[10px] font-black text-gray-700">Photo Proof Attached</span>
                <span className="text-[9px] text-gray-400 font-semibold">package_on_doorstep.jpg · 1.4 MB</span>
                <span className="text-[9px] text-emerald-600 font-black uppercase tracking-wider bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100 absolute top-2 right-2">
                  JPEG
                </span>
              </div>
            )}
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-5 py-4 bg-gray-50/50 border-t border-gray-100 flex items-center justify-end select-none">
          <button
            onClick={onClose}
            className="bg-[#0F4C81] hover:bg-[#0C447C] text-white font-bold py-2 px-5 rounded text-xs transition-colors cursor-pointer"
          >
            Close Record
          </button>
        </div>

      </div>

    </div>
  );
}
