"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";

interface SelectProps {
  value: string;
  options: string[];
  onChange: (v: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

export default function CustomSelect({ value, options, onChange, placeholder = "Select…", disabled }: SelectProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        disabled={disabled}
        onClick={() => !disabled && setOpen((o) => !o)}
        className={[
          "flex w-full items-center justify-between gap-2 rounded border px-3.5 py-2.5 text-sm font-medium shadow-2xs outline-none transition-all duration-150",
          disabled
            ? "cursor-not-allowed border-gray-100 bg-gray-50 text-gray-400"
            : open
              ? "border-[#0F4C81] bg-white ring-2 ring-[#0F4C81]/10"
              : "border-gray-200 bg-white text-gray-700 hover:border-gray-300",
          !value ? "text-gray-400" : "text-gray-800",
        ].join(" ")}
      >
        <span className="truncate">{value || placeholder}</span>
        <ChevronDown className={`size-4 shrink-0 text-gray-400 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && !disabled && (
        <div className="absolute left-0 top-[calc(100%+6px)] z-[9999] w-full rounded border border-gray-100 bg-white shadow-xl">
          <div className="max-h-52 overflow-y-auto p-1.5 custom-scrollbar">
            {options.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => { onChange(opt); setOpen(false); }}
                className={[
                  "flex w-full items-center justify-between gap-2 rounded px-3 py-2 text-sm font-medium transition-colors",
                  value === opt ? "bg-[#0F4C81]/8 text-[#0F4C81]" : "text-gray-700 hover:bg-gray-50",
                ].join(" ")}
              >
                {opt}
                {value === opt && <Check className="size-4 shrink-0" />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
