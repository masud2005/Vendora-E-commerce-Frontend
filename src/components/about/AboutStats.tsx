"use client";

export default function AboutStats() {
  const stats = [
    { value: "500k+", label: "Active Customers" },
    { value: "12k+", label: "Verified Sellers" },
    { value: "1M+", label: "Daily Products" },
    { value: "24/7", label: "Dedicated Support" },
  ];

  return (
    <div className="w-full bg-[#EBF2F7]/50 border border-gray-200/80 rounded-2xl py-8 px-6 sm:px-10 mb-12 sm:mb-16 shadow-xs">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-200/70 text-center">
        {stats.map((stat, idx) => (
          <div
            key={stat.label}
            className={`flex flex-col justify-center min-w-0 ${
              idx >= 2 ? "pt-6 md:pt-0" : idx === 1 ? "pt-0 md:pt-0" : ""
            } ${idx % 2 === 1 ? "xs:border-l border-gray-200/50 md:border-l-0" : ""}`}
          >
            <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-primary-800 tracking-tight">
              {stat.value}
            </span>
            <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mt-1.5 leading-snug">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
