import Image from "next/image";
import toast from "react-hot-toast";
import { CircleAlert, Truck } from "lucide-react";
import type { AdminProduct } from "@/constants/adminProducts";
import { StarRow } from "./StarRow";

interface ProductTabsProps {
  product: AdminProduct;
  activeTab: "product" | "reviews" | "qa" | "shipping";
}

export default function ProductTabs({ product, activeTab }: ProductTabsProps) {
  if (activeTab === "reviews") {
    return (
      <div className="space-y-4 rounded border border-gray-200 bg-white p-5 shadow-3xs">
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
            <article key={review.author + review.date} className="rounded border border-gray-200 p-4 shadow-3xs">
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
        <button type="button" className="w-full rounded border border-gray-200 px-4 py-3 text-sm font-bold text-gray-700 transition-colors hover:bg-gray-50">
          View All {product.reviews.toLocaleString()} Reviews
        </button>
      </div>
    );
  }

  if (activeTab === "qa") {
    return (
      <div className="rounded border border-gray-200 bg-white p-5 shadow-3xs">
        <h2 className="text-lg font-bold text-gray-900">Q&amp;A</h2>
        <p className="mt-2 text-sm text-gray-600">Questions from buyers can be reviewed and answered from here.</p>
        <button type="button" onClick={() => toast.success("Opening buyer questions")} className="mt-4 rounded border border-[#0F4C81] px-4 py-2 text-sm font-bold text-[#0F4C81] transition-colors hover:bg-blue-50">
          Review Questions
        </button>
      </div>
    );
  }

  if (activeTab === "shipping") {
    return (
      <div className="rounded border border-gray-200 bg-white p-5 shadow-3xs">
        <div className="space-y-4 text-sm text-gray-600">
          <div className="flex items-start gap-3">
            <Truck className="mt-0.5 size-5 text-[#0F4C81]" />
            <div>
              <h2 className="text-lg font-bold text-gray-900">Shipping &amp; Returns</h2>
              <p className="mt-1 leading-6">Fast fulfillment with tracked delivery. Standard return policy applies unless a compliance review is open.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded border border-gray-200 p-4">
            <CircleAlert className="mt-0.5 size-5 text-amber-500" />
            <p>For international items or restricted stock, compliance steps can be configured in the moderation panel.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded border border-gray-200 bg-white p-5 shadow-3xs">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-gray-900">Frequently Bought Together</h2>
          <p className="text-sm text-gray-500">Bundle suggestions can be maintained globally per product record.</p>
        </div>
        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-[#0F4C81]">3 items</span>
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_0.9fr] lg:items-center">
        {product.bundle.map((item) => (
          <div key={item.title} className="flex flex-col items-center gap-3 rounded border border-gray-200 p-3 text-center">
            <Image src={item.image} alt={item.title} width={400} height={220} unoptimized className="h-20 w-full rounded object-cover" />
            <div>
              <p className="text-sm font-semibold text-gray-800">{item.title}</p>
              <p className="mt-1 text-sm font-bold text-[#0F4C81]">{item.price}</p>
            </div>
          </div>
        ))}

        <div className="hidden h-10 w-px bg-gray-200 lg:block" />
        <div className="rounded border border-gray-200 p-4 text-left lg:ml-2">
          <p className="text-xs text-gray-500">Total price for 3 items</p>
          <p className="mt-1 text-2xl font-extrabold text-[#0F4C81]">$373.99</p>
          <button type="button" onClick={() => toast.success("Added bundle to cart")} className="mt-4 rounded bg-amber-400 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-amber-500">
            Add Bundle to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
