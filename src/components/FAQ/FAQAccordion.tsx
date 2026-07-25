"use client";

import { useState } from "react";
import { 
  ShoppingBag, 
  CreditCard, 
  Truck, 
  Store, 
  ChevronDown, 
  ClipboardList, 
  SearchCode, 
  Inbox
} from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQSection {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  items: FAQItem[];
}

const faqData: FAQSection[] = [
  {
    id: "ordering-management",
    title: "Ordering & Management",
    icon: ClipboardList,
    items: [
      {
        id: "ord-1",
        question: "How do I track my order?",
        answer: "Once your order is shipped, you will receive a tracking link via email and SMS. You can also track your order directly from your profile's 'My Orders' section by clicking on the 'Track Order' button.",
      },
      {
        id: "ord-2",
        question: "Can I cancel my order after payment?",
        answer: "Yes, you can cancel your order within 30 minutes of placing it directly from your dashboard. After 30 minutes, the order is forwarded to the merchant for packaging and shipping, so you would need to contact support or request a return once it is delivered.",
      },
    ],
  },
  {
    id: "payment-refunds",
    title: "Payment & Refunds",
    icon: CreditCard,
    items: [
      {
        id: "pay-1",
        question: "What payment methods do you accept?",
        answer: "We support a wide variety of secure payment methods, including credit/debit cards (Visa, Mastercard, American Express), mobile banking options (bKash, Nagad, Rocket, Upay), and Cash on Delivery (COD) for eligible regions.",
      },
      {
        id: "pay-2",
        question: "When will I receive my refund?",
        answer: "Once a returned item is received at our warehouse and passes the quality assessment (typically within 48 hours), your refund will be processed. It takes 3 to 7 business days for the funds to reflect in your account depending on your banking institution.",
      },
    ],
  },
  {
    id: "shipping-delivery",
    title: "Shipping & Delivery",
    icon: Truck,
    items: [
      {
        id: "ship-1",
        question: "How long does shipping take?",
        answer: "Standard shipping inside metropolitan areas takes 2 to 3 business days. Regional and nationwide shipping takes between 4 to 6 business days. You can view real-time delivery estimates at checkout before finalizing your order.",
      },
    ],
  },
  {
    id: "seller-related",
    title: "Seller Related",
    icon: Store,
    items: [
      {
        id: "sell-1",
        question: "How do I register as a seller?",
        answer: "To start selling on Vendora, click the 'Become a Seller' button in the main navigation. You will be prompted to create a business profile, provide store details, upload tax information or vendor credentials, and complete a quick onboarding process.",
      },
    ],
  },
];

interface FAQAccordionProps {
  searchQuery: string;
}

export default function FAQAccordion({ searchQuery }: FAQAccordionProps) {
  // Store open state for each accordion item by id
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Filter sections and their FAQ items based on the search query
  const filteredData = faqData
    .map((section) => {
      const filteredItems = section.items.filter(
        (item) =>
          item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.answer.toLowerCase().includes(searchQuery.toLowerCase())
      );
      return {
        ...section,
        items: filteredItems,
      };
    })
    .filter((section) => section.items.length > 0);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 sm:py-14">
      {/* Dynamic Header */}
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
          Frequently Asked Questions
        </h2>
        <p className="text-sm sm:text-base text-gray-500 font-medium mt-2">
          Find quick answers to common queries organized by category.
        </p>
      </div>

      {filteredData.length > 0 ? (
        <div className="space-y-12">
          {filteredData.map((section) => {
            const SectionIcon = section.icon;
            return (
              <div key={section.id} id={section.id} className="scroll-mt-24">
                {/* Section Header */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-1.5 rounded-lg bg-brand-primary-50 text-brand-primary-600">
                    <SectionIcon className="size-4 stroke-2" />
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-brand-primary-600 tracking-widest uppercase">
                    {section.title}
                  </h3>
                </div>

                {/* FAQ List inside Category */}
                <div className="space-y-3">
                  {section.items.map((item) => {
                    const isOpen = !!openItems[item.id];
                    return (
                      <div
                        key={item.id}
                        className="bg-white border border-gray-150 rounded-lg shadow-xs overflow-hidden transition-all duration-200"
                      >
                        <button
                          type="button"
                          onClick={() => toggleItem(item.id)}
                          aria-expanded={isOpen}
                          className="w-full flex items-center justify-between p-5 text-left font-semibold text-gray-800 hover:text-brand-primary-600 transition-colors duration-150 cursor-pointer focus:outline-none"
                        >
                          <span className="text-sm sm:text-base leading-tight pr-4">
                            {item.question}
                          </span>
                          <ChevronDown
                            className={`size-5 text-gray-400 shrink-0 transition-transform duration-300 ease-in-out ${
                              isOpen ? "rotate-180 text-brand-primary-600" : ""
                            }`}
                          />
                        </button>

                        {/* Slide and Fade Transition */}
                        <div
                          className={`grid transition-all duration-300 ease-in-out ${
                            isOpen 
                              ? "grid-rows-[1fr] opacity-100 border-t border-gray-100" 
                              : "grid-rows-[0fr] opacity-0"
                          }`}
                        >
                          <div className="overflow-hidden">
                            <div className="p-5 text-sm sm:text-base text-gray-600 leading-relaxed font-medium bg-gray-50/50">
                              {item.answer}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-16 px-4 bg-white border border-gray-150 rounded-lg shadow-xs max-w-xl mx-auto flex flex-col items-center">
          <div className="size-16 rounded-full bg-brand-primary-50 flex items-center justify-center text-brand-primary-600 mb-4">
            <Inbox className="size-8 stroke-[1.5]" />
          </div>
          <h4 className="text-lg font-bold text-gray-900">No results found</h4>
          <p className="text-sm text-gray-500 font-medium mt-2 max-w-sm">
            We couldn't find any FAQs matching "{searchQuery}". Try searching for other terms like "refund", "shipping", or "sell".
          </p>
        </div>
      )}
    </div>
  );
}
