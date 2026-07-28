"use client";


import Link from "next/link";
import { useParams } from "next/navigation";
import toast from "react-hot-toast";
import { 
  ArrowLeft, Download, MapPin, CreditCard, ShieldCheck, 
  CheckCircle2, Truck, Home, HelpCircle, ExternalLink, ShieldAlert
} from "lucide-react";

// Types for item list
interface OrderDetailItem {
  name: string;
  detail: string;
  price: number;
  image: string;
}

export default function OrderDetailsPage() {
  const params = useParams();
  const orderId = params.id as string;

  // Mock data representing the exact values and layout of the user's mockup image
  const orderDetails = {
    id: orderId || "VEN-94827103",
    date: "Oct 24, 2024",
    status: {
      placed: true,
      paid: true,
      shipped: true,
      delivered: false
    },
    statusMessage: "Your package has left the Dhaka warehouse and is currently in transit to Chittagong Hub.",
    items: [
      {
        name: "Sony WH-1000XM5 Wireless Noise Canceling Headphones",
        detail: "Color: Midnight Black | Qty: 1",
        price: 38500,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=200"
      },
      {
        name: "Ergonomic Aluminum Laptop Stand",
        detail: "Size: Adjustable | Qty: 1",
        price: 2450,
        image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=200"
      },
      {
        name: "Braided USB-C to USB-C Fast Charging Cable (2m)",
        detail: "Length: 2 Meters | Qty: 2",
        price: 1800,
        image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&q=80&w=200"
      }
    ],
    address: {
      name: "Ahmed Tanzim",
      line1: "House 12, Road 5, Sector 7",
      line2: "Uttara Model Town, Dhaka 1230",
      country: "Bangladesh",
      phone: "+880 1712 345678"
    },
    payment: {
      provider: "bKash Wallet",
      txId: "8XJ2K9L4M1",
      paidAt: "Oct 24, 2024 at 14:32"
    },
    summary: {
      subtotal: 44550,
      shipping: 60,
      tax: 2230,
      discount: 500,
      total: 46340
    },
    seller: {
      name: "TechHub Bangladesh",
      rating: "4.8 (12.4K ratings)"
    }
  };

  return (
    <div className="space-y-6  mx-auto pb-12 font-sans select-none">
      
      {/* 1. Header with back link */}
      <div className="flex flex-col gap-3">
        <Link 
          href="/dashboard/orders"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-gray-500 hover:text-gray-900 transition-colors w-fit"
        >
          <ArrowLeft className="size-4" />
          <span>Back to Orders</span>
        </Link>

        {/* Title and top level action buttons */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="text-left">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight leading-none">
              Order Details
            </h1>
            <p className="text-xs md:text-sm text-gray-500 font-medium mt-1.5">
              Order ID: #{orderDetails.id} <span className="mx-1.5">•</span> Placed on {orderDetails.date}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => toast.success("Invoice download started!")}
              className="flex items-center justify-center gap-2 border border-gray-300 hover:bg-gray-50 text-gray-700 font-bold py-2.5 px-4 rounded text-xs sm:text-sm transition-colors cursor-pointer"
            >
              <Download className="size-4" />
              <span>Download Invoice</span>
            </button>
            <button
              onClick={() => toast.success("Connecting with map tracker...")}
              className="flex items-center justify-center gap-2 bg-[#0F4C81] hover:bg-[#0C447C] text-white font-bold py-2.5 px-4 rounded text-xs sm:text-sm transition-colors shadow-2xs cursor-pointer"
            >
              <Truck className="size-4" />
              <span>Track Order</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Order Status Progress Tracker Bar */}
      <div className="bg-white border border-gray-200 rounded p-6 shadow-2xs space-y-6">
        
        {/* Horizontal stepper */}
        <div className="relative flex items-center justify-between w-full max-w-4xl mx-auto px-4 md:px-12 py-3 select-none">
          {/* Background Connecting Lines */}
          <div className="absolute left-8 right-8 top-1/2 -translate-y-1/2 h-1 bg-gray-200 -z-10" />
          <div 
            className="absolute left-8 top-1/2 -translate-y-1/2 h-1 bg-[#0F4C81] -z-10 transition-all duration-300"
            style={{ width: "66%" }} // Placed to Shipped is 2/3 of the path
          />

          {/* Step 1: Placed */}
          <div className="flex flex-col items-center gap-2.5">
            <div className="size-8 sm:size-9 rounded-full bg-[#0F4C81] text-white flex items-center justify-center shadow-md">
              <CheckCircle2 className="size-4.5" />
            </div>
            <span className="text-xs sm:text-sm font-bold text-gray-900">Placed</span>
          </div>

          {/* Step 2: Paid */}
          <div className="flex flex-col items-center gap-2.5">
            <div className="size-8 sm:size-9 rounded-full bg-[#0F4C81] text-white flex items-center justify-center shadow-md">
              <CheckCircle2 className="size-4.5" />
            </div>
            <span className="text-xs sm:text-sm font-bold text-gray-900">Paid</span>
          </div>

          {/* Step 3: Shipped */}
          <div className="flex flex-col items-center gap-2.5">
            <div className="size-8 sm:size-9 rounded-full bg-[#0F4C81] text-white flex items-center justify-center shadow-md">
              <Truck className="size-4.5" />
            </div>
            <span className="text-xs sm:text-sm font-bold text-gray-900">Shipped</span>
          </div>

          {/* Step 4: Delivered */}
          <div className="flex flex-col items-center gap-2.5">
            <div className="size-8 sm:size-9 rounded-full bg-white border-2 border-gray-300 text-gray-400 flex items-center justify-center">
              <Home className="size-4.5" />
            </div>
            <span className="text-xs sm:text-sm font-medium text-gray-400">Delivered</span>
          </div>
        </div>

        {/* Stepper Status Update Text */}
        <div className="border-t border-gray-100 pt-4 flex items-center text-xs sm:text-sm text-left">
          <p className="text-gray-600 font-medium">
            <span className="text-[#0F4C81] font-bold">Status Update:</span> {orderDetails.statusMessage}
          </p>
        </div>

      </div>

      {/* 3. Main Split Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column (Items, Address, Payment) */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Order Items List */}
          <div className="bg-white border border-gray-200 rounded p-6 shadow-2xs">
            <h3 className="text-sm sm:text-base font-bold text-gray-900 text-left border-b border-gray-100 pb-3">
              Order Items ({orderDetails.items.length})
            </h3>
            
            <div className="divide-y divide-gray-100">
              {orderDetails.items.map((item, index) => (
                <div key={index} className="flex gap-4 py-4.5 first:pt-4.5 last:pb-0 items-start text-left">
                  {/* Thumbnail */}
                  <div className="size-16 sm:size-20 rounded border border-gray-100 bg-gray-50 overflow-hidden shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  
                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs sm:text-sm font-bold text-gray-900 leading-snug break-words">
                      {item.name}
                    </h4>
                    <p className="text-[11px] sm:text-xs font-medium text-gray-400 mt-1">
                      {item.detail}
                    </p>
                    <div className="text-xs sm:text-sm font-extrabold text-gray-800 mt-2 flex items-center">
                      <span className="font-bengali mr-0.5">৳</span>
                      {item.price.toLocaleString()}
                    </div>
                  </div>
                  
                  {/* Action Link */}
                  <button 
                    onClick={() => toast.success(`Write review opened for: ${item.name}`)}
                    className="text-[#0F4C81] hover:text-[#0C447C] text-[11px] sm:text-xs font-bold shrink-0 self-center cursor-pointer select-none"
                  >
                    Write Review
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Shipping & Payment side-by-side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Shipping Address */}
            <div className="bg-white border border-gray-200 rounded p-5 text-left shadow-2xs space-y-4">
              <div className="flex items-center gap-2 border-b border-gray-100 pb-2">
                <MapPin className="size-4.5 text-[#0F4C81]" />
                <h4 className="text-xs sm:text-sm font-bold text-gray-900">Shipping Address</h4>
              </div>
              <div className="space-y-0.5 text-xs sm:text-sm">
                <p className="font-bold text-gray-800">{orderDetails.address.name}</p>
                <p className="text-gray-500 font-semibold leading-relaxed">
                  {orderDetails.address.line1}
                  <br />
                  {orderDetails.address.line2}
                  <br />
                  {orderDetails.address.country}
                </p>
                <p className="text-gray-500 font-semibold pt-1">Phone: {orderDetails.address.phone}</p>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white border border-gray-200 rounded p-5 text-left shadow-2xs space-y-4">
              <div className="flex items-center gap-2 border-b border-gray-100 pb-2">
                <CreditCard className="size-4.5 text-[#0F4C81]" />
                <h4 className="text-xs sm:text-sm font-bold text-gray-900">Payment Method</h4>
              </div>
              <div className="space-y-3.5 text-xs sm:text-sm">
                {/* bKash badge */}
                <div className="flex items-center gap-2.5">
                  <span className="bg-[#E2125B] text-white text-[10px] font-black px-2 py-0.5 rounded tracking-wide uppercase select-none">
                    bKash
                  </span>
                  <span className="font-bold text-gray-800">{orderDetails.payment.provider}</span>
                </div>
                <div className="space-y-0.5 text-gray-500 font-semibold leading-normal">
                  <p>Transaction ID: <span className="font-bold text-gray-700">{orderDetails.payment.txId}</span></p>
                  <p>Paid on: {orderDetails.payment.paidAt}</p>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Right Column (Order Summary, Sold By) */}
        <div className="space-y-6">
          
          {/* Order Summary Card */}
          <div className="bg-white border border-gray-200 rounded p-5 shadow-2xs text-left space-y-5">
            <h3 className="text-xs sm:text-sm font-bold text-gray-900 border-b border-gray-100 pb-2.5">
              Order Summary
            </h3>
            
            {/* Calculation Lines */}
            <div className="space-y-3 text-xs sm:text-sm font-semibold text-gray-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="text-gray-800 flex items-center">
                  <span className="font-bengali mr-0.5">৳</span>
                  {orderDetails.summary.subtotal.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Shipping Fee</span>
                <span className="text-gray-800 flex items-center">
                  <span className="font-bengali mr-0.5">৳</span>
                  {orderDetails.summary.shipping.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Tax (VAT 5%)</span>
                <span className="text-gray-800 flex items-center">
                  <span className="font-bengali mr-0.5">৳</span>
                  {orderDetails.summary.tax.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between text-[#065F46]">
                <span>Discount (PROMO20)</span>
                <span className="flex items-center">
                  -<span className="font-bengali mr-0.5">৳</span>
                  {orderDetails.summary.discount.toLocaleString()}
                </span>
              </div>
              
              <div className="border-t border-gray-100 pt-3 flex justify-between items-center text-sm sm:text-base font-extrabold text-gray-900">
                <span>Total</span>
                <span className="flex items-center text-[#0F4C81]">
                  <span className="font-bengali mr-0.5">৳</span>
                  {orderDetails.summary.total.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Purchase Protection alert badge */}
            <div className="bg-[#F3F4F6] rounded p-3.5 flex gap-2.5 text-xs text-gray-600 leading-relaxed font-semibold">
              <ShieldCheck className="size-5 shrink-0 text-[#0F4C81] mt-0.5" />
              <p className="font-medium text-gray-500">
                This order is covered by <span className="font-bold text-gray-700">Vendora Purchase Protection</span>. Your payment is secure.
              </p>
            </div>

            {/* Action buttons */}
            <div className="space-y-2.5 pt-2">
              <button
                onClick={() => toast.success("Ticket opened! Support agent will contact you soon.")}
                className="w-full bg-[#065F46] hover:bg-[#044E39] text-white font-bold py-2.5 rounded text-xs sm:text-sm transition-colors shadow-2xs cursor-pointer select-none"
              >
                Help with Order
              </button>
              <button
                onClick={() => toast.success("Select items you wish to cancel...")}
                className="w-full border border-gray-300 hover:bg-gray-50 text-gray-700 font-bold py-2.5 rounded text-xs sm:text-sm transition-colors cursor-pointer select-none"
              >
                Cancel Items
              </button>
            </div>
          </div>

          {/* Sold By Card */}
          <div className="bg-white border border-gray-200 rounded p-5 shadow-2xs text-left space-y-4">
            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">
              Sold By
            </span>
            <div className="flex items-center gap-3">
              {/* Logo block */}
              <div className="size-11 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center font-bold text-gray-400 shrink-0 shadow-xs">
                🏪
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <h4 className="text-xs sm:text-sm font-bold text-gray-900 truncate">
                    {orderDetails.seller.name}
                  </h4>
                  <CheckCircle2 className="size-3.5 text-[#065F46] shrink-0" />
                </div>
                <p className="text-[11px] sm:text-xs text-gray-400 font-semibold mt-0.5">
                  {orderDetails.seller.rating}
                </p>
              </div>
            </div>
            
            <button
              onClick={() => toast.success("Redirecting to storefront...")}
              className="w-full border border-gray-200 hover:bg-gray-50 text-[#0F4C81] hover:text-[#0C447C] font-bold py-2.5 rounded text-xs sm:text-sm transition-all cursor-pointer select-none"
            >
              Visit Store
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
