import { ClipboardList, Package, TriangleAlert } from "lucide-react";

type StatCardProps = {
  label: string;
  value: string;
  icon: React.ReactNode;
  iconWrapperClassName: string;
};

function StatCard({ label, value, icon, iconWrapperClassName }: StatCardProps) {
  return (
    <div className="flex items-center gap-4 rounded border border-gray-200 bg-white px-4 py-4 shadow-3xs min-h-[76px]">
      <div className={`flex size-12 shrink-0 items-center justify-center rounded ${iconWrapperClassName}`}>
        {icon}
      </div>
      <div className="min-w-0">
        <span className="block text-[11px] font-medium text-gray-500">{label}</span>
        <span className="mt-1 block text-[18px] sm:text-[20px] font-extrabold leading-none text-gray-900 tracking-tight">
          {value}
        </span>
      </div>
    </div>
  );
}

export default function ProductManagementStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 select-none text-left">
      <StatCard
        label="Pending Reviews"
        value="124"
        icon={<ClipboardList className="size-6 text-[#0F4C81]" />}
        iconWrapperClassName="bg-blue-50"
      />
      <StatCard
        label="Total Live Products"
        value="12,842"
        icon={<Package className="size-6 text-emerald-700" />}
        iconWrapperClassName="bg-emerald-50"
      />
      <StatCard
        label="Violations Flagged"
        value="09"
        icon={<TriangleAlert className="size-6 text-rose-600" />}
        iconWrapperClassName="bg-rose-50"
      />
    </div>
  );
}