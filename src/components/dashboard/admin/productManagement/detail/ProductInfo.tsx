import React from "react";
import toast from "react-hot-toast";
import { CheckCircle2, ShieldCheck, Tag, Store, BadgeCheck, Save, Plus, Minus } from "lucide-react";
import type { AdminProduct } from "@/constants/adminProducts";
import { StarRow } from "./StarRow";

type EditableField = "title" | "sku" | "price" | "oldPrice" | "description";

interface ProductInfoProps {
  product: AdminProduct;
  isEditing: boolean;
  setIsEditing: (val: boolean) => void;
  draft: Record<string, string>;
  updateField: (field: EditableField, value: string) => void;
  formattedPrice: string;
  handleSave: () => void;
  quantity: number;
  setQuantity: (val: number | ((prev: number) => number)) => void;
  activeTab: "product" | "reviews" | "qa" | "shipping";
  setActiveTab: (tab: "product" | "reviews" | "qa" | "shipping") => void;
}

export default function ProductInfo({
  product, isEditing, setIsEditing, draft, updateField, formattedPrice, handleSave, quantity, setQuantity, activeTab, setActiveTab
}: ProductInfoProps) {
  return (
    <div className="rounded border border-gray-200 bg-white p-5 shadow-3xs h-full">
      <div className="space-y-5">
          <section className="rounded border border-gray-200 bg-white p-5 shadow-3xs">
            <div className="flex items-center justify-between gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  {product.badge && (
                    <span className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${product.badge.tone === "amber" ? "bg-amber-100 text-amber-700" : product.badge.tone === "emerald" ? "bg-emerald-100 text-emerald-700" : "bg-blue-100 text-[#0F4C81]"}`}>
                      {product.badge.text}
                    </span>
                  )}
                  <StarRow rating={product.rating} />
                  <span className="text-sm text-gray-500">{product.rating.toFixed(1)} ({(product.reviews / 1000).toFixed(1)}k reviews)</span>
                </div>
                <h2 className="text-2xl font-extrabold leading-tight text-gray-900">
                  {isEditing ? draft.title : product.title}
                </h2>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-3">
              <span className="text-2xl font-extrabold text-[#0F4C81]">${formattedPrice}</span>
              {product.oldPrice && (
                <span className="text-base font-medium text-gray-400 line-through">${Number(draft.oldPrice || product.oldPrice).toFixed(2)}</span>
              )}
              <span className="rounded bg-amber-100 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-700">Flash Sale - 25% Off</span>
            </div>

            {isEditing ? (
              <div className="mt-5 space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <label className="space-y-2 text-sm font-medium text-gray-700">
                    <span>Product Title</span>
                    <input value={draft.title} onChange={(event) => updateField("title", event.target.value)} className="w-full rounded border border-gray-300 px-3 py-2 text-sm outline-none focus:border-[#0F4C81]" />
                  </label>
                  <label className="space-y-2 text-sm font-medium text-gray-700">
                    <span>SKU</span>
                    <input value={draft.sku} onChange={(event) => updateField("sku", event.target.value)} className="w-full rounded border border-gray-300 px-3 py-2 text-sm outline-none focus:border-[#0F4C81]" />
                  </label>
                  <label className="space-y-2 text-sm font-medium text-gray-700">
                    <span>Price</span>
                    <input value={draft.price} onChange={(event) => updateField("price", event.target.value)} className="w-full rounded border border-gray-300 px-3 py-2 text-sm outline-none focus:border-[#0F4C81]" />
                  </label>
                  <label className="space-y-2 text-sm font-medium text-gray-700">
                    <span>Old Price</span>
                    <input value={draft.oldPrice} onChange={(event) => updateField("oldPrice", event.target.value)} className="w-full rounded border border-gray-300 px-3 py-2 text-sm outline-none focus:border-[#0F4C81]" />
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <button type="button" onClick={handleSave} className="inline-flex items-center gap-2 rounded bg-[#0F4C81] px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-brand-primary-800 cursor-pointer">
                    <Save className="size-4" />
                    <span>Save Changes</span>
                  </button>
                  <button type="button" onClick={() => setIsEditing(false)} className="rounded border border-gray-300 bg-white px-4 py-2 text-sm font-bold text-gray-700 transition-colors hover:bg-gray-50 cursor-pointer">
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="mt-5 space-y-4">
                <div className="grid grid-cols-3 gap-2">
                  {product.colors.map((color) => (
                    <button key={color.name} type="button" onClick={() => toast.success(`${color.name} selected`)} className="flex items-center gap-2 rounded border border-gray-200 p-2 text-left transition-colors hover:border-gray-300">
                      <span className="size-8 rounded border border-white shadow-sm" style={{ backgroundColor: color.hex }} />
                      <span className="text-xs font-medium text-gray-700">{color.name}</span>
                    </button>
                  ))}
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm font-medium text-gray-700">
                    <span>Size</span>
                    <span className="text-xs text-[#0F4C81]">Size Guide</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button key={size} type="button" className="rounded border border-[#0F4C81] bg-blue-50 px-4 py-2 text-sm font-semibold text-[#0F4C81]">
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 rounded bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-700">
                  <CheckCircle2 className="size-4" />
                  <span>{product.inStock ? "In Stock - Ready to ship from New York" : "Out of Stock"}</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex items-center overflow-hidden rounded border border-gray-300 bg-white">
                    <button type="button" onClick={() => setQuantity((current) => Math.max(1, current - 1))} className="grid size-11 place-items-center text-gray-700 hover:bg-gray-50">
                      <Minus className="size-4" />
                    </button>
                    <div className="w-12 text-center text-sm font-bold text-gray-900">{quantity}</div>
                    <button type="button" onClick={() => setQuantity((current) => current + 1)} className="grid size-11 place-items-center text-gray-700 hover:bg-gray-50">
                      <Plus className="size-4" />
                    </button>
                  </div>
                  <button type="button" onClick={() => toast.success("Added to cart") } className="flex-1 rounded bg-amber-400 px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-amber-500 cursor-pointer">
                    Add to Cart
                  </button>
                </div>

                <button type="button" onClick={() => toast.success("Proceeding to checkout")} className="w-full rounded border border-[#0F4C81] px-4 py-3 text-sm font-bold text-[#0F4C81] transition-colors hover:bg-blue-50 cursor-pointer">
                  Buy Now
                </button>
              </div>
            )}

            <div className="mt-5 rounded border border-gray-200 p-4">
              <div className="flex items-start gap-3">
                <div className="grid size-12 place-items-center rounded bg-gray-100 text-gray-600">
                  <Store className="size-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-bold text-gray-900">{product.seller}</h3>
                    <BadgeCheck className="size-4 text-emerald-600" />
                  </div>
                  <p className="text-xs text-gray-500">{product.sellerRating}</p>
                </div>
                <button type="button" onClick={() => toast.success(`Opening store page for ${product.seller}`)} className="text-sm font-bold text-[#0F4C81] hover:underline">
                  Visit Store
                </button>
              </div>
            </div>
          </section>

          <section className="rounded border border-gray-200 bg-white p-5 shadow-3xs">
            <div className="flex items-center gap-2 text-sm font-bold text-gray-900">
              <Tag className="size-4 text-[#0F4C81]" />
              <span>Moderation Actions</span>
            </div>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <button type="button" onClick={() => toast.success(`Product ${product.title} approved`)} className="rounded border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-bold text-emerald-700 transition-colors hover:bg-emerald-100 cursor-pointer">
                Approve Product
              </button>
              <button type="button" onClick={() => toast.error(`Product ${product.title} flagged for review`)} className="rounded border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-bold text-rose-700 transition-colors hover:bg-rose-100 cursor-pointer">
                Flag for Review
              </button>
              <button type="button" onClick={() => toast.success("Audit trail opened")} className="rounded border border-gray-200 bg-white px-4 py-3 text-sm font-bold text-gray-700 transition-colors hover:bg-gray-50 cursor-pointer">
                Open Audit Trail
              </button>
              <button type="button" onClick={() => toast.success("Archive flow opened")} className="rounded border border-gray-200 bg-white px-4 py-3 text-sm font-bold text-gray-700 transition-colors hover:bg-gray-50 cursor-pointer">
                Archive Product
              </button>
            </div>
          </section>
      </div>
    </div>
  );
}
