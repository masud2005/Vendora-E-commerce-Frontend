import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SHOP_CATEGORY_MAP } from "@/constants/dummyProducts";

interface ShopBreadcrumbsProps {
  selectedCategory: string;
  searchQuery: string;
  onClearCategory: () => void;
}

export default function ShopBreadcrumbs({ selectedCategory, searchQuery, onClearCategory }: ShopBreadcrumbsProps) {
  return (
    <div className="flex items-center text-sm text-gray-500 mb-6 flex-wrap gap-y-2">
      <Link href="/" className="hover:text-brand-primary-600 transition-colors">Home</Link>
      <ChevronRight className="w-4 h-4 mx-1 shrink-0" />
      <Link href="/shops" onClick={(e) => { e.preventDefault(); onClearCategory(); }} className="hover:text-brand-primary-600 transition-colors">Shops</Link>
      
      {selectedCategory && SHOP_CATEGORY_MAP[selectedCategory] && (
        <>
          <ChevronRight className="w-4 h-4 mx-1 shrink-0" />
          <span className="hover:text-brand-primary-600 transition-colors cursor-pointer" onClick={onClearCategory}>
            {SHOP_CATEGORY_MAP[selectedCategory].parent}
          </span>
          <ChevronRight className="w-4 h-4 mx-1 shrink-0" />
          <span className="text-gray-900 font-medium">{SHOP_CATEGORY_MAP[selectedCategory].label}</span>
        </>
      )}

      {!selectedCategory && searchQuery && (
         <>
           <ChevronRight className="w-4 h-4 mx-1 shrink-0" />
           <span className="text-gray-900 font-medium">Search Results</span>
         </>
      )}

      {!selectedCategory && !searchQuery && (
        <>
          <ChevronRight className="w-4 h-4 mx-1 shrink-0" />
          <span className="text-gray-900 font-medium">All Categories</span>
        </>
      )}
    </div>
  );
}
