import Image from "next/image";
import { Heart, Share2 } from "lucide-react";
import type { AdminProduct } from "@/constants/adminProducts";

interface ProductGalleryProps {
  product: AdminProduct;
  activeImage: number;
  setActiveImage: (idx: number) => void;
  currentImage: string;
}

export default function ProductGallery({ product, activeImage, setActiveImage, currentImage }: ProductGalleryProps) {
  return (
    <div className="rounded border border-gray-200 bg-white p-4 shadow-3xs">
      <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-gray-500">
        <span>{product.category}</span>
        <span>&gt;</span>
        <span>{product.subcategory}</span>
        <span>&gt;</span>
        <span className="text-gray-900">{product.title}</span>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[84px_1fr]">
        <div className="order-2 flex gap-3 overflow-x-auto pb-1 lg:order-1 lg:flex-col lg:overflow-visible custom-scrollbar">
          {product.images.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => setActiveImage(index)}
              className={`h-20 w-20 shrink-0 overflow-hidden rounded border transition-all ${activeImage === index ? "border-[#0F4C81] ring-2 ring-blue-100" : "border-gray-200 hover:border-gray-300"}`}
              aria-label={`View image ${index + 1}`}
            >
              <Image src={image} alt={`${product.title} view ${index + 1}`} width={80} height={80} unoptimized className="h-full w-full object-cover" />
            </button>
          ))}
        </div>

        <div className="order-1 space-y-3 lg:order-2">
          <div className="relative overflow-hidden rounded border border-gray-200 bg-gray-50">
            <Image src={currentImage} alt={product.title} width={1200} height={900} unoptimized className="h-105 w-full object-cover" />
            <div className="absolute right-4 top-4 flex flex-col gap-2">
              <button type="button" className="grid size-10 place-items-center rounded-full bg-white text-gray-600 shadow-sm transition-colors hover:text-rose-600" aria-label="Wishlist">
                <Heart className="size-5" />
              </button>
              <button type="button" className="grid size-10 place-items-center rounded-full bg-white text-gray-600 shadow-sm transition-colors hover:text-[#0F4C81]" aria-label="Share">
                <Share2 className="size-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
