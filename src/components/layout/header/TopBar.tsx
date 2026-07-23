"use client";

import { useState } from 'react';
import Link from 'next/link';
import { TOP_BAR_LINKS } from '@/constants/navigation';
import { Phone, User, ChevronDown } from 'lucide-react';

export default function TopBar() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [currency, setCurrency] = useState('USD');
  const [language, setLanguage] = useState('English');

  return (
    <div className="bg-brand-primary-50 text-gray-600 py-1.5 border-b border-gray-200">
      <div className="container mx-auto px-2 sm:px-4 flex justify-between items-center text-xs lg:text-sm">
        {/* Left Side: Contact */}
        <div className="flex items-center space-x-2 lg:space-x-4">
          <div className="relative flex items-center space-x-1 lg:space-x-2">
            <button
              className="lg:pointer-events-none focus:outline-none flex items-center"
              onClick={() => setShowTooltip(!showTooltip)}
            >
              <Phone className="w-4 h-4 lg:w-4 lg:h-4 text-brand-primary-600 lg:text-gray-600" />
            </button>
            <span className="hidden lg:inline">Support: +880 1834140688</span>

            {/* Mobile Tooltip */}
            {showTooltip && (
              <div className="absolute top-[calc(100%+8px)] left-0 w-max bg-gray-800 text-white text-xs px-3 py-1.5 rounded shadow-lg lg:hidden z-50 animate-in fade-in zoom-in-95 duration-200">
                Support: +880 1834140688
                <div className="absolute bottom-full left-1 border-[5px] border-transparent border-b-gray-800"></div>
              </div>
            )}
          </div>
          <span className="text-gray-300">|</span>
          <Link href={TOP_BAR_LINKS[0].href} className="hover:text-brand-primary-600 transition-colors text-xs lg:text-sm font-medium lg:font-normal">
            <span className="lg:hidden">Track Order</span>
            <span className="hidden lg:inline">{TOP_BAR_LINKS[0].label}</span>
          </Link>
        </div>

        {/* Right Side: Links & Auth */}
        <div className="flex items-center space-x-3 lg:space-x-4">
          <Link href={TOP_BAR_LINKS[1].href} className="text-brand-primary-600 font-bold hover:text-brand-primary-800 transition-colors hidden md:block ">
            {TOP_BAR_LINKS[1].label}
          </Link>
          <span className="hidden md:inline text-gray-300">|</span>
          <div className="flex items-center space-x-2">
            {/* Currency Dropdown */}
            <div className="relative">
              <button
                className="flex items-center space-x-1 hover:text-brand-primary-600 transition-colors focus:outline-none"
                onClick={() => { setIsCurrencyOpen(!isCurrencyOpen); setIsLanguageOpen(false); }}
              >
                <span className="text-gray-900 font-medium">{currency}</span>
                <ChevronDown className={`w-3 h-3 text-gray-500 transition-transform duration-200 ${isCurrencyOpen ? 'rotate-180' : ''}`} />
              </button>

              {isCurrencyOpen && (
                <div className="absolute top-[calc(100%+4px)] right-0 w-20 bg-white shadow-lg border border-gray-100 rounded-md z-50 animate-in fade-in zoom-in-95 duration-200">
                  <ul className="flex flex-col py-1">
                    {['USD', 'BDT'].map((curr) => (
                      <li key={curr}>
                        <button
                          className="w-full text-left px-3 py-1.5 text-xs lg:text-sm hover:bg-brand-primary-50 hover:text-brand-primary-600 transition-colors"
                          onClick={() => { setCurrency(curr); setIsCurrencyOpen(false); }}
                        >
                          {curr}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <span className="text-gray-300">|</span>

            {/* Language Dropdown */}
            <div className="relative">
              <button
                className="flex items-center space-x-1 hover:text-brand-primary-600 transition-colors focus:outline-none"
                onClick={() => { setIsLanguageOpen(!isLanguageOpen); setIsCurrencyOpen(false); }}
              >
                <span className="text-gray-900 font-medium">{language}</span>
                <ChevronDown className={`w-3 h-3 text-gray-500 transition-transform duration-200 ${isLanguageOpen ? 'rotate-180' : ''}`} />
              </button>

              {isLanguageOpen && (
                <div className="absolute top-[calc(100%+4px)] right-0 w-24 bg-white shadow-lg border border-gray-100 rounded-md z-50 animate-in fade-in zoom-in-95 duration-200">
                  <ul className="flex flex-col py-1">
                    {['English', 'Bangla'].map((lang) => (
                      <li key={lang}>
                        <button
                          className="w-full text-left px-3 py-1.5 text-xs lg:text-sm hover:bg-brand-primary-50 hover:text-brand-primary-600 transition-colors"
                          onClick={() => { setLanguage(lang); setIsLanguageOpen(false); }}
                        >
                          {lang}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          <span className="text-gray-300">|</span>
          <Link href="/login" className="flex items-center space-x-1 lg:space-x-2 hover:text-brand-primary-600 transition-colors">
            <User className="w-4 h-4 lg:w-5 lg:h-5" />
            <span className="whitespace-nowrap">Login / Register</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
