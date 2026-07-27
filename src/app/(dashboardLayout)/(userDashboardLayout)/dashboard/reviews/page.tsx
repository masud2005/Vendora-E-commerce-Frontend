"use client";

import ReviewsHeader from "@/components/dashboard/user/reviews/ReviewsHeader";
import OverallRating from "@/components/dashboard/user/reviews/OverallRating";
import PendingFeedback from "@/components/dashboard/user/reviews/PendingFeedback";
import ReviewHistory from "@/components/dashboard/user/reviews/ReviewHistory";
import { Plus } from "lucide-react";

export default function ReviewsPage() {
  return (
    <div className="space-y-8 select-none relative ">
      {/* 1. Page Header */}
      <ReviewsHeader />

      {/* 2. Main content: Overall Rating (1/3) + Pending Feedback (2/3) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-1 space-y-6">
          <OverallRating />
        </div>
        <div className="lg:col-span-2">
          <PendingFeedback />
        </div>
      </div>

      {/* 3. Bottom section: Review History */}
      <ReviewHistory />

      {/* 4. Floating Action Button at Bottom Right exactly matching mockup */}
      <button className="fixed bottom-6 right-6 bg-[#DDF613] hover:bg-[#cbe00a] text-black rounded-full p-4 shadow-lg hover:shadow-xl transition-all cursor-pointer active:scale-95 z-30">
        <Plus className="size-6 stroke-[2.5]" />
      </button>
    </div>
  );
}
