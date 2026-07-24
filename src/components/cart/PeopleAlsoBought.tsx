"use client";

import ProductCard from "@/components/shared/ProductCard";

interface RecommendedProduct {
  id: number;
  title: string;
  price: number;
  image: string;
}

export default function PeopleAlsoBought() {
  const recommendations: RecommendedProduct[] = [
    {
      id: 1,
      title: "Portable SSD 1TB",
      price: 120.0,
      image: "https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 2,
      title: "Ergonomic Mouse",
      price: 55.0,
      image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 3,
      title: "Desk Lamp LED",
      price: 32.0,
      image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 4,
      title: "Linen Coasters",
      price: 18.0,
      image: "https://images.unsplash.com/photo-1616627561950-9f746e330187?auto=format&fit=crop&q=80&w=400",
    },
  ];

  return (
    <div className="mt-10 sm:mt-12">
      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-5 sm:mb-6">
        People Also Bought
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-5">
        {recommendations.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
