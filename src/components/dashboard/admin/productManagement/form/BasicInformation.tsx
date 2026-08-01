import React from "react";
import { PackageSearch } from "lucide-react";
import Card from "./Card";
import Field from "./Field";
import CustomSelect from "./CustomSelect";
import { FormState, PatchFunction, inputClasses } from "@/types/productManagement";

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

interface BasicInformationProps {
  form: FormState;
  patch: PatchFunction;
}

export default function BasicInformation({ form, patch }: BasicInformationProps) {
  return (
    <Card icon={<PackageSearch className="size-4.5" />} title="Basic Information">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <Field label="Product Title" required>
            <input type="text" value={form.title}
              onChange={(e) => patch("title", e.target.value)}
              placeholder="e.g. Apex TKL Mechanical Keyboard"
              className={inputClasses} />
          </Field>
        </div>
        <Field label="Brand" required>
          <input type="text" value={form.brand}
            onChange={(e) => patch("brand", e.target.value)}
            placeholder="e.g. Apex"
            className={inputClasses} />
        </Field>
        <Field label="Category" required>
          <CustomSelect value={form.category} options={categoryOptions}
            onChange={(v) => { patch("category", v); patch("subcategory", ""); }}
            placeholder="Select category…" />
        </Field>
        <Field label="Subcategory">
          <CustomSelect value={form.subcategory}
            options={form.category ? subcategoryMap[form.category] ?? [] : []}
            onChange={(v) => patch("subcategory", v)}
            placeholder={form.category ? "Select subcategory…" : "Select category first"}
            disabled={!form.category} />
        </Field>
        <Field label="Seller" required>
          <CustomSelect value={form.seller} options={sellerOptions}
            onChange={(v) => patch("seller", v)}
            placeholder="Select seller…" />
        </Field>
      </div>
    </Card>
  );
}
