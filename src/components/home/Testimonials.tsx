"use client";

import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote: "Vendora has completely changed the way I shop online. The quality verification gives me peace of mind every time I order premium electronics.",
      author: "Sarah Jenkins",
      role: "Verified Buyer • New York",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
    },
    {
      id: 2,
      quote: "The customer support is incredible. I had a return issue and it was resolved in less than 24 hours. Truly world-class service.",
      author: "Michael Reed",
      role: "Loyal Customer • London",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
    },
    {
      id: 3,
      quote: "Vendora's selection of local artisans is unmatched. I found beautiful handmade decor that I couldn't find anywhere else.",
      author: "Amina Khatun",
      role: "Premium Member • Dhaka",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
    },
    {
      id: 4,
      quote: "I love the fast shipping and the variety of products available. It's my go-to place for all shopping needs.",
      author: "David Chen",
      role: "Frequent Shopper • Toronto",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
    },
    {
      id: 5,
      quote: "The user interface is seamless and the checkout process is incredibly smooth. Highly recommend Vendora!",
      author: "Elena Rodriguez",
      role: "Verified Buyer • Madrid",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150",
    }
  ];

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.firstElementChild?.clientWidth || 0;
      const gap = 24; // 1.5rem for gap-6
      scrollContainerRef.current.scrollBy({ left: -(cardWidth + gap), behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.firstElementChild?.clientWidth || 0;
      const gap = 24;
      scrollContainerRef.current.scrollBy({ left: cardWidth + gap, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 md:py-16 bg-[#f4f6f8]">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-medium text-gray-900 tracking-tight mb-2">What Our Customers Say</h2>
            <p className="text-gray-500">Real stories from our global community</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={scrollLeft}
              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-white hover:shadow-sm transition-all text-gray-600 bg-transparent"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={scrollRight}
              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-white hover:shadow-sm transition-all text-gray-600 bg-transparent"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((t) => (
            <div key={t.id} className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] flex-none snap-start">
              <div className="bg-white rounded-lg p-8 shadow-sm flex flex-col h-full border border-gray-100 min-h-62.5">
                <div className="text-gray-200 mb-2">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                  </svg>
                </div>
                <p className="text-gray-600 italic mb-8 grow text-sm md:text-base leading-relaxed">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <img src={t.avatar} alt={t.author} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">{t.author}</h4>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>



      </div>
    </section>
  );
}
