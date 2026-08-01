import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";

export const FONT_SIZES = [
  { label: "12px", value: "12px" },
  { label: "14px", value: "14px" },
  { label: "16px", value: "16px" },
  { label: "18px", value: "18px" },
  { label: "20px", value: "20px" },
  { label: "24px", value: "24px" },
  { label: "30px", value: "30px" },
];

export default function FontSizeDropdown({ currentSize, onChange }: { currentSize: string, onChange: (size: string) => void }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const displayLabel = FONT_SIZES.find(s => s.value === currentSize)?.label || "Font Size";

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onMouseDown={(e) => e.preventDefault()}
        onClick={() => setOpen((prev) => !prev)}
        className="flex h-7 w-28 items-center justify-between rounded border border-gray-200 bg-white px-2 text-xs font-medium text-gray-700 outline-none hover:border-gray-300"
      >
        <span className="truncate">{displayLabel}</span>
        <ChevronDown className="size-3.5 text-gray-400" />
      </button>

      {open && (
        <div className="absolute left-0 top-full z-[9999] mt-1 w-32 rounded border border-gray-100 bg-white shadow-lg">
          <div className="flex flex-col py-1">
            <button
              type="button"
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => {
                onChange("");
                setOpen(false);
              }}
              className={`flex items-center justify-between px-3 py-1.5 text-xs hover:bg-gray-50 ${!currentSize ? "text-[#0F4C81] font-bold" : "text-gray-700"}`}
            >
              Default
              {!currentSize && <Check className="size-3" />}
            </button>
            <div className="my-1 h-px w-full bg-gray-100" />
            {FONT_SIZES.map(s => (
              <button
                key={s.value}
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => {
                  onChange(s.value);
                  setOpen(false);
                }}
                className={`flex items-center justify-between px-3 py-1.5 text-xs hover:bg-gray-50 ${currentSize === s.value ? "text-[#0F4C81] font-bold" : "text-gray-700"}`}
              >
                {s.label}
                {currentSize === s.value && <Check className="size-3" />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
