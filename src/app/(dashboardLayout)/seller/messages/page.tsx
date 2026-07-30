"use client";

import React, { useState } from "react";
import ChatList, { ChatPartner } from "@/components/dashboard/seller/messages/ChatList";
import ChatWindow, { Message } from "@/components/dashboard/seller/messages/ChatWindow";

const initialChats: ChatPartner[] = [
  {
    id: "alex-henderson",
    name: "Alex Henderson",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=80",
    status: "Online",
    lastMessage: "Is the shipping still available for Chicago?",
    time: "2m ago",
    unreadCount: 0,
    productName: "Premium Audio Pro Headphones",
    productImg: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: "sarah-miller",
    name: "Sarah J. Miller",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=80",
    status: "Offline",
    lastMessage: "Thank you for the quick response! I'll buy it.",
    time: "15m ago",
    unreadCount: 1,
    productName: "Ergo-Grip Mouse",
    productImg: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: "michael-roberts",
    name: "Michael Roberts",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=80",
    status: "Offline",
    lastMessage: "Sent. Check the attachment please.",
    time: "2h ago",
    unreadCount: 0,
    productName: "KeyMaster Pro X",
    productImg: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&q=80&w=150"
  }
];

const initialMessages: Record<string, Message[]> = {
  "alex-henderson": [
    {
      sender: "partner",
      text: "Hi there! I'm interested in the Premium Audio Pro Headphones. Do you have them in the Graphite color variant?",
      time: "10:46 AM"
    },
    {
      sender: "me",
      text: "Hello Alex! Yes, we have exactly 3 units left in Graphite. We can ship it out today if you order within the next 2 hours.",
      time: "10:48 AM"
    },
    {
      sender: "partner",
      text: "That's great! Is the shipping still available for Chicago? I've had issues with other sellers recently.",
      time: "10:50 AM"
    }
  ],
  "sarah-miller": [
    {
      sender: "partner",
      text: "Hi! Is the mouse ergonomic for long hours of design work?",
      time: "10:00 AM"
    },
    {
      sender: "me",
      text: "Yes! It has specialized rubber palm supports and custom height levels to prevent strain.",
      time: "10:02 AM"
    },
    {
      sender: "partner",
      text: "Thank you for the quick response! I'll buy it.",
      time: "10:15 AM"
    }
  ],
  "michael-roberts": [
    {
      sender: "partner",
      text: "Hey, did you get the chance to look at the custom keyboard layouts layout config?",
      time: "08:00 AM"
    },
    {
      sender: "me",
      text: "Yes, please upload the firmware draft here so I can upload it to standard memory.",
      time: "08:15 AM"
    },
    {
      sender: "partner",
      text: "Sent. Check the attachment please.",
      time: "08:30 AM"
    }
  ]
};

export default function SellerMessagesPage() {
  const [chats, setChats] = useState<ChatPartner[]>(initialChats);
  const [messages, setMessages] = useState<Record<string, Message[]>>(initialMessages);
  const [activeChatId, setActiveChatId] = useState("alex-henderson");
  const [mobileShowChat, setMobileShowChat] = useState(false);

  const activeChatPartner = chats.find((c) => c.id === activeChatId);
  const activeChatMessages = messages[activeChatId] || [];

  const handleSelectChat = (id: string) => {
    setActiveChatId(id);
    setMobileShowChat(true);

    // Clear unread count for selected chat
    setChats((prevChats) =>
      prevChats.map((chat) =>
        chat.id === id ? { ...chat, unreadCount: 0 } : chat
      )
    );
  };

  const handleSendMessage = (text: string) => {
    const timeNow = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    
    // 1. Append message to chat history
    const newMsg: Message = { sender: "me", text, time: timeNow };
    setMessages((prev) => ({
      ...prev,
      [activeChatId]: [...(prev[activeChatId] || []), newMsg]
    }));

    // 2. Update lastMessage and time in chats list
    setChats((prevChats) =>
      prevChats.map((chat) =>
        chat.id === activeChatId
          ? { ...chat, lastMessage: text, time: "Just now" }
          : chat
      )
    );
  };

  // Construct active chat payload for child window
  const activeChatPayload = activeChatPartner
    ? {
        id: activeChatPartner.id,
        name: activeChatPartner.name,
        avatar: activeChatPartner.avatar,
        status: activeChatPartner.status,
        productName: activeChatPartner.productName,
        productImg: activeChatPartner.productImg,
        messages: activeChatMessages
      }
    : null;

  return (
    <div className="w-full pb-8 select-none font-sans">
      
      {/* Outer Card Wrap */}
      <div className="flex bg-white border border-gray-200 rounded-xl overflow-hidden shadow-3xs h-[600px] sm:h-[700px] w-full">
        
        {/* Left Chat List Side */}
        <div className={`w-full lg:w-80 shrink-0 h-full ${mobileShowChat ? "hidden lg:block" : "block"}`}>
          <ChatList 
            chats={chats} 
            activeChatId={activeChatId} 
            onSelectChat={handleSelectChat} 
          />
        </div>

        {/* Right Chat Window Side */}
        <div className={`flex-1 h-full ${!mobileShowChat ? "hidden lg:block" : "block"}`}>
          {activeChatPayload ? (
            <ChatWindow 
              chat={activeChatPayload} 
              onSendMessage={handleSendMessage} 
              onBackToList={() => setMobileShowChat(false)} 
            />
          ) : (
            <div className="hidden lg:flex items-center justify-center h-full bg-gray-50/50 text-gray-400 font-bold text-xs select-none">
              Select a conversation to start messaging
            </div>
          )}
        </div>

      </div>

    </div>
  );
}
