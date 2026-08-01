import React from "react";
import { DollarSign } from "lucide-react";
import Card from "./Card";
import Field from "./Field";
import { FormState, PatchFunction, inputClasses } from "@/types/productManagement";

interface PricingProps {
  form: FormState;
  patch: PatchFunction;
}

export default function Pricing({ form, patch }: PricingProps) {
  return (
    <Card icon={<DollarSign className="size-4.5" />} title="Pricing">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="Selling Price (USD)" required>
          <div className="relative">
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 font-bold text-gray-400">$</span>
            <input type="number" min={0} step={0.01} value={form.price}
              onChange={(e) => patch("price", e.target.value)}
              placeholder="0.00" className={`${inputClasses} pl-7`} />
          </div>
        </Field>
        <Field label="Original / MRP Price (USD)" hint="Leave empty if no discount">
          <div className="relative">
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 font-bold text-gray-400">$</span>
            <input type="number" min={0} step={0.01} value={form.oldPrice}
              onChange={(e) => patch("oldPrice", e.target.value)}
              placeholder="0.00" className={`${inputClasses} pl-7`} />
          </div>
        </Field>
      </div>
    </Card>
  );
}
