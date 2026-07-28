"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import ProfileHeader from "@/components/dashboard/admin/sellerManagement/profile/ProfileHeader";
import ProfileMetaCard from "@/components/dashboard/admin/sellerManagement/profile/ProfileMetaCard";
import ProfileStats from "@/components/dashboard/admin/sellerManagement/profile/ProfileStats";
import OverviewTab from "@/components/dashboard/admin/sellerManagement/profile/OverviewTab";
import SalesPerformanceTab from "@/components/dashboard/admin/sellerManagement/profile/SalesPerformanceTab";
import ProductCatalogTab from "@/components/dashboard/admin/sellerManagement/profile/ProductCatalogTab";
import ProfileFooter from "@/components/dashboard/admin/sellerManagement/profile/ProfileFooter";

export default function SellerProfilePage() {
  const [activeTab, setActiveTab] = useState("Overview");

  const handleTabChange = (tabName: string) => {
    if (
      tabName !== "Overview" && 
      tabName !== "Sales Performance" && 
      tabName !== "Product Catalog"
    ) {
      toast.error(`"${tabName}" tab will be unlocked in the next steps! Please authorize the next figma step to continue.`);
    } else {
      setActiveTab(tabName);
    }
  };

  return (
    <div className="space-y-6 w-full pb-12 font-sans select-none text-left">
      
      {/* 1. Header Breadcrumb with Back Arrow */}
      <ProfileHeader />

      {/* 2. Shop Identity meta details card */}
      <ProfileMetaCard />

      {/* 3. Stat Cards */}
      <ProfileStats />

      {/* 4. Sub-Navigation Tabs */}
      <div className="border-b border-gray-200">
        <div className="flex gap-6 sm:gap-8 text-xs sm:text-sm font-bold text-gray-400 select-none">
          {["Overview", "Sales Performance", "Product Catalog", "Reviews"].map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`pb-3 transition-all cursor-pointer ${
                  isActive 
                    ? "border-b-2 border-[#0F4C81] text-[#0F4C81]" 
                    : "hover:text-gray-600"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>
      </div>

      {/* 5. Tab Content Panel */}
      <div className="min-h-[220px]">
        {activeTab === "Overview" && <OverviewTab />}
        {activeTab === "Sales Performance" && <SalesPerformanceTab />}
        {activeTab === "Product Catalog" && <ProductCatalogTab />}
      </div>

      {/* 6. Settlement disputes & terms footer */}
      <ProfileFooter />

    </div>
  );
}
