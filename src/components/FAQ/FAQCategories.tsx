"use client";

import { ShoppingBag, CreditCard, Truck, Store } from "lucide-react";

interface CategoryItem {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const categories: CategoryItem[] = [
  {
    id: "ordering-management",
    title: "Ordering",
    description: "Manage orders, cancellations and cart issues.",
    icon: ShoppingBag,
  },
  {
    id: "payment-refunds",
    title: "Payment",
    description: "Refunds, transaction errors and payment methods.",
    icon: CreditCard,
  },
  {
    id: "shipping-delivery",
    title: "Shipping",
    description: "Delivery times, tracking and regional restrictions.",
    icon: Truck,
  },
  {
    id: "seller-related",
    title: "Selling",
    description: "Store setup, payout schedules and seller policies.",
    icon: Store,
  },
];

export default function FAQCategories() {
  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100; // Offset for fixed headers
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="  relative z-20 -mt-12 sm:-mt-20 container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <button
              key={category.id}
              onClick={() => handleScrollToSection(category.id)}
              className="group bg-white rounded-lg border border-gray-150 p-6 sm:p-8 flex flex-col items-center text-center  hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-brand-primary-200"
            >
              {/* Icon Container */}
              <div className="size-14 sm:size-16 rounded-lg bg-[#EAF2FA] group-hover:bg-brand-primary-50 flex items-center justify-center text-brand-primary-800 transition-colors duration-300 mb-5">
                <Icon className="size-6 sm:size-7 stroke-[1.8] group-hover:scale-110 transition-transform duration-300" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 leading-tight group-hover:text-brand-primary-600 transition-colors duration-200">
                {category.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-gray-500 font-medium leading-relaxed mt-2 max-w-55">
                {category.description}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
