import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

const newArrivalProducts = [
  {
    id: 1,
    name: "Premium Slim Denim",
    image: "https://images.unsplash.com/photo-1542272604-780c40f050f5?auto=format&fit=crop&q=80&w=400", // using jeans image instead of abstract logo for realism
    price: 59.00
  },
  {
    id: 2,
    name: "Classic Watch",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=400",
    price: 129.00
  },
  {
    id: 3,
    name: "Mirrorless Hub",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=400",
    price: 999.00
  },
  {
    id: 4,
    name: "Essenze Parfum",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=400", // chic model or perfume
    price: 85.00
  },
  {
    id: 5,
    name: "Wool Trench Coat",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=400", // leather jacket / coat
    price: 199.00
  }
];

export default function NewArrivals() {
  return (
    <section className="py-12 md:py-16 bg-[#F4F5F7]">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-medium text-gray-900 tracking-tight">New Arrivals</h2>
          <Link
            href="/new-arrivals"
            className="flex items-center text-brand-primary-600 font-semibold hover:text-brand-primary-800 transition-colors text-sm md:text-base"
          >
            View All
            <ChevronRight className="w-4 h-4 ml-0.5" />
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
          {newArrivalProducts.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className="bg-white rounded-lg overflow-hidden flex flex-col group border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="aspect-4/5 bg-[#1A1A1A] relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 ease-in-out grayscale group-hover:grayscale-0 opacity-90 group-hover:opacity-100"
                />
              </div>

              {/* Content */}
              <div className="p-4 md:p-5 flex flex-col">
                <h3 className="text-gray-900 font-bold text-sm md:text-base mb-1 line-clamp-1 group-hover:text-brand-primary-600 transition-colors">
                  {product.name}
                </h3>
                <div className="text-brand-primary-600 font-bold text-base md:text-lg">
                  ${product.price}
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
