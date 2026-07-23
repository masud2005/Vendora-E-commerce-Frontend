"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutGrid, ChevronDown, Zap } from 'lucide-react';
import { MAIN_NAV_LINKS } from '@/constants/navigation';
import MegaMenu from './MegaMenu';

export default function BottomNav() {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="hidden lg:block bg-brand-primary-600 border-t border-brand-primary-400/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center">
          {/* All Categories Button */}
          <div
            className="relative"
            onMouseEnter={() => setIsMegaMenuOpen(true)}
            onMouseLeave={() => setIsMegaMenuOpen(false)}
          >
            <button className="bg-brand-accent-200 text-gray-900 flex items-center justify-between px-6 py-3.5 font-bold text-sm lg:text-base w-50 lg:w-60 hover:bg-brand-accent-400 transition-colors">
              <div className="flex items-center">
                <LayoutGrid className="w-5 h-5 mr-2 lg:mr-3" />
                <span>All Categories</span>
              </div>
              <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isMegaMenuOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Mega Menu Dropdown */}
            <MegaMenu isOpen={isMegaMenuOpen} />
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex ml-4 lg:ml-8 space-x-1 overflow-x-auto whitespace-nowrap no-scrollbar flex-1">
            {MAIN_NAV_LINKS.map((link, idx) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={idx}
                  href={link.href}
                  className={`px-4 py-3.5 text-base font-semibold transition-colors flex items-center ${isActive
                    ? 'text-brand-accent-200'
                    : 'text-white hover:text-brand-accent-200'
                    }`}
                >
                  {link.icon === 'zap' && <Zap className="w-4 h-4 mr-1.5 fill-current" />}
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
}
