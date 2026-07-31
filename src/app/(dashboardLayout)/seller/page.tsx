"use client";

import React from "react";
import SellerHeader from "@/components/dashboard/seller/overview/SellerHeader";
import SellerStats from "@/components/dashboard/seller/overview/SellerStats";
import RevenueAnalytics from "@/components/dashboard/seller/overview/RevenueAnalytics";
import TopSelling from "@/components/dashboard/seller/overview/TopSelling";
import RecentOrders from "@/components/dashboard/seller/overview/RecentOrders";

export default function SellerDashboardPage() {
  return (
    <div className="space-y-6 w-full pb-12 font-sans select-none text-left">
      
      {/* 1. Header with Breadcrumbs, Title and Export Report buttons */}
      <SellerHeader />

      {/* 2. Metric stats cards row (4 Cards with Sparklines) */}
      <SellerStats />

      {/* 3. Charts & Products Row (Sales Trend + Top Selling) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        <div className="lg:col-span-2">
          <RevenueAnalytics />
        </div>
        <div className="lg:col-span-1">
          <TopSelling />
        </div>
      </div>

      {/* 4. Bottom Row: Table Card (Recent Orders) */}
      <div className="w-full">
        <RecentOrders />
      </div>

    </div>
  );
}
