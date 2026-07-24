"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

const slides = [
  {
    id: 1,
    badge: "EXCLUSIVE COLLECTION 2026",
    title: "Upgrade Your Lifestyle<br/>With <span class='text-brand-primary-600'>Vendora</span> Elite",
    description: "Discover the widest collection of authentic global brands and local artisans. Quality guaranteed with secure multi-vendor verification.",
    button1Text: "Shop Now",
    button1Link: "/shop",
    button2Text: "View Deals",
    button2Link: "/deals",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=1600",
  },
  {
    id: 2,
    badge: "NEW ARRIVALS",
    title: "Experience The Future<br/>Of <span class='text-brand-primary-600'>Smart</span> Tech",
    description: "Explore cutting-edge gadgets and next-gen electronics. Designed to elevate your everyday productivity and entertainment.",
    button1Text: "Explore Tech",
    button1Link: "/category/electronics",
    button2Text: "Learn More",
    button2Link: "/about",
    image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=1600",
  },
  {
    id: 3,
    badge: "SUMMER FASHION",
    title: "Step Into The Season<br/>With <span class='text-brand-primary-600'>Style</span>",
    description: "Refresh your wardrobe with our exclusive summer collection. Trend-setting apparel from top global fashion houses.",
    button1Text: "Shop Fashion",
    button1Link: "/category/fashion",
    button2Text: "View Lookbook",
    button2Link: "/lookbook",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=1600",
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#F0F4F8]">
      <div className="container mx-auto px-4 py-4 md:py-6">
        <div className="relative overflow-hidden grid rounded-sm">

          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`col-start-1 row-start-1 w-full h-full flex flex-col-reverse lg:flex-row transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
            >
              {/* Left Content */}
              <div className="w-full lg:w-[45%] flex flex-col pt-6 md:pt-0">
                <div className="flex-1 flex flex-col justify-center">
                  <span className="text-brand-secondary-600 font-bold tracking-widest text-[10px] sm:text-xs lg:text-sm uppercase mb-2 sm:mb-4 block">
                    {slide.badge}
                  </span>
                  <h1
                    className="text-3xl sm:text-4xl md:text-5xl xl:text-[56px] font-medium text-gray-900 leading-[1.2] lg:leading-[1.15] mb-3 sm:mb-6"
                    dangerouslySetInnerHTML={{ __html: slide.title }}
                  />
                  <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-6 sm:mb-10 max-w-[95%] lg:max-w-[90%] leading-relaxed">
                    {slide.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                    <Link
                      href={slide.button1Link}
                      className="bg-brand-primary-600 hover:bg-brand-primary-800 text-white font-semibold py-2.5 sm:py-3 px-6 sm:px-8 rounded-lg transition-colors shadow-sm text-sm sm:text-base"
                    >
                      {slide.button1Text}
                    </Link>
                    <Link
                      href={slide.button2Link}
                      className="bg-transparent border-2 border-brand-primary-600 text-brand-primary-600 hover:bg-brand-primary-50 font-semibold py-2 sm:py-2.5 px-6 sm:px-8 rounded-lg transition-colors text-sm sm:text-base"
                    >
                      {slide.button2Text}
                    </Link>
                  </div>
                </div>

                {/* Slider Controls */}
                <div className="flex space-x-2 mt-6 lg:mt-8 shrink-0">
                  {slides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-1 sm:h-1.5 rounded-full transition-all duration-300 ${idx === currentSlide ? 'w-8 sm:w-10 bg-brand-primary-600' : 'w-8 sm:w-10 bg-gray-300 hover:bg-gray-400'
                        }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Right Image */}
              <div className="w-full lg:w-[55%] h-64 sm:h-80 lg:h-auto relative shrink-0">
                <img
                  src={slide.image}
                  alt="Hero Image"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
