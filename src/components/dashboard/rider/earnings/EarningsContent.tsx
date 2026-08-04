"use client";

import React, { useState } from "react";
import EarningsHeader from "./EarningsHeader";
import EarningsStats from "./EarningsStats";
import EarningsChart from "./EarningsChart";
import WalletBalanceBox from "./WalletBalanceBox";
import ActiveIncentivesList from "./ActiveIncentivesList";
import EarningsLedgerTable from "./EarningsLedgerTable";
import toast from "react-hot-toast";

interface EarningsLedgerItem {
  date: string;
  deliveries: number;
  baseFee: number;
  bonus: number;
  tips: number;
  total: number;
}

const ledgerDb: EarningsLedgerItem[] = [
  { date: "Mon, Jun 3", deliveries: 13, baseFee: 780, bonus: 180, tips: 90, total: 1050 },
  { date: "Sun, Jun 2", deliveries: 16, baseFee: 960, bonus: 200, tips: 130, total: 1290 },
  { date: "Sat, Jun 1", deliveries: 21, baseFee: 1260, bonus: 220, tips: 130, total: 1610 },
  { date: "Fri, May 31", deliveries: 18, baseFee: 1080, bonus: 200, tips: 140, total: 1420 },
  { date: "Thu, May 30", deliveries: 11, baseFee: 660, bonus: 120, tips: 80, total: 860 },
  { date: "Wed, May 29", deliveries: 15, baseFee: 900, bonus: 180, tips: 100, total: 1180 },
  { date: "Tue, May 28", deliveries: 12, baseFee: 720, bonus: 140, tips: 80, total: 940 }
];

export default function EarningsContent() {
  const [activeTab, setActiveTab] = useState<"week" | "month">("week");
  const [hoveredBarIndex, setHoveredBarIndex] = useState<number | null>(null);

  const handleDownloadStatement = () => {
    toast.success("Downloading weekly earnings statement PDF...");
  };

  const handleRequestWithdrawal = () => {
    toast.success("Withdrawal request of ৳8,350 has been submitted for Monday settlement.");
  };

  return (
    <div className="space-y-6 w-full text-left font-sans">
      
      {/* 1. Header component */}
      <EarningsHeader
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onDownloadStatement={handleDownloadStatement}
      />

      {/* 2. Stats component */}
      <EarningsStats />

      {/* 3. Columns Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        {/* SVG Daily Chart */}
        <div className="lg:col-span-2">
          <EarningsChart
            hoveredBarIndex={hoveredBarIndex}
            setHoveredBarIndex={setHoveredBarIndex}
          />
        </div>

        {/* Right side panels */}
        <div className="lg:col-span-1 space-y-6">
          <WalletBalanceBox onWithdraw={handleRequestWithdrawal} />
          <ActiveIncentivesList />
        </div>
      </div>

      {/* 4. Ledger Table component */}
      <EarningsLedgerTable ledgerItems={ledgerDb} />

    </div>
  );
}
