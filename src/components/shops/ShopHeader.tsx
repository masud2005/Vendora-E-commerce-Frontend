import { ChevronDown } from "lucide-react";

interface ShopHeaderProps {
  pageTitle: string;
  totalProducts: number;
  currentPage: number;
  itemsPerPage: number;
  currentShowingCount: number;
  sortBy: string;
  setSortBy: (val: string) => void;
  isSortOpen: boolean;
  setIsSortOpen: (val: boolean) => void;
  onSortChange: (val: string) => void;
}

export default function ShopHeader({
  pageTitle,
  totalProducts,
  currentPage,
  itemsPerPage,
  currentShowingCount,
  sortBy,
  isSortOpen,
  setIsSortOpen,
  onSortChange
}: ShopHeaderProps) {
  
  const sortOptions = [
    { value: 'popular', label: 'Most Popular' },
    { value: 'price_low', label: 'Price: Low to High' },
    { value: 'price_high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' },
  ];

  const startCount = totalProducts === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1;
  const endCount = Math.min(currentPage * itemsPerPage, totalProducts);

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-200 pb-4 mb-6">
      <div>
        <h1 className="text-xl font-bold text-gray-900 mb-1">
          {pageTitle}
        </h1>
        <p className="text-sm text-gray-500">
          Showing <span className="font-semibold text-gray-700">
            {startCount}–{endCount}
          </span> of {totalProducts} products
        </p>
      </div>
      
      <div className="mt-4 sm:mt-0 relative">
        <button 
          onClick={() => setIsSortOpen(!isSortOpen)}
          className="flex items-center justify-between w-56 bg-white border border-gray-200 rounded-sm px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:border-gray-300 transition-colors"
        >
          <div className="flex flex-col items-start">
            <span className="text-[10px] text-gray-500 font-normal">Sort by:</span>
            <span>{sortOptions.find(o => o.value === sortBy)?.label}</span>
          </div>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </button>
        
        {isSortOpen && (
          <div className="absolute top-full right-0 mt-1 w-56 bg-white border border-gray-200 rounded-sm shadow-lg z-20">
            {sortOptions.map(option => (
              <button
                key={option.value}
                onClick={() => {
                  onSortChange(option.value);
                  setIsSortOpen(false);
                }}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${sortBy === option.value ? 'text-brand-primary-600 font-medium bg-gray-50' : 'text-gray-700'}`}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
