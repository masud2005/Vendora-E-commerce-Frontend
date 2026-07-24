"use client";

import ContactHeader from "@/components/contact/ContactHeader";
import ContactDetails from "@/components/contact/ContactDetails";
import ContactForm from "@/components/contact/ContactForm";
import FAQPromo from "@/components/contact/FAQPromo";
import { MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-brand-primary-50">
      <div className="container mx-auto px-4 py-8">
        
        {/* Page Header (Breadcrumbs + Hero Fold) */}
        <ContactHeader />

        {/* Form and Info Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mt-6 sm:mt-10">
          
          {/* Left Column: Contact Details + Stylized Map */}
          <div className="lg:col-span-1 flex flex-col gap-6 w-full">
            <ContactDetails />
            
            {/* HQ Map Card */}
            <div className="bg-white rounded-lg border border-gray-200 p-3 shadow-sm overflow-hidden w-full">
              <div className="relative rounded-lg overflow-hidden h-48 sm:h-56 bg-gray-50 flex items-center justify-center border border-gray-100 group">
                {/* Stylized Map Image */}
                <img
                  src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&q=80&w=600"
                  alt="Vendora HQ Map location"
                  className="w-full h-full object-cover grayscale opacity-90 transition-transform duration-500 group-hover:scale-103"
                />
                {/* Map Overlay Blur/Vignette */}
                <div className="absolute inset-0 bg-black/5" />
                
                {/* Absolute Pin Badge */}
                <div className="absolute bg-white rounded-lg border border-gray-200/80 shadow-md px-3.5 py-1.5 flex items-center gap-1.5 text-xs font-bold text-gray-900 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 transition-transform duration-300 group-hover:scale-105 select-none">
                  <MapPin className="size-4 text-brand-primary-600 animate-bounce" />
                  <span>Vendora HQ</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Send Message Form */}
          <div className="lg:col-span-2 w-full">
            <ContactForm />
          </div>

        </div>

        {/* Bottom Section: FAQ Banner */}
        <FAQPromo />

      </div>
    </div>
  );
}
