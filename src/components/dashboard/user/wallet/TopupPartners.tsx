"use client";

import { ShieldCheck, Zap } from "lucide-react";

export default function TopupPartners() {
  const partners = [
    { name: "Visa", bg: "bg-gradient-to-r from-blue-700 to-blue-900", text: "text-white font-extrabold italic" },
    { name: "MasterCard", bg: "bg-gradient-to-r from-gray-800 to-black", text: "text-white font-bold" },
    { name: "bKash", bg: "bg-gradient-to-r from-pink-600 to-pink-800", text: "text-white font-black italic " },
    { name: "Nagad", bg: "bg-gradient-to-r from-orange-500 to-red-600", text: "text-white font-black italic " }
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-lg px-5 lg:px-3 pt-4 pb-5 shadow-2xs space-y-6">
      
      {/* Title */}
      <h3 className="text-xs md:text-sm font-bold text-gray-900 uppercase tracking-wider">
        Fast Top-up Partners
      </h3>

      {/* Grid Layout of Partners */}
      <div className="grid grid-cols-2 gap-2">
        {partners.map((partner, idx) => (
          <div
            key={idx}
            className={`h-10 rounded border border-gray-100 flex items-center justify-center  shadow-3xs cursor-pointer select-none active:scale-95 transition-transform ${partner.bg}`}
          >
            {partner.name === "MasterCard" ? (
              <div className="flex items-center gap-1.5">
                <div className="flex -space-x-2">
                  {/* <div className="size-3.5 bg-red-500 rounded-full"></div> */}
                  {/* <div className="size-3.5 bg-amber-500 rounded-full bg-opacity-80"></div> */}
                </div>
                <span className="text-xs font-bold text-white tracking-tight">Mastercard</span>
              </div>
            ) : (
              <span className={`text-xs  tracking-wide ${partner.text}`}>
                {partner.name}
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Secure Transactions details info list */}
      <div className="space-y-4 pt-2 border-t border-gray-100">
        
        {/* SSL Encrypted */}
        <div className="flex gap-3">
          <ShieldCheck className="size-5 text-brand-primary-600 shrink-0 mt-0.5" />
          <div className="space-y-0.5">
            <h4 className="text-xs md:text-sm font-bold text-gray-900">
              Secure Transactions
            </h4>
            <p className="text-[10px] md:text-xs text-gray-500 font-medium leading-normal">
              256-bit SSL encrypted payments for your peace of mind.
            </p>
          </div>
        </div>

        {/* Instant Credit */}
        <div className="flex gap-3">
          <Zap className="size-5 text-brand-accent-600 shrink-0 mt-0.5" />
          <div className="space-y-0.5">
            <h4 className="text-xs md:text-sm font-bold text-gray-900">
              Instant Credits
            </h4>
            <p className="text-[10px] md:text-xs text-gray-500 font-medium leading-normal">
              Wallet balance is updated immediately after a successful top-up.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}
