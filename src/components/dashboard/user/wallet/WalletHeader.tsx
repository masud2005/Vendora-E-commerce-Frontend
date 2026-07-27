"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function WalletHeader() {
  return (
    <div>
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-1.5 text-[10px] md:text-xs font-semibold text-gray-400 mb-1.5">
        <Link href="/user" className="hover:text-gray-600 transition-colors">
          Account
        </Link>
        <ChevronRight className="size-3 text-gray-300 stroke-[2.5]" />
        <span className="text-gray-500 font-bold">Vendora Wallet</span>
      </nav>

      {/* Main Title */}
      <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
        My Wallet
      </h1>
      
      {/* Description Subtitle with responsive text size */}
      <p className="text-xs md:text-sm text-gray-500 font-medium mt-1 leading-relaxed max-w-2xl">
        Manage your marketplace funds, track your rewards, and securely top up your balance for instant checkouts.
      </p>
    </div>
  );
}
