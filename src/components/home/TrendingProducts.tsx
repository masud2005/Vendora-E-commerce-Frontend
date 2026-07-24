'use client';

import { useState } from 'react';
import TrendingProductCard from './TrendingProductCard';
import VerifiedSellers from './VerifiedSellers';

type TabKey = 'featured' | 'onSale' | 'topRated';

const productsData: Record<TabKey, any[]> = {
  featured: [
    {
      id: 1,
      name: "Elite Series Leather Strap Designer Watch",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=400",
      price: 185.00,
      rating: 4,
      reviews: 45
    },
    {
      id: 2,
      name: "Nikon Z-Series Professional Mirrorless Camera",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=400",
      price: 2499.00,
      rating: 5,
      reviews: 120
    },
    {
      id: 3,
      name: "Nordic Comfort Home Accent Lounge Chair",
      image: "https://images.unsplash.com/photo-1506898667547-42e22a46e125?auto=format&fit=crop&q=80&w=400",
      price: 340.00,
      rating: 4.5,
      reviews: 82
    }
  ],
  onSale: [
    {
      id: 4,
      name: "Wireless Noise-Canceling Headphones",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=400",
      price: 199.00,
      rating: 4.8,
      reviews: 342
    },
    {
      id: 5,
      name: "Smart Fitness Tracker Watch",
      image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&q=80&w=400",
      price: 89.99,
      rating: 4.2,
      reviews: 156
    },
    {
      id: 6,
      name: "Ultra HD 4K Action Camera",
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&q=80&w=400",
      price: 249.50,
      rating: 4.6,
      reviews: 89
    }
  ],
  topRated: [
    {
      id: 7,
      name: "Premium Mechanical Gaming Keyboard",
      image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&q=80&w=400",
      price: 145.00,
      rating: 5.0,
      reviews: 512
    },
    {
      id: 8,
      name: "Ergonomic Office Chair with Lumbar Support",
      image: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&q=80&w=400",
      price: 285.00,
      rating: 5.0,
      reviews: 843
    },
    {
      id: 9,
      name: "Professional Studio Condenser Microphone",
      image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=400",
      price: 120.00,
      rating: 4.9,
      reviews: 215
    }
  ]
};

export default function TrendingProducts() {
  const [activeTab, setActiveTab] = useState<TabKey>('featured');

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">

        {/* Content Area */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">

          {/* Main Content (Left Side) */}
          <div className="lg:w-2/3 flex flex-col">

            {/* Header - Constrained to Left Column */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-200 pb-4 mb-6 gap-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Trending Products</h2>

              <div className="flex items-center space-x-6">
                <button
                  onClick={() => setActiveTab('featured')}
                  className={`font-medium pb-1  transition-colors ${activeTab === 'featured' ? 'text-brand-primary-600 border-b-2 border-brand-primary-600' : 'text-gray-500 hover:text-gray-900 border-b-2 border-transparent'}`}
                >
                  Featured
                </button>
                <button
                  onClick={() => setActiveTab('onSale')}
                  className={`font-medium pb-1  transition-colors ${activeTab === 'onSale' ? 'text-brand-primary-600 border-b-2 border-brand-primary-600' : 'text-gray-500 hover:text-gray-900 border-b-2 border-transparent'}`}
                >
                  On Sale
                </button>
                <button
                  onClick={() => setActiveTab('topRated')}
                  className={`font-medium pb-1  transition-colors ${activeTab === 'topRated' ? 'text-brand-primary-600 border-b-2 border-brand-primary-600' : 'text-gray-500 hover:text-gray-900 border-b-2 border-transparent'}`}
                >
                  Top Rated
                </button>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-5">
              {productsData[activeTab].map((product) => (
                <TrendingProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>

          {/* Sidebar (Right Side) */}
          <div className="lg:w-1/3">
            <VerifiedSellers />
          </div>

        </div>

      </div>
    </section>
  );
}
