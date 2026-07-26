"use client";

import { useState } from "react";
import { 
  ArrowRight, 
  Mail, 
  Eye,
  ChevronRight
} from "lucide-react";

interface BlogPost {
  id: string;
  category: string;
  image: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  categoryId: string;
}

const allPosts: BlogPost[] = [
  {
    id: "post-1",
    category: "TECHNOLOGY",
    categoryId: "reviews",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600",
    title: "7 Gadgets Every Digital Nomad Needs for Maximum Productivity",
    excerpt: "Discover the lightweight gear that allows our top remote workers to stay connected and efficient while traveling the world...",
    date: "OCT 24, 2024",
    readTime: "5 MIN READ",
  },
  {
    id: "post-2",
    category: "LIFESTYLE",
    categoryId: "buyer",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=600",
    title: "The Shift to Slow Fashion: Quality Over Quantity in 2025",
    excerpt: "Why consumers are ditching fast fashion for durable, ethically made garments found right here on Vendora's curated lists...",
    date: "OCT 22, 2024",
    readTime: "4 MIN READ",
  },
  {
    id: "post-3",
    category: "SECURITY",
    categoryId: "tips",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=600",
    title: "Securing Your Digital Storefront: A Checklist for New Sellers",
    excerpt: "Protecting your data and your customers' trust is paramount. Learn the fundamental steps to securing your Vendora account...",
    date: "OCT 19, 2024",
    readTime: "6 MIN READ",
  },
  {
    id: "post-4",
    category: "EQUIPMENT",
    categoryId: "tips",
    image: "https://images.unsplash.com/photo-1452780212940-6f5c0d14d84a?auto=format&fit=crop&q=80&w=600",
    title: "Camera Gear 101: Taking Professional Product Photos on a Budget",
    excerpt: "You don't need a $5,000 setup to make your products look premium. Our experts share the lighting hacks you need...",
    date: "OCT 15, 2024",
    readTime: "10 MIN READ",
  },
];

const popularPosts = [
  {
    id: "pop-1",
    title: "The Ultimate Work-from-Home Desk Setup Guide",
    views: "12K Views",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=100",
  },
  {
    id: "pop-2",
    title: "How Sustainable Packaging Boosts Customer Loyalty",
    views: "8.5K Views",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=100",
  },
  {
    id: "pop-3",
    title: "Understanding Q4 Market Trends for Sellers",
    views: "6.2K Views",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=100",
  },
];

const tags = [
  "E-commerce",
  "Logistics",
  "Sourcing",
  "Branding",
  "Design",
  "Trends",
  "Success Stories",
];

interface BlogGridProps {
  activeCategory: string;
}

export default function BlogGrid({ activeCategory }: BlogGridProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  // Filter posts based on active tab category
  const filteredPosts = activeCategory === "all"
    ? allPosts
    : allPosts.filter(post => post.categoryId === activeCategory);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 pb-16">
      
      {/* Left Column: Blog Feed */}
      <div className="md:col-span-2 flex flex-col justify-between">
        
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-10">
            {filteredPosts.map((post) => (
              <article key={post.id} className="group cursor-pointer flex flex-col h-full">
                
                {/* Image Wrapper */}
                <div className="relative aspect-16/10 rounded overflow-hidden mb-4 shadow-sm">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-[10px] font-black tracking-widest text-brand-primary-800 uppercase px-2.5 py-1 rounded shadow-xs">
                    {post.category}
                  </span>
                </div>

                {/* Meta details */}
                <span className="text-[10px] sm:text-xs text-gray-400 font-bold uppercase tracking-wider mb-2">
                  {post.date} &bull; {post.readTime}
                </span>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-snug group-hover:text-brand-primary-800 transition-colors duration-200 mb-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs sm:text-sm text-gray-500 font-medium leading-relaxed line-clamp-3 mb-3">
                  {post.excerpt}
                </p>

                {/* Read Link */}
                <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-brand-primary-600 hover:text-brand-primary-800 mt-auto hover:gap-2.5 transition-all duration-200">
                  Read More <ChevronRight className="size-3.5" />
                </span>

              </article>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-20 px-4 bg-white border border-gray-150 rounded-lg shadow-xs flex flex-col items-center">
            <h4 className="text-lg font-bold text-gray-900">No stories found</h4>
            <p className="text-sm text-gray-500 font-medium mt-1">
              We couldn't find any articles under this category yet. Stay tuned for new updates!
            </p>
          </div>
        )}



      </div>

      {/* Right Column: Sidebar */}
      <div className="flex flex-col gap-8">
        
        {/* Widget 1: Popular Posts */}
        <div>
          <h4 className="text-base sm:text-lg font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4">
            Popular Posts
          </h4>
          <div className="space-y-4">
            {popularPosts.map((post) => (
              <div key={post.id} className="flex items-center gap-3.5 group cursor-pointer py-1">
                <img
                  src={post.image}
                  alt={post.title}
                  className="size-16 rounded-md object-cover shrink-0 shadow-xs border border-gray-100"
                />
                <div>
                  <h5 className="text-xs sm:text-sm font-bold text-gray-900 group-hover:text-brand-primary-800 transition-colors leading-tight line-clamp-2">
                    {post.title}
                  </h5>
                  <p className="text-[10px] sm:text-xs text-gray-400 font-medium mt-1 flex items-center gap-1">
                    <Eye className="size-3.5" /> {post.views} &bull; {post.readTime}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Widget 2: Weekly Insights Newsletter Card */}
        <div className="bg-brand-primary-50/50 border border-brand-primary-100/60 rounded-lg px-3 sm:px-4 py-3 sm:py-4 text-center flex flex-col items-center shadow-xs">
          <div className="size-12 rounded-full bg-[#E2EDF8] text-brand-primary-800 flex items-center justify-center mb-4">
            <Mail className="size-5 stroke-[1.8]" />
          </div>
          <h4 className="text-lg font-extrabold text-gray-950">
            Weekly Insights
          </h4>
          <p className="mt-2 text-xs sm:text-sm text-gray-500 font-medium leading-relaxed max-w-xs">
            Join 50,000+ sellers and buyers who receive our weekly curated marketplace digest.
          </p>

          {subscribed ? (
            <div className="mt-4 p-3 bg-brand-secondary-50 text-brand-secondary-800 rounded text-xs font-bold w-full border border-brand-secondary-200/50">
              Subscription Successful!
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="w-full">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="w-full bg-white border border-gray-200 rounded px-4 py-2.5 text-xs sm:text-sm outline-none mt-4 focus:ring-2 focus:ring-brand-primary-200 transition-all text-gray-800 placeholder-gray-400"
              />
              <button
                type="submit"
                className="w-full bg-brand-primary-800 hover:bg-brand-primary-900 text-white font-bold py-2.5 rounded text-xs sm:text-sm transition-all duration-200 mt-3 shadow-xs cursor-pointer active:translate-y-px"
              >
                Subscribe Now
              </button>
            </form>
          )}

          <p className="text-[10px] text-gray-400 font-medium mt-3 leading-tight">
            Unsubscribe at any time. Read our <a href="/privacy" className="underline hover:text-gray-600">Privacy Policy</a>.
          </p>
        </div>

        {/* Widget 3: Explore Tags */}
        <div>
          <h4 className="text-base sm:text-lg font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4">
            Explore Tags
          </h4>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, idx) => (
              <button
                key={idx}
                className="bg-white hover:bg-gray-50 border border-gray-200 hover:border-gray-300 text-xs font-bold text-gray-600 hover:text-gray-900 px-3 py-1.5 rounded transition-colors cursor-pointer"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
