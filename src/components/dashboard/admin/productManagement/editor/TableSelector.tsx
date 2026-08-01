import React, { useState, useRef, useEffect } from "react";
import { Table2 } from "lucide-react";

export default function TableSelector({ onSelect }: { onSelect: (rows: number, cols: number) => void }) {
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState({ r: 0, c: 0 });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative flex">
      <button
        type="button"
        onMouseDown={(e) => e.preventDefault()}
        onClick={() => setOpen((prev) => !prev)}
        className="flex h-7 min-w-[28px] items-center justify-center rounded px-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-800"
        title="Insert Table"
      >
        <Table2 className="size-3.5" />
      </button>

      {open && (
        <div className="absolute left-0 top-full z-[9999] mt-1 rounded-lg border border-gray-200 bg-white p-3 shadow-xl">
          <p className="mb-2 text-center text-[10px] font-bold uppercase tracking-wider text-gray-500">
            {hover.r > 0 && hover.c > 0 ? `${hover.r} x ${hover.c} Table` : "Select Size"}
          </p>
          <div className="flex flex-col gap-0.5">
            {Array.from({ length: 8 }).map((_, rowIndex) => (
              <div key={rowIndex} className="flex gap-0.5">
                {Array.from({ length: 8 }).map((_, colIndex) => {
                  const isHovered = rowIndex < hover.r && colIndex < hover.c;
                  return (
                    <button
                      key={colIndex}
                      type="button"
                      onMouseEnter={() => setHover({ r: rowIndex + 1, c: colIndex + 1 })}
                      onMouseLeave={() => setHover({ r: 0, c: 0 })}
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={() => {
                        onSelect(hover.r || 1, hover.c || 1);
                        setOpen(false);
                      }}
                      className={`size-4 rounded-sm border ${isHovered ? "border-[#0F4C81] bg-[#0F4C81]/20" : "border-gray-200 bg-gray-50"}`}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
