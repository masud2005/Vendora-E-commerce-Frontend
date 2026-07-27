"use client";

import UserGreeting from "@/components/dashboard/(userdashboard)/user/UserGreeting";
import UserStats from "@/components/dashboard/(userdashboard)/user/UserStats";
import RecentOrdersTable from "@/components/dashboard/(userdashboard)/user/RecentOrdersTable";
import WishlistSummary from "@/components/dashboard/(userdashboard)/user/WishlistSummary";
import RecommendedProducts from "@/components/dashboard/(userdashboard)/user/RecommendedProducts";

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
