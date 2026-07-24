import { Heart, ShoppingCart } from 'lucide-react';

export interface FlashSaleProduct {
  id: number;
  name: string;
  image: string;
  currentPrice: number;
  originalPrice: number;
  discount: number;
  soldPercentage: number;
  soldAmount: number;
  totalAmount: number;
}

export default function FlashSaleCard({ product }: { product: FlashSaleProduct }) {
  return (
    <div className="bg-white rounded-lg p-3 sm:p-4 flex flex-col group cursor-pointer hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden border border-white/10 hover:border-brand-primary-100">

      {/* Image & Badge */}
      <div className="relative aspect-square rounded-lg overflow-hidden mb-4 bg-gray-50/50 flex items-center justify-center">
        <span className="absolute top-2 left-2 bg-linear-to-r from-red-500 to-[#F25C54] text-white text-[10px] font-bold px-2.5 py-1 rounded-full z-10 shadow-sm shadow-red-500/20">
          -{product.discount}% OFF
        </span>

        <img
          src={product.image}
          alt={product.name}
          className="w-[85%] h-[85%] object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500 ease-out"
        />

        {/* Wishlist Button */}
        <button className="absolute top-2 right-2 p-1.5 bg-white shadow-sm hover:shadow-md rounded-full text-gray-400 hover:text-red-500 transition-all duration-300 z-10">
          <Heart className="w-4 h-4" />
        </button>

        {/* Quick Action Overlay */}
        <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/10 to-transparent pt-8 pb-3 flex items-end justify-center z-10"></div>
      </div>

      {/* Product Info */}
      <div className="flex flex-col flex-1">
        <h3 className="text-gray-900 font-semibold text-sm md:text-base mb-2 line-clamp-2 group-hover:text-brand-primary-600 transition-colors leading-snug">
          {product.name}
        </h3>

        <div className="flex items-center justify-between mb-4 mt-auto pt-2">
          <div className="flex items-end space-x-2">
            <span className="text-brand-primary-600 font-bold text-xl leading-none">
              ${product.currentPrice.toLocaleString()}
            </span>
            <span className="text-gray-400 text-xs line-through leading-none pb-0.5">
              ${product.originalPrice.toLocaleString()}
            </span>
          </div>

          {/* Quick Add to Cart Button */}
          <button className="w-8 h-8 rounded-full bg-brand-primary-600 text-white flex items-center justify-center hover:bg-brand-primary-800 transition-colors shrink-0" aria-label="Add to cart">
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>

        <div>
          {/* Progress Bar & Text */}
          <div className="flex justify-between items-center mb-1.5">
            <span className="text-[10px] text-gray-500 font-medium tracking-wide uppercase">
              Already Sold: <span className="font-bold text-gray-700">{product.soldAmount}/{product.totalAmount}</span>
            </span>
            <span className="text-[10px] text-brand-primary-600 font-bold">{product.soldPercentage}%</span>
          </div>
          <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-linear-to-r from-amber-400 to-[#F59E0B] h-full rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${product.soldPercentage}%` }}
            />
          </div>
        </div>
      </div>

    </div>
  );
}
