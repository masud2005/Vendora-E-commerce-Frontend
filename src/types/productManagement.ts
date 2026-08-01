import { UploadedImage } from "../components/dashboard/admin/productManagement/ImageUploader";

export interface FormState {
  title: string; brand: string; description: string;
  price: string; oldPrice: string; quantity: string;
  category: string; subcategory: string; seller: string;
  status: "PENDING" | "APPROVED"; inStock: boolean;
  warranty: string; rating: string;
  colors: { name: string; hex: string }[];
  sizes: string[];
  images: UploadedImage[];
}

export type PatchFunction = <K extends keyof FormState>(k: K, v: FormState[K]) => void;

export const inputClasses = "w-full rounded border border-gray-200 bg-white px-3.5 py-2.5 text-sm font-medium text-gray-800 placeholder:text-gray-400 shadow-2xs outline-none transition-all focus:border-[#0F4C81] focus:ring-2 focus:ring-[#0F4C81]/10";
