"use client";

import UserGreeting from "@/components/dashboard/user/UserGreeting";
import UserStats from "@/components/dashboard/user/UserStats";
import RecentOrdersTable from "@/components/dashboard/user/RecentOrdersTable";
import WishlistSummary from "@/components/dashboard/user/WishlistSummary";
import RecommendedProducts from "@/components/dashboard/user/RecommendedProducts";

export default function UserDashboardPage() {
  return (
    <div className="space-y-8 select-none">
      {/* 1. Header Greeting Section */}
      <UserGreeting />

      {/* 2. Stats Grid (4 Cards) */}
      <UserStats />

      {/* 3. Recent Orders Layout Section */}
      <RecentOrdersTable />

      {/* 4. Wishlist Summary Layout Section */}
      <WishlistSummary />

      {/* 5. Recommended for You Layout Section */}
      <RecommendedProducts />
    </div>
  );
}
