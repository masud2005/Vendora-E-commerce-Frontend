"use client";

import React from "react";
import SellerAnalyticsHeader from "@/components/dashboard/seller/analytics/SellerAnalyticsHeader";
import SellerAnalyticsStats from "@/components/dashboard/seller/analytics/SellerAnalyticsStats";
import SalesReport from "@/components/dashboard/seller/analytics/SalesReport";
import SellerTopProducts from "@/components/dashboard/seller/analytics/SellerTopProducts";
import ConversionFunnel from "@/components/dashboard/seller/analytics/ConversionFunnel";

export default function SellerAnalyticsPage() {
  return (
    <div className="space-y-6 w-full pb-12 font-sans select-none text-left">
      
      {/* 1. Header with Breadcrumbs & Title */}
      <SellerAnalyticsHeader />

      {/* 2. Top Metric Stats Row (4 Cards) */}
      <SellerAnalyticsStats />

      {/* 3. Charts & Products Row (Sales Report + Top Products) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        <div className="lg:col-span-2">
          <SalesReport />
        </div>
        <div className="lg:col-span-1">
          <SellerTopProducts />
        </div>
      </div>

      {/* 4. Bottom Funnel Analytics */}
      <div className="w-full">
        <ConversionFunnel />
      </div>

    </div>
  );
}
