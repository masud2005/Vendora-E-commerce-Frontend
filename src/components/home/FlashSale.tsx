'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Zap, Heart, ShoppingCart } from 'lucide-react';
import FlashSaleHeader from './FlashSaleHeader';
import FlashSaleCard from './FlashSaleCard';

const flashSaleProducts = [
  {
    id: 1,
    name: "Zenith Pro Max Smartphone",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351cb315?auto=format&fit=crop&q=80&w=300",
    currentPrice: 899,
    originalPrice: 1299,
    discount: 35,
    soldPercentage: 60,
    soldAmount: 24,
    totalAmount: 40,
  },
  {
    id: 2,
    name: "SoundWaves Elite Noise Cancelling",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=300",
    currentPrice: 240,
    originalPrice: 299,
    discount: 20,
    soldPercentage: 40,
    soldAmount: 20,
    totalAmount: 50,
  },
  {
    id: 3,
    name: "Titanium X Chrono Watch",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=300",
    currentPrice: 450,
    originalPrice: 529,
    discount: 15,
    soldPercentage: 85,
    soldAmount: 17,
    totalAmount: 20,
  },
  {
    id: 4,
    name: "SwiftRun Pro Z Sneakers",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=300",
    currentPrice: 75,
    originalPrice: 150,
    discount: 50,
    soldPercentage: 25,
    soldAmount: 25,
    totalAmount: 100,
  },
  {
    id: 5,
    name: "Vision Tab Ultra Tablet",
    image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&q=80&w=300",
    currentPrice: 1079,
    originalPrice: 1199,
    discount: 10,
    soldPercentage: 90,
    soldAmount: 9,
    totalAmount: 10,
  }
];

export default function FlashSale() {
  return (
    <section className="bg-[#1C60A6] py-12">
      <div className="container mx-auto px-4">

        <FlashSaleHeader />

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-5">
          {flashSaleProducts.map((product) => (
            <FlashSaleCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
}
