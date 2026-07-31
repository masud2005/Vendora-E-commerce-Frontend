"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import {
  ArrowLeft,
  CheckCircle2,
  Edit3,
  Heart,
  Plus,
  Minus,
  Share2,
  Star,
  Truck,
  ShieldCheck,
  Store,
  Tag,
  BadgeCheck,
  Save,
  Eye,
  CircleAlert
} from "lucide-react";
import type { AdminProduct } from "@/constants/adminProducts";

type ProductManagementDetailProps = {
  product: AdminProduct;
  initialEditing: boolean;
};

type EditableField = "title" | "sku" | "price" | "oldPrice" | "description";

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5 text-amber-500">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} className={`size-4 ${index < Math.round(rating) ? "fill-current" : "text-amber-200"}`} />
      ))}
    </div>
  );
}

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
          <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-3xs">
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-gray-500">
              <span>{product.category}</span>
              <span>&gt;</span>
              <span>{product.subcategory}</span>
              <span>&gt;</span>
              <span className="text-gray-900">{product.title}</span>
            </div>

            <div className="mt-4 grid gap-4 lg:grid-cols-[84px_1fr]">
              <div className="order-2 flex gap-3 overflow-x-auto pb-1 lg:order-1 lg:flex-col lg:overflow-visible custom-scrollbar">
                {product.images.map((image, index) => (
                  <button
                    key={image}
                    type="button"
                    onClick={() => setActiveImage(index)}
                    className={`h-20 w-20 shrink-0 overflow-hidden rounded-lg border transition-all ${activeImage === index ? "border-[#0F4C81] ring-2 ring-blue-100" : "border-gray-200 hover:border-gray-300"}`}
                    aria-label={`View image ${index + 1}`}
                  >
                    <Image src={image} alt={`${product.title} view ${index + 1}`} width={80} height={80} unoptimized className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>

              <div className="order-1 space-y-3 lg:order-2">
                <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
                  <Image src={currentImage} alt={product.title} width={1200} height={900} unoptimized className="h-105 w-full object-cover" />
                  <div className="absolute right-4 top-4 flex flex-col gap-2">
                    <button type="button" className="grid size-10 place-items-center rounded-full bg-white text-gray-600 shadow-sm transition-colors hover:text-rose-600" aria-label="Wishlist">
                      <Heart className="size-5" />
                    </button>
                    <button type="button" className="grid size-10 place-items-center rounded-full bg-white text-gray-600 shadow-sm transition-colors hover:text-[#0F4C81]" aria-label="Share">
                      <Share2 className="size-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-3xs">
            <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-gray-500">
              <button
                type="button"
                onClick={() => setActiveTab("product")}
                className={`border-b-2 pb-2 transition-colors ${activeTab === "product" ? "border-[#0F4C81] text-[#0F4C81]" : "border-transparent hover:text-gray-700"}`}
              >
                Product Information
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("reviews")}
                className={`border-b-2 pb-2 transition-colors ${activeTab === "reviews" ? "border-[#0F4C81] text-[#0F4C81]" : "border-transparent hover:text-gray-700"}`}
              >
                Customer Reviews ({product.reviews.toLocaleString()})
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("qa")}
                className={`border-b-2 pb-2 transition-colors ${activeTab === "qa" ? "border-[#0F4C81] text-[#0F4C81]" : "border-transparent hover:text-gray-700"}`}
              >
                Q&amp;A
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("shipping")}
                className={`border-b-2 pb-2 transition-colors ${activeTab === "shipping" ? "border-[#0F4C81] text-[#0F4C81]" : "border-transparent hover:text-gray-700"}`}
              >
                Shipping &amp; Returns
              </button>
            </div>

            <div className="mt-5 grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
              <div className="space-y-5">
                <section className="space-y-3">
                  <h2 className="text-lg font-bold text-gray-900">Key Highlights</h2>
                  <ul className="space-y-2">
                    {product.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-600" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="space-y-3">
                  <h2 className="text-lg font-bold text-gray-900">Detailed Description</h2>
                  {isEditing ? (
                    <textarea
                      value={draft.description}
                      onChange={(event) => updateField("description", event.target.value)}
                      className="min-h-40 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-700 shadow-2xs outline-none transition-colors focus:border-[#0F4C81]"
                    />
                  ) : (
                    <p className="text-sm leading-7 text-gray-600">{product.description}</p>
                  )}
                </section>

                <section className="space-y-3">
                  <h2 className="text-lg font-bold text-gray-900">Product Attributes</h2>
                  <div className="overflow-hidden rounded-lg border border-gray-200">
                    <table className="w-full text-sm">
                      <tbody className="divide-y divide-gray-200">
                        {product.attributes.map((attribute) => (
                          <tr key={attribute.label} className="bg-white">
                            <td className="w-1/3 bg-gray-50 px-4 py-3 font-medium text-gray-600">{attribute.label}</td>
                            <td className="px-4 py-3 text-gray-700">{attribute.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>

                <section className="rounded-lg border border-blue-100 bg-blue-50/40 p-4">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="mt-0.5 size-5 text-[#0F4C81]" />
                    <div>
                      <h3 className="text-sm font-bold text-gray-900">Warranty &amp; Returns</h3>
                      <p className="mt-1 text-sm leading-6 text-gray-600">{product.warranty}</p>
                    </div>
                  </div>
                </section>
              </div>

              <div className="space-y-5">
                <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-3xs">
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
                          <input value={draft.title} onChange={(event) => updateField("title", event.target.value)} className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-[#0F4C81]" />
                        </label>
                        <label className="space-y-2 text-sm font-medium text-gray-700">
                          <span>SKU</span>
                          <input value={draft.sku} onChange={(event) => updateField("sku", event.target.value)} className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-[#0F4C81]" />
                        </label>
                        <label className="space-y-2 text-sm font-medium text-gray-700">
                          <span>Price</span>
                          <input value={draft.price} onChange={(event) => updateField("price", event.target.value)} className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-[#0F4C81]" />
                        </label>
                        <label className="space-y-2 text-sm font-medium text-gray-700">
                          <span>Old Price</span>
                          <input value={draft.oldPrice} onChange={(event) => updateField("oldPrice", event.target.value)} className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-[#0F4C81]" />
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
                          <button key={color.name} type="button" onClick={() => toast.success(`${color.name} selected`)} className="flex items-center gap-2 rounded-lg border border-gray-200 p-2 text-left transition-colors hover:border-gray-300">
                            <span className="size-8 rounded-md border border-white shadow-sm" style={{ backgroundColor: color.hex }} />
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

                      <div className="flex items-center gap-2 rounded-lg bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-700">
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

                  <div className="mt-5 rounded-xl border border-gray-200 p-4">
                    <div className="flex items-start gap-3">
                      <div className="grid size-12 place-items-center rounded-lg bg-gray-100 text-gray-600">
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

                <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-3xs">
                  <div className="flex items-center gap-2 text-sm font-bold text-gray-900">
                    <Tag className="size-4 text-[#0F4C81]" />
                    <span>Moderation Actions</span>
                  </div>
                  <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <button type="button" onClick={() => toast.success(`Product ${product.title} approved`)} className="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-bold text-emerald-700 transition-colors hover:bg-emerald-100 cursor-pointer">
                      Approve Product
                    </button>
                    <button type="button" onClick={() => toast.error(`Product ${product.title} flagged for review`)} className="rounded-lg border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-bold text-rose-700 transition-colors hover:bg-rose-100 cursor-pointer">
                      Flag for Review
                    </button>
                    <button type="button" onClick={() => toast.success("Audit trail opened")} className="rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-bold text-gray-700 transition-colors hover:bg-gray-50 cursor-pointer">
                      Open Audit Trail
                    </button>
                    <button type="button" onClick={() => toast.success("Archive flow opened")} className="rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-bold text-gray-700 transition-colors hover:bg-gray-50 cursor-pointer">
                      Archive Product
                    </button>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {activeTab === "reviews" ? (
            <div className="space-y-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-3xs">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-lg font-bold text-gray-900">Customer Reviews</h2>
                  <p className="text-sm text-gray-500">Public-facing feedback for moderation and quality control.</p>
                </div>
                <button type="button" onClick={() => toast.success("Opening review composer")} className="text-sm font-bold text-[#0F4C81] hover:underline">
                  Write a Review
                </button>
              </div>
              <div className="space-y-4">
                {product.reviewsData.map((review) => (
                  <article key={review.author + review.date} className="rounded-xl border border-gray-200 p-4 shadow-3xs">
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-2">
                        <StarRow rating={review.rating} />
                        <h3 className="text-sm font-bold text-gray-900">{review.title}</h3>
                      </div>
                      <span className="text-xs text-gray-500">{review.date}</span>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-gray-600">{review.excerpt}</p>
                    <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-gray-700">
                      <span className="rounded-full bg-blue-50 px-2 py-1 text-[#0F4C81]">{review.author}</span>
                      {review.verified && <span className="rounded-full bg-emerald-50 px-2 py-1 text-emerald-700">{review.label}</span>}
                    </div>
                  </article>
                ))}
              </div>
              <button type="button" className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm font-bold text-gray-700 transition-colors hover:bg-gray-50">
                View All {product.reviews.toLocaleString()} Reviews
              </button>
            </div>
          ) : activeTab === "qa" ? (
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-3xs">
              <h2 className="text-lg font-bold text-gray-900">Q&amp;A</h2>
              <p className="mt-2 text-sm text-gray-600">Questions from buyers can be reviewed and answered from here.</p>
              <button type="button" onClick={() => toast.success("Opening buyer questions") } className="mt-4 rounded border border-[#0F4C81] px-4 py-2 text-sm font-bold text-[#0F4C81] transition-colors hover:bg-blue-50">
                Review Questions
              </button>
            </div>
          ) : activeTab === "shipping" ? (
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-3xs">
              <div className="space-y-4 text-sm text-gray-600">
                <div className="flex items-start gap-3">
                  <Truck className="mt-0.5 size-5 text-[#0F4C81]" />
                  <div>
                    <h2 className="text-lg font-bold text-gray-900">Shipping &amp; Returns</h2>
                    <p className="mt-1 leading-6">Fast fulfillment with tracked delivery. Standard return policy applies unless a compliance review is open.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-xl border border-gray-200 p-4">
                  <CircleAlert className="mt-0.5 size-5 text-amber-500" />
                  <p>For international items or restricted stock, compliance steps can be configured in the moderation panel.</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-3xs">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-lg font-bold text-gray-900">Frequently Bought Together</h2>
                  <p className="text-sm text-gray-500">Bundle suggestions can be maintained globally per product record.</p>
                </div>
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-[#0F4C81]">3 items</span>
              </div>

                <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_0.9fr] lg:items-center">
                  {product.bundle.map((item) => (
                    <div key={item.title} className="flex flex-col items-center gap-3 rounded-xl border border-gray-200 p-3 text-center">
                      <Image src={item.image} alt={item.title} width={400} height={220} unoptimized className="h-20 w-full rounded-lg object-cover" />
                      <div>
                        <p className="text-sm font-semibold text-gray-800">{item.title}</p>
                        <p className="mt-1 text-sm font-bold text-[#0F4C81]">{item.price}</p>
                      </div>
                    </div>
                  ))}

                  <div className="hidden h-10 w-px bg-gray-200 lg:block" />
                  <div className="rounded-xl border border-gray-200 p-4 text-left lg:ml-2">
                    <p className="text-xs text-gray-500">Total price for 3 items</p>
                    <p className="mt-1 text-2xl font-extrabold text-[#0F4C81]">$373.99</p>
                    <button type="button" onClick={() => toast.success("Added bundle to cart")} className="mt-4 rounded bg-amber-400 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-amber-500">
                      Add Bundle to Cart
                    </button>
                  </div>
                </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
