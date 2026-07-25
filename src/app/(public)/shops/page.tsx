"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { SlidersHorizontal } from "lucide-react";
import ShopSidebar from "@/components/shops/ShopSidebar";
import CatalogCard from "@/components/shared/CatalogCard";
import ShopBreadcrumbs from "@/components/shops/ShopBreadcrumbs";
import ShopHeader from "@/components/shops/ShopHeader";
import Pagination from "@/components/shared/Pagination";
import { MOCK_PRODUCTS, SHOP_CATEGORY_MAP } from "@/constants/dummyProducts";

function ShopContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Filters State
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1200]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedRating, setSelectedRating] = useState<number>(0);
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Initialize state from URL params
  useEffect(() => {
    const categoryParam = searchParams.get("category");
    const searchParam = searchParams.get("q");

    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
    if (searchParam) {
      setSearchQuery(searchParam);
    }
  }, [searchParams]);

  // UI State
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);
  const [sortBy, setSortBy] = useState<string>("popular");
  const [isSortOpen, setIsSortOpen] = useState(false);

  // Pagination State
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 12;

  // 1. Filter logic
  const filteredProducts = useMemo(() => {
    return MOCK_PRODUCTS.filter(p => {
      // Search
      if (searchQuery && !p.title.toLowerCase().includes(searchQuery.toLowerCase()) && !p.brand.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }
      // Category
      if (selectedCategory && p.category !== selectedCategory) return false;
      // Price
      if (p.price < priceRange[0] || p.price > priceRange[1]) return false;
      // Brand
      if (selectedBrands.length > 0 && !selectedBrands.includes(p.brand)) return false;
      // Rating
      if (selectedRating > 0 && p.rating < selectedRating) return false;
      // In Stock
      if (inStockOnly && !p.inStock) return false;

      return true;
    });
  }, [priceRange, selectedBrands, selectedRating, inStockOnly, selectedCategory, searchQuery]);

  // 2. Sort logic
  const sortedProducts = useMemo(() => {
    const arr = [...filteredProducts];
    if (sortBy === "price_low") arr.sort((a, b) => a.price - b.price);
    if (sortBy === "price_high") arr.sort((a, b) => b.price - a.price);
    if (sortBy === "rating") arr.sort((a, b) => b.rating - a.rating);
    return arr;
  }, [filteredProducts, sortBy]);

  // 3. Pagination logic
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const paginatedProducts = sortedProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Dynamic Header values
  let pageTitle = "All Categories";
  if (searchQuery) {
    pageTitle = `Search Results for "${searchQuery}"`;
  } else if (selectedCategory && SHOP_CATEGORY_MAP[selectedCategory]) {
    pageTitle = SHOP_CATEGORY_MAP[selectedCategory].label;
  }

  const clearAllFilters = () => {
    setPriceRange([0, 1200]);
    setSelectedBrands([]);
    setSelectedRating(0);
    setInStockOnly(false);
    setSelectedCategory("");
    setSearchQuery("");
    setCurrentPage(1);

    // Clean URL
    router.push('/shops');
  };

  return (
    <div className="bg-[#f8f9fa] min-h-screen pb-16 pt-6">
      <div className="container mx-auto px-4">

        {/* Breadcrumbs Component */}
        <ShopBreadcrumbs
          selectedCategory={selectedCategory}
          searchQuery={searchQuery}
          onClearCategory={() => {
            setSelectedCategory("");
            setSearchQuery("");
            router.push('/shops');
          }}
        />

        <div className="flex flex-col lg:flex-row gap-8">

          {/* Mobile Filter Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setShowMobileSidebar(!showMobileSidebar)}
              className="w-full flex items-center justify-center gap-2 bg-white border border-gray-200 py-3 rounded-md font-semibold text-gray-700 shadow-sm"
            >
              <SlidersHorizontal className="w-5 h-5" />
              {showMobileSidebar ? "Hide Filters" : "Show Filters"}
            </button>
          </div>

          {/* Sidebar */}
          <div className={`w-full lg:w-1/4 xl:w-1/5 shrink-0 ${showMobileSidebar ? 'block' : 'hidden lg:block'}`}>
            <div className="lg:sticky lg:top-28 lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto scrollbar-hide pr-1" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              <ShopSidebar
                priceRange={priceRange}
                setPriceRange={(val) => { setPriceRange(val); setCurrentPage(1); }}
                selectedBrands={selectedBrands}
                setSelectedBrands={(val) => { setSelectedBrands(val); setCurrentPage(1); }}
                selectedRating={selectedRating}
                setSelectedRating={(val) => { setSelectedRating(val); setCurrentPage(1); }}
                inStockOnly={inStockOnly}
                setInStockOnly={(val) => { setInStockOnly(val); setCurrentPage(1); }}
                selectedCategory={selectedCategory}
                setSelectedCategory={(val) => {
                  setSelectedCategory(val);
                  setCurrentPage(1);
                  if (val) setSearchQuery("");
                }}
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">

            {/* Header Area Component */}
            <ShopHeader
              pageTitle={pageTitle}
              totalProducts={sortedProducts.length}
              currentPage={currentPage}
              itemsPerPage={itemsPerPage}
              currentShowingCount={paginatedProducts.length}
              sortBy={sortBy}
              setSortBy={setSortBy}
              isSortOpen={isSortOpen}
              setIsSortOpen={setIsSortOpen}
              onSortChange={(val) => {
                setSortBy(val);
                setCurrentPage(1);
              }}
            />

            {/* Product Grid */}
            {paginatedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {paginatedProducts.map((product) => (
                  <CatalogCard key={product.id} product={{
                    ...product,
                    reviews: `${product.reviews}`
                  }} />
                ))}
              </div>
            ) : (
              <div className="py-20 text-center bg-white rounded border border-gray-200 shadow-sm flex flex-col items-center">
                <p className="text-gray-500 text-lg mb-4">No products found matching your criteria.</p>
                <button
                  onClick={clearAllFilters}
                  className="text-white bg-brand-primary-600 hover:bg-brand-primary-800 px-6 py-2 rounded font-medium transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            )}

            {/* Pagination Component */}
            <Pagination 
              currentPage={currentPage} 
              totalPages={totalPages} 
              onPageChange={handlePageChange} 
            />

          </div>
        </div>
      </div>
    </div>
  );
}

// Wrap with Suspense because useSearchParams causes de-opt to client-side rendering
export default function ShopsPageWrapper() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#f8f9fa] flex items-center justify-center">Loading...</div>}>
      <ShopContent />
    </Suspense>
  );
}
