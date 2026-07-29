"use client";

import React from "react";
import AnalyticsHeader from "@/components/dashboard/admin/analytics/AnalyticsHeader";
import AnalyticsStats from "@/components/dashboard/admin/analytics/AnalyticsStats";
import RevenueTrends from "@/components/dashboard/admin/analytics/RevenueTrends";
import OrderStatus from "@/components/dashboard/admin/analytics/OrderStatus";
import CategoryPerformance from "@/components/dashboard/admin/analytics/CategoryPerformance";
import TopSellers from "@/components/dashboard/admin/analytics/TopSellers";
import LiveActivity from "@/components/dashboard/admin/analytics/LiveActivity";

export default function AnalyticsPage() {
  return (
    <div className="space-y-6 w-full pb-12 font-sans select-none text-left">
      
      {/* 1. Page Header Breadcrumbs & Filters */}
      <AnalyticsHeader />

      {/* 2. Top Metric Cards Row */}
      <AnalyticsStats />

      {/* 3. Charts Midsection (Area Trend + Order Donut) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        <div className="lg:col-span-2">
          <RevenueTrends />
        </div>
        <div className="lg:col-span-1">
          <OrderStatus />
        </div>
      </div>

      {/* 4. Bottom Row 3-Columns Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch">
        <CategoryPerformance />
        <TopSellers />
        <LiveActivity />
      </div>

    </div>
  );
}
