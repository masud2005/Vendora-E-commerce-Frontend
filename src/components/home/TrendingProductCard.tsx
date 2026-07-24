import { Star } from 'lucide-react';

export interface TrendingProduct {
  id: number;
  name: string;
  image: string;
  price: number;
  rating: number;
  reviews: number;
}

export default function TrendingProductCard({ product }: { product: TrendingProduct }) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden flex flex-col group hover:shadow-lg transition-shadow duration-300">

      {/* Image */}
      <div className="aspect-4/5 bg-gray-50 relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">

        {/* Rating */}
        <div className="flex items-center space-x-1 mb-2">
          <div className="flex text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-amber-400' : 'text-gray-300 fill-gray-300'}`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500">({product.reviews})</span>
        </div>

        {/* Title */}
        <h3 className="text-gray-900 font-medium text-sm mb-3 line-clamp-2 group-hover:text-brand-primary-600 transition-colors">
          {product.name}
        </h3>

        {/* Price */}
        <div className="text-brand-primary-700 font-bold text-lg mb-4 mt-auto">
          ${product.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </div>

        {/* Quick Add Button */}
        <button className="w-full py-2 border border-brand-primary-600 text-brand-primary-600 rounded font-medium text-sm hover:bg-brand-primary-50 transition-colors">
          Quick Add
        </button>
      </div>
    </div>
  );
}
