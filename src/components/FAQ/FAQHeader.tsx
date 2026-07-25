"use client";

import { Search } from "lucide-react";

interface FAQHeaderProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

export default function FAQHeader({ searchQuery, onSearchChange }: FAQHeaderProps) {
  return (
    <div className="mx-auto pt-6 sm:pt-10">
      <div className="relative overflow-hidden bg-linear-to-r from-[#185fa5] to-[#3a8edd] pt-16 pb-28 sm:pt-20 sm:pb-36 px-4 shadow-md">
        {/* Background Image Overlay with Blend Mode for Desk aesthetic */}
        <div 
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-35 pointer-events-none"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1600')`
          }}
        />
        
        {/* Soft color layer decoration */}
        <div className="absolute inset-0 bg-brand-primary-800/15 backdrop-blur-[0.5px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto text-center flex flex-col items-center z-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight drop-shadow-sm">
            How can we help you today?
          </h1>
          <p className="mt-4 text-sm sm:text-base lg:text-lg text-blue-100 font-medium max-w-2xl leading-relaxed">
            Browse articles or search for common questions regarding your Vendora experience.
          </p>

          {/* Search Bar Container */}
          <div className="w-full max-w-2xl mt-8 sm:mt-10 px-2 sm:px-0">
            <form 
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center bg-white rounded-lg shadow-xl border border-gray-100 p-1.5 pl-4 gap-2 transition-all focus-within:ring-2 focus-within:ring-brand-primary-200"
            >
              <Search className="size-5 text-gray-400 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Type keywords like 'refund', 'shipping', 'track'..."
                className="w-full bg-transparent border-0 outline-none text-gray-800 text-sm sm:text-base py-2.5"
              />
              <button
                type="submit"
                className="bg-brand-primary-800 text-white hover:bg-brand-primary-900 font-bold px-6 py-2.5 sm:py-3 text-sm sm:text-base transition-colors duration-200 cursor-pointer shadow-sm active:translate-y-px rounded"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}



