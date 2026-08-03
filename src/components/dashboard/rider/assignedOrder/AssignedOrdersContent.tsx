"use client";

import React, { useState } from "react";
import AssignedHeader from "./AssignedHeader";
import AssignedFilters from "./AssignedFilters";
import AssignedOrdersList from "./AssignedOrdersList";
import toast from "react-hot-toast";

interface AssignedOrder {
  id: string;
  price: number;
  status: "Assigned" | "Picked Up" | "In Transit" | "Delivered" | "Failed";
  statusStyle: string;
  isCOD: boolean;
  isExpress?: boolean;
  pickupName: string;
  pickupLoc: string;
  dropName: string;
  dropLoc: string;
  distance: string;
  deadline: string;
  itemsCount: string;
}

const allOrdersList: AssignedOrder[] = [
  {
    id: "#VD-90244",
    price: 2100,
    status: "Failed",
    statusStyle: "bg-rose-50 text-rose-700 border-rose-150",
    isCOD: true,
    pickupName: "Oak & Iron",
    pickupLoc: "Bashundhara",
    dropName: "Rezaul Karim",
    dropLoc: "House 21, Road 9, Nikunja 2",
    distance: "7.1km",
    deadline: "Deliver by 01:00 PM",
    itemsCount: "1 item(s)"
  },
  
 
  {
    id: "#VD-90288",
    price: 4300,
    status: "Delivered",
    statusStyle: "bg-emerald-50 text-emerald-700 border-emerald-150",
    isCOD: false,
    isExpress: true,
    pickupName: "Velo Sports",
    pickupLoc: "Dhanmondi",
    dropName: "Ayesha Siddika",
    dropLoc: "Flat 2A, Lalmatia Block D",
    distance: "3.7km",
    deadline: "Deliver by 01:30 PM",
    itemsCount: "1 item(s)"
  },
  
  {
    id: "#VD-90376",
    price: 5680,
    status: "In Transit",
    statusStyle: "bg-yellow-50 text-yellow-750 border-yellow-250",
    isCOD: true,
    isExpress: true,
    pickupName: "Oak & Iron",
    pickupLoc: "Bashundhara",
    dropName: "Farhana Islam",
    dropLoc: "Apt 9C, Lake View Heights, Baridhara",
    distance: "3.2km",
    deadline: "Deliver by 11:30 AM",
    itemsCount: "1 item(s)"
  },
  {
    id: "#VD-90399",
    price: 2450,
    status: "Picked Up",
    statusStyle: "bg-amber-50 text-amber-700 border-amber-150",
    isCOD: true,
    pickupName: "Velo Sports",
    pickupLoc: "Dhanmondi",
    dropName: "Sabbir Rahman",
    dropLoc: "House 19, Road 12A, Gulshan 1",
    distance: "4.8km",
    deadline: "Deliver by 12:00 PM",
    itemsCount: "3 item(s)"
  },
  {
    id: "#VD-90412",
    price: 3240,
    status: "Assigned",
    statusStyle: "bg-blue-50 text-blue-700 border-blue-150",
    isCOD: true,
    isExpress: true,
    pickupName: "Chronos Luxe",
    pickupLoc: "Banani",
    dropName: "Nusrat Jahan",
    dropLoc: "House 42, Road 7, Sector 4, Uttara",
    distance: "6.4km",
    deadline: "Deliver by 12:30 PM",
    itemsCount: "2 item(s)"
  },
  
];

type FilterTab = "All" | "Awaiting Pickup" | "Picked Up" | "In Transit" | "Delivered" | "Failed";

export default function AssignedOrdersContent() {
  const [activeTab, setActiveTab] = useState<FilterTab>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [filterType, setFilterType] = useState("all");

  // Dynamic counts for each status tab pill
  const getTabCounts = (): Record<FilterTab, number> => {
    return {
      All: allOrdersList.length,
      "Awaiting Pickup": allOrdersList.filter(o => o.status === "Assigned").length,
      "Picked Up": allOrdersList.filter(o => o.status === "Picked Up").length,
      "In Transit": allOrdersList.filter(o => o.status === "In Transit").length,
      Delivered: allOrdersList.filter(o => o.status === "Delivered").length,
      Failed: allOrdersList.filter(o => o.status === "Failed").length,
    };
  };

  const handleOptimizeRoute = () => {
    toast.success("AI is calculating the most efficient order routing path...");
  };

  // Filter and sort logical execution
  const filteredOrders = allOrdersList.filter((order) => {
    // 1. Tab status matching
    let matchesTab = true;
    if (activeTab === "Awaiting Pickup") {
      matchesTab = order.status === "Assigned";
    } else if (activeTab !== "All") {
      matchesTab = order.status === activeTab;
    }

    // 2. Search query matching
    const normalizedQuery = searchQuery.toLowerCase().trim();
    const matchesSearch =
      order.id.toLowerCase().includes(normalizedQuery) ||
      order.pickupName.toLowerCase().includes(normalizedQuery) ||
      order.pickupLoc.toLowerCase().includes(normalizedQuery) ||
      order.dropName.toLowerCase().includes(normalizedQuery) ||
      order.dropLoc.toLowerCase().includes(normalizedQuery);

    // 3. Dropdown payment filter matching
    let matchesType = true;
    if (filterType === "cod") matchesType = order.isCOD;
    if (filterType === "prepaid") matchesType = !order.isCOD;

    return matchesTab && matchesSearch && matchesType;
  });

  // Calculate dynamic COD value sum of active list
  const codValueInView = filteredOrders
    .filter((o) => o.isCOD)
    .reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="space-y-6 w-full select-none">
      
      {/* A. Assigned Header Component */}
      <AssignedHeader onOptimizeRoute={handleOptimizeRoute} />

      {/* B. Assigned Filters Component */}
      <AssignedFilters
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        sortBy={sortBy}
        setSortBy={setSortBy}
        filterType={filterType}
        setFilterType={setFilterType}
        counts={getTabCounts()}
      />

      {/* C. Assigned Cards Grid List Component */}
      <AssignedOrdersList
        orders={filteredOrders}
        codValueInView={codValueInView}
      />

    </div>
  );
}
