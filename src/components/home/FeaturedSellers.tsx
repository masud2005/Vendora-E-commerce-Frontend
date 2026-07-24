import Link from 'next/link';
import { BadgeCheck } from 'lucide-react';

const featuredSellers = [
  {
    id: 1,
    name: "ElectroHub Official",
    stats: "45.2k Products • 98% Positive Feedback",
    logo: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: 2,
    name: "Vogue Boutique",
    stats: "12.8k Products • 95% Positive Feedback",
    logo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: 3,
    name: "FixIt Pro Hardware",
    stats: "8.1k Products • 99% Positive Feedback",
    logo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150"
  }
];

export default function FeaturedSellers() {
  return (
    <section className="pb-12 md:pb-16 -mt-5">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-gray-900 tracking-tight mb-2">Featured Verified Sellers</h2>
          <p className="text-gray-500 text-base">Shop with confidence from our top-rated partners</p>
        </div>

        {/* Sellers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredSellers.map((seller) => (
            <div key={seller.id} className="bg-white rounded-lg border border-gray-200 p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-20 h-20 rounded-lg overflow-hidden mb-4 border-2 border-gray-100 shadow-inner">
                <img src={seller.logo} alt={seller.name} className="w-full h-full object-cover" />
              </div>

              <h3 className="font-bold text-gray-900 text-lg mb-1">{seller.name}</h3>

              <div className="flex items-center text-brand-secondary-600 mb-3 space-x-1">
                <BadgeCheck className="w-4 h-4" />
                <span className="text-sm font-semibold">Verified Store</span>
              </div>

              <p className="text-gray-500 text-sm mb-6">{seller.stats}</p>

              <Link
                href={`/seller/${seller.id}`}
                className="mt-auto px-6 py-2 bg-[#F0F6FC] text-[#185FA5] hover:bg-[#185FA5] hover:text-white font-semibold text-base rounded transition-colors w-full sm:w-auto"
              >
                Visit Store
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
