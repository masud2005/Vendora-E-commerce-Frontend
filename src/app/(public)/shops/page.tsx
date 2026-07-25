"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ChevronRight, ChevronDown, SlidersHorizontal, ChevronLeft } from "lucide-react";
import ShopSidebar from "@/components/shops/ShopSidebar";
import CatalogCard from "@/components/shared/CatalogCard";

// Helper to generate a larger dataset for pagination testing
const generateProducts = () => {
  const baseProducts = [
    { id: 1, title: "ProStream Wireless Noise Cancelling Headphones", brand: "Apple", price: 299.00, oldPrice: 399.00, rating: 4.8, reviews: 1200, inStock: true, category: "Audio", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=400", badge: { text: "-25% OFF", type: "discount" as const } },
    { id: 2, title: "Executive Series Genuine Leather Carry-all Case", brand: "Sony", price: 185.00, rating: 4.9, reviews: 452, inStock: false, category: "Mens", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=400", badge: { text: "NEW ARRIVAL", type: "new" as const } },
    { id: 3, title: 'UltraCurve 34" Panoramic Workspace Monitor', brand: "Samsung", price: 649.00, rating: 4.7, reviews: 890, inStock: true, category: "Laptops", image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=400" },
    { id: 4, title: "Precision Flow Mechanical Productivity Keyboard", brand: "Bose", price: 129.00, rating: 4.6, reviews: 125, inStock: true, category: "Laptops", image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&q=80&w=400" },
    { id: 5, title: "AirPods Pro (2nd Generation)", brand: "Apple", price: 249.00, rating: 4.9, reviews: 5000, inStock: true, category: "Audio", image: "https://images.unsplash.com/photo-1605464315542-bda3e2f4e605?auto=format&fit=crop&q=80&w=400" },
    { id: 6, title: "Galaxy Watch 6 Classic", brand: "Samsung", price: 399.00, rating: 4.5, reviews: 320, inStock: false, category: "Smartphones", image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&q=80&w=400" },
    { id: 7, title: "Sony WH-1000XM5 Wireless Headphones", brand: "Sony", price: 348.00, rating: 4.8, reviews: 890, inStock: true, category: "Audio", image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=400" },
    { id: 8, title: "Bose SoundLink Flex Bluetooth Portable Speaker", brand: "Bose", price: 149.00, rating: 4.7, reviews: 154, inStock: true, category: "Audio", image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&q=80&w=400" },
    { id: 9, title: "Dell XPS 15 OLED Laptop", brand: "Dell", price: 1899.00, rating: 4.7, reviews: 210, inStock: true, category: "Laptops", image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=400" },
    { id: 10, title: "Asus ROG Swift 27\" Gaming Monitor", brand: "Asus", price: 799.00, rating: 4.6, reviews: 340, inStock: true, category: "Laptops", image: "https://images.unsplash.com/photo-1542393545-10f5cde2c810?auto=format&fit=crop&q=80&w=400" },
    { id: 11, title: "iPhone 15 Pro Max 256GB", brand: "Apple", price: 1199.00, rating: 4.9, reviews: 3400, inStock: true, category: "Smartphones", image: "https://images.unsplash.com/photo-1695048133142-1a20a5bf616f?auto=format&fit=crop&q=80&w=400" },
    { id: 12, title: "Samsung Galaxy S24 Ultra", brand: "Samsung", price: 1299.00, rating: 4.8, reviews: 1800, inStock: true, category: "Smartphones", image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&q=80&w=400" }
  ];

  // Multiply the base products to generate more pages
  const products = [];
  for (let i = 0; i < 4; i++) {
    products.push(...baseProducts.map(p => ({
      ...p,
      id: p.id + (i * 100), // Ensure unique IDs
      price: p.price * (1 - (i * 0.05)), // Slight price variation
      rating: p.rating - (i * 0.1) // Slight rating variation
    })));
  }
  return products;
};

const initialProducts = generateProducts();

export default function ShopsPage() {
  // Filters State
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1200]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedRating, setSelectedRating] = useState<number>(0);
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  // UI State
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);
  const [sortBy, setSortBy] = useState<string>("popular");
  const [isSortOpen, setIsSortOpen] = useState(false);

  // Pagination State
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 12;

  // 1. Filter logic
  const filteredProducts = useMemo(() => {
    return initialProducts.filter(p => {
      if (selectedCategory && p.category !== selectedCategory) return false;
      if (p.price < priceRange[0] || p.price > priceRange[1]) return false;
      if (selectedBrands.length > 0 && !selectedBrands.includes(p.brand)) return false;
      if (selectedRating > 0 && p.rating < selectedRating) return false;
      if (inStockOnly && !p.inStock) return false;
      return true;
    });
  }, [priceRange, selectedBrands, selectedRating, inStockOnly, selectedCategory]);

  // 2. Sort logic
  const sortedProducts = useMemo(() => {
    const arr = [...filteredProducts];
    if (sortBy === "price_low") arr.sort((a, b) => a.price - b.price);
    if (sortBy === "price_high") arr.sort((a, b) => b.price - a.price);
    if (sortBy === "rating") arr.sort((a, b) => b.rating - a.rating);
    // popular is just the default array order for this fake data
    return arr;
  }, [filteredProducts, sortBy]);

  // 3. Pagination logic
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const paginatedProducts = sortedProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // Helper for pagination UI
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const sortOptions = [
    { value: 'popular', label: 'Most Popular' },
    { value: 'price_low', label: 'Price: Low to High' },
    { value: 'price_high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' },
  ];

  return (
    <div className="bg-[#f8f9fa] min-h-screen pb-16 pt-6">
      <div className="container mx-auto px-4">

        {/* Breadcrumbs */}
        <div className="flex items-center text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-brand-primary-600 transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-1" />
          <span className="text-gray-900 font-medium">All Categories</span>
        </div>

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
                setSelectedCategory={(val) => { setSelectedCategory(val); setCurrentPage(1); }}
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">

            {/* Header Area */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-200 pb-4 mb-6">
              <div>
                <h1 className="text-xl font-bold text-gray-900 mb-1">
                  {selectedCategory ? selectedCategory : "Electronics & Gadgets"}
                </h1>
                <p className="text-sm text-gray-500">
                  Showing <span className="font-semibold text-gray-700">
                    {sortedProducts.length === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1}–{Math.min(currentPage * itemsPerPage, sortedProducts.length)}
                  </span> of {sortedProducts.length} products
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
                          setSortBy(option.value);
                          setIsSortOpen(false);
                          setCurrentPage(1);
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

            {/* Product Grid */}
            {paginatedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {paginatedProducts.map((product) => (
                  <CatalogCard key={product.id} product={{
                    ...product,
                    reviews: `${product.reviews}` // Convert number to string to match interface if needed
                  }} />
                ))}
              </div>
            ) : (
              <div className="py-20 text-center bg-white rounded border border-gray-200 shadow-sm flex flex-col items-center">
                <p className="text-gray-500 text-lg mb-4">No products found matching your criteria.</p>
                <button
                  onClick={() => {
                    setPriceRange([0, 1200]);
                    setSelectedBrands([]);
                    setSelectedRating(0);
                    setInStockOnly(false);
                    setSelectedCategory("");
                  }}
                  className="text-white bg-brand-primary-600 hover:bg-brand-primary-800 px-6 py-2 rounded-md font-medium transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-12 flex justify-center">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded-sm bg-white text-gray-400 hover:text-gray-600 hover:bg-gray-50 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  {/* Dynamic Page Numbers */}
                  {[...Array(totalPages)].map((_, i) => {
                    const page = i + 1;
                    // Show first, last, current, and adjacent pages
                    if (page === 1 || page === totalPages || (page >= currentPage - 1 && page <= currentPage + 1)) {
                      return (
                        <button
                          key={page}
                          onClick={() => handlePageChange(page)}
                          className={`w-10 h-10 flex items-center justify-center rounded-sm font-medium shadow-sm transition-colors border
                            ${currentPage === page
                              ? 'border-brand-primary-600 bg-brand-primary-600 text-white'
                              : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-50'}
                          `}
                        >
                          {page}
                        </button>
                      );
                    } else if (page === currentPage - 2 || page === currentPage + 2) {
                      return <span key={page} className="text-gray-400 px-1 sm:px-2">...</span>;
                    }
                    return null;
                  })}

                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded-sm bg-white text-gray-600 hover:bg-gray-50 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
