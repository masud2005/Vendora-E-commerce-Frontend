"use client";

import { ShieldCheck, Users, Zap } from "lucide-react";

export default function AboutValues() {
  const values = [
    {
      title: "Absolute Trust",
      description:
        "We maintain a rigorous verification process for all vendors to ensure every transaction is secure and every product is authentic.",
      icon: ShieldCheck,
      bgColor: "bg-[#E5EDFF] text-[#1E40AF]",
    },
    {
      title: "Seller Growth",
      description:
        "We empower our sellers with advanced analytics, marketing tools, and educational resources to help their businesses thrive.",
      icon: Users,
      bgColor: "bg-[#D1FAE5] text-[#065F46]",
    },
    {
      title: "Rapid Innovation",
      description:
        "Technology never stands still, and neither do we. We constantly refine our platform to offer the fastest, most intuitive UI in the market.",
      icon: Zap,
      bgColor: "bg-[#F1F3E9] text-[#717358]",
    },
  ];

  return (
    <div className="mb-12 sm:mb-16">
      {/* Heading */}
      <div className="text-center mb-10 sm:mb-12">
        <h3 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight mb-2">
          Our Values
        </h3>
        <p className="text-xs sm:text-sm text-gray-500 font-semibold max-w-xl mx-auto leading-relaxed">
          These core principles guide every decision we make, from the features we build to the way we support our community.
        </p>
      </div>

      {/* Grid of Values */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
        {values.map((value) => (
          <div
            key={value.title}
            className="bg-white rounded-lg border border-gray-200 p-8 sm:p-10 text-center shadow-xs flex flex-col items-center group hover:shadow-md transition-all duration-300"
          >
            {/* Rounded Square Icon Badge */}
            <div
              className={`size-16 rounded-2xl flex items-center justify-center shrink-0 mb-6 transition-transform duration-300 group-hover:scale-105 ${value.bgColor}`}
            >
              <value.icon className="size-7" />
            </div>

            {/* Value Title */}
            <h4 className="text-lg font-bold text-gray-900 mb-3">
              {value.title}
            </h4>

            {/* Description */}
            <p className="text-sm text-gray-500 font-semibold leading-relaxed px-1">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

