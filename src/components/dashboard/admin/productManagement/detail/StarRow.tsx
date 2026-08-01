import { Star } from "lucide-react";

export function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5 text-amber-500">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} className={`size-4 ${index < Math.round(rating) ? "fill-current" : "text-amber-200"}`} />
      ))}
    </div>
  );
}
