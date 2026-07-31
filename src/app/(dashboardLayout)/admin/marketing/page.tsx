"use client";

import React from "react";
import MarketingHeader from "@/components/dashboard/admin/marketing/MarketingHeader";
import LiveSalesTimeline from "@/components/dashboard/admin/marketing/LiveSalesTimeline";
import MarketingStats from "@/components/dashboard/admin/marketing/MarketingStats";
import CouponManagement from "@/components/dashboard/admin/marketing/CouponManagement";

export default function AdminMarketingPage() {
  return (
    <div className="space-y-6 w-full pb-12 font-sans select-none text-left">
      
      {/* 1. Page Header with Title, Breadcrumbs & Action Button */}
      <MarketingHeader />

      {/* 2. Timeline & KPI metrics Row (2:1 Column Grid layout) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        <div className="lg:col-span-2">
          <LiveSalesTimeline />
        </div>
        <div className="lg:col-span-1">
          <MarketingStats />
        </div>
      </div>

      {/* 3. Coupon Table Management Area */}
      <div className="w-full">
        <CouponManagement />
      </div>

    </div>
  );
}
