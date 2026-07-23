import Link from 'next/link';
import { Star } from 'lucide-react';
import { MEGA_MENU_CATEGORIES } from '@/constants/navigation';

interface MegaMenuProps {
  isOpen: boolean;
}

export default function MegaMenu({ isOpen }: MegaMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="absolute top-full left-0 w-[95vw] md:w-175 lg:w-200 xl:w-250 max-w-[calc(100vw-2rem)] bg-white shadow-lg border border-gray-100 z-50 rounded-b-md p-4 md:p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Category Columns */}
        {MEGA_MENU_CATEGORIES.map((category, idx) => (
          <div key={idx} className="flex flex-col">
            <h3 className="text-brand-primary-600 font-semibold mb-4 border-b border-gray-200 pb-2">
              {category.title}
            </h3>
            <ul className="space-y-3">
              {category.links.map((link, linkIdx) => (
                <li key={linkIdx}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-brand-primary-600 text-sm transition-colors block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Promotional Card */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-1 bg-brand-primary-50 rounded-lg p-6 flex flex-col items-center justify-center text-center">
          <Star className="w-10 h-10 text-brand-primary-600 mb-3" />
          <h4 className="text-gray-900 font-semibold mb-1">New Deals!</h4>
          <p className="text-gray-600 text-sm md:text-base mb-4">Up to 70% off on Tech</p>
          <Link
            href="/deals"
            className="bg-brand-primary-600 hover:bg-brand-primary-800 text-white text-base font-medium py-2 px-6 rounded-full transition-colors"
          >
            Explore Now
          </Link>
        </div>
      </div>
    </div>
  );
}
