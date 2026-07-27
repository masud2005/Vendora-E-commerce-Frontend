"use client";

import WalletHeader from "@/components/dashboard/userdashboard/wallet/WalletHeader";
import BalanceCard from "@/components/dashboard/userdashboard/wallet/BalanceCard";
import TransactionHistory from "@/components/dashboard/userdashboard/wallet/TransactionHistory";
import RedeemPoints from "@/components/dashboard/userdashboard/wallet/RedeemPoints";
import TopupPartners from "@/components/dashboard/userdashboard/wallet/TopupPartners";
import PromoBanner from "@/components/dashboard/userdashboard/wallet/PromoBanner";

export default function WalletPage() {
  return (
    <div className="space-y-6 md:space-y-8 select-none">

      {/* 1. Breadcrumbs and Page Title Header */}
      <WalletHeader />

      {/* 2. Responsive Grid layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-start">

        {/* Left Column: Balance & Transactions */}
        <div className="lg:col-span-2 space-y-6 md:space-y-8">
          <BalanceCard />
          <TransactionHistory />
        </div>

        {/* Right Column: Redeem, Partners, Promo banner */}
        <div className="lg:col-span-1 space-y-6 md:space-y-8">
          <RedeemPoints />
          <TopupPartners />
          <PromoBanner />
        </div>

      </div>
    </div>
  );
}
