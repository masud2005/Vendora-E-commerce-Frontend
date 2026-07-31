"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import toast from "react-hot-toast";
import {
  ArrowLeft,
  ChevronDown,
  Check,
  Plus,
  X,
  ImagePlus,
  Tag,
  Palette,
  Ruler,
  Star,
  ListChecks,
  SlidersHorizontal,
  DollarSign,
  PackageSearch,
  Save,
  Send,
} from "lucide-react";

/* ─────────────────────────── helpers ─────────────────────────── */

const categoryOptions = ["Electronics", "Fashion", "Home & Garden", "Sports", "Books", "Toys", "Beauty"];
const subcategoryMap: Record<string, string[]> = {
  Electronics: ["Peripherals", "Smartphones", "Laptops", "Audio", "Cameras"],
  Fashion: ["Men's Clothing", "Women's Clothing", "Footwear", "Accessories"],
  "Home & Garden": ["Furniture", "Kitchen", "Decor", "Garden Tools"],
  Sports: ["Fitness", "Outdoor", "Team Sports", "Water Sports"],
  Books: ["Fiction", "Non-Fiction", "Academic", "Comics"],
  Toys: ["Action Figures", "Board Games", "Educational", "Outdoor"],
  Beauty: ["Skincare", "Haircare", "Makeup", "Fragrance"],
};
const sellerOptions = ["TechTrend Solutions", "AudioPhile Global", "SmartHome Direct"];
const statusOptions = ["PENDING", "APPROVED"] as const;

/* ─────────────────────── custom dropdown ─────────────────────── */

interface SelectProps {
  label: string;
  value: string;
  options: string[];
  onChange: (v: string) => void;
  placeholder?: string;
}

function CustomSelect({ label: _label, value, options, onChange, placeholder = "Select…" }: SelectProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((p) => !p)}
        className={`flex w-full items-center justify-between gap-2 rounded-lg border px-3.5 py-2.5 text-sm font-medium shadow-2xs transition-all duration-150 outline-none
          ${open ? "border-[#0F4C81] ring-2 ring-[#0F4C81]/10" : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"}
          ${!value ? "text-gray-400" : "text-gray-800"}`}
      >
        <span className="truncate">{value || placeholder}</span>
        <ChevronDown className={`size-4 shrink-0 text-gray-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      <div
        className={`absolute left-0 top-full z-50 mt-1.5 w-full origin-top rounded-xl border border-gray-100 bg-white shadow-lg transition-all duration-200
          ${open ? "scale-100 opacity-100 pointer-events-auto" : "scale-95 opacity-0 pointer-events-none"}`}
      >
        <div className="p-1.5 max-h-52 overflow-y-auto custom-scrollbar">
          {options.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => { onChange(opt); setOpen(false); }}
              className={`flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-100
                ${value === opt ? "bg-[#0F4C81]/8 text-[#0F4C81]" : "text-gray-700 hover:bg-gray-50"}`}
            >
              {opt}
              {value === opt && <Check className="size-4 shrink-0" />}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────── reusable form primitives ─────────────────── */

function SectionCard({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-3xs overflow-hidden">
      <div className="flex items-center gap-2.5 border-b border-gray-100 bg-gray-50/60 px-5 py-3.5">
        <span className="text-[#0F4C81]">{icon}</span>
        <h2 className="text-sm font-bold text-gray-800 tracking-tight">{title}</h2>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

function Field({ label, required, children, hint }: { label: string; required?: boolean; children: React.ReactNode; hint?: string }) {
  return (
    <div className="space-y-1.5">
      <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide">
        {label}{required && <span className="ml-0.5 text-rose-500">*</span>}
      </label>
      {children}
      {hint && <p className="text-[11px] text-gray-400">{hint}</p>}
    </div>
  );
}

const inputCls =
  "w-full rounded-lg border border-gray-200 bg-white px-3.5 py-2.5 text-sm font-medium text-gray-800 placeholder:text-gray-400 shadow-2xs outline-none transition-all duration-150 focus:border-[#0F4C81] focus:ring-2 focus:ring-[#0F4C81]/10";

/* ─────────────────────────── main form ─────────────────────────── */

interface FormState {
  title: string;
  brand: string;
  sku: string;
  description: string;
  price: string;
  oldPrice: string;
  category: string;
  subcategory: string;
  seller: string;
  status: "PENDING" | "APPROVED";
  inStock: boolean;
  warranty: string;
  rating: string;
  colors: { name: string; hex: string }[];
  sizes: string[];
  highlights: string[];
  images: string[];
  attributes: { label: string; value: string }[];
}

const defaultForm: FormState = {
  title: "",
  brand: "",
  sku: "",
  description: "",
  price: "",
  oldPrice: "",
  category: "",
  subcategory: "",
  seller: "",
  status: "PENDING",
  inStock: true,
  warranty: "",
  rating: "",
  colors: [],
  sizes: [],
  highlights: [],
  images: [],
  attributes: [],
};

export default function AddProductForm() {
  const [form, setForm] = useState<FormState>(defaultForm);

  /* ── field helpers ── */
  const set = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  /* ── colors ── */
  const [colorName, setColorName] = useState("");
  const [colorHex, setColorHex] = useState("#000000");
  const addColor = () => {
    if (!colorName.trim()) return toast.error("Color name is required");
    set("colors", [...form.colors, { name: colorName.trim(), hex: colorHex }]);
    setColorName("");
    setColorHex("#000000");
  };

  /* ── sizes ── */
  const [sizeInput, setSizeInput] = useState("");
  const addSize = () => {
    const val = sizeInput.trim().toUpperCase();
    if (!val) return;
    if (form.sizes.includes(val)) return toast.error("Size already added");
    set("sizes", [...form.sizes, val]);
    setSizeInput("");
  };

  /* ── highlights ── */
  const [highlightInput, setHighlightInput] = useState("");
  const addHighlight = () => {
    if (!highlightInput.trim()) return;
    set("highlights", [...form.highlights, highlightInput.trim()]);
    setHighlightInput("");
  };

  /* ── images ── */
  const [imageInput, setImageInput] = useState("");
  const addImage = () => {
    const url = imageInput.trim();
    if (!url) return;
    set("images", [...form.images, url]);
    setImageInput("");
  };

  /* ── attributes ── */
  const [attrLabel, setAttrLabel] = useState("");
  const [attrValue, setAttrValue] = useState("");
  const addAttribute = () => {
    if (!attrLabel.trim() || !attrValue.trim()) return toast.error("Both label and value are required");
    set("attributes", [...form.attributes, { label: attrLabel.trim(), value: attrValue.trim() }]);
    setAttrLabel("");
    setAttrValue("");
  };

  /* ── submit ── */
  const handlePublish = () => {
    if (!form.title) return toast.error("Product title is required");
    if (!form.price) return toast.error("Price is required");
    if (!form.category) return toast.error("Category is required");
    if (!form.seller) return toast.error("Seller is required");
    toast.success("Product published successfully!");
  };

  const handleDraft = () => {
    toast.success("Saved as draft!");
  };

  /* ─────────── render ─────────── */
  return (
    <div className="space-y-6 pb-32 font-sans select-none text-left">

      {/* ── page header ── */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-1">
          <div className="flex items-center gap-1.5 text-[10px] font-semibold text-gray-400 uppercase tracking-[0.22em]">
            <Link href="/admin" className="hover:text-gray-600 transition-colors">Dashboard</Link>
            <span>&gt;</span>
            <Link href="/admin/productManagement" className="hover:text-gray-600 transition-colors">Product Management</Link>
            <span>&gt;</span>
            <span className="text-[#0F4C81]">Create Product</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight leading-none">
            Create New Product
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 font-medium">
            Fill in the details below to add a new product to the catalogue.
          </p>
        </div>
        <Link
          href="/admin/productManagement"
          className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-600 shadow-2xs transition-colors hover:bg-gray-50 hover:text-gray-800"
        >
          <ArrowLeft className="size-4" />
          Back to List
        </Link>
      </div>

      {/* ── two-column grid ── */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

        {/* ── LEFT: main sections ── */}
        <div className="space-y-6 lg:col-span-2">

          {/* 1. Basic Info */}
          <SectionCard icon={<PackageSearch className="size-5" />} title="Basic Information">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <Field label="Product Title" required>
                  <input
                    type="text"
                    value={form.title}
                    onChange={(e) => set("title", e.target.value)}
                    placeholder="e.g. Apex TKL Mechanical Keyboard"
                    className={inputCls}
                  />
                </Field>
              </div>
              <Field label="Brand" required>
                <input
                  type="text"
                  value={form.brand}
                  onChange={(e) => set("brand", e.target.value)}
                  placeholder="e.g. Apex"
                  className={inputCls}
                />
              </Field>
              <Field label="SKU" required hint="Unique product identifier">
                <input
                  type="text"
                  value={form.sku}
                  onChange={(e) => set("sku", e.target.value)}
                  placeholder="e.g. APX-TKL-001"
                  className={inputCls}
                />
              </Field>
              <div className="sm:col-span-2">
                <Field label="Description" required>
                  <textarea
                    rows={4}
                    value={form.description}
                    onChange={(e) => set("description", e.target.value)}
                    placeholder="Describe the product in detail…"
                    className={`${inputCls} resize-none`}
                  />
                </Field>
              </div>
            </div>
          </SectionCard>

          {/* 2. Pricing */}
          <SectionCard icon={<DollarSign className="size-5" />} title="Pricing">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Selling Price (USD)" required>
                <div className="relative">
                  <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm font-bold text-gray-400">$</span>
                  <input
                    type="number"
                    min={0}
                    step={0.01}
                    value={form.price}
                    onChange={(e) => set("price", e.target.value)}
                    placeholder="0.00"
                    className={`${inputCls} pl-7`}
                  />
                </div>
              </Field>
              <Field label="Original / MRP Price (USD)" hint="Leave empty if no discount">
                <div className="relative">
                  <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm font-bold text-gray-400">$</span>
                  <input
                    type="number"
                    min={0}
                    step={0.01}
                    value={form.oldPrice}
                    onChange={(e) => set("oldPrice", e.target.value)}
                    placeholder="0.00"
                    className={`${inputCls} pl-7`}
                  />
                </div>
              </Field>
            </div>
          </SectionCard>

          {/* 3. Highlights */}
          <SectionCard icon={<ListChecks className="size-5" />} title="Highlights">
            <div className="space-y-3">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={highlightInput}
                  onChange={(e) => setHighlightInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addHighlight())}
                  placeholder="e.g. Hot-swap PCB sockets"
                  className={`${inputCls} flex-1`}
                />
                <button
                  type="button"
                  onClick={addHighlight}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-[#0F4C81] px-3.5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#0C447C] shrink-0"
                >
                  <Plus className="size-4" /> Add
                </button>
              </div>
              {form.highlights.length > 0 && (
                <ul className="space-y-2">
                  {form.highlights.map((h, i) => (
                    <li key={i} className="flex items-center justify-between gap-3 rounded-lg border border-gray-100 bg-gray-50 px-3.5 py-2.5 text-sm text-gray-700 font-medium">
                      <span className="flex items-center gap-2">
                        <span className="size-1.5 rounded-full bg-[#0F4C81] shrink-0" />
                        {h}
                      </span>
                      <button type="button" onClick={() => set("highlights", form.highlights.filter((_, j) => j !== i))} className="text-gray-400 hover:text-rose-500 transition-colors">
                        <X className="size-4" />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </SectionCard>

          {/* 4. Variants */}
          <SectionCard icon={<Palette className="size-5" />} title="Colors & Sizes">
            <div className="space-y-5">
              {/* colors */}
              <div className="space-y-3">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">Colors</p>
                <div className="flex flex-wrap gap-2">
                  <input
                    type="text"
                    value={colorName}
                    onChange={(e) => setColorName(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addColor())}
                    placeholder="Color name"
                    className={`${inputCls} flex-1 min-w-32`}
                  />
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      value={colorHex}
                      onChange={(e) => setColorHex(e.target.value)}
                      className="size-[42px] cursor-pointer rounded-lg border border-gray-200 p-0.5 shadow-2xs"
                    />
                    <button
                      type="button"
                      onClick={addColor}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-[#0F4C81] px-3.5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#0C447C]"
                    >
                      <Plus className="size-4" /> Add
                    </button>
                  </div>
                </div>
                {form.colors.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {form.colors.map((c, i) => (
                      <span key={i} className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white pl-1.5 pr-3 py-1 text-xs font-semibold text-gray-700 shadow-2xs">
                        <span className="size-4 rounded-full border border-gray-200 shrink-0" style={{ backgroundColor: c.hex }} />
                        {c.name}
                        <button type="button" onClick={() => set("colors", form.colors.filter((_, j) => j !== i))} className="ml-0.5 text-gray-400 hover:text-rose-500 transition-colors">
                          <X className="size-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="border-t border-gray-100" />

              {/* sizes */}
              <div className="space-y-3">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">Sizes</p>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={sizeInput}
                    onChange={(e) => setSizeInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addSize())}
                    placeholder="e.g. S, M, L, XL or 42"
                    className={`${inputCls} flex-1`}
                  />
                  <button
                    type="button"
                    onClick={addSize}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-[#0F4C81] px-3.5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#0C447C] shrink-0"
                  >
                    <Plus className="size-4" /> Add
                  </button>
                </div>
                {form.sizes.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {form.sizes.map((s, i) => (
                      <span key={i} className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-bold text-gray-700">
                        {s}
                        <button type="button" onClick={() => set("sizes", form.sizes.filter((_, j) => j !== i))} className="text-gray-400 hover:text-rose-500 transition-colors">
                          <X className="size-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </SectionCard>

          {/* 5. Attributes */}
          <SectionCard icon={<SlidersHorizontal className="size-5" />} title="Attributes / Specifications">
            <div className="space-y-3">
              <div className="grid grid-cols-5 gap-2">
                <input
                  type="text"
                  value={attrLabel}
                  onChange={(e) => setAttrLabel(e.target.value)}
                  placeholder="Label (e.g. Material)"
                  className={`${inputCls} col-span-2`}
                />
                <input
                  type="text"
                  value={attrValue}
                  onChange={(e) => setAttrValue(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addAttribute())}
                  placeholder="Value (e.g. Aluminum)"
                  className={`${inputCls} col-span-2`}
                />
                <button
                  type="button"
                  onClick={addAttribute}
                  className="col-span-1 inline-flex items-center justify-center gap-1 rounded-lg bg-[#0F4C81] py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#0C447C]"
                >
                  <Plus className="size-4" />
                </button>
              </div>
              {form.attributes.length > 0 && (
                <div className="overflow-hidden rounded-lg border border-gray-100">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-100 bg-gray-50 text-[11px] font-bold uppercase tracking-wide text-gray-500">
                        <th className="px-3.5 py-2.5 text-left">Label</th>
                        <th className="px-3.5 py-2.5 text-left">Value</th>
                        <th className="w-8" />
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {form.attributes.map((a, i) => (
                        <tr key={i} className="group">
                          <td className="px-3.5 py-2.5 font-semibold text-gray-700">{a.label}</td>
                          <td className="px-3.5 py-2.5 text-gray-500">{a.value}</td>
                          <td className="px-2">
                            <button type="button" onClick={() => set("attributes", form.attributes.filter((_, j) => j !== i))} className="text-gray-300 group-hover:text-rose-500 transition-colors">
                              <X className="size-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </SectionCard>
        </div>

        {/* ── RIGHT: sidebar sections ── */}
        <div className="space-y-6">

          {/* Categorization */}
          <SectionCard icon={<Tag className="size-5" />} title="Categorization">
            <div className="space-y-4">
              <Field label="Category" required>
                <CustomSelect
                  label="Category"
                  value={form.category}
                  options={categoryOptions}
                  onChange={(v) => { set("category", v); set("subcategory", ""); }}
                  placeholder="Select category…"
                />
              </Field>
              <Field label="Subcategory">
                <CustomSelect
                  label="Subcategory"
                  value={form.subcategory}
                  options={form.category ? (subcategoryMap[form.category] ?? []) : []}
                  onChange={(v) => set("subcategory", v)}
                  placeholder={form.category ? "Select subcategory…" : "Select category first"}
                />
              </Field>
              <Field label="Seller" required>
                <CustomSelect
                  label="Seller"
                  value={form.seller}
                  options={sellerOptions}
                  onChange={(v) => set("seller", v)}
                  placeholder="Select seller…"
                />
              </Field>
            </div>
          </SectionCard>

          {/* Status & Stock */}
          <SectionCard icon={<Star className="size-5" />} title="Status & Stock">
            <div className="space-y-4">
              {/* Status */}
              <Field label="Listing Status">
                <div className="flex rounded-lg border border-gray-200 overflow-hidden">
                  {statusOptions.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => set("status", opt)}
                      className={`flex-1 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors
                        ${form.status === opt
                          ? opt === "APPROVED"
                            ? "bg-emerald-600 text-white"
                            : "bg-amber-500 text-white"
                          : "bg-white text-gray-500 hover:bg-gray-50"
                        }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </Field>

              {/* In Stock toggle */}
              <Field label="Availability">
                <button
                  type="button"
                  onClick={() => set("inStock", !form.inStock)}
                  className={`flex w-full items-center justify-between rounded-lg border px-4 py-3 transition-colors ${
                    form.inStock
                      ? "border-emerald-200 bg-emerald-50"
                      : "border-rose-200 bg-rose-50"
                  }`}
                >
                  <span className={`text-sm font-bold ${form.inStock ? "text-emerald-700" : "text-rose-600"}`}>
                    {form.inStock ? "In Stock" : "Out of Stock"}
                  </span>
                  <div className={`relative h-5 w-9 rounded-full transition-colors ${form.inStock ? "bg-emerald-500" : "bg-gray-300"}`}>
                    <div className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow transition-transform ${form.inStock ? "translate-x-4" : "translate-x-0.5"}`} />
                  </div>
                </button>
              </Field>

              {/* Warranty */}
              <Field label="Warranty">
                <input
                  type="text"
                  value={form.warranty}
                  onChange={(e) => set("warranty", e.target.value)}
                  placeholder="e.g. 2 Years Manufacturer"
                  className={inputCls}
                />
              </Field>

              {/* Rating */}
              <Field label="Initial Rating" hint="1.0 – 5.0">
                <div className="relative">
                  <Star className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-amber-400 fill-amber-400" />
                  <input
                    type="number"
                    min={1}
                    max={5}
                    step={0.1}
                    value={form.rating}
                    onChange={(e) => set("rating", e.target.value)}
                    placeholder="4.5"
                    className={`${inputCls} pl-9`}
                  />
                </div>
              </Field>
            </div>
          </SectionCard>

          {/* Product Images */}
          <SectionCard icon={<ImagePlus className="size-5" />} title="Product Images">
            <div className="space-y-3">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={imageInput}
                  onChange={(e) => setImageInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addImage())}
                  placeholder="Paste image URL…"
                  className={`${inputCls} flex-1 min-w-0`}
                />
                <button
                  type="button"
                  onClick={addImage}
                  className="inline-flex items-center gap-1 rounded-lg bg-[#0F4C81] px-3 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#0C447C] shrink-0"
                >
                  <Plus className="size-4" />
                </button>
              </div>

              {form.images.length > 0 ? (
                <div className="grid grid-cols-3 gap-2">
                  {form.images.map((src, i) => (
                    <div key={i} className="group relative aspect-square rounded-lg border border-gray-200 overflow-hidden bg-gray-50">
                      <Image
                        src={src}
                        alt={`Product image ${i + 1}`}
                        fill
                        unoptimized
                        className="object-cover"
                        onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/200x200/f1f5f9/94a3b8?text=Error"; }}
                      />
                      <button
                        type="button"
                        onClick={() => set("images", form.images.filter((_, j) => j !== i))}
                        className="absolute right-1 top-1 rounded-full bg-rose-500 p-0.5 text-white opacity-0 group-hover:opacity-100 transition-opacity shadow"
                      >
                        <X className="size-3" />
                      </button>
                      {i === 0 && (
                        <span className="absolute bottom-1 left-1 rounded bg-[#0F4C81] px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white">
                          Main
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-gray-200 py-8 text-gray-400">
                  <ImagePlus className="size-8 opacity-40" />
                  <p className="text-xs font-medium">No images added yet</p>
                </div>
              )}
              <p className="text-[11px] text-gray-400">First image will be the main thumbnail.</p>
            </div>
          </SectionCard>

          {/* Sizes quick reference */}
          <SectionCard icon={<Ruler className="size-5" />} title="Size Guide Reference">
            <p className="text-xs text-gray-500 leading-relaxed">
              Common formats: <span className="font-semibold text-gray-700">XS, S, M, L, XL, XXL</span> for clothing ·{" "}
              <span className="font-semibold text-gray-700">38–46</span> for shoes ·{" "}
              <span className="font-semibold text-gray-700">One Size</span> for accessories.
            </p>
          </SectionCard>
        </div>
      </div>

      {/* ── sticky bottom action bar ── */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-gray-200 bg-white/90 backdrop-blur-md px-4 py-3.5 shadow-lg">
        <div className="mx-auto flex max-w-screen-xl items-center justify-between gap-3">
          <p className="hidden text-sm font-medium text-gray-500 sm:block">
            Fill all required (<span className="text-rose-500">*</span>) fields before publishing.
          </p>
          <div className="flex items-center gap-3 ml-auto">
            <Link
              href="/admin/productManagement"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-600 shadow-2xs transition-colors hover:bg-gray-50"
            >
              Cancel
            </Link>
            <button
              type="button"
              onClick={handleDraft}
              className="inline-flex items-center gap-2 rounded-lg border border-[#0F4C81] bg-white px-4 py-2.5 text-sm font-bold text-[#0F4C81] shadow-2xs transition-colors hover:bg-blue-50"
            >
              <Save className="size-4" />
              Save Draft
            </button>
            <button
              type="button"
              onClick={handlePublish}
              className="inline-flex items-center gap-2 rounded-lg bg-[#0F4C81] px-5 py-2.5 text-sm font-bold text-white shadow-2xs transition-colors hover:bg-[#0C447C]"
            >
              <Send className="size-4" />
              Publish Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
