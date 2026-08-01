import React, { useState } from "react";
import { Palette, Plus, Ruler, X } from "lucide-react";
import toast from "react-hot-toast";
import Card from "./Card";
import { FormState, PatchFunction, inputClasses } from "@/types/productManagement";

const SIZE_TABS = {
  Clothing: ["XS", "S", "M", "L", "XL", "XXL", "XXXL", "One Size"],
  Numeric: Array.from({ length: 20 }, (_, i) => String(i + 1)),
  Shoe: ["35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47"],
} as const;

type SizeTab = keyof typeof SIZE_TABS;

interface ColorsSizesProps {
  form: FormState;
  patch: PatchFunction;
}

export default function ColorsSizes({ form, patch }: ColorsSizesProps) {
  const [colorName, setColorName] = useState("");
  const [colorHex, setColorHex] = useState("#3b82f6");
  const [sizeTab, setSizeTab] = useState<SizeTab>("Clothing");

  const addColor = () => {
    if (!colorName.trim()) return toast.error("Enter a color name");
    if (form.colors.some(c => c.name.toLowerCase() === colorName.trim().toLowerCase()))
      return toast.error("Color already exists");
    patch("colors", [...form.colors, { name: colorName.trim(), hex: colorHex }]);
    setColorName(""); setColorHex("#3b82f6");
  };

  const toggleSize = (s: string) =>
    patch("sizes", form.sizes.includes(s) ? form.sizes.filter(x => x !== s) : [...form.sizes, s]);

  return (
    <Card icon={<Palette className="size-4.5" />} title="Colors & Sizes">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:divide-x md:divide-gray-100">

        {/* Colors */}
        <div className="space-y-3 md:pr-6">
          <p className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wide text-gray-500">
            <Palette className="size-3.5" /> Colors
          </p>
          <div className="flex gap-2">
            <input type="text" value={colorName}
              onChange={(e) => setColorName(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addColor())}
              placeholder="Name (e.g. Ocean Blue)"
              className={`${inputClasses} flex-1 min-w-0`} />
            <input type="color" value={colorHex}
              onChange={(e) => setColorHex(e.target.value)}
              title="Pick color"
              className="h-10.5 w-10.5 shrink-0 cursor-pointer rounded border border-gray-200 p-0.5" />
            <button type="button" onClick={addColor}
              className="shrink-0 rounded bg-[#0F4C81] px-3 py-2 font-bold text-white hover:bg-[#0d3f6e] transition-colors">
              <Plus className="size-4" />
            </button>
          </div>
          <div className="flex flex-wrap gap-1.5 min-h-7">
            {form.colors.length === 0
              ? <p className="text-xs italic text-gray-400">No colors added yet</p>
              : form.colors.map((c, i) => (
                <span key={i} className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white py-1 pl-1.5 pr-2.5 text-xs font-semibold text-gray-700 shadow-2xs">
                  <span className="size-3.5 rounded-full border border-white/50 shadow-sm" style={{ backgroundColor: c.hex }} />
                  {c.name}
                  <button type="button" onClick={() => patch("colors", form.colors.filter((_, j) => j !== i))}
                    className="text-gray-400 hover:text-rose-500 transition-colors">
                    <X className="size-3" />
                  </button>
                </span>
              ))
            }
          </div>
        </div>

        {/* Sizes */}
        <div className="space-y-3 md:pl-6">
          <p className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wide text-gray-500">
            <Ruler className="size-3.5" /> Sizes
          </p>

          <div className="flex overflow-hidden rounded border border-gray-200 text-[11px] font-bold">
            {(Object.keys(SIZE_TABS) as SizeTab[]).map((tab) => (
              <button key={tab} type="button" onClick={() => setSizeTab(tab)}
                className={`flex-1 py-1.5 transition-colors ${sizeTab === tab ? "bg-[#0F4C81] text-white" : "bg-white text-gray-500 hover:bg-gray-50"}`}>
                {tab}
              </button>
            ))}
          </div>

          <div className="flex max-h-22.5 flex-wrap gap-1.5 overflow-y-auto pr-1 custom-scrollbar">
            {SIZE_TABS[sizeTab].map((s) => (
              <button key={s} type="button" onClick={() => toggleSize(s)}
                className={[
                  "min-w-9 rounded border px-2.5 py-1 text-xs font-bold transition-all duration-100",
                  form.sizes.includes(s)
                    ? "border-[#0F4C81] bg-[#0F4C81] text-white shadow-sm"
                    : "border-gray-200 bg-white text-gray-600 hover:border-[#0F4C81]/40 hover:text-[#0F4C81]",
                ].join(" ")}>
                {s}
              </button>
            ))}
          </div>

          {form.sizes.length > 0 && (
            <div className="flex flex-wrap items-center gap-1 pt-0.5">
              <span className="text-[10px] font-bold uppercase tracking-wide text-gray-400">Selected:</span>
              {form.sizes.map((s) => (
                <span key={s} className="inline-flex items-center gap-1 rounded bg-[#0F4C81]/10 px-2 py-0.5 text-xs font-bold text-[#0F4C81]">
                  {s}
                  <button type="button" onClick={() => toggleSize(s)}><X className="size-2.5" /></button>
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}
