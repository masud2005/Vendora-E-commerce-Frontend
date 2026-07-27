"use client";

import React, { useState, useMemo } from "react";
import OrderHeader from "@/components/dashboard/user/orders/OrderHeader";
import OrderTabs, { OrderStatusTab } from "@/components/dashboard/user/orders/OrderTabs";
import OrderCard, { OrderItem } from "@/components/dashboard/user/orders/OrderCard";
import Pagination from "@/components/shared/Pagination";

const mockOrders: OrderItem[] = [
  {
    id: "VEN-98421034",
    date: "Nov 12, 2024",
    status: "Completed",
    statusDetail: "Delivered",
    productName: "SonicPro Wireless Headphones - Arctic Blue",
    brand: "AudioTech",
    variant: "Matte Blue",
    qty: 1,
    price: 249.00,
    originalPrice: 320.00,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: "VEN-10293847",
    date: "Oct 28, 2024",
    status: "To Receive",
    statusDetail: "Out for delivery",
    productName: "ErgoFlow 360 Office Chair",
    brand: "Workspace",
    variant: "Mesh Black",
    qty: 1,
    price: 499.00,
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: "VEN-00219482",
    date: "Oct 15, 2024",
    status: "Cancelled",
    productName: "Mechanical Master X1 RGB Keyboard",
    brand: "Clicky",
    variant: "Blue Switches",
    qty: 2,
    price: 178.00,
    image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: "VEN-28492038",
    date: "Nov 02, 2024",
    status: "To Ship",
    statusDetail: "Processing in warehouse",
    productName: "Leather Travel Duffle Bag",
    brand: "NordicGoods",
    variant: "Tan Brown",
    qty: 1,
    price: 129.00,
    originalPrice: 159.00,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: "VEN-11920384",
    date: "Nov 01, 2024",
    status: "Unpaid",
    statusDetail: "Awaiting payment transfer",
    productName: "Minimalist Steel Desk Organizer",
    brand: "FocusStudio",
    variant: "Matte Black",
    qty: 1,
    price: 45.00,
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=200"
  }
];

export default function OrdersPage() {
  const [activeTab, setActiveTab] = useState<OrderStatusTab>("All Orders");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // Filter orders by active status tab and search query
  const filteredOrders = useMemo(() => {
    return mockOrders.filter((order) => {
      // 1. Filter by Tab
      if (activeTab !== "All Orders") {
        if (activeTab === "Unpaid" && order.status !== "Unpaid") return false;
        if (activeTab === "To Ship" && order.status !== "To Ship") return false;
        if (activeTab === "To Receive" && order.status !== "To Receive") return false;
        if (activeTab === "Completed" && order.status !== "Completed") return false;
        if (activeTab === "Cancelled" && order.status !== "Cancelled") return false;
      }

      // 2. Filter by Search Query
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        const matchesId = order.id.toLowerCase().includes(query);
        const matchesName = order.productName.toLowerCase().includes(query);
        const matchesBrand = order.brand.toLowerCase().includes(query);
        if (!matchesId && !matchesName && !matchesBrand) return false;
      }

      return true;
    });
  }, [activeTab, searchQuery]);

  // Calculate total pages for pagination
  const totalPages = Math.max(1, Math.ceil(filteredOrders.length / itemsPerPage));

  // Get current page sliced orders list
  const currentOrders = useMemo(() => {
    const startIdx = (currentPage - 1) * itemsPerPage;
    return filteredOrders.slice(startIdx, startIdx + itemsPerPage);
  }, [filteredOrders, currentPage]);

  // Reset page count when tab or search query changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [activeTab, searchQuery]);

  return (
    <div className="bg-white border border-gray-200 rounded p-6 shadow-2xs space-y-6">
      
      {/* 1. Header with search query */}
      <OrderHeader searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* 2. Order Filter Tabs */}
      <OrderTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* 3. Orders List Cards grid */}
      <div className="space-y-4 pt-2">
        {currentOrders.length > 0 ? (
          currentOrders.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))
        ) : (
          <div className="border border-dashed border-gray-200 rounded-lg py-16 px-4 text-center select-none">
            <p className="text-sm font-semibold text-gray-400">
              No orders found matching your search.
            </p>
          </div>
        )}
      </div>

      {/* 4. Footer info count & Shared Pagination rendering */}
      {filteredOrders.length > 0 && (
        <div className="border-t border-gray-100 pt-5 mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs sm:text-sm font-medium text-gray-500">
            Showing {Math.min(filteredOrders.length, (currentPage - 1) * itemsPerPage + 1)} to{" "}
            {Math.min(filteredOrders.length, currentPage * itemsPerPage)} of {filteredOrders.length} orders
          </span>
          <div className="!mt-0">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      )}

    </div>
  );
}
