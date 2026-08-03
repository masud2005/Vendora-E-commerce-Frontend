"use client";


import { Search } from "lucide-react";

type FilterTab = "All" | "Awaiting Pickup" | "Picked Up" | "In Transit" | "Delivered" | "Failed";

interface AssignedFiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  activeTab: FilterTab;
  setActiveTab: (tab: FilterTab) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
  filterType: string;
  setFilterType: (type: string) => void;
  counts: Record<FilterTab, number>;
}

export default function AssignedFilters({
  searchQuery,
  setSearchQuery,
  activeTab,
  setActiveTab,
  sortBy,
  setSortBy,
  filterType,
  setFilterType,
  counts
}: AssignedFiltersProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-3xs space-y-4 text-left select-none">
      
      {/* Search input and selectors */}
      <div className="flex flex-col md:flex-row md:items-center gap-3">
        {/* Input text */}
        <div className="relative flex-1 text-left">
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
            <Search className="size-4" />
          </span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by order ID, customer, seller or area"
            className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded text-xs bg-white focus:outline-none focus:border-[#0F4C81] font-semibold text-gray-800"
          />
        </div>

        {/* Select Sort */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border border-gray-205 bg-white text-gray-600 text-xs font-bold py-2.5 px-3.5 rounded focus:outline-none cursor-pointer hover:border-gray-300 transition-colors"
        >
          <option value="default">Sort by Default</option>
          <option value="distance">Sort by Distance</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="price-asc">Price: Low to High</option>
        </select>

        {/* Select Type */}
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="border border-gray-205 bg-white text-gray-600 text-xs font-bold py-2.5 px-3.5 rounded focus:outline-none cursor-pointer hover:border-gray-300 transition-colors"
        >
          <option value="all">All Payment Type</option>
          <option value="cod">COD only</option>
          <option value="prepaid">Prepaid only</option>
        </select>
      </div>

      {/* Tab Pills */}
      <div className="flex flex-wrap items-center gap-2 border-t border-gray-50 pt-4 select-none">
        {([
          { label: "All", value: "All" },
          { label: "Awaiting Pickup", value: "Awaiting Pickup" },
          { label: "Picked Up", value: "Picked Up" },
          { label: "In Transit", value: "In Transit" },
          { label: "Delivered", value: "Delivered" },
          { label: "Failed", value: "Failed" }
        ] as const).map((tab) => {
          const isActive = activeTab === tab.value;
          const count = counts[tab.value];
          return (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`px-4 py-1.5 rounded-full text-xs font-black transition-all cursor-pointer flex items-center gap-1.5 ${
                isActive
                  ? "bg-[#0f4c81] text-white shadow-3xs"
                  : "bg-gray-100/90 text-gray-500 hover:text-gray-800 border border-gray-150"
              }`}
            >
              <span>{tab.label}</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-black ${
                isActive ? "bg-white/20 text-white" : "bg-gray-200 text-gray-500"
              }`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

    </div>
  );
}
