"use client";


import { Landmark } from "lucide-react";
import { AssignedOrderDetails } from "./types";

interface CashCollectionReminderProps {
  order: AssignedOrderDetails;
  isCashCollected: boolean;
  onMarkCashCollected: () => void;
}

export default function CashCollectionReminder({
  order,
  isCashCollected,
  onMarkCashCollected
}: CashCollectionReminderProps) {
  if (!order.isCOD) return null;

  return (
    <div className="bg-amber-50 border border-amber-150 rounded-xl p-4.5 text-left flex flex-col gap-3 select-none">
      <div className="flex items-start gap-3">
        <Landmark className="size-5 text-[#B45309] shrink-0 mt-0.5" />
        <div className="leading-none space-y-1">
          <h4 className="text-xs font-black text-[#78350F]">Collect ৳{order.price.toLocaleString()} in cash</h4>
          <p className="text-[10px] text-amber-800 font-bold leading-normal">Confirm the exact amount before handing over the parcel.</p>
        </div>
      </div>

      {order.status !== "Delivered" && order.status !== "Failed" && (
        <div>
          {isCashCollected ? (
            <div className="w-full bg-emerald-100 text-emerald-800 text-[10px] font-black rounded py-2 text-center select-none uppercase tracking-wider">
              ✓ Cash Collected
            </div>
          ) : (
            <button
              onClick={onMarkCashCollected}
              className="w-full bg-[#D97706] hover:bg-[#B45309] text-white py-2 rounded text-center text-xs font-black cursor-pointer transition-colors block"
            >
              Mark Cash Collected
            </button>
          )}
        </div>
      )}
    </div>
  );
}
