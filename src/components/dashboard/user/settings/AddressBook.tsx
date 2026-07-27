"use client";

import React from "react";
import toast from "react-hot-toast";
import { PlusCircle, Home, Briefcase, Phone } from "lucide-react";

export default function AddressBook() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-2xs">
      
      {/* Address Header Title */}
      <div className="pb-5 border-b border-gray-200 flex justify-between items-center">
        <div>
          <h2 className="text-base md:text-lg font-bold text-gray-900 leading-none">
            Address Book
          </h2>
          <p className="text-xs md:text-sm text-gray-500 mt-1.5 font-medium">
            Manage your shipping and billing addresses.
          </p>
        </div>
        <button 
          onClick={() => toast.success("Add New Address form opened!")}
          className="text-[#0F4C81] hover:text-[#0C447C] text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-colors cursor-pointer select-none"
        >
          <PlusCircle className="size-4" />
          <span>Add New Address</span>
        </button>
      </div>

      {/* Address Cards Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6 ">
        
        {/* Address 1: Home Address Card (Default) */}
        <div className="bg-[#EEF4FA] border border-[#A2C3E5] rounded p-5 shadow-2xs flex flex-col justify-between min-h-[190px] relative">
          {/* Default Status Badge */}
          <span className="bg-[#0F4C81] text-white text-[9px] font-extrabold px-2 py-0.5 rounded-full absolute top-5 right-5 tracking-wide uppercase">
            DEFAULT
          </span>

          {/* Address Core Details */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Home className="size-4 lg:size-4.5 text-[#0F4C81]" />
              <span className="text-xs sm:text-sm font-bold text-gray-900">Home Address</span>
            </div>
            
            <div className="space-y-0.5 pl-6.5">
              <p className="text-xs sm:text-sm font-bold text-gray-800">Alex Thompson</p>
              <p className="text-xs text-gray-500 font-semibold leading-relaxed">
                123 Green Valley, Road 05, Sector 12
                <br />
                Uttara, Dhaka - 1230
              </p>
              <div className="flex items-center gap-1.5 py-1.5">
                <Phone className="size-3 text-gray-400 shrink-0" />
                <span className="text-[11px] sm:text-xs font-semibold text-gray-600">+880 1712 345678</span>
              </div>
            </div>
          </div>

          {/* Card Action Controls */}
          <div className="flex items-center gap-4 pl-6.5 border-t border-gray-200/55 pt-3 text-xs font-bold">
            <button 
              onClick={() => toast.success("Edit Address Modal opened!")}
              className="text-[#0F4C81] hover:text-[#0C447C] transition-colors cursor-pointer"
            >
              Edit Address
            </button>
            <button 
              onClick={() => toast.error("Primary default address cannot be deleted.")}
              className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
            >
              Remove
            </button>
          </div>
        </div>

        {/* Address 2: Office Address Card */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-2xs flex flex-col justify-between min-h-[190px]">
          
          {/* Address Core Details */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Briefcase className="size-4.5 text-gray-500" />
              <span className="text-xs sm:text-sm font-bold text-gray-900">Office Address</span>
            </div>
            
            <div className="space-y-0.5 pl-6.5">
              <p className="text-xs sm:text-sm font-bold text-gray-800">Alex Thompson</p>
              <p className="text-xs text-gray-500 font-semibold leading-relaxed">
                Level 14, Zenith Tower, Mohakhali C/A
                <br />
                Dhaka - 1212
              </p>
              <div className="flex items-center gap-1.5 py-1.5">
                <Phone className="size-3 text-gray-400 shrink-0" />
                <span className="text-[11px] sm:text-xs font-semibold text-gray-600">+880 1987 654321</span>
              </div>
            </div>
          </div>

          {/* Card Action Controls */}
          <div className="flex items-center gap-4 pl-6.5 border-t border-gray-100 pt-3 text-xs font-bold">
            <button 
              onClick={() => toast.success("Edit Address Modal opened!")}
              className="text-[#0F4C81] hover:text-[#0C447C] transition-colors cursor-pointer"
            >
              Edit Address
            </button>
            <button 
              onClick={() => toast.success("Office address removed successfully!")}
              className="text-red-500 hover:text-red-700 transition-colors cursor-pointer"
            >
              Remove
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
