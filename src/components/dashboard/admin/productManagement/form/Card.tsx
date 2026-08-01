import React from "react";

export default function Card({ icon, title, hint, children }: {
  icon: React.ReactNode; title: string; hint?: string; children: React.ReactNode;
}) {
  return (
    <div className="rounded border border-gray-200 bg-white shadow-sm">
      <div className="flex items-center justify-between gap-2.5 border-b border-gray-100 bg-gray-50/60 px-5 py-3.5 rounded-t">
        <div className="flex items-center gap-2">
          <span className="text-[#0F4C81]">{icon}</span>
          <h2 className="text-sm font-bold text-gray-800 tracking-tight">{title}</h2>
        </div>
        {hint && <span className="hidden text-[11px] text-gray-400 sm:block">{hint}</span>}
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}
