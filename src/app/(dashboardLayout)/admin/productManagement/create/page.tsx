import AddProductForm from "@/components/dashboard/admin/productManagement/AddProductForm";

export const metadata = {
  title: "Create Product — Vendora Admin",
  description: "Add a new product to the Vendora catalogue.",
};

export default function CreateProductPage() {
  return (
    <div className="w-full px-0">
      <AddProductForm />
    </div>
  );
}
