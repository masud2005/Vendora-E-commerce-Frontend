"use client";

import React from "react";
import RiderHeader from "./RiderHeader";
import RiderStats from "./RiderStats";
import WeeklyPerformanceChart from "./WeeklyPerformanceChart";
import PriorityAlertsAndScore from "./PriorityAlertsAndScore";
import ActiveRoute from "./ActiveRoute";
import RecentActivity from "./RecentActivity";

export default function RiderDashboardContent() {
  return (
    <div className="space-y-6 w-full pb-12 font-sans select-none text-left">
      
      {/* 1. Header with Breadcrumbs, Title and Scan Parcel/View Route buttons */}
      <RiderHeader />

      {/* 2. Metric stats cards row (5 Cards) */}
      <RiderStats />

      {/* 3. Performance Graph & Alerts Row (2:1 Column Grid layout) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        <div className="lg:col-span-2">
          <WeeklyPerformanceChart />
        </div>
        <div className="lg:col-span-1">
          <PriorityAlertsAndScore />
        </div>
      </div>

      {/* 4. Active Route & Recent Activity Row (2:1 Column Grid layout) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        <div className="lg:col-span-2">
          <ActiveRoute />
        </div>
        <div className="lg:col-span-1">
          <RecentActivity />
        </div>
      </div>

    </div>
  );
}
