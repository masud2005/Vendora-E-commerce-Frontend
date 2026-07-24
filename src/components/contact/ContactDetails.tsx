"use client";

import { MapPin, Phone, Mail, Globe, Share2, Users } from "lucide-react";

export default function ContactDetails() {
  const details = [
    {
      id: "address",
      title: "Company Address",
      icon: MapPin,
      lines: ["123 Marketplace Avenue, Suite 500", "San Francisco, CA 94103"],
    },
    {
      id: "phone",
      title: "Phone Support",
      icon: Phone,
      lines: ["+1 (555) 234-5678", "Mon-Fri, 9am - 6pm EST"],
    },
    {
      id: "email",
      title: "Email Address",
      icon: Mail,
      lines: ["support@vendora.market", "sales@vendora.market"],
    },
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-5 sm:p-6 md:p-4 flex flex-col gap-6">
      <h3 className="text-base sm:text-lg font-extrabold text-gray-900 tracking-tight">
        Contact Details
      </h3>

      {/* Info Rows */}
      <div className="flex flex-col gap-5">
        {details.map((item) => (
          <div key={item.id} className="flex gap-3 lg:gap-4 items-start">
            {/* Icon Badge */}
            <div className="size-10 rounded-lg bg-[#EBF2F7]/70 border border-brand-primary-200 flex items-center justify-center text-brand-primary-600 shrink-0">
              <item.icon className="size-4 lg:size-5" />
            </div>
            
            {/* Text details */}
            <div className="flex flex-col min-w-0">
              <h4 className="text-xs sm:text-sm font-bold text-gray-900">
                {item.title}
              </h4>
              {item.lines.map((line, index) => (
                <span
                  key={index}
                  className="text-xs text-gray-500 font-semibold mt-0.5 leading-relaxed truncate"
                >
                  {line}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 my-1" />

      {/* Social Follow */}
      <div>
        <h4 className="text-xs sm:text-sm font-bold text-gray-900 mb-3">
          Follow Us
        </h4>
        <div className="flex gap-3">
          <button
            type="button"
            className="size-10 border border-gray-200 rounded-lg flex items-center justify-center text-gray-500 hover:text-brand-primary-600 hover:bg-brand-primary-50 hover:border-brand-primary-200 transition-colors cursor-pointer"
            aria-label="Visit Website"
          >
            <Globe className="size-4.5" />
          </button>
          <button
            type="button"
            className="size-10 border border-gray-200 rounded-lg flex items-center justify-center text-gray-500 hover:text-brand-primary-600 hover:bg-brand-primary-50 hover:border-brand-primary-200 transition-colors cursor-pointer"
            aria-label="Share contact"
          >
            <Share2 className="size-4.5" />
          </button>
          <button
            type="button"
            className="size-10 border border-gray-200 rounded-lg flex items-center justify-center text-gray-500 hover:text-brand-primary-600 hover:bg-brand-primary-50 hover:border-brand-primary-200 transition-colors cursor-pointer"
            aria-label="View community group"
          >
            <Users className="size-4.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
