"use client";

import { useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import { ArrowLeft, Save, Send, Info, ImagePlus } from "lucide-react";

import RichTextEditor from "./RichTextEditor";
import ImageUploader from "./ImageUploader";
import { FormState } from "@/types/productManagement";

import Card from "./form/Card";
import BasicInformation from "./form/BasicInformation";
import Pricing from "./form/Pricing";
import ColorsSizes from "./form/ColorsSizes";
import StatusStock from "./form/StatusStock";

const defaults: FormState = {
  title: "", brand: "", description: "",
  price: "", oldPrice: "", quantity: "",
  category: "", subcategory: "", seller: "",
  status: "PENDING", inStock: true,
  warranty: "", rating: "",
  colors: [], sizes: [], images: [],
};

interface AddProductFormProps {
  initialData?: FormState;
  isEditMode?: boolean;
}

export default function AddProductForm({ initialData, isEditMode = false }: AddProductFormProps) {
  const [form, setForm] = useState<FormState>(initialData || defaults);
  const patch = <K extends keyof FormState>(k: K, v: FormState[K]) =>
    setForm((p) => ({ ...p, [k]: v }));

  const handlePublish = () => {
    if (!form.title.trim()) return toast.error("Product title is required");
    if (!form.price) return toast.error("Price is required");
    if (!form.category) return toast.error("Category is required");
    if (!form.seller) return toast.error("Seller is required");
    if (!form.images.length) return toast.error("Upload at least one image");
    toast.success(isEditMode ? "Product updated successfully!" : "Product published!");
  };

  return (
    <div className="space-y-5 pb-8 font-sans">
      {/* ══════════════════════════════════════════════
          PAGE HEADER
      ══════════════════════════════════════════════ */}
      <div className="flex flex-col gap-4 rounded border border-gray-200 bg-white px-6 py-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0 space-y-1">
          <nav className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
            <Link href="/admin" className="hover:text-[#0F4C81] transition-colors">Dashboard</Link>
            <span className="text-gray-300">/</span>
            <Link href="/admin/productManagement" className="hover:text-[#0F4C81] transition-colors">Products</Link>
            <span className="text-gray-300">/</span>
            <span className="text-[#0F4C81]">{isEditMode ? "Edit Product" : "New Product"}</span>
          </nav>
          <h1 className="truncate text-xl font-extrabold tracking-tight text-gray-900">
            {isEditMode ? "Edit Product" : "Create New Product"}
          </h1>
          <p className="text-xs font-medium text-gray-400">
            {isEditMode ? "Update product details and save changes." : "Fill in all"} {isEditMode ? "" : <span className="font-bold text-rose-500">*</span>} {isEditMode ? "" : "required fields and upload at least one image."}
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <Link
            href="/admin/productManagement"
            className="inline-flex items-center gap-1.5 rounded border border-gray-200 bg-white px-3.5 py-2 text-xs font-bold text-gray-600 shadow-2xs transition hover:bg-gray-50"
          >
            <ArrowLeft className="size-3.5" /> Cancel
          </Link>
          <button
            type="button"
            onClick={() => toast.success("Saved as draft")}
            className="inline-flex items-center gap-1.5 rounded border border-[#0F4C81] bg-white px-3.5 py-2 text-xs font-bold text-[#0F4C81] shadow-2xs transition hover:bg-[#0F4C81]/5"
          >
            <Save className="size-3.5" /> Save Draft
          </button>
          <button
            type="button"
            onClick={handlePublish}
            className="inline-flex items-center gap-1.5 rounded bg-[#0F4C81] px-4 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-[#0d3f6e] active:scale-[0.98]"
          >
            <Send className="size-3.5" /> {isEditMode ? "Save Changes" : "Publish Product"}
          </button>
        </div>
      </div>

      {/* ══════ MAIN GRID ══════ */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        {/* ── LEFT col (2/3) ── */}
        <div className="space-y-5 lg:col-span-2">
          <BasicInformation form={form} patch={patch} />
          <Pricing form={form} patch={patch} />
          <ColorsSizes form={form} patch={patch} />

          <Card
            icon={<Info className="size-4.5" />}
            title="Product Information"
            hint="Bold · Italic · Table · Image · Font size"
          >
            <RichTextEditor
              value={form.description}
              onChange={(html) => patch("description", html)}
            />
          </Card>
        </div>

        {/* ── RIGHT col (1/3) ── */}
        <div className="space-y-5">
          <Card icon={<ImagePlus className="size-4.5" />} title="Product Images">
            <ImageUploader
              images={form.images}
              onChange={(imgs) => patch("images", imgs)}
              maxImages={8}
            />
          </Card>

          <StatusStock form={form} patch={patch} />
        </div>
      </div>
    </div>
  );
}
