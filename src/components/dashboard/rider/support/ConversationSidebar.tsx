"use client";

import React from "react";
import { Search } from "lucide-react";

interface Conversation {
  id: string;
  name: string;
  avatar: string;
  avatarStyle: string;
  time: string;
  lastMsg: string;
  unreadCount?: number;
  online?: boolean;
}

interface ConversationSidebarProps {
  conversations: Conversation[];
  activeConvoId: string;
  setActiveConvoId: (id: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function ConversationSidebar({
  conversations,
  activeConvoId,
  setActiveConvoId,
  searchQuery,
  setSearchQuery
}: ConversationSidebarProps) {
  const filteredConvos = conversations.filter(convo =>
    convo.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="border-r border-gray-200 flex flex-col h-full bg-white select-none text-left">
      
      {/* Search conversations */}
      <div className="p-4 border-b border-gray-150">
        <div className="relative">
          <input
            type="text"
            placeholder="Search conversations"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-8 pr-3 py-1.5 border border-gray-200 rounded-lg text-xs bg-white focus:outline-none focus:border-[#0F4C81] font-semibold text-gray-805"
          />
          <Search className="size-3.5 text-gray-400 absolute left-2.5 top-2" />
        </div>
      </div>

      {/* Conversations list */}
      <div className="flex-1 overflow-y-auto divide-y divide-gray-100 custom-scrollbar">
        {filteredConvos.length === 0 ? (
          <div className="p-4 text-center text-gray-400 font-bold text-xs">
            No contacts found
          </div>
        ) : (
          filteredConvos.map((convo) => {
            const isActive = convo.id === activeConvoId;
            return (
              <div
                key={convo.id}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveConvoId(convo.id);
                }}
                className={`p-3.5 flex items-start gap-3 cursor-pointer transition-all hover:bg-slate-50/50 ${
                  isActive ? "bg-blue-50/40 border-l-2 border-[#0F4C81]" : ""
                }`}
              >
                {/* Avatar with dynamic online dot */}
                <div className="relative shrink-0 select-none">
                  <div className={`size-9 rounded-full flex items-center justify-center text-white text-xs font-black uppercase ${convo.avatarStyle}`}>
                    {convo.avatar}
                  </div>
                  {convo.online && (
                    <span className="absolute bottom-0 right-0 size-2.5 rounded-full bg-emerald-500 border-2 border-white" />
                  )}
                </div>

                {/* Body metadata */}
                <div className="flex-1 min-w-0 leading-none space-y-1 mt-0.5">
                  <div className="flex items-center justify-between gap-1">
                    <h4 className="text-xs font-black text-gray-900 truncate">{convo.name}</h4>
                    <span className="text-[9px] text-gray-400 font-semibold shrink-0">{convo.time}</span>
                  </div>
                  <p className="text-[10px] text-gray-450 font-bold truncate leading-normal">
                    {convo.lastMsg}
                  </p>
                </div>

                {/* Unread badge count bubble */}
                {convo.unreadCount && convo.unreadCount > 0 && (
                  <span className="bg-rose-500 text-white rounded-full size-4.5 flex items-center justify-center text-[9px] font-black shrink-0 animate-pulse mt-1 select-none">
                    {convo.unreadCount}
                  </span>
                )}

              </div>
            );
          })
        )}
      </div>

    </div>
  );
}
