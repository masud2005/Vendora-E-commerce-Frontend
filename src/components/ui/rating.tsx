"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface RatingProps {
  value: number;
  max?: number;
  size?: number;
  readonly?: boolean;
  onChange?: (value: number) => void;
  className?: string;
}

export default function Rating({
  value,
  max = 5,
  size = 5, // corresponds to tailwind size classes like size-5
  readonly = false,
  onChange,
  className
}: RatingProps) {
  const [hoverValue, setHoverValue] = useState<number | null>(null);

  const handleStarClick = (starValue: number) => {
    if (!readonly && onChange) {
      onChange(starValue);
    }
  };

  const handleMouseEnter = (starValue: number) => {
    if (!readonly) {
      setHoverValue(starValue);
    }
  };

  const handleMouseLeave = () => {
    if (!readonly) {
      setHoverValue(null);
    }
  };

  const activeValue = hoverValue !== null ? hoverValue : value;

  return (
    <div className={cn("flex items-center gap-1", className)}>
      {[...Array(max)].map((_, index) => {
        const starValue = index + 1;
        const isFilled = starValue <= activeValue;

        return (
          <Star
            key={index}
            className={cn(
              "transition-all duration-150",
              readonly ? "cursor-default" : "cursor-pointer hover:scale-110 active:scale-95",
              isFilled 
                ? "fill-amber-400 text-amber-400" 
                : "text-gray-200 fill-transparent hover:text-amber-300"
            )}
            style={{ width: `${size * 4}px`, height: `${size * 4}px` }} // e.g. size-5 is 20px
            onClick={() => handleStarClick(starValue)}
            onMouseEnter={() => handleMouseEnter(starValue)}
            onMouseLeave={handleMouseLeave}
          />
        );
      })}
    </div>
  );
}
