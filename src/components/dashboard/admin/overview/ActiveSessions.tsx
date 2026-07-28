"use client";

import React from "react";

export default function ActiveSessions() {
  return (
    <div className="bg-[#0F4C81] rounded-lg p-5 text-left text-white shadow-3xs h-32 flex flex-col justify-between relative overflow-hidden">
      <div>
        <span className="text-[10px] font-bold text-blue-200/80 uppercase tracking-widest block">
          CURRENT ACTIVE SESSIONS
        </span>
        <h2 className="text-xl sm:text-2xl font-black mt-1">
          14,208
        </h2>
      </div>
      
      {/* Avatars Overlapping list */}
      <div className="flex items-center gap-1 mt-2">
        <div className="flex -space-x-2">
          <img 
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=60" 
            alt="User avatar 1" 
            className="size-6 rounded-full border border-blue-600 object-cover" 
          />
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=60" 
            alt="User avatar 2" 
            className="size-6 rounded-full border border-blue-600 object-cover" 
          />
          <img 
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=60" 
            alt="User avatar 3" 
            className="size-6 rounded-full border border-blue-600 object-cover" 
          />
        </div>
        <span className="text-[10px] font-extrabold text-blue-100 bg-blue-800/80 px-2 py-0.5 rounded-full ml-1.5 shadow-2xs">
          +14k
        </span>
      </div>

      {/* Glowing background circles for visual premium depth */}
      <div className="absolute -right-6 -bottom-6 size-24 rounded-full bg-blue-500/20 blur-xl pointer-events-none" />
    </div>
  );
}
