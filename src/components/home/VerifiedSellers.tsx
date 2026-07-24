import Link from 'next/link';
import { BadgeCheck, ChevronRight } from 'lucide-react';

const verifiedSellers = [
  {
    id: 1,
    name: "ElectroHub Official",
    stats: "45.2k Products • 98% Rating",
    logo: "https://ui-avatars.com/api/?name=EH&background=f0f4f8&color=185fa5&rounded=true"
  },
  {
    id: 2,
    name: "Vogue Boutique",
    stats: "12.8k Products • 95% Rating",
    logo: "https://ui-avatars.com/api/?name=VB&background=f0f4f8&color=185fa5&rounded=true"
  },
  {
    id: 3,
    name: "FixIt Pro Hardware",
    stats: "8.1k Products • 99% Rating",
    logo: "https://ui-avatars.com/api/?name=FP&background=f0f4f8&color=185fa5&rounded=true"
  }
];

export default function VerifiedSellers() {
  return (
    <div className="border border-gray-200 rounded-lg p-5 h-full flex flex-col bg-white">

      {/* Verified Sellers Header */}
      <div className="flex items-center space-x-2 mb-6">
        <BadgeCheck className="w-5 h-5 text-teal-600" />
        <h3 className="text-gray-900 font-semibold text-lg">Verified Sellers</h3>
      </div>

      {/* Sellers List */}
      <div className="flex flex-col space-y-6 mb-8">
        {verifiedSellers.map((seller) => (
          <Link href={`/seller/${seller.id}`} key={seller.id} className="flex items-center group">
            <img
              src={seller.logo}
              alt={seller.name}
              className="w-12 h-12 rounded-lg border border-gray-100 object-cover mr-4 shadow-sm"
            />
            <div className="flex-1">
              <h4 className="text-gray-900 font-medium text-sm mb-0.5 group-hover:text-brand-primary-600 transition-colors">
                {seller.name}
              </h4>
              <p className="text-gray-500 text-xs">{seller.stats}</p>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-brand-primary-600 transition-colors" />
          </Link>
        ))}
      </div>

      {/* Promotional Banner */}
      <div className="mt-auto bg-[#F0F6FC] rounded-lg p-5">
        <h4 className="text-[#185FA5] font-semibold mb-2">Sell on Vendora</h4>
        <p className="text-gray-700 text-sm mb-4">Start your global business today</p>
        <Link
          href="/seller/register"
          className="inline-block bg-[#185FA5] hover:bg-[#134D86] text-white text-xs font-semibold px-5 py-2.5 rounded transition-colors"
        >
          Register as Seller
        </Link>
      </div>

    </div>
  );
}
