"use client";

import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from '@/components/shared/ProductCard';

const bestSellingProducts = [
  {
    id: 1,
    name: "Smartphone Elite X",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=400", // fixed placeholder
    price: 699.00
  },
  {
    id: 2,
    name: "Wireless Noise Cancelling Headset",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=400",
    price: 299.00
  },
  {
    id: 3,
    name: "Modern Home Office Chair",
    image: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&q=80&w=400",
    price: 245.00
  },
  {
    id: 4,
    name: "Pro Gaming Laptop",
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=400",
    price: 1499.00
  },
  {
    id: 5,
    name: "4K Action Camera",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&q=80&w=400",
    price: 399.00
  },
  {
    id: 6,
    name: "Smart Fitness Watch",
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&q=80&w=400",
    price: 199.00
  }
];

export default function BestSellingProducts() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      // Calculate approximate card width including gap
      const cardWidth = scrollContainerRef.current.firstElementChild?.clientWidth || 0;
      const gap = 20; // Approx gap in px
      scrollContainerRef.current.scrollBy({ left: -(cardWidth + gap), behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.firstElementChild?.clientWidth || 0;
      const gap = 20;
      scrollContainerRef.current.scrollBy({ left: cardWidth + gap, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 md:py-16 ">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-medium text-gray-900 tracking-tight">Best Selling Products</h2>
          <div className="flex items-center gap-2">
            <button
              onClick={scrollLeft}
              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-white hover:shadow-sm transition-all text-gray-600 bg-white/50"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={scrollRight}
              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-white hover:shadow-sm transition-all text-gray-600 bg-white/50"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Products Slider */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-2 md:gap-5 pb-4 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {bestSellingProducts.map((product) => (
            <div key={product.id} className="w-[calc(50%-0.5rem)] md:w-[calc(25%-0.9375rem)] lg:w-[calc(20%-1rem)] flex-none snap-start h-auto">
              <ProductCard product={{ ...product, title: product.name }} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
