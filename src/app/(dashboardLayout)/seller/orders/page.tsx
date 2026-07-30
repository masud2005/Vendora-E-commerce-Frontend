"use client";


import OrdersHeader from "@/components/dashboard/seller/orders/OrdersHeader";
import OrdersStats from "@/components/dashboard/seller/orders/OrdersStats";
import OrdersList from "@/components/dashboard/seller/orders/OrdersList";

export default function SellerOrdersPage() {
  return (
    <div className="space-y-6 w-full pb-12 font-sans select-none text-left">
      
      {/* 1. Header with Title, Description and Export/Print manifests buttons */}
      <OrdersHeader />

      {/* 2. Orders KPI Statistics row */}
      <OrdersStats />

      {/* 3. Core orders data table card with filters & search */}
      <div className="w-full">
        <OrdersList />
      </div>

    </div>
  );
}
