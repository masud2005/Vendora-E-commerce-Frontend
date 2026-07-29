"use client";



const categories = [
  { name: "Electronics", val: "$5.2M", percent: 85 },
  { name: "Fashion & Apparel", val: "$3.1M", percent: 60 },
  { name: "Home & Kitchen", val: "$2.8M", percent: 54 },
  { name: "Beauty & Health", val: "$1.3M", percent: 28 }
];

export default function CategoryPerformance() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 sm:p-6 shadow-3xs flex flex-col justify-between select-none min-h-[340px] text-left">
      
      {/* Title */}
      <div className="border-b border-gray-100 pb-3">
        <h3 className="text-sm sm:text-base font-extrabold text-gray-900">
          Category Performance
        </h3>
      </div>

      {/* Progress Bars List */}
      <div className="space-y-4.5 mt-5 flex-1">
        {categories.map((cat, idx) => (
          <div key={idx} className="space-y-1.5">
            <div className="flex justify-between items-center text-xs font-bold text-gray-800">
              <span>{cat.name}</span>
              <span className="text-[#0F4C81]">{cat.val}</span>
            </div>
            
            {/* Custom styled blue progress bar */}
            <div className="w-full h-2.5 bg-blue-50/50 rounded-full overflow-hidden border border-blue-50">
              <div 
                className="h-full bg-[#0F4C81] rounded-full transition-all duration-500"
                style={{ width: `${cat.percent}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Link Action */}
      <div className="border-t border-gray-50 pt-4 mt-5">
        <button
          
          className="text-xs font-black text-[#0F4C81] hover:underline inline-flex items-center gap-1 cursor-pointer transition-colors"
        >
          <span>View Full Inventory Breakdown</span>
          <span>➔</span>
        </button>
      </div>

    </div>
  );
}
