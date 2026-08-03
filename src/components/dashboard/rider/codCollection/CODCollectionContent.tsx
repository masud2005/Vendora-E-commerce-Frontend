"use client";

import React, { useState } from "react";
import CODCollectionHeader from "./CODCollectionHeader";
import CODCollectionStats from "./CODCollectionStats";
import CashHeldTable from "./CashHeldTable";
import RemitCashControl from "./RemitCashControl";
import RemittanceHistoryTable from "./RemittanceHistoryTable";
import toast from "react-hot-toast";

interface CashHeldItem {
  id: string;
  customerName: string;
  collectedTime: string;
  amount: number;
}

interface RemittanceHistoryItem {
  batchId: string;
  date: string;
  orders: number;
  method: string;
  amount: number;
  status: "verified" | "submitted";
}

const initialCashHeld: CashHeldItem[] = [
  { id: "#VD-90301", customerName: "Mahmudul Hasan", collectedTime: "11:42 AM", amount: 1750 },
  { id: "#VD-90210", customerName: "Shakil Ahmed", collectedTime: "01:05 PM", amount: 990 }
];

const initialRemittanceHistory: RemittanceHistoryItem[] = [
  { batchId: "RMT-4412", date: "Jun 2, 2024", orders: 9, method: "Hub Cash Desk", amount: 18450, status: "verified" },
  { batchId: "RMT-4398", date: "Jun 1, 2024", orders: 12, method: "bKash Merchant", amount: 24100, status: "verified" },
  { batchId: "RMT-4381", date: "May 31, 2024", orders: 7, method: "Hub Cash Desk", amount: 12980, status: "submitted" },
  { batchId: "RMT-4365", date: "May 30, 2024", orders: 10, method: "bKash Merchant", amount: 20340, status: "verified" }
];

export default function CODCollectionContent() {
  const [cashHeldList, setCashHeldList] = useState<CashHeldItem[]>(initialCashHeld);
  const [remittanceHistory, setRemittanceHistory] = useState<RemittanceHistoryItem[]>(initialRemittanceHistory);
  const [handoverMethod, setHandoverMethod] = useState<"hub" | "bkash">("hub");

  // Calculations
  const dailyLimit = 15000;
  const cashInHand = cashHeldList.reduce((sum, item) => sum + item.amount, 0);
  const limitPercent = Math.min(Math.round((cashInHand / dailyLimit) * 100), 100);

  const handleSubmitHandover = () => {
    if (cashInHand === 0) {
      toast.error("You have no collected cash in hand to remit.");
      return;
    }

    const timeNow = new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
    const newBatchId = `RMT-${Math.floor(4400 + Math.random() * 100)}`;
    const newRecord: RemittanceHistoryItem = {
      batchId: newBatchId,
      date: timeNow,
      orders: cashHeldList.length,
      method: handoverMethod === "hub" ? "Hub Cash Desk" : "bKash Merchant",
      amount: cashInHand,
      status: "submitted"
    };

    // Add to history at the top, clear cash held
    setRemittanceHistory([newRecord, ...remittanceHistory]);
    setCashHeldList([]);

    toast.success(`Handover request ${newBatchId} of ৳${cashInHand.toLocaleString()} submitted successfully!`);
  };

  return (
    <div className="space-y-6 w-full text-left font-sans">
      
      {/* 1. Header component */}
      <CODCollectionHeader onRemitCash={handleSubmitHandover} />

      {/* 2. Stats component */}
      <CODCollectionStats
        cashInHand={cashInHand}
        limitPercent={limitPercent}
        dailyLimit={dailyLimit}
      />

      {/* 3. Columns Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        {/* Cash Held Against Orders Table */}
        <div className="lg:col-span-2 h-full flex flex-col">
          <CashHeldTable
            cashHeldList={cashHeldList}
            cashInHand={cashInHand}
          />
        </div>

        {/* Remit Cash Control sidebar */}
        <div className="lg:col-span-1 h-full flex flex-col">
          <RemitCashControl
            cashInHand={cashInHand}
            limitPercent={limitPercent}
            dailyLimit={dailyLimit}
            handoverMethod={handoverMethod}
            setHandoverMethod={setHandoverMethod}
            onSubmitHandover={handleSubmitHandover}
          />
        </div>
      </div>

      {/* 4. Remittance History Table component */}
      <RemittanceHistoryTable history={remittanceHistory} />

    </div>
  );
}
