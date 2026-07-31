"use client";

import React, { useState, useRef, useEffect } from "react";
import { ArrowLeft, CheckCheck, Smile, Paperclip, Image as ImageIcon, FileText, Send } from "lucide-react";

export interface Message {
  sender: "partner" | "me";
  text: string;
  time: string;
}

interface ChatWindowProps {
  chat: {
    id: string;
    name: string;
    avatar: string;
    status: "Online" | "Offline";
    productName: string;
    productImg: string;
    messages: Message[];
  };
  onSendMessage: (text: string) => void;
  onBackToList: () => void;
}

export default function ChatWindow({ chat, onSendMessage, onBackToList }: ChatWindowProps) {
  const [inputText, setInputText] = useState("");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom of the local container on new message
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
    }
  }, [chat.messages]);

  const handleSend = () => {
    if (!inputText.trim()) return;
    onSendMessage(inputText);
    setInputText("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="bg-white flex flex-col h-full select-none w-full">
      
      {/* Header Panel */}
      <div className="p-4 border-b border-gray-150 flex items-center justify-between text-left">
        <div className="flex items-center gap-3 min-w-0">
          
          {/* Back button for mobile viewports */}
          <button 
            onClick={onBackToList}
            className="lg:hidden p-1.5 hover:bg-gray-100 rounded text-gray-500 cursor-pointer shrink-0 transition-colors"
          >
            <ArrowLeft className="size-4.5" />
          </button>

          {/* Active Partner Profile Avatar */}
          <img 
            src={chat.avatar} 
            alt={chat.name} 
            className="size-10 sm:size-11 rounded-full object-cover border border-gray-150 shrink-0 shadow-3xs"
          />

          {/* Details */}
          <div className="leading-none space-y-1.5 min-w-0">
            <h3 className="text-xs sm:text-sm font-extrabold text-gray-900 truncate">
              {chat.name}
            </h3>
            <div className="flex items-center flex-wrap gap-x-1.5 gap-y-0.5 text-[9px] sm:text-[10px] font-bold text-gray-400">
              <span className="text-emerald-500 shrink-0">● Online</span>
              <span className="truncate max-w-[120px] sm:max-w-none">
                • Re: {chat.productName}
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Message List Panel */}
      <div ref={scrollContainerRef} className="flex-1 overflow-y-auto p-4 bg-gray-50/20 space-y-4 custom-scrollbar">
        
        {/* Day Divider timestamp */}
        <div className="flex items-center justify-center my-3 select-none">
          <span className="bg-gray-100 border border-gray-150 text-gray-500 text-[9px] sm:text-[10px] font-bold px-3 py-0.5 rounded-full">
            Today, 10:45 AM
          </span>
        </div>

        {chat.messages.map((msg, index) => {
          const isMe = msg.sender === "me";
          return (
            <div 
              key={index}
              className={`flex items-end gap-2.5 ${isMe ? "justify-end" : "justify-start"}`}
            >
              {/* Partner Avatar inside bubble stream */}
              {!isMe && (
                <img 
                  src={chat.avatar} 
                  alt={chat.name}
                  className="size-7 sm:size-8 rounded-full object-cover border border-gray-100 shrink-0 shadow-3xs"
                />
              )}

              {/* Message content block */}
              <div className="max-w-[75%] sm:max-w-[65%] space-y-1 text-left">
                <div className={`p-3 rounded-2xl text-xs font-semibold leading-normal ${
                  isMe 
                    ? "bg-[#0F4C81] text-white rounded-br-none" 
                    : "bg-gray-100 text-gray-800 rounded-bl-none border border-gray-150"
                }`}>
                  <p className="whitespace-pre-wrap">{msg.text}</p>
                </div>
                
                {/* Time & status check */}
                <div className={`flex items-center gap-1.5 text-[9px] text-gray-400 font-bold ${isMe ? "justify-end" : "justify-start"}`}>
                  <span>{msg.time}</span>
                  {isMe && <CheckCheck className="size-3 text-[#0F4C81]" />}
                </div>
              </div>

            </div>
          );
        })}
        
        {/* Scroll anchor */}
      </div>

      {/* Input panel footer */}
      <div className="p-4 border-t border-gray-150 bg-white space-y-2">
        <div className="border border-gray-200 rounded-xl overflow-hidden bg-gray-50/20">
          
          {/* TextArea */}
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a message or use '/' for quick replies..."
            className="w-full px-3 py-2 text-xs font-semibold focus:outline-none bg-transparent resize-none h-16 text-gray-700 placeholder-gray-400"
          />

          {/* Action strip bar */}
          <div className="flex items-center justify-between border-t border-gray-100 p-2.5 bg-white">
            
            {/* Left attachment controls */}
            <div className="flex items-center gap-2 text-gray-400">
              <button className="p-1 hover:text-gray-600 rounded transition-colors cursor-pointer" title="Add Emoji">
                <Smile className="size-4.5" />
              </button>
              <button className="p-1 hover:text-gray-600 rounded transition-colors cursor-pointer" title="Add Attachment">
                <Paperclip className="size-4.5" />
              </button>
              <button className="p-1 hover:text-gray-600 rounded transition-colors cursor-pointer" title="Add Image">
                <ImageIcon className="size-4.5" />
              </button>
              <button className="p-1 hover:text-gray-600 rounded transition-colors cursor-pointer" title="Add Document">
                <FileText className="size-4.5" />
              </button>
            </div>

            {/* Right Send Button */}
            <button
              onClick={handleSend}
              className="flex items-center gap-1.5 bg-[#D2FC00] hover:bg-[#c3ec00] text-gray-900 font-extrabold px-4 py-1.5 rounded-lg text-xs cursor-pointer shadow-3xs transition-all shrink-0 border border-gray-200"
            >
              <span>Send</span>
              <Send className="size-3" />
            </button>

          </div>

        </div>

        {/* Input captions */}
        <p className="text-[9px] sm:text-[10px] text-gray-400 font-bold text-left select-none pl-1">
          Press Enter to send, Shift + Enter for new line
        </p>

      </div>

    </div>
  );
}
