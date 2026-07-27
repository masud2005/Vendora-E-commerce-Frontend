import Link from "next/link";

export interface ProductCardProps {
  id: number | string;
  title: string;
  price: number;
  image: string;
}

export default function ProductCard({ product }: { product: ProductCardProps }) {
  return (
    <Link
      href={`/product/${product.id}`}
      className="group bg-white rounded-lg border border-gray-200 p-3 sm:p-4 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-300 flex flex-col gap-3 h-full"
    >
      {/* Image container inside card padding */}
      <div className="aspect-square w-full overflow-hidden bg-gray-50 flex items-center justify-center relative rounded-lg border border-gray-100">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Info inside card padding */}
      <div className="flex flex-col gap-1 flex-1 justify-between">
        <h4 className="text-sm md:text-base font-semibold text-gray-800 line-clamp-2 group-hover:text-brand-primary-600 transition-colors leading-tight cursor-pointer">
          {product.title}
        </h4>
        <p className="text-base md:text-lg font-bold text-brand-primary-600 mt-1">
          ${Number(product.price).toFixed(2)}
        </p>
      </div>
    </Link>
  );
}
