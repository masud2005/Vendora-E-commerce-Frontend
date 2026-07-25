"use client";

import { useState } from "react";
import { ChevronDown, Search, Star } from "lucide-react";

interface ShopSidebarProps {
  priceRange: [number, number];
  setPriceRange: (val: [number, number]) => void;
  selectedBrands: string[];
  setSelectedBrands: (val: string[]) => void;
  selectedRating: number;
  setSelectedRating: (val: number) => void;
  inStockOnly: boolean;
  setInStockOnly: (val: boolean) => void;
  selectedCategory: string;
  setSelectedCategory: (val: string) => void;
}

const BRANDS = ["Apple", "Sony", "Samsung", "Bose", "Asus", "Dell", "HP"];

export default function ShopSidebar({
  priceRange,
  setPriceRange,
  selectedBrands,
  setSelectedBrands,
  selectedRating,
  setSelectedRating,
  inStockOnly,
  setInStockOnly,
  selectedCategory,
  setSelectedCategory
}: ShopSidebarProps) {
  
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({
    Electronics: true,
  });
  const [brandSearch, setBrandSearch] = useState("");

  const toggleCategory = (cat: string) => {
    setOpenCategories(prev => ({ ...prev, [cat]: !prev[cat] }));
  };

  const toggleBrand = (brand: string) => {
    setSelectedBrands(
      selectedBrands.includes(brand)
        ? selectedBrands.filter(b => b !== brand)
        : [...selectedBrands, brand]
    );
  };

  const filteredBrands = BRANDS.filter(b => b.toLowerCase().includes(brandSearch.toLowerCase()));

  return (
    <aside className="w-full">
      {/* Categories */}
      <div className="bg-white border border-gray-200 rounded mb-6 shadow-sm">
        <div className="p-4 border-b border-gray-100 flex items-center justify-between">
          <h3 className="font-bold text-gray-900 text-sm tracking-wide uppercase">Categories</h3>
          {selectedCategory && (
             <button 
               onClick={() => setSelectedCategory("")}
               className="text-[10px] text-brand-semantic-400 hover:underline uppercase font-bold"
             >
               Clear
             </button>
          )}
        </div>
        <div className="p-2">
          {/* Electronics */}
          <div className="mb-1">
            <button 
              onClick={() => toggleCategory('Electronics')}
              className="w-full flex items-center justify-between px-3 py-2 text-sm font-bold text-gray-900 hover:bg-gray-50 rounded transition-colors"
            >
              <span>Electronics</span>
              <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${openCategories['Electronics'] ? 'rotate-180' : ''}`} />
            </button>
            {openCategories['Electronics'] && (
              <div className="pl-6 pr-3 py-1 flex flex-col gap-2 items-start">
                <button 
                  onClick={() => setSelectedCategory('Laptops')}
                  className={`text-sm hover:text-brand-primary-600 transition-colors text-left ${selectedCategory === 'Laptops' ? 'font-medium text-brand-primary-600' : 'text-gray-600'}`}
                >
                  Laptops & Computers
                </button>
                <button 
                  onClick={() => setSelectedCategory('Smartphones')}
                  className={`text-sm hover:text-brand-primary-600 transition-colors text-left ${selectedCategory === 'Smartphones' ? 'font-medium text-brand-primary-600' : 'text-gray-600'}`}
                >
                  Smartphones
                </button>
                <button 
                  onClick={() => setSelectedCategory('Audio')}
                  className={`text-sm hover:text-brand-primary-600 transition-colors text-left ${selectedCategory === 'Audio' ? 'font-medium text-brand-primary-600' : 'text-gray-600'}`}
                >
                  Audio & Headphones
                </button>
              </div>
            )}
          </div>
          
          {/* Fashion */}
          <div className="mb-1">
            <button 
              onClick={() => toggleCategory('Fashion')}
              className="w-full flex items-center justify-between px-3 py-2 text-sm font-bold text-gray-700 hover:bg-gray-50 rounded transition-colors"
            >
              <span>Fashion</span>
              <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${openCategories['Fashion'] ? 'rotate-180' : ''}`} />
            </button>
            {openCategories['Fashion'] && (
              <div className="pl-6 pr-3 py-1 flex flex-col gap-2 items-start">
                <button 
                  onClick={() => setSelectedCategory('Mens')}
                  className={`text-sm hover:text-brand-primary-600 transition-colors text-left ${selectedCategory === 'Mens' ? 'font-medium text-brand-primary-600' : 'text-gray-600'}`}
                >
                  Men's Clothing
                </button>
                <button 
                   onClick={() => setSelectedCategory('Womens')}
                   className={`text-sm hover:text-brand-primary-600 transition-colors text-left ${selectedCategory === 'Womens' ? 'font-medium text-brand-primary-600' : 'text-gray-600'}`}
                >
                  Women's Clothing
                </button>
              </div>
            )}
          </div>

          {/* Home & Living */}
          <div>
            <button 
              onClick={() => setSelectedCategory('Home')}
              className={`w-full flex items-center justify-between px-3 py-2 text-sm font-bold hover:bg-gray-50 rounded transition-colors ${selectedCategory === 'Home' ? 'text-brand-primary-600 bg-gray-50' : 'text-gray-700'}`}
            >
              <span>Home & Living</span>
            </button>
          </div>
        </div>
      </div>

      {/* Price Range */}
      <div className="bg-white border border-gray-200 rounded mb-6 shadow-sm">
        <div className="p-4 border-b border-gray-100">
          <h3 className="font-bold text-gray-900 text-sm tracking-wide uppercase">Price Range</h3>
        </div>
        <div className="p-4">
          <div className="relative h-1 bg-gray-200 rounded-full mb-8 mt-2">
            <div 
              className="absolute top-0 h-full bg-brand-primary-600 rounded-full pointer-events-none" 
              style={{ 
                left: `${(priceRange[0] / 1200) * 100}%`, 
                right: `${100 - (priceRange[1] / 1200) * 100}%` 
              }}
            ></div>
            
            {/* Native range inputs acting as interactive overlay */}
            <input 
              type="range" 
              min="0" max="1200" 
              value={priceRange[0]} 
              onChange={(e) => setPriceRange([Math.min(Number(e.target.value), priceRange[1] - 10), priceRange[1]])}
              className="absolute w-full -top-1.5 h-4 opacity-0 cursor-pointer pointer-events-auto"
              style={{ zIndex: priceRange[0] > 1100 ? 5 : 3 }}
            />
            <input 
              type="range" 
              min="0" max="1200" 
              value={priceRange[1]} 
              onChange={(e) => setPriceRange([priceRange[0], Math.max(Number(e.target.value), priceRange[0] + 10)])}
              className="absolute w-full -top-1.5 h-4 opacity-0 cursor-pointer pointer-events-auto"
              style={{ zIndex: 4 }}
            />
            
            {/* Visual Thumbs */}
            <div 
              className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-brand-primary-600 rounded-full border-2 border-white shadow-sm pointer-events-none"
              style={{ left: `calc(${(priceRange[0] / 1200) * 100}% - 8px)` }}
            ></div>
            <div 
              className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-brand-primary-600 rounded-full border-2 border-white shadow-sm pointer-events-none"
              style={{ left: `calc(${(priceRange[1] / 1200) * 100}% - 8px)` }}
            ></div>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs">$</span>
              <input 
                type="number" 
                value={priceRange[0]} 
                onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                className="w-full border border-gray-200 rounded-sm py-1.5 pl-6 pr-2 text-sm text-gray-700 outline-none focus:border-brand-primary-400" 
              />
            </div>
            <span className="text-gray-400">—</span>
            <div className="relative flex-1">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs">$</span>
              <input 
                type="number" 
                value={priceRange[1]} 
                onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                className="w-full border border-gray-200 rounded-sm py-1.5 pl-6 pr-2 text-sm text-gray-700 outline-none focus:border-brand-primary-400" 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Brands */}
      <div className="bg-white border border-gray-200 rounded mb-6 shadow-sm">
        <div className="p-4 border-b border-gray-100">
          <h3 className="font-bold text-gray-900 text-sm tracking-wide uppercase">Brands</h3>
        </div>
        <div className="p-4">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search brands..." 
              value={brandSearch}
              onChange={(e) => setBrandSearch(e.target.value)}
              className="w-full border border-gray-200 rounded-sm py-2 pl-9 pr-3 text-sm outline-none focus:border-brand-primary-400 transition-colors"
            />
          </div>
          <div className="flex flex-col gap-3 pr-2">
            {filteredBrands.map(brand => {
              const isChecked = selectedBrands.includes(brand);
              return (
                <label key={brand} className="flex items-center gap-3 cursor-pointer group">
                  <div className={`w-4 h-4 rounded-sm border flex items-center justify-center transition-colors
                    ${isChecked ? 'border-brand-primary-600 bg-brand-primary-600' : 'border-gray-300 bg-white group-hover:border-brand-primary-400'}
                  `}>
                    {isChecked && (
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    )}
                  </div>
                  <input 
                    type="checkbox" 
                    className="hidden" 
                    checked={isChecked} 
                    onChange={() => toggleBrand(brand)} 
                  />
                  <span className="text-sm text-gray-700 group-hover:text-gray-900">{brand}</span>
                </label>
              );
            })}
          </div>
        </div>
      </div>

      {/* Ratings */}
      <div className="bg-white border border-gray-200 rounded mb-6 shadow-sm">
        <div className="p-4 border-b border-gray-100 flex items-center justify-between">
          <h3 className="font-bold text-gray-900 text-sm tracking-wide uppercase">Ratings</h3>
          {selectedRating > 0 && (
             <button 
               onClick={() => setSelectedRating(0)}
               className="text-[10px] text-brand-semantic-400 hover:underline uppercase font-bold"
             >
               Clear
             </button>
          )}
        </div>
        <div className="p-4 flex flex-col gap-3">
          {[5, 4, 3, 2, 1].map(rating => (
            <label key={rating} className="flex items-center gap-3 cursor-pointer group">
              <div className={`w-4 h-4 rounded-full border transition-colors flex items-center justify-center
                ${selectedRating === rating ? 'border-brand-primary-600' : 'border-gray-300 bg-white group-hover:border-brand-primary-400'}
              `}>
                {selectedRating === rating && <div className="w-2 h-2 rounded-full bg-brand-primary-600"></div>}
              </div>
              <input 
                type="radio" 
                name="rating"
                className="hidden" 
                checked={selectedRating === rating} 
                onChange={() => setSelectedRating(selectedRating === rating ? 0 : rating)} 
              />
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < rating ? 'fill-brand-accent-200 text-brand-accent-200' : 'text-gray-300'}`} 
                  />
                ))}
                {rating < 5 && <span className="text-sm text-gray-600 ml-1">& up</span>}
                {rating === 5 && <span className="text-sm text-gray-600 ml-1">Only</span>}
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* In Stock Only */}
      <div className="bg-white border border-gray-200 rounded shadow-sm p-4 flex items-center justify-between">
        <h3 className="font-bold text-gray-900 text-sm tracking-wide uppercase">In Stock Only</h3>
        <button 
          onClick={() => setInStockOnly(!inStockOnly)}
          className={`w-10 h-5 rounded-full relative cursor-pointer flex items-center px-0.5 transition-colors duration-300
            ${inStockOnly ? 'bg-brand-secondary-600' : 'bg-gray-300'}
          `}
        >
          <div className={`w-4 h-4 rounded-full bg-white absolute shadow-sm transition-all duration-300
            ${inStockOnly ? 'right-0.5' : 'left-0.5'}
          `}></div>
        </button>
      </div>
    </aside>
  );
}
