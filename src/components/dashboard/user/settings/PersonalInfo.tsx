"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import { Camera, Save, ChevronDown } from "lucide-react";

export default function PersonalInfo() {
  const [fullName, setFullName] = useState("Alex Thompson");
  const [email, setEmail] = useState("alex.thompson@example.com");
  const [phoneNumber, setPhoneNumber] = useState("1712345678");
  const [gender, setGender] = useState("Male");

  const handleSaveChanges = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Profile settings updated successfully!");
  };

  return (
    <div className=" border-gray-200 rounded p-6 shadow-2xs">
      {/* Card Title Header */}
      <div className="pb-5 border-b border-gray-200">
        <h2 className="text-base sm:text-lg font-bold text-gray-900 leading-none">
          Personal Information
        </h2>
        <p className="text-xs md:text-sm text-gray-500 mt-1.5 font-medium">
          Update your personal details and how we can reach you.
        </p>
      </div>

      <form onSubmit={handleSaveChanges} className="space-y-6 mt-6 ">
        
        {/* Profile Photo Uploader Section */}
        <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center ">
          {/* Avatar Photo Frame */}
          <div className="relative size-24 shrink-0 rounded-md overflow-hidden border border-gray-200 bg-gray-50">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
              alt="Profile Avatar"
              className="w-full h-full object-cover"
            />
            <button 
              type="button" 
              onClick={() => toast("Profile photo uploading feature is coming soon!")}
              className="absolute bottom-0 right-0 bg-[#0F4C81] text-white p-1.5 rounded-tl-xl hover:bg-[#0C447C] transition-colors flex items-center justify-center cursor-pointer shadow-xs"
            >
              <Camera className="size-4" />
            </button>
          </div>
          
          {/* Photo description and action buttons */}
          <div className="space-y-3">
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-gray-900 leading-none">
                Profile Photo
              </h4>
              <p className="text-[11px] sm:text-xs text-gray-400 font-medium mt-1">
                JPG, GIF or PNG. Max size of 800K
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => toast.success("Upload photo dialog opened!")}
                className="bg-[#0F4C81] hover:bg-[#0C447C] text-white font-bold py-2 px-4 rounded text-[11px] sm:text-xs transition-colors shadow-2xs cursor-pointer"
              >
                Upload New
              </button>
              <button
                type="button"
                onClick={() => toast.success("Avatar removed.")}
                className="border border-gray-300 hover:bg-gray-50 text-gray-700 font-bold py-2 px-4 rounded text-[11px] sm:text-xs transition-colors cursor-pointer"
              >
                Remove
              </button>
            </div>
          </div>
        </div>

        {/* Form Fields Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6 text-left">
          
          {/* Full Name */}
          <div className="space-y-1.5">
            <label className="text-xs sm:text-sm font-medium text-gray-700 block">
              Full Name
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full rounded border border-gray-300 px-3.5 py-2 text-xs text-gray-700 focus:outline-none focus:border-[#0F4C81] focus:ring-0 bg-white transition-all"
              placeholder="Full Name"
              required
            />
          </div>

          {/* Email Address */}
          <div className="space-y-1.5">
            <label className="text-xs sm:text-sm font-medium text-gray-700 block">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded border border-gray-300 px-3.5 py-2 text-xs text-gray-700 focus:outline-none focus:border-[#0F4C81] focus:ring-0 bg-white transition-all"
              placeholder="Email Address"
              required
            />
          </div>

          {/* Phone Number */}
          <div className="space-y-1.5">
            <label className="text-xs sm:text-sm font-medium text-gray-700 block">
              Phone Number
            </label>
            <div className="flex rounded border border-gray-300 overflow-hidden focus-within:border-[#0F4C81] transition-all">
              <span className="bg-gray-50 px-3 flex items-center border-r border-gray-200 text-xs sm:text-sm font-medium text-gray-500 select-none">
                +880
              </span>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="flex-1 px-3.5 py-2 text-xs sm:text-sm text-gray-700 outline-none bg-white"
                placeholder="1712345678"
                required
              />
            </div>
          </div>

          {/* Gender Select Dropdown */}
          <div className="space-y-1.5">
            <label className="text-xs sm:text-sm font-medium text-gray-700 block">
              Gender
            </label>
            <div className="relative">
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full rounded border border-gray-300 pl-3.5 pr-10 py-2 text-xs sm:text-sm text-gray-700 focus:outline-none focus:border-[#0F4C81] focus:ring-0 bg-white appearance-none transition-all cursor-pointer"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
                <ChevronDown className="size-4" />
              </div>
            </div>
          </div>

        </div>

        {/* Form Save Button aligned to bottom right */}
        <div className="flex justify-end pt-3">
          <button
            type="submit"
            className="bg-[#0F4C81] hover:bg-[#0C447C] text-white font-bold py-2.5 px-6 rounded text-xs sm:text-sm flex items-center gap-2 shadow-xs active:translate-y-px transition-all cursor-pointer"
          >
            <Save className="size-4" />
            <span>Save Changes</span>
          </button>
        </div>

      </form>
    </div>
  );
}
