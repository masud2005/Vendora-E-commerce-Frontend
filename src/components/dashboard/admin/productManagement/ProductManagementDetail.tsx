"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import { ArrowLeft, Edit3, Eye } from "lucide-react";
import type { AdminProduct } from "@/constants/adminProducts";

import ProductGallery from "./detail/ProductGallery";
import ProductInfo from "./detail/ProductInfo";
import ProductTabs from "./detail/ProductTabs";

type ProductManagementDetailProps = {
  product: AdminProduct;
  initialEditing: boolean;
};

type EditableField = "title" | "sku" | "price" | "oldPrice" | "description";

export default function ProductManagementDetail({ product, initialEditing }: ProductManagementDetailProps) {
  const [isEditing, setIsEditing] = useState(initialEditing);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState<"product" | "reviews" | "qa" | "shipping">("product");
  const [draft, setDraft] = useState({
    title: product.title,
    sku: product.sku,
    price: product.price.toFixed(2),
    oldPrice: product.oldPrice ? product.oldPrice.toFixed(2) : "",
    description: product.description
  });

  const formattedPrice = useMemo(() => Number(draft.price || product.price).toFixed(2), [draft.price, product.price]);
  const currentImage = product.images[activeImage] || product.images[0];

  const updateField = (field: EditableField, value: string) => {
    setDraft((current) => ({ ...current, [field]: value }));
  };

  const handleSave = () => {
    toast.success("Product changes saved for review flow.");
    setIsEditing(false);
  };

  return (
    <div className="space-y-6 pb-12 text-left select-none">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold text-gray-500">
            <Link href="/admin/productManagement" className="inline-flex items-center gap-1 hover:text-[#0F4C81] transition-colors">
              <ArrowLeft className="size-4" />
              <span>Back to Product Management</span>
            </Link>
            <span className="text-gray-300">/</span>
            <span className="text-[#0F4C81]">Product Detail</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900">
            {isEditing ? "Edit Product" : "Product Details"}
          </h1>
          <p className="max-w-3xl text-sm sm:text-base text-gray-500">
            Manage the product data from a single global detail surface. View, edit, moderate, and review the item without leaving the admin workflow.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => setIsEditing((current) => !current)}
            className="inline-flex items-center gap-2 rounded border border-[#0F4C81] bg-white px-4 py-2 text-sm font-bold text-[#0F4C81] shadow-2xs transition-colors hover:bg-blue-50 cursor-pointer"
          >
            <Edit3 className="size-4" />
            <span>{isEditing ? "Exit Edit Mode" : "Edit Product"}</span>
          </button>
          <button
            type="button"
            onClick={() => toast.success("Opening moderation notes...")}
            className="inline-flex items-center gap-2 rounded bg-[#0F4C81] px-4 py-2 text-sm font-bold text-white shadow-2xs transition-colors hover:bg-brand-primary-800 cursor-pointer"
          >
            <Eye className="size-4" />
            <span>Preview</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <ProductGallery
            product={product}
            activeImage={activeImage}
            setActiveImage={setActiveImage}
            currentImage={currentImage}
          />
          <ProductInfo
            product={product}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            draft={draft}
            updateField={updateField}
            formattedPrice={formattedPrice}
            handleSave={handleSave}
            quantity={quantity}
            setQuantity={setQuantity}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>
        <div className="space-y-4">
          <ProductTabs product={product} activeTab={activeTab} />
        </div>
      </div>
    </div>
  );
}
