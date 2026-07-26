"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface BlogFiltersProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  sortOption: string;
  onSortChange: (option: string) => void;
}

const categories = [
  { id: "all", label: "All Insights" },
  { id: "news", label: "Marketplace News" },
  { id: "tips", label: "Seller Tips" },
  { id: "buyer", label: "Buyer Guide" },
  { id: "reviews", label: "Tech Reviews" },
];

export default function BlogFilters({
  activeCategory,
  onCategoryChange,
  sortOption,
  onSortChange,
}: BlogFiltersProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const sortOptions = [
    { id: "newest", label: "Newest First" },
    { id: "oldest", label: "Oldest First" },
    { id: "popular", label: "Most Popular" },
  ];

  return (
    <div className="border-b border-gray-200 pb-4 mb-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        
        {/* Left Side: Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((category) => {
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={` px-2 py-1.5 sm:px-3 sm:py-1.5 lg:px-4 lg:py-2 text-sm font-bold rounded transition-colors cursor-pointer outline-none ${
                  isActive
                    ? "bg-brand-primary-800 text-white shadow-sm"
                    : "text-gray-500 hover:text-gray-900 hover:bg-gray-100/60"
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Right Side: Sorting Dropdown */}
        <div className="relative self-end sm:self-auto">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-1 text-sm font-semibold text-gray-500 hover:text-gray-900 cursor-pointer outline-none"
          >
            <span>Sort by:</span>
            <span className="text-gray-900 font-bold ml-1">
              {sortOptions.find((opt) => opt.id === sortOption)?.label || "Newest First"}
            </span>
            <ChevronDown className="size-4 text-gray-500 ml-0.5" />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-150 rounded-lg shadow-lg z-30 py-1.5 animate-in fade-in slide-in-from-top-2 duration-150">
              {sortOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => {
                    onSortChange(option.id);
                    setDropdownOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 text-sm transition-colors cursor-pointer ${
                    sortOption === option.id
                      ? "bg-brand-primary-50 text-brand-primary-800 font-bold"
                      : "text-gray-700 hover:bg-gray-50 font-medium"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
