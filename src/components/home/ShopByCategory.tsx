import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

const categories = [
  {
    id: 1,
    name: "Mobiles",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=300" // Smartphones 
  },
  {
    id: 2,
    name: "Laptops",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=300" // Laptop
  },
  {
    id: 3,
    name: "Fashion",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=300" // Fashion Model
  },
  {
    id: 4,
    name: "Appliances",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=300" // Refrigerator / Appliance
  },
  {
    id: 5,
    name: "Furniture",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=300" // Couch / Furniture
  },
  {
    id: 6,
    name: "Gaming",
    image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1a1c?auto=format&fit=crop&q=80&w=300" // PS5 Controller
  },
];

export default function ShopByCategory() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Shop by Category</h2>
            <p className="text-gray-500 text-sm sm:text-base">Find exactly what you're looking for</p>
          </div>
          <Link
            href="/categories"
            className="flex items-center text-brand-primary-600 font-medium hover:text-brand-primary-800 transition-colors text-sm sm:text-base"
          >
            View All
            <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 sm:gap-6 lg:gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/category/${category.name.toLowerCase()}`}
              className="group flex flex-col items-center"
            >
              {/* Image Container with Premium Hover */}
              <div className="w-full aspect-square rounded-xl overflow-hidden bg-white shadow-sm border border-gray-100/80 mb-5 relative transition-all duration-500 ease-out group-hover:shadow-[0_20px_40px_-15px_rgba(24,95,165,0.15)] group-hover:-translate-y-1.5 group-hover:border-brand-primary-100">

                {/* Overlay for premium gloss effect */}
                <div className="absolute inset-0 bg-linear-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>

              {/* Text Content */}
              <div className="flex flex-col items-center overflow-hidden">
                <h3 className="font-semibold text-gray-800 text-sm sm:text-base text-center transition-all duration-300 group-hover:text-brand-primary-600 group-hover:-translate-y-0.5">
                  {category.name}
                </h3>
                {/* Small indicator dot that appears on hover */}
                <div className="w-1.5 h-1.5 rounded-full bg-brand-primary-500 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-1 mt-1" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
