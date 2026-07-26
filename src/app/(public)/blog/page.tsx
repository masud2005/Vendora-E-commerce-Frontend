"use client";

import { useState } from "react";
import BlogHero from "@/components/blog/BlogHero";
import BlogFilters from "@/components/blog/BlogFilters";
import BlogGrid from "@/components/blog/BlogGrid";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [sortOption, setSortOption] = useState("newest");

  return (
    <div className="min-h-screen bg-[#F9FAFB] py-8 sm:py-10">
      <div className="container mx-auto px-4">
        
        {/* 1. Featured Hero Grid (Featured articles) */}
        <BlogHero />

        {/* 2. Blog category tabs and sorting dropdown */}
        <BlogFilters
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          sortOption={sortOption}
          onSortChange={setSortOption}
        />

        {/* 3. Main blog grid feed and widgets sidebar */}
        <BlogGrid activeCategory={activeCategory} />

      </div>
    </div>
  );
}
