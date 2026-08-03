"use client";

import React, { useState } from "react";
import DeliveryHistoryHeader from "./DeliveryHistoryHeader";
import DeliveryHistoryStats from "./DeliveryHistoryStats";
import DeliveryHistoryTable from "./DeliveryHistoryTable";
import DeliveryHistoryProofModal from "./DeliveryHistoryProofModal";

interface DeliveryHistoryItem {
  id: string;
  customerName: string;
  customerArea: string;
  sellerName: string;
  completedTime: string;
  paymentType: "COD" | "Prepaid";
  amount: number;
  status: "Delivered" | "Failed";
  proofType: "Signature" | "Photo" | "—";
  receivedBy?: string;
  notes?: string;
}

const historyDb: DeliveryHistoryItem[] = [
  {
    id: "#VD-90301",
    customerName: "Mahmudul Hasan",
    customerArea: "Mohakhali",
    sellerName: "Chronos Luxe",
    completedTime: "Jun 2, 11:42 AM",
    paymentType: "COD",
    amount: 1750,
    status: "Delivered",
    proofType: "Signature",
    receivedBy: "Mahmudul Hasan (Self)",
    notes: "Handed over directly to customer at flat door."
  },
  {
    id: "#VD-90288",
    customerName: "Ayesha Siddika",
    customerArea: "Lalmatia",
    sellerName: "Velo Sports",
    completedTime: "Jun 2, 12:15 PM",
    paymentType: "Prepaid",
    amount: 4300,
    status: "Delivered",
    proofType: "Photo",
    receivedBy: "Ayesha Siddika",
    notes: "Placed at reception desk as requested."
  },
  {
    id: "#VD-90244",
    customerName: "Rezaul Karim",
    customerArea: "Nikunja",
    sellerName: "Oak & Iron",
    completedTime: "—",
    paymentType: "COD",
    amount: 2100,
    status: "Failed",
    proofType: "—",
    notes: "Customer unreachable after 3 call attempts."
  },
  {
    id: "#VD-90210",
    customerName: "Shakil Ahmed",
    customerArea: "Kazipara",
    sellerName: "EcoHome Tech",
    completedTime: "Jun 1, 01:05 PM",
    paymentType: "COD",
    amount: 990,
    status: "Delivered",
    proofType: "Signature",
    receivedBy: "Shakil's Brother",
    notes: "Handed over to recipient's brother."
  }
];

export default function DeliveryHistoryContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<"all" | "delivered" | "failed">("all");
  const [selectedProofItem, setSelectedProofItem] = useState<DeliveryHistoryItem | null>(null);

  const filteredItems = historyDb.filter((item) => {
    const matchesFilter =
      activeFilter === "all" ||
      (activeFilter === "delivered" && item.status === "Delivered") ||
      (activeFilter === "failed" && item.status === "Failed");

    const normSearch = searchQuery.toLowerCase().trim();
    const matchesSearch =
      item.id.toLowerCase().includes(normSearch) ||
      item.customerName.toLowerCase().includes(normSearch) ||
      item.customerArea.toLowerCase().includes(normSearch) ||
      item.sellerName.toLowerCase().includes(normSearch);

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-6 w-full text-left relative">
      
      {/* 1. Header component */}
      <DeliveryHistoryHeader onExportCSV={() => toast.success("Exporting delivery history log to CSV file...")} />

      {/* 2. Stats component */}
      <DeliveryHistoryStats />

      {/* 3. Table representation component */}
      <DeliveryHistoryTable
        filteredItems={filteredItems}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        onRowClick={(item) => setSelectedProofItem(item)}
        onProofClick={(item) => setSelectedProofItem(item)}
      />

      {/* 4. Proof Modal overlay */}
      <DeliveryHistoryProofModal
        item={selectedProofItem}
        onClose={() => setSelectedProofItem(null)}
      />

    </div>
  );
}
// For inline toast mock inside header callback
import toast from "react-hot-toast";
