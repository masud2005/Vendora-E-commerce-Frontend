"use client";

import React from "react";
import BehavioralHeader from "@/components/dashboard/admin/analytics/behavioral/BehavioralHeader";
import BehavioralStats from "@/components/dashboard/admin/analytics/behavioral/BehavioralStats";
import SalesVelocity from "@/components/dashboard/admin/analytics/behavioral/SalesVelocity";
import MarketShare from "@/components/dashboard/admin/analytics/behavioral/MarketShare";
import TopPerformingSellers from "@/components/dashboard/admin/analytics/behavioral/TopPerformingSellers";
import HottestProducts from "@/components/dashboard/admin/analytics/behavioral/HottestProducts";
import BehaviorStream from "@/components/dashboard/admin/analytics/behavioral/BehaviorStream";

export default function BehavioralReportsPage() {
  return (
    <div className="space-y-6 w-full pb-12 font-sans select-none text-left">
      
      {/* 1. Page Header with time filters & breadcrumbs */}
      <BehavioralHeader />

      {/* 2. Four KPI Metric Cards row */}
      <BehavioralStats />

      {/* 3. Midsection: Double Bar Chart & Market Share pie chart */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        <div className="lg:col-span-2">
          <SalesVelocity />
        </div>
        <div className="lg:col-span-1">
          <MarketShare />
        </div>
      </div>

      {/* 4. Core Section: Top Performing Sellers Table */}
      <div className="w-full">
        <TopPerformingSellers />
      </div>

      {/* 5. Bottom Section: Hottest products list next to behaviour timeline */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        <HottestProducts />
        <BehaviorStream />
      </div>

    </div>
  );
}
