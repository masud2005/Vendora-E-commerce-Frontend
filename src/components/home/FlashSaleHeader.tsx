'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Zap } from 'lucide-react';

export default function FlashSaleHeader() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 45,
    seconds: 12
  });

  // Simple countdown timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else {
          if (minutes > 0) {
            minutes--;
            seconds = 59;
          } else {
            if (hours > 0) {
              hours--;
              minutes = 59;
              seconds = 59;
            }
          }
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format with leading zero
  const formatTime = (time: number) => time.toString().padStart(2, '0');

  return (
    <div className="grid grid-cols-2 md:flex md:items-center mb-6 md:mb-8 gap-y-4 md:gap-y-0 md:gap-x-4">

      {/* Title */}
      <div className="flex items-center space-x-1 md:space-x-2 order-1">
        <Zap className="w-6 h-6 md:w-8 md:h-8 text-amber-400 fill-amber-400" />
        <h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight">Flash Sale</h2>
      </div>

      {/* Timer */}
      <div className="col-span-2 md:col-span-1 flex items-center space-x-2 md:space-x-3 bg-white/10 rounded-md px-3 md:px-4 py-2 w-full md:w-auto justify-center md:justify-start order-3 md:order-2 md:ml-6">
        <span className="text-white/80 text-sm font-medium mr-1">Ending in:</span>
        <div className="flex items-center space-x-1 md:space-x-1.5">
          <div className="bg-[#F25C54] text-white text-sm md:text-base font-semibold px-1.5 md:px-2 py-0.5 md:py-1 rounded min-w-7 md:min-w-9 text-center">
            {formatTime(timeLeft.hours)}
          </div>
          <span className="text-white font-bold">:</span>
          <div className="bg-[#F25C54] text-white text-sm md:text-base font-semibold px-1.5 md:px-2 py-0.5 md:py-1 rounded min-w-7 md:min-w-9 text-center">
            {formatTime(timeLeft.minutes)}
          </div>
          <span className="text-white font-bold">:</span>
          <div className="bg-[#F25C54] text-white text-sm md:text-base font-semibold px-1.5 md:px-2 py-0.5 md:py-1 rounded min-w-7 md:min-w-9 text-center">
            {formatTime(timeLeft.seconds)}
          </div>
        </div>
      </div>

      {/* View All Button */}
      <div className="flex justify-end order-2 md:order-3 md:ml-auto">
        <Link
          href="/flash-sale"
          className="bg-white text-[#1C60A6] font-semibold px-4 md:px-6 py-2 md:py-2.5 rounded hover:bg-gray-100 transition-colors whitespace-nowrap text-sm md:text-base shadow-sm"
        >
          View All Deals
        </Link>
      </div>

    </div>
  );
}
