'use client';

import { useState, useEffect, useRef } from 'react';
import TopBar from './TopBar';
import MiddleBar from './MiddleBar';
import BottomNav from './BottomNav';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('up');
  const [headerHeight, setHeaderHeight] = useState(150); // Sensible fallback
  const headerRef = useRef<HTMLElement>(null);

  // Measure the exact height of the header to create a perfect placeholder
  useEffect(() => {
    const updateHeight = () => {
      if (headerRef.current && window.scrollY <= 50) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  // Handle scroll direction detection smoothly
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          setIsScrolled(currentScrollY > 50);

          // Detect direction
          if (currentScrollY > lastScrollY && currentScrollY > 100) {
            setScrollDirection('down');
          } else if (currentScrollY < lastScrollY) {
            setScrollDirection('up');
          }

          lastScrollY = currentScrollY > 0 ? currentScrollY : 0;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const hideExtraBars = isScrolled && scrollDirection === 'down';

  return (
    <>
      <div style={{ height: `${headerHeight}px` }} className="w-full bg-transparent"></div>

      <header
        ref={headerRef}
        className={`fixed top-0 left-0 w-full z-50 bg-white transition-shadow duration-300 ${isScrolled ? 'shadow-md' : ''
          }`}
      >
        {/* TopBar with smooth collapse animation */}
        <div
          className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${hideExtraBars ? 'grid-rows-[0fr] opacity-0' : 'grid-rows-[1fr] opacity-100'
            }`}
        >
          <div className="overflow-hidden min-h-0">
            <TopBar />
          </div>
        </div>

        {/* MiddleBar stays visible and fixed at the top always */}
        <div className="bg-white relative z-10">
          <MiddleBar />
        </div>

        {/* BottomNav with smooth collapse animation */}
        <div
          className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${hideExtraBars ? 'grid-rows-[0fr] opacity-0' : 'grid-rows-[1fr] opacity-100'
            }`}
        >
          <div className="overflow-hidden min-h-0">
            <BottomNav />
          </div>
        </div>
      </header>
    </>
  );
}
