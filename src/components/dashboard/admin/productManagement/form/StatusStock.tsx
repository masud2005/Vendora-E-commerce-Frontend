import React from "react";
import { Package, Star, Tag } from "lucide-react";
import Card from "./Card";
import Field from "./Field";
import { FormState, PatchFunction, inputClasses } from "@/types/productManagement";

const statusOptions = ["PENDING", "APPROVED"] as const;

interface StatusStockProps {
  form: FormState;
  patch: PatchFunction;
}

export default function StatusStock({ form, patch }: StatusStockProps) {
  const handleRating = (v: string) => {
    if (v === "" || v === ".") { patch("rating", v); return; }
    const n = parseFloat(v);
    if (isNaN(n)) return;
    patch("rating", String(Math.min(5, Math.max(0, n))));
  };

  return (
    <Card icon={<Package className="size-4.5" />} title="Status & Stock">
      <div className="space-y-4">

        {/* Status toggle */}
        <Field label="Listing Status">
          <div className="flex overflow-hidden rounded border border-gray-200">
            {statusOptions.map((opt) => (
              <button key={opt} type="button" onClick={() => patch("status", opt)}
                className={[
                  "flex-1 py-2 text-xs font-bold uppercase tracking-wider transition-colors",
                  form.status === opt
                    ? opt === "APPROVED" ? "bg-emerald-600 text-white" : "bg-amber-500 text-white"
                    : "bg-white text-gray-500 hover:bg-gray-50",
                ].join(" ")}
              >
                {opt}
              </button>
            ))}
          </div>
        </Field>

        {/* In-stock toggle */}
        <Field label="Availability">
          <button type="button" onClick={() => patch("inStock", !form.inStock)}
            className={[
              "flex w-full items-center justify-between rounded border px-4 py-3 transition-colors",
              form.inStock ? "border-emerald-200 bg-emerald-50" : "border-rose-200 bg-rose-50",
            ].join(" ")}
          >
            <span className={`text-sm font-bold ${form.inStock ? "text-emerald-700" : "text-rose-600"}`}>
              {form.inStock ? "In Stock" : "Out of Stock"}
            </span>
            <div className={`relative h-5 w-9 rounded-full transition-colors ${form.inStock ? "bg-emerald-500" : "bg-gray-300"}`}>
              <div className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow transition-transform ${form.inStock ? "translate-x-4" : "translate-x-0.5"}`} />
            </div>
          </button>
        </Field>

        {/* Quantity */}
        <Field label="Stock Quantity" hint="Units available for purchase">
          <div className="relative">
            <Package className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
            <input type="number" min={0} step={1} value={form.quantity}
              onChange={(e) => patch("quantity", e.target.value)}
              placeholder="e.g. 150" className={`${inputClasses} pl-9`} />
          </div>
        </Field>

        {/* Warranty */}
        <Field label="Warranty">
          <input type="text" value={form.warranty}
            onChange={(e) => patch("warranty", e.target.value)}
            placeholder="e.g. 2 Years Manufacturer"
            className={inputClasses} />
        </Field>

        {/* Rating 0–5 */}
        <Field label="Initial Rating" hint="0.0 – 5.0">
          <div className="relative">
            <Star className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 fill-amber-400 text-amber-400" />
            <input
              type="number" min={0} max={5} step={0.1}
              value={form.rating}
              onChange={(e) => handleRating(e.target.value)}
              onBlur={(e) => {
                const n = parseFloat(e.target.value);
                if (!isNaN(n)) patch("rating", String(Math.min(5, Math.max(0, n))));
              }}
              placeholder="e.g. 4.5"
              className={`${inputClasses} pl-9`}
            />
          </div>
          {/* Star preview */}
          {form.rating && !isNaN(parseFloat(form.rating)) && (
            <div className="mt-1.5 flex items-center gap-0.5">
              {Array.from({ length: 5 }, (_, i) => (
                <Star key={i}
                  className={`size-3.5 transition-colors ${i < Math.round(parseFloat(form.rating)) ? "fill-amber-400 text-amber-400" : "fill-gray-200 text-gray-200"}`} />
              ))}
              <span className="ml-1 text-xs font-semibold text-gray-500">
                {parseFloat(form.rating).toFixed(1)} / 5.0
              </span>
            </div>
          )}
        </Field>

        {/* Category tag preview */}
        <Field label="Category">
          <div className="flex items-center gap-2 rounded border border-gray-100 bg-gray-50 px-3 py-2.5">
            <Tag className="size-3.5 shrink-0 text-gray-400" />
            {form.category ? (
              <span className="text-xs font-semibold text-gray-700">
                {form.category}{form.subcategory ? ` › ${form.subcategory}` : ""}
              </span>
            ) : (
              <span className="text-xs italic text-gray-400">Set in Basic Information</span>
            )}
          </div>
        </Field>
      </div>
    </Card>
  );
}
