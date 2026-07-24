import { History } from 'lucide-react';
import ProductCard from '@/components/shared/ProductCard';

const recentlyViewedProducts = [
  {
    id: 11,
    title: "Studio Headphones",
    price: 150.00,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 12,
    title: "Red Performance Shoes",
    price: 85.00,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 13,
    title: "Modern Wristwatch",
    price: 210.00,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 14,
    title: "Smartphone Case Pro",
    price: 25.00,
    image: "https://images.unsplash.com/photo-1601784551446-20c9e07cd561?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 15,
    title: "Portable Speaker",
    price: 45.00,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&q=80&w=400",
  },
];

export default function RecentlyViewed() {
  return (
    <section className="pb-12 md:pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center space-x-3 mb-8">
          <History className="w-6 h-6 text-brand-primary-600" />
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 tracking-tight">Recently Viewed</h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-5">
          {recentlyViewedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
