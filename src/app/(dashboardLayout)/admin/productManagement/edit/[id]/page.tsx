import { notFound } from "next/navigation";
import AddProductForm from "@/components/dashboard/admin/productManagement/AddProductForm";
import { getAdminProductById } from "@/constants/adminProducts";
import { FormState } from "@/types/productManagement";

export const metadata = {
  title: "Edit Product — Vendora Admin",
  description: "Edit an existing product in the Vendora catalogue.",
};

export default async function EditProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = getAdminProductById(id);

  if (!product) {
    notFound();
  }

  const initialData: FormState = {
    title: product.title,
    brand: product.brand,
    description: product.description,
    price: product.price.toString(),
    oldPrice: product.oldPrice?.toString() || "",
    quantity: product.inStock ? "100" : "0",
    category: product.category,
    subcategory: product.subcategory,
    seller: product.seller,
    status: product.status,
    inStock: product.inStock,
    warranty: product.warranty,
    rating: product.rating.toString(),
    colors: product.colors,
    sizes: product.sizes,
    images: product.images.map((img, i) => ({
      id: `existing-${i}`,
      preview: img,
    })),
  };

  return (
    <div className="w-full px-0">
      <AddProductForm initialData={initialData} isEditMode={true} />
    </div>
  );
}
