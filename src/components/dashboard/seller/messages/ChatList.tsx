"use client";

import React, { useState } from "react";
import { MoreVertical } from "lucide-react";

export interface ChatPartner {
  id: string;
  name: string;
  avatar: string;
  status: "Online" | "Offline";
  lastMessage: string;
  time: string;
  unreadCount: number;
  productName: string;
  productImg: string;
}

interface ChatListProps {
  chats: ChatPartner[];
  activeChatId: string;
  onSelectChat: (id: string) => void;
}

export default function ChatList({ chats, activeChatId, onSelectChat }: ChatListProps) {
  const [activeTab, setActiveTab] = useState<"All" | "Unread" | "System">("All");

  // Filter based on selected pill
  const filteredChats = chats.filter((chat) => {
    if (activeTab === "Unread") return chat.unreadCount > 0;
    if (activeTab === "System") return chat.name.toLowerCase().includes("system") || chat.name.toLowerCase().includes("support");
    return true;
  });

  return (
    <div className="bg-white border-r border-gray-200 h-full flex flex-col select-none text-left w-full">
      
      {/* Title Header */}
      <div className="p-4 border-b border-gray-150 flex items-center justify-between">
        <h2 className="text-base sm:text-lg font-black text-gray-900">
          Active Chats
        </h2>
        <button className="p-1 text-gray-400 hover:text-gray-650 rounded hover:bg-gray-50 cursor-pointer transition-colors">
          <MoreVertical className="size-4.5" />
        </button>
      </div>

      {/* Segment tabs pills */}
      <div className="px-4 py-3 flex items-center gap-1.5 border-b border-gray-100 bg-gray-50/20">
        {(["All", "Unread ", "System"] as const).map((tabText) => {
          const value = tabText.startsWith("Unread") ? "Unread" : tabText as "All" | "System";
          const isActive = activeTab === value;
          return (
            <button
              key={tabText}
              onClick={() => setActiveTab(value)}
              className={`px-3 py-1 rounded-full text-[10px] sm:text-xs font-black transition-all cursor-pointer ${
                isActive 
                  ? "bg-[#0F4C81] text-white shadow-3xs" 
                  : "bg-gray-100/90 text-gray-500 hover:text-gray-800 border border-gray-150"
              }`}
            >
              {tabText}
            </button>
          );
        })}
      </div>

      {/* Chat Partners List */}
      <div className="flex-1 overflow-y-auto divide-y divide-gray-100 custom-scrollbar">
        {filteredChats.length === 0 ? (
          <div className="p-6 text-center text-gray-400 font-bold text-xs">
            No chats found
          </div>
        ) : (
          filteredChats.map((chat) => {
            const isSelected = chat.id === activeChatId;
            return (
              <div
                key={chat.id}
                onClick={() => onSelectChat(chat.id)}
                className={`flex items-center gap-3 p-4 cursor-pointer transition-all hover:bg-gray-50/50 ${
                  isSelected ? "bg-blue-50/40 border-l-3 border-[#0F4C81]" : "border-l-3 border-transparent"
                }`}
              >
                
                {/* Avatar with status indicator */}
                <div className="relative shrink-0 select-none">
                  <img 
                    src={chat.avatar} 
                    alt={chat.name} 
                    className="size-10 sm:size-11 rounded-full object-cover border border-gray-100 shadow-3xs"
                  />
                  {chat.status === "Online" && (
                    <span className="absolute bottom-0.5 right-0.5 size-3 rounded-full bg-emerald-500 border-2 border-white ring-1 ring-emerald-50" />
                  )}
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0 text-left leading-none space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs sm:text-sm font-extrabold text-gray-900 truncate">
                      {chat.name}
                    </h4>
                    <span className="text-[9px] text-gray-400 font-bold">
                      {chat.time}
                    </span>
                  </div>
                  
                  <p className={`text-[10px] sm:text-xs truncate ${
                    chat.unreadCount > 0 
                      ? "text-[#0F4C81] font-black" 
                      : "text-gray-400 font-semibold"
                  }`}>
                    {chat.lastMessage}
                  </p>
                </div>

                {/* Unread dot indicator */}
                {chat.unreadCount > 0 && (
                  <span className="size-2.5 rounded-full bg-[#0F4C81] shrink-0 shadow-3xs" />
                )}

              </div>
            );
          })
        )}
      </div>

    </div>
  );
}
