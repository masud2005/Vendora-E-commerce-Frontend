"use client";

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
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5">
        {recommendations.map((product) => (
          <div
            key={product.id}
            className="group bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-300 flex flex-col"
          >
            {/* Image container */}
            <div className="aspect-square w-full overflow-hidden bg-gray-50 flex items-center justify-center relative">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Info */}
            <div className="p-3 flex flex-col flex-1 justify-between gap-1">
              <h4 className="text-xs sm:text-sm font-semibold text-gray-800 line-clamp-2 hover:text-brand-primary-600 transition-colors leading-tight cursor-pointer">
                {product.title}
              </h4>
              <p className="text-xs sm:text-sm font-bold text-brand-primary-600 mt-1">
                ${product.price.toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
