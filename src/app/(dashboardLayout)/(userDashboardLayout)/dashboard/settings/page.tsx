"use client";

import React from "react";
import PersonalInfo from "@/components/dashboard/user/settings/PersonalInfo";
import AddressBook from "@/components/dashboard/user/settings/AddressBook";
import ChangePassword from "@/components/dashboard/user/settings/ChangePassword";

export default function SettingsPage() {
  return (
    <div className="space-y-6 mx-auto pb-12 font-sans select-none">
      
      {/* Top Grid: Personal Info & Change Password (side-by-side on xl, stacked below) */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 items-start">
        <PersonalInfo />
        <ChangePassword />
      </div>
      
      {/* Bottom Section: Address Book (full width) */}
      <AddressBook />
    </div>
  );
}
