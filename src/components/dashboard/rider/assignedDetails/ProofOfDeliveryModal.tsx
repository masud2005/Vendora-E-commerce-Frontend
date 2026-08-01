"use client";

import React from "react";
import { X, Camera, PenTool, RotateCcw, CheckCircle2 } from "lucide-react";
import { AssignedOrderDetails } from "./types";

interface ProofOfDeliveryModalProps {
  order: AssignedOrderDetails;
  isOpen: boolean;
  onClose: () => void;
  activeTab: "photo" | "signature";
  setActiveTab: (tab: "photo" | "signature") => void;
  receivedBy: string;
  setReceivedBy: (name: string) => void;
  deliveryNote: string;
  setDeliveryNote: (note: string) => void;
  modalCashCollected: boolean;
  setModalCashCollected: (collected: boolean) => void;
  isCashCollected: boolean;
  photoProof: string | null;
  onUploadPhoto: () => void;
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
  startDrawing: (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => void;
  draw: (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => void;
  stopDrawing: () => void;
  clearSignature: () => void;
  onSubmitDelivery: () => void;
}

export default function ProofOfDeliveryModal({
  order,
  isOpen,
  onClose,
  activeTab,
  setActiveTab,
  receivedBy,
  setReceivedBy,
  deliveryNote,
  setDeliveryNote,
  modalCashCollected,
  setModalCashCollected,
  isCashCollected,
  photoProof,
  onUploadPhoto,
  canvasRef,
  startDrawing,
  draw,
  stopDrawing,
  clearSignature,
  onSubmitDelivery
}: ProofOfDeliveryModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-3xs flex items-center justify-center z-50 p-4 select-none animate-fade-in text-left">
      
      <div className="bg-white rounded-xl shadow-xl w-full max-w-[460px] overflow-hidden flex flex-col text-left font-sans select-none border border-gray-150 animate-scale-up">
        
        {/* Modal Header */}
        <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
          <div>
            <h3 className="text-sm sm:text-base font-black text-gray-900">Proof of Delivery</h3>
            <p className="text-[10px] text-gray-400 font-bold mt-0.5">
              {order.id} • {order.dropName}
            </p>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-450 hover:text-gray-700 hover:bg-gray-100 p-1.5 rounded-full transition-colors cursor-pointer"
          >
            <X className="size-4.5" />
          </button>
        </div>

        {/* Modal Body scroll area */}
        <div className="px-5 py-4 space-y-4 overflow-y-auto max-h-[70vh] custom-scrollbar">
          
          {/* Tab Selectors */}
          <div className="grid grid-cols-2 border border-gray-150 rounded-lg p-1 bg-gray-50/50 text-xs font-bold text-gray-500 select-none">
            <button
              onClick={() => setActiveTab("photo")}
              className={`flex items-center justify-center gap-1.5 py-2 rounded-md transition-all cursor-pointer ${
                activeTab === "photo"
                  ? "bg-white text-gray-900 border border-gray-200 shadow-3xs"
                  : "hover:text-gray-800"
              }`}
            >
              <Camera className="size-4" />
              <span>Photo</span>
            </button>
            <button
              onClick={() => setActiveTab("signature")}
              className={`flex items-center justify-center gap-1.5 py-2 rounded-md transition-all cursor-pointer ${
                activeTab === "signature"
                  ? "bg-white text-gray-900 border border-gray-200 shadow-3xs"
                  : "hover:text-gray-800"
              }`}
            >
              <PenTool className="size-4" />
              <span>Signature</span>
            </button>
          </div>

          {/* Tab content panel */}
          {activeTab === "photo" ? (
            // Photo upload box
            <div 
              onClick={onUploadPhoto}
              className="relative bg-slate-50 border-2 border-dashed border-gray-200 hover:border-[#0F4C81] rounded-lg p-6 flex flex-col items-center justify-center gap-2 cursor-pointer transition-colors select-none text-center h-44"
            >
              {photoProof ? (
                <div className="space-y-2">
                  <div className="mx-auto bg-emerald-100 text-emerald-600 rounded-full p-2.5 w-fit">
                    <CheckCircle2 className="size-6" />
                  </div>
                  <span className="text-xs font-black text-emerald-700 block">Photo proof ready</span>
                  <span className="text-[10px] text-gray-400 font-bold block">{photoProof.replace("/", "")} (Tap to change)</span>
                </div>
              ) : (
                <>
                  <Camera className="size-8 text-gray-400" />
                  <span className="text-xs font-black text-gray-700">Capture or upload delivery photo</span>
                  <span className="text-[9px] text-gray-400 font-bold">JPG or PNG · max 5 MB</span>
                </>
              )}
            </div>
          ) : (
            // Signature drawing board
            <div className="space-y-2">
              <div className="relative bg-white border border-gray-200 rounded-lg overflow-hidden h-44 cursor-crosshair">
                
                {/* Ask label inside */}
                <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[9px] text-gray-400 font-bold pointer-events-none select-none">
                  Ask the recipient to sign inside the box.
                    </span>

                {/* Clear signature pad */}
                <button
                  onClick={clearSignature}
                  className="absolute top-2.5 right-2.5 flex items-center gap-1 bg-gray-100 hover:bg-gray-200 text-gray-600 font-bold px-2 py-1 rounded text-[9px] transition-colors cursor-pointer border border-gray-200 z-20"
                >
                  <RotateCcw className="size-3" />
                  <span>Clear</span>
                </button>

                {/* Signature Canvas Drawing area */}
                <canvas
                  ref={canvasRef}
                  width={420}
                  height={176}
                  onMouseDown={startDrawing}
                  onMouseMove={draw}
                  onMouseUp={stopDrawing}
                  onMouseLeave={stopDrawing}
                  onTouchStart={startDrawing}
                  onTouchMove={draw}
                  onTouchEnd={stopDrawing}
                  className="w-full h-full block bg-white"
                />

              </div>
            </div>
          )}

          {/* Input forms */}
          <div className="space-y-3">
            {/* Received by */}
            <div className="space-y-1.5 text-left">
              <label className="text-[9px] text-gray-500 font-black uppercase tracking-wide">
                Received By
              </label>
              <input
                type="text"
                value={receivedBy}
                onChange={(e) => setReceivedBy(e.target.value)}
                placeholder="e.g. Sabbir Rahman"
                className="w-full px-3 py-2 border border-gray-200 rounded text-xs bg-white focus:outline-none focus:border-[#0F4C81] font-semibold text-gray-850"
              />
            </div>

            {/* Delivery Notes */}
            <div className="space-y-1.5 text-left">
              <label className="text-[9px] text-gray-500 font-black uppercase tracking-wide">
                Delivery Note (Optional)
              </label>
              <textarea
                value={deliveryNote}
                onChange={(e) => setDeliveryNote(e.target.value)}
                placeholder="e.g. Handed over to the building security desk"
                className="w-full px-3 py-2 border border-gray-200 rounded text-xs bg-white focus:outline-none focus:border-[#0F4C81] font-semibold text-gray-850 h-16 resize-none"
              />
            </div>

            {/* COD verification checkbox */}
            {order.isCOD && (
              <div className="bg-emerald-50/50 border border-emerald-100 rounded-lg p-3.5 flex items-start gap-2.5 text-left mt-2 select-none">
                <input
                  type="checkbox"
                  id="modal_cod_checkbox"
                  checked={modalCashCollected}
                  disabled={isCashCollected}
                  onChange={(e) => setModalCashCollected(e.target.checked)}
                  className="mt-0.5 rounded text-emerald-600 focus:ring-emerald-500 size-4 cursor-pointer disabled:cursor-not-allowed"
                />
                <label htmlFor="modal_cod_checkbox" className="leading-none space-y-1 cursor-pointer select-none">
                  <h4 className="text-xs font-black text-emerald-950">Cash collected — ৳{order.price.toLocaleString()}</h4>
                  <p className="text-[9px] text-emerald-700 font-bold leading-normal">Required before this COD order can be marked delivered.</p>
                </label>
              </div>
            )}
          </div>

        </div>

        {/* Modal Actions Footer */}
        <div className="px-5 py-4.5 bg-gray-50/50 border-t border-gray-100 flex items-center justify-end gap-3 select-none">
          <button
            onClick={onClose}
            className="border border-gray-250 bg-white hover:bg-gray-50 text-gray-700 font-bold py-2.5 px-4.5 rounded text-xs transition-colors cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={onSubmitDelivery}
            className="bg-[#10B981] hover:bg-[#059669] text-white font-bold py-2.5 px-4.5 rounded text-xs transition-colors cursor-pointer shadow-3xs"
          >
            Mark Delivered
          </button>
        </div>

      </div>

    </div>
  );
}
