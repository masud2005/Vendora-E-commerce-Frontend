"use client";

import React, { useState, useEffect } from "react";
import SupportChatHeader from "./SupportChatHeader";
import ConversationSidebar from "./ConversationSidebar";
import ChatWindow from "./ChatWindow";
import SupportStats from "./SupportStats";
import toast from "react-hot-toast";

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

interface Message {
  sender: "them" | "me";
  text: string;
  time: string;
}

const initialConversations: Conversation[] = [
  {
    id: "support",
    name: "Vendora Support",
    avatar: "VE",
    avatarStyle: "bg-blue-600",
    time: "09:52 AM",
    lastMsg: "Please confirm once you are near Baridhara.",
    online: true
  },
  {
    id: "chronos",
    name: "Chronos Luxe",
    avatar: "CH",
    avatarStyle: "bg-emerald-600",
    time: "09:31 AM",
    lastMsg: "Please collect the invoice copy as well.",
    unreadCount: 1,
    online: true
  },
  {
    id: "ecohome",
    name: "EcoHome Tech",
    avatar: "EC",
    avatarStyle: "bg-amber-600",
    time: "Yesterday",
    lastMsg: "Thanks Rakib, confirmed."
  },
  {
    id: "velo",
    name: "Velo Sports",
    avatar: "VS",
    avatarStyle: "bg-indigo-650",
    time: "Yesterday",
    lastMsg: "Understood."
  }
];

const initialMessagesMap: Record<string, Message[]> = {
  support: [
    { sender: "them", text: "Good morning Rakib. You have 2 express orders on today's route.", time: "08:02 AM" },
    { sender: "me", text: "Noted. Picking up from Banani first.", time: "08:05 AM" },
    { sender: "them", text: "Order #VD-90376 customer requested delivery before 11:30 AM.", time: "09:50 AM" },
    { sender: "them", text: "Please confirm once you are near Baridhara.", time: "09:52 AM" }
  ],
  chronos: [
    { sender: "them", text: "Hello Rakib, are you near Banani?", time: "09:15 AM" },
    { sender: "me", text: "Yes, picking up in 5 minutes.", time: "09:20 AM" },
    { sender: "them", text: "Please collect the invoice copy as well.", time: "09:31 AM" }
  ],
  ecohome: [
    { sender: "them", text: "Pick up ready for #VD-90355.", time: "Yesterday, 04:00 PM" },
    { sender: "me", text: "Got it, on my way.", time: "Yesterday, 04:15 PM" },
    { sender: "them", text: "Thanks Rakib, confirmed.", time: "Yesterday, 04:20 PM" }
  ],
  velo: [
    { sender: "them", text: "Express shipment assigned to you.", time: "Yesterday, 11:00 AM" },
    { sender: "me", text: "Understood.", time: "Yesterday, 11:05 AM" }
  ]
};

export default function SupportChatContent() {
  const [conversations, setConversations] = useState<Conversation[]>(initialConversations);
  const [messagesMap, setMessagesMap] = useState<Record<string, Message[]>>(initialMessagesMap);
  const [activeConvoId, setActiveConvoId] = useState("support");
  const [inputText, setInputText] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const activeConvo = conversations.find(c => c.id === activeConvoId) || conversations[0];
  const activeMessages = messagesMap[activeConvoId] || [];

  // Clear unread badge count when switching conversation
  useEffect(() => {
    setConversations(prev =>
      prev.map(c => c.id === activeConvoId ? { ...c, unreadCount: undefined } : c)
    );
  }, [activeConvoId]);

  const handleSendMessage = (textToSend: string) => {
    if (!textToSend.trim()) return;

    const timeNow = new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
    const userMsg: Message = {
      sender: "me",
      text: textToSend,
      time: timeNow
    };

    const updatedConvoMsgs = [...activeMessages, userMsg];

    setMessagesMap(prev => ({
      ...prev,
      [activeConvoId]: updatedConvoMsgs
    }));

    setInputText("");

    // Update last message preview in sidebar
    setConversations(prev =>
      prev.map(c => c.id === activeConvoId ? { ...c, lastMsg: textToSend, time: timeNow } : c)
    );

    // Mock automatic reply simulation from support/sellers after 1 second
    setTimeout(() => {
      let replyText = "Understood, drive safe!";
      if (activeConvoId === "support") replyText = "Support will notify the customer. Drive safe!";
      else if (activeConvoId === "chronos") replyText = "Perfect, invoice copy collected. Thanks!";
      else if (activeConvoId === "ecohome") replyText = "Confirming receipt, thank you Rakib!";

      const autoReplyMsg: Message = {
        sender: "them",
        text: replyText,
        time: new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })
      };

      setMessagesMap(prev => ({
        ...prev,
        [activeConvoId]: [...(prev[activeConvoId] || []), autoReplyMsg]
      }));

      setConversations(prev =>
        prev.map(c => c.id === activeConvoId ? { ...c, lastMsg: replyText } : c)
      );

      toast.success(`New message from ${activeConvo.name}`);
    }, 1000);
  };

  return (
    <div className="space-y-6 w-full text-left font-sans">
      
      {/* 1. Header with emergency SOS */}
      <SupportChatHeader />

      {/* 2. Main Chat Box Layout Grid */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-3xs grid grid-cols-1 md:grid-cols-4 h-[620px]">
        
        {/* Left Side Menu List (25% width) */}
        <div className="md:col-span-1 h-full min-h-0 min-w-0">
          <ConversationSidebar
            conversations={conversations}
            activeConvoId={activeConvoId}
            setActiveConvoId={setActiveConvoId}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </div>

        {/* Right Chat Window Box (75% width) */}
        <div className="md:col-span-3 h-full min-h-0 min-w-0">
          <ChatWindow
            convoName={activeConvo.name}
            convoAvatar={activeConvo.avatar}
            convoAvatarStyle={activeConvo.avatarStyle}
            convoOnline={!!activeConvo.online}
            isAdmin={activeConvoId === "support"}
            messages={activeMessages}
            inputText={inputText}
            setInputText={setInputText}
            onSendMessage={() => handleSendMessage(inputText)}
            onQuickReplyClick={(reply) => handleSendMessage(reply)}
            onCall={() => toast.success(`Calling ${activeConvo.name}...`)}
          />
        </div>

      </div>

      {/* 3. Bottom Stats Row */}
      <SupportStats />

    </div>
  );
}
