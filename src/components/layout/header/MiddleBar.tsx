"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, Heart, ShoppingCart, User, ChevronDown, Menu } from 'lucide-react';
import { MAIN_NAV_LINKS, MEGA_MENU_CATEGORIES, TOP_BAR_LINKS } from '@/constants/navigation';

export default function MiddleBar() {
  const router = useRouter();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);

  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [expandedSearchCategory, setExpandedSearchCategory] = useState<number | null>(null);

  // Search state
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSearchCategory, setSelectedSearchCategory] = useState<{ label: string, value: string } | null>(null);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim() && !selectedSearchCategory) {
      router.push('/shops');
      return;
    }

    let url = '/shops?';
    const params = new URLSearchParams();

    if (searchQuery.trim()) {
      params.append('q', searchQuery.trim());
    }
    if (selectedSearchCategory) {
      params.append('category', selectedSearchCategory.value);
    }

    router.push(url + params.toString());
  };

  return (
    <div className="bg-brand-primary-600 py-4 lg:py-5 relative">
      <div className="container mx-auto px-4 grid grid-cols-[auto_1fr_auto] lg:flex lg:flex-row items-center justify-between gap-y-4 gap-x-2 lg:gap-8">

        {/* Mobile Menu Icon */}
        <button
          className="lg:hidden text-white hover:text-brand-primary-200 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu className="w-7 h-7" />
        </button>

        {/* Logo */}
        <Link href="/" className="shrink-0 flex justify-center lg:justify-start">
          <span className="text-[28px] lg:text-[32px] font-bold text-white tracking-tight">Vendora</span>
        </Link>

        {/* Search Bar */}
        <div className="col-span-3 lg:col-span-1 flex-1 w-full max-w-3xl flex order-last lg:order-0 relative">
          <form onSubmit={handleSearchSubmit} className="flex w-full bg-white rounded shadow-sm border border-transparent focus-within:border-brand-primary-400 transition-colors relative">
            {/* Category Selector */}
            <div className="relative flex shrink-0">
              <button
                type="button"
                className="flex items-center justify-between bg-gray-50 px-2 sm:px-4 py-2.5 text-xs sm:text-base text-gray-600 border-r border-gray-200 hover:bg-gray-100 transition-colors whitespace-nowrap rounded-l-md focus:outline-none h-full"
                onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
              >
                <span className="hidden sm:inline truncate max-w-37.5">{selectedSearchCategory ? selectedSearchCategory.label : "All Categories"}</span>
                <span className="sm:hidden truncate max-w-20">{selectedSearchCategory ? selectedSearchCategory.label : "Category"}</span>
                <ChevronDown className={`w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 shrink-0 text-gray-400 transition-transform duration-200 ${isCategoryDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Category Dropdown List */}
              {isCategoryDropdownOpen && (
                <div className="absolute top-[calc(100%+8px)] left-0 w-60 sm:w-70 bg-white shadow-xl z-50 border border-gray-100 rounded-md overflow-y-auto max-h-[60vh] animate-in fade-in slide-in-from-top-2 duration-200">

                  <button
                    type="button"
                    className="w-full text-left px-4 py-3 text-sm font-semibold text-gray-800 hover:bg-gray-50 border-b border-gray-100"
                    onClick={() => {
                      setSelectedSearchCategory(null);
                      setIsCategoryDropdownOpen(false);
                    }}
                  >
                    All Categories
                  </button>

                  {MEGA_MENU_CATEGORIES.map((category, idx) => (
                    <div key={`search-cat-${idx}`} className="flex flex-col border-b border-gray-50 last:border-none">
                      <button
                        type="button"
                        className="px-4 py-3 flex justify-between items-center text-sm font-semibold text-brand-primary-600 bg-gray-50/50 hover:bg-gray-100/50 transition-colors focus:outline-none"
                        onClick={() => setExpandedSearchCategory(expandedSearchCategory === idx ? null : idx)}
                      >
                        <span>{category.title}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${expandedSearchCategory === idx ? 'rotate-180' : ''}`} />
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedSearchCategory === idx ? 'max-h-125 opacity-100' : 'max-h-0 opacity-0'}`}
                      >
                        <ul className="flex flex-col bg-white pb-2 border-l-2 border-brand-primary-400 ml-4 mt-1 mb-2">
                          {category.links.map((link, linkIdx) => (
                            <li key={`search-link-${linkIdx}`}>
                              <button
                                type="button"
                                className="w-full text-left block px-4 py-2 text-sm text-gray-500 hover:bg-brand-primary-50 hover:text-brand-primary-600 transition-colors"
                                onClick={() => {
                                  setSelectedSearchCategory({ label: link.label, value: link.value as string });
                                  setIsCategoryDropdownOpen(false);
                                }}
                              >
                                {link.label}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for products, brands..."
              className="flex-1 px-3 sm:px-4 py-2.5 text-sm lg:text-base text-gray-800 placeholder-gray-400 focus:outline-none min-w-0"
            />

            <button type="submit" className="bg-brand-accent-200 hover:bg-brand-accent-400 transition-colors text-gray-900 font-semibold px-3 sm:px-4 lg:px-6 flex items-center justify-center shrink-0 rounded-r focus:outline-none">
              <Search className="w-4 h-4 sm:w-5 sm:h-5 lg:mr-2 shrink-0" />
              <span className="hidden lg:inline">Search</span>
            </button>
          </form>
        </div>

        {/* Action Icons */}
        <div className="flex items-center justify-end space-x-4 lg:space-x-6 text-white shrink-0">
          {/* Wishlist */}
          <Link href="/wishlist" className="relative hover:text-brand-primary-200 transition-colors hidden sm:block">
            <Heart className="w-6 h-6 lg:w-7 lg:h-7" />
            <span className="absolute -top-1.5 -right-2 bg-brand-accent-200 text-gray-900 text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-4.5 text-center">
              0
            </span>
          </Link>

          {/* Cart */}
          <Link href="/cart" className="relative hover:text-brand-primary-200 transition-colors">
            <ShoppingCart className="w-6 h-6 lg:w-7 lg:h-7" />
            <span className="absolute -top-1.5 -right-2 bg-brand-accent-200 text-gray-900 text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-4.5 text-center">
              3
            </span>
          </Link>

          {/* User Account */}
          <Link href="/account" className="flex items-center space-x-2 hover:text-brand-primary-200 transition-colors">
            <User className="w-6 h-6 lg:w-7 lg:h-7" />
            <div className="hidden lg:flex flex-col text-xs">
              <span className="text-brand-primary-200">Hello, Sign in</span>
              <span className="font-semibold text-base">My Account</span>
            </div>
          </Link>
        </div>
      </div>
      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl z-50 lg:hidden border-t border-gray-100 max-h-[80vh] overflow-y-auto animate-in slide-in-from-top-2 fade-in duration-200">
          <div className="flex flex-col">
            {/* Categories Section */}
            <div className="bg-brand-primary-50 px-4 py-2 text-xs font-bold text-brand-primary-800 uppercase tracking-wider">
              Categories
            </div>
            {MEGA_MENU_CATEGORIES.map((category, idx) => (
              <div key={`cat-${idx}`} className="flex flex-col border-b border-gray-50 last:border-none">
                <button
                  className="px-4 py-3 flex justify-between items-center text-sm font-semibold text-brand-primary-600 bg-gray-50/50 hover:bg-gray-100/50 transition-colors focus:outline-none"
                  onClick={() => setExpandedCategory(expandedCategory === idx ? null : idx)}
                >
                  <span>{category.title}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${expandedCategory === idx ? 'rotate-180' : ''}`} />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedCategory === idx ? 'max-h-125 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <ul className="flex flex-col bg-white pb-2 border-l-2 border-brand-primary-400 ml-4 mt-1 mb-2">
                    {category.links.map((link, linkIdx) => (
                      <li key={`link-${linkIdx}`}>
                        <Link
                          href={link.href}
                          className="block px-4 py-2 text-sm text-gray-500 hover:bg-brand-primary-50 hover:text-brand-primary-600 transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            {/* Main Menu Section */}
            <div className="bg-brand-primary-50 px-4 py-2 text-xs font-bold text-brand-primary-800 uppercase tracking-wider mt-2 border-t border-gray-100">
              Menu
            </div>
            <ul className="flex flex-col pb-4">
              {MAIN_NAV_LINKS.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-brand-primary-50 hover:text-brand-primary-600 border-b border-gray-50 last:border-none transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Action Section */}
            <div className="bg-gray-50 px-4 py-4 border-t border-gray-200 flex justify-center sticky bottom-0">
              <Link
                href={TOP_BAR_LINKS[1].href}
                className="bg-brand-primary-600 hover:bg-brand-primary-800 text-white font-semibold py-2.5 px-6 rounded-md transition-colors text-sm text-center w-full shadow-sm flex items-center justify-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {TOP_BAR_LINKS[1].label}
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
