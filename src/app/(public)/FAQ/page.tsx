"use client";

import { useState } from "react";
import FAQHeader from "@/components/FAQ/FAQHeader";
import FAQCategories from "@/components/FAQ/FAQCategories";
import FAQAccordion from "@/components/FAQ/FAQAccordion";
import FAQHelp from "@/components/FAQ/FAQHelp";

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-[#F9FAFB] pb-0">
      {/* 1. Header Hero with Search Field */}
      <FAQHeader searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      {/* 2. Overlapping category cards */}
      <FAQCategories />

      {/* 3. Dynamic search-filtered accordion list */}
      <FAQAccordion searchQuery={searchQuery} />

      {/* 4. Support and Live Chat CTA panel */}
      <FAQHelp />
    </div>
  );
}

