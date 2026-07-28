"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import { X, Mail, Ban } from "lucide-react";
import BuyerChatLogs from "./BuyerChatLogs";
import BuyerActivityAudit from "./BuyerActivityAudit";
import BuyerOrderHistory from "./BuyerOrderHistory";

interface BuyerDetailsDrawerProps {
  selectedBuyer: any;
  onClose: () => void;
}

export default function BuyerDetailsDrawer({ selectedBuyer, onClose }: BuyerDetailsDrawerProps) {
  const [activeTab, setActiveTab] = useState("Chat Logs");

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/45 backdrop-blur-xs transition-opacity duration-300 animate-in fade-in">
      {/* Clickable backdrop to close */}
      <div className="absolute inset-0 cursor-default" onClick={onClose} />

      {/* Slide-over panel container */}
      <div className="relative w-full max-w-lg bg-white h-full shadow-2xl flex flex-col justify-between border-l border-gray-200 animate-in slide-in-from-right duration-300 z-10">
        
        {/* 1. Header block */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-gray-200">
          <div className="text-left">
            <h3 className="text-sm sm:text-base font-bold text-gray-900 leading-none">User Details</h3>
            <span className="text-[10px] sm:text-xs font-semibold text-gray-400 mt-1.5 block tracking-tight">
              {selectedBuyer.email}
            </span>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-colors cursor-pointer"
          >
            <X className="size-4 sm:size-4.5" />
          </button>
        </div>

        {/* 2. Scrollable Body Content */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6 scrollbar-none text-left">
          
          {/* Buyer Meta Profile */}
          <div className="flex items-start gap-4">
            {/* Large Initials block */}
            <div className="size-16 rounded-xl bg-blue-100 text-blue-700 font-black text-xl flex items-center justify-center shrink-0 shadow-2xs">
              {selectedBuyer.initials}
            </div>
            {/* Details text */}
            <div className="space-y-1">
              <h2 className="text-lg font-extrabold text-gray-900 leading-tight">
                {selectedBuyer.name}
              </h2>
              <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                <span className="bg-emerald-50 text-emerald-700 text-[9px] font-black border border-emerald-200 px-2 py-0.5 rounded uppercase tracking-wider">
                  Verified Buyer
                </span>
                <span className="bg-gray-100 text-gray-500 text-[9px] font-black px-2 py-0.5 rounded tracking-tight">
                  ID: {selectedBuyer.id.replace('#', '')}-9A
                </span>
              </div>
            </div>
          </div>

          {/* Message & Suspend Buttons */}
          <div className="flex items-center gap-3 border-b border-gray-100 pb-5">
            <button
              onClick={() => toast.success(`Starting chat with ${selectedBuyer.name}...`)}
              className="bg-[#0F4C81] hover:bg-[#0C447C] text-white font-bold py-2 px-4 rounded text-xs transition-colors flex items-center gap-1.5 cursor-pointer shadow-3xs"
            >
              <Mail className="size-3.5" />
              <span>Message</span>
            </button>
            <button
              onClick={() => toast.error(`Account ${selectedBuyer.id} has been suspended.`)}
              className="border border-gray-300 hover:bg-gray-50 text-gray-700 font-bold py-2 px-4 rounded text-xs transition-colors flex items-center gap-1.5 cursor-pointer shadow-3xs"
            >
              <Ban className="size-3.5 text-gray-500" />
              <span>Suspend</span>
            </button>
          </div>

          {/* Tab Navigation */}
          <div className="border-b border-gray-200">
            <div className="flex gap-6 text-xs font-bold text-gray-400 select-none">
              {["Order History", "Chat Logs", "Activity Audit"].map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-2.5 transition-all cursor-pointer ${
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

          {/* Tab Contents */}
          <div className="space-y-4">
            {activeTab === "Chat Logs" && <BuyerChatLogs />}
            
            {activeTab === "Order History" && <BuyerOrderHistory />}
            
            {activeTab === "Activity Audit" && <BuyerActivityAudit />}
          </div>

        </div>

        {/* 3. Footer Block */}
        <div className="bg-gray-50 border-t border-gray-150 p-4.5 sm:px-6 flex items-center justify-between">
          {/* Overlapping avatar circles */}
          <div className="flex items-center gap-1.5">
            <div className="flex -space-x-1.5">
              <span className="size-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-[8px] font-black border border-white">
                AR
              </span>
              <span className="size-5 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center text-[8px] font-black border border-white -ml-1.5">
                SL
              </span>
              <span className="size-5 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center text-[8px] font-black border border-white -ml-1.5">
                +2
              </span>
            </div>
            <span className="text-[10px] font-bold text-gray-400">
              Reviewed by 4 admins
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
