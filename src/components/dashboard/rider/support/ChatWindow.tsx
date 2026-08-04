"use client";

import React, { useRef, useEffect } from "react";
import { Phone, Paperclip, Send } from "lucide-react";

interface Message {
  sender: "them" | "me";
  text: string;
  time: string;
}

interface ChatWindowProps {
  convoName: string;
  convoAvatar: string;
  convoAvatarStyle: string;
  convoOnline: boolean;
  isAdmin: boolean;
  messages: Message[];
  inputText: string;
  setInputText: (text: string) => void;
  onSendMessage: () => void;
  onQuickReplyClick: (reply: string) => void;
  onCall: () => void;
}

const quickRepliesList = [
  "On my way, 10 minutes out.",
  "Customer is not answering the phone.",
  "Parcel picked up successfully.",
  "Traffic delay, running 15 minutes late."
];

export default function ChatWindow({
  convoName,
  convoAvatar,
  convoAvatarStyle,
  convoOnline,
  isAdmin,
  messages,
  inputText,
  setInputText,
  onSendMessage,
  onQuickReplyClick,
  onCall
}: ChatWindowProps) {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  // Auto scroll down to bottom on new messages
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-full bg-white text-left">
      
      {/* 1. Header */}
      <div className="px-5 py-4 border-b border-gray-150 flex items-center justify-between bg-white shrink-0 select-none">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className={`size-9 rounded-full flex items-center justify-center text-white text-xs font-black uppercase ${convoAvatarStyle}`}>
              {convoAvatar}
            </div>
            {convoOnline && (
              <span className="absolute bottom-0 right-0 size-2.5 rounded-full bg-emerald-500 border-2 border-white" />
            )}
          </div>
          <div className="leading-none space-y-1">
            <h4 className="text-xs font-black text-gray-900">{convoName}</h4>
            <span className="text-[9px] text-emerald-600 font-bold block">Online now</span>
          </div>
        </div>

        <div className="flex items-center gap-3 select-none text-xs">
          {isAdmin && (
            <span className="bg-blue-50 text-blue-700 px-2.5 py-1 rounded text-[9px] font-black uppercase tracking-wider border border-blue-100">
              Admin Support
            </span>
          )}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              onCall();
            }}
            className="flex items-center justify-center gap-1 border border-gray-250 bg-white hover:bg-gray-50 text-gray-700 font-bold py-1.5 px-3.5 rounded-lg cursor-pointer transition-colors"
          >
            <Phone className="size-3.5 text-gray-500" />
            <span>Call</span>
          </button>
        </div>
      </div>

      {/* 2. Message Thread area */}
      <div ref={scrollContainerRef} className="flex-1 overflow-y-auto p-5 space-y-4 bg-slate-50/20 custom-scrollbar">
        {messages.map((msg, index) => {
          const isMe = msg.sender === "me";
          return (
            <div
              key={index}
              className={`flex flex-col ${isMe ? "items-end" : "items-start"} space-y-1`}
            >
              <div
                className={`max-w-[75%] px-4 py-2.5 rounded-xl text-xs leading-relaxed font-semibold ${
                  isMe
                    ? "bg-[#0F4C81] text-white rounded-tr-none"
                    : "bg-white border border-gray-200 text-gray-800 rounded-tl-none shadow-3xs"
                }`}
              >
                <p>{msg.text}</p>
              </div>
              <span className="text-[9px] text-gray-400 font-semibold px-1">{msg.time}</span>
            </div>
          );
        })}
      </div>

      {/* 3. Bottom controls (Quick replies & Input bar) */}
      <div className="p-4 border-t border-gray-150 bg-white space-y-3 shrink-0 select-none">
        
        {/* Quick Replies list cards */}
        <div className="flex flex-wrap items-center gap-2">
          {quickRepliesList.map((reply) => (
            <button
              key={reply}
              type="button"
              onClick={(e) => {
                e.preventDefault();
                onQuickReplyClick(reply);
              }}
              className="border border-gray-200 hover:border-gray-300 bg-white hover:bg-slate-50 text-[10px] font-bold text-gray-500 px-3 py-1.5 rounded-full cursor-pointer transition-all leading-none"
            >
              {reply}
            </button>
          ))}
        </div>

        {/* Input box bar */}
        <div className="flex items-center gap-3 pt-1">
          {/* Attachment Paperclip */}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              toast.success("Mock upload: File attachment popup opened.");
            }}
            className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 p-2 rounded-full cursor-pointer transition-colors"
          >
            <Paperclip className="size-4.5" />
          </button>

          {/* Text Input */}
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder={`Message ${convoName}...`}
            className="flex-1 px-4 py-2 border border-gray-200 rounded-lg text-xs bg-white focus:outline-none focus:border-[#0F4C81] font-semibold text-gray-850"
          />

          {/* Send Action */}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              onSendMessage();
            }}
            className="flex items-center gap-1 bg-[#3B82F6]/20 hover:bg-[#3B82F6]/30 text-[#0F4C81] font-extrabold py-2 px-4 rounded-lg text-xs transition-colors cursor-pointer select-none"
          >
            <Send className="size-3.5" />
            <span>Send</span>
          </button>
        </div>

      </div>

    </div>
  );
}
