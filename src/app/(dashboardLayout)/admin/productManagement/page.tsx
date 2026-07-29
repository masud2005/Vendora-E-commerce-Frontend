import ProductManagementHeader from "@/components/dashboard/admin/productManagement/ProductManagementHeader";
import ProductManagementStats from "@/components/dashboard/admin/productManagement/ProductManagementStats";
import ProductManagementTable from "@/components/dashboard/admin/productManagement/ProductManagementTable";

export default function ProductManagementPage() {
  return (
    <div className="space-y-6 w-full pb-12 font-sans select-none text-left">
      <ProductManagementHeader />
      <ProductManagementStats />
      <ProductManagementTable />
    </div>
  );
}