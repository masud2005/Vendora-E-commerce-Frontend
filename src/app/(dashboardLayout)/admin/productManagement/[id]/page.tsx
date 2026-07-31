import { notFound } from "next/navigation";
import ProductManagementDetail from "@/components/dashboard/admin/productManagement/ProductManagementDetail";
import { getAdminProductById } from "@/constants/adminProducts";

export default async function ProductManagementProductPage({
  params,
  searchParams
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ mode?: string }>;
}) {
  const { id } = await params;
  const query = await searchParams;
  const product = getAdminProductById(id);

  if (!product) {
    notFound();
  }

  return <ProductManagementDetail product={product} initialEditing={query.mode === "edit"} />;
}