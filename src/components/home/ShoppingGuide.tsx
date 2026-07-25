"use client";

import Link from "next/link";

export default function ShoppingGuide() {
  const articles = [
    {
      id: 1,
      tag: "LIFESTYLE",
      image: "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?auto=format&fit=crop&q=80&w=800",
      date: "October 24, 2024 • 5 min read",
      title: "10 Must-Have Smart Gadgets to Modernize Your Home Office"
    },
    {
      id: 2,
      tag: "FASHION",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=800",
      date: "October 22, 2024 • 4 min read",
      title: "Winter Fashion Trends: How to Stay Warm and Stylish"
    },
    {
      id: 3,
      tag: "SUSTAINABILITY",
      image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&q=80&w=800",
      date: "October 20, 2024 • 6 min read",
      title: "The Ultimate Guide to Choosing Sustainable Multi-Vendor Platforms"
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-medium text-gray-900 tracking-tight">Shopping Guide & News</h2>
          <Link href="#" className="text-blue-700 hover:text-blue-800 font-semibold text-sm">
            View Blog
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {articles.map((article) => (
            <Link href="#" key={article.id} className="group block cursor-pointer">
              <div className="relative rounded-lg overflow-hidden aspect-16/10 mb-4 bg-gray-100">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full shadow-sm">
                  <span className="text-[10px] font-bold text-blue-900 tracking-wide uppercase">{article.tag}</span>
                </div>
              </div>
              <p className="text-xs text-gray-500 mb-2 font-medium">{article.date}</p>
              <h3 className="font-semibold text-gray-900 text-base md:text-lg leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">
                {article.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
