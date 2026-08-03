"use client";

import React, { useState } from "react";
import { 
  CheckCircle2, 
  XCircle, 
  History, 
  Landmark, 
  Search, 
  Eye, 
  Download, 
  X, 
  TrendingUp, 
  TrendingDown, 
  FileText,
  User,
  Calendar
} from "lucide-react";
import toast from "react-hot-toast";

interface DeliveryHistoryItem {
  id: string;
  customerName: string;
  customerArea: string;
  sellerName: string;
  completedTime: string;
  paymentType: "COD" | "Prepaid";
  amount: number;
  status: "Delivered" | "Failed";
  proofType: "Signature" | "Photo" | "—";
  receivedBy?: string;
  notes?: string;
}

const historyDb: DeliveryHistoryItem[] = [
  {
    id: "#VD-90301",
    customerName: "Mahmudul Hasan",
    customerArea: "Mohakhali",
    sellerName: "Chronos Luxe",
    completedTime: "Jun 2, 11:42 AM",
    paymentType: "COD",
    amount: 1750,
    status: "Delivered",
    proofType: "Signature",
    receivedBy: "Mahmudul Hasan (Self)",
    notes: "Handed over directly to customer at flat door."
  },
  {
    id: "#VD-90288",
    customerName: "Ayesha Siddika",
    customerArea: "Lalmatia",
    sellerName: "Velo Sports",
    completedTime: "Jun 2, 12:15 PM",
    paymentType: "Prepaid",
    amount: 4300,
    status: "Delivered",
    proofType: "Photo",
    receivedBy: "Ayesha Siddika",
    notes: "Placed at reception desk as requested."
  },
  {
    id: "#VD-90244",
    customerName: "Rezaul Karim",
    customerArea: "Nikunja",
    sellerName: "Oak & Iron",
    completedTime: "—",
    paymentType: "COD",
    amount: 2100,
    status: "Failed",
    proofType: "—",
    notes: "Customer unreachable after 3 call attempts."
  },
  {
    id: "#VD-90210",
    customerName: "Shakil Ahmed",
    customerArea: "Kazipara",
    sellerName: "EcoHome Tech",
    completedTime: "Jun 1, 01:05 PM",
    paymentType: "COD",
    amount: 990,
    status: "Delivered",
    proofType: "Signature",
    receivedBy: "Shakil's Brother",
    notes: "Handed over to recipient's brother."
  }
];

export default function DeliveryHistoryContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<"all" | "delivered" | "failed">("all");
  const [selectedProofItem, setSelectedProofItem] = useState<DeliveryHistoryItem | null>(null);

  const filteredItems = historyDb.filter((item) => {
    const matchesFilter =
      activeFilter === "all" ||
      (activeFilter === "delivered" && item.status === "Delivered") ||
      (activeFilter === "failed" && item.status === "Failed");

    const normSearch = searchQuery.toLowerCase().trim();
    const matchesSearch =
      item.id.toLowerCase().includes(normSearch) ||
      item.customerName.toLowerCase().includes(normSearch) ||
      item.customerArea.toLowerCase().includes(normSearch) ||
      item.sellerName.toLowerCase().includes(normSearch);

    return matchesFilter && matchesSearch;
  });

  const handleExportCSV = () => {
    toast.success("Exporting delivery history log to CSV file...");
  };

  return (
    <div className="space-y-6 w-full text-left select-none relative">
      
      {/* 1. Header Area */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-1">
        <div>
          <h1 className="text-xl sm:text-2xl font-black text-gray-900 leading-tight">
            Delivery History
          </h1>
          <p className="text-xs sm:text-sm text-gray-400 font-semibold mt-1">
            A complete, auditable log of every completed and failed delivery
          </p>
        </div>

        <div className="flex items-center gap-3 self-start md:self-auto shrink-0 select-none">
          <button
            onClick={handleExportCSV}
            className="flex items-center justify-center gap-1.5 border border-gray-250 bg-white hover:bg-gray-50 text-gray-700 font-bold py-2 px-4 rounded text-xs transition-colors cursor-pointer select-none"
          >
            <Download className="size-4 text-gray-500" />
            <span>Export CSV</span>
          </button>
        </div>
      </div>

      {/* 2. Top Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Card 1: Successful */}
        <div className="bg-white border border-gray-200 rounded-xl p-4.5 shadow-3xs relative flex flex-col justify-between min-h-28">
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-gray-400 font-black uppercase tracking-wider">Successful</span>
            <span className="flex items-center gap-0.5 text-[9px] font-black text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full">
              +6.4% <TrendingUp className="size-2.5" />
            </span>
          </div>
          <div className="mt-3">
            <h3 className="text-xl sm:text-2xl font-black text-gray-900">3</h3>
            <p className="text-[10px] sm:text-xs text-gray-400 font-semibold mt-0.5">Completed deliveries</p>
          </div>
          <div className="absolute right-4.5 bottom-4.5 bg-emerald-50 text-emerald-600 rounded-lg p-2">
            <CheckCircle2 className="size-4.5" />
          </div>
        </div>

        {/* Card 2: Failed */}
        <div className="bg-white border border-gray-200 rounded-xl p-4.5 shadow-3xs relative flex flex-col justify-between min-h-28">
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-gray-400 font-black uppercase tracking-wider">Failed</span>
            <span className="flex items-center gap-0.5 text-[9px] font-black text-rose-600 bg-rose-50 px-1.5 py-0.5 rounded-full">
              -2.1% <TrendingDown className="size-2.5" />
            </span>
          </div>
          <div className="mt-3">
            <h3 className="text-xl sm:text-2xl font-black text-gray-900">1</h3>
            <p className="text-[10px] sm:text-xs text-gray-400 font-semibold mt-0.5">Awaiting re-attempt</p>
          </div>
          <div className="absolute right-4.5 bottom-4.5 bg-rose-50 text-rose-600 rounded-lg p-2">
            <XCircle className="size-4.5" />
          </div>
        </div>

        {/* Card 3: Success Rate */}
        <div className="bg-white border border-gray-200 rounded-xl p-4.5 shadow-3xs relative flex flex-col justify-between min-h-28">
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-gray-400 font-black uppercase tracking-wider">Success Rate</span>
            <span className="flex items-center gap-0.5 text-[9px] font-black text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full">
              +1.8% <TrendingUp className="size-2.5" />
            </span>
          </div>
          <div className="mt-3">
            <h3 className="text-xl sm:text-2xl font-black text-gray-900">75%</h3>
            <p className="text-[10px] sm:text-xs text-gray-400 font-semibold mt-0.5">Rolling 7-day average</p>
          </div>
          <div className="absolute right-4.5 bottom-4.5 bg-blue-50 text-blue-600 rounded-lg p-2">
            <History className="size-4.5" />
          </div>
        </div>

        {/* Card 4: COD Handled */}
        <div className="bg-white border border-gray-200 rounded-xl p-4.5 shadow-3xs relative flex flex-col justify-between min-h-28">
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-gray-400 font-black uppercase tracking-wider">COD Handled</span>
            <span className="flex items-center gap-0.5 text-[9px] font-black text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full">
              +9.0% <TrendingUp className="size-2.5" />
            </span>
          </div>
          <div className="mt-3">
            <h3 className="text-xl sm:text-2xl font-black text-gray-900">৳2,740</h3>
            <p className="text-[10px] sm:text-xs text-gray-400 font-semibold mt-0.5">Cash collected on route</p>
          </div>
          <div className="absolute right-4.5 bottom-4.5 bg-amber-50 text-amber-600 rounded-lg p-2">
            <Landmark className="size-4.5" />
          </div>
        </div>

      </div>

      {/* 3. Main Data Card Table */}
      <div className="bg-white border border-gray-200 rounded-xl p-5 sm:p-6 shadow-3xs space-y-4">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-50 pb-4">
          <div className="leading-none space-y-1">
            <h3 className="text-sm sm:text-base font-extrabold text-gray-900 leading-tight">
              Completed Deliveries
            </h3>
            <p className="text-[10px] sm:text-xs text-gray-400 font-semibold">
              Tap any row to review the proof of delivery record
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search history"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-48 pl-8 pr-3 py-1.5 border border-gray-200 rounded-lg text-xs bg-white focus:outline-none focus:border-[#0F4C81] font-semibold text-gray-800"
              />
              <Search className="size-3.5 text-gray-400 absolute left-2.5 top-2" />
            </div>

            <div className="border border-gray-150 rounded-lg p-1 bg-gray-50/50 text-[11px] font-bold text-gray-500 flex items-center select-none">
              {(["all", "delivered", "failed"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveFilter(tab)}
                  className={`px-3 py-1 rounded-md transition-all uppercase tracking-wider text-[9px] cursor-pointer ${
                    activeFilter === tab
                      ? "bg-white text-gray-900 border border-gray-200 shadow-3xs font-extrabold"
                      : "hover:text-gray-800"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto select-none border border-gray-150 rounded-lg">
          <table className="w-full text-xs text-left">
            <thead>
              <tr className="bg-gray-50/70 border-b border-gray-150 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                <th className="py-3 px-4">Order</th>
                <th className="py-3 px-4">Customer</th>
                <th className="py-3 px-4">Seller</th>
                <th className="py-3 px-4">Completed</th>
                <th className="py-3 px-4">Payment</th>
                <th className="py-3 px-4">Amount</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Proof</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-gray-700 font-semibold">
              {filteredItems.length === 0 ? (
                <tr>
                  <td colSpan={8} className="py-8 text-center text-gray-400 font-bold text-sm">
                    No history matching the criteria.
                  </td>
                </tr>
              ) : (
                filteredItems.map((item) => (
                  <tr 
                    key={item.id}
                    onClick={() => {
                      if (item.status === "Delivered") {
                        setSelectedProofItem(item);
                      }
                    }}
                    className={`hover:bg-slate-50/50 transition-colors ${
                      item.status === "Delivered" ? "cursor-pointer" : "cursor-default"
                    }`}
                  >
                    <td className="py-3.5 px-4 font-black text-[#0F4C81]">{item.id}</td>

                    <td className="py-3.5 px-4 leading-normal">
                      <div className="font-extrabold text-gray-900">{item.customerName}</div>
                      <div className="text-[10px] text-gray-400 font-semibold">{item.customerArea}</div>
                    </td>

                    <td className="py-3.5 px-4 font-bold text-gray-800">{item.sellerName}</td>

                    <td className="py-3.5 px-4 text-gray-500 font-medium">{item.completedTime}</td>

                    <td className="py-3.5 px-4">
                      <span className={`px-2 py-0.5 rounded text-[9px] font-black border ${
                        item.paymentType === "COD" 
                          ? "bg-amber-50 text-amber-800 border-amber-100" 
                          : "bg-blue-50 text-blue-700 border-blue-100"
                      }`}>
                        {item.paymentType}
                      </span>
                    </td>

                    <td className="py-3.5 px-4 font-black text-gray-950">
                      ৳{item.amount.toLocaleString()}
                    </td>

                    <td className="py-3.5 px-4">
                      <span className={`px-2 py-0.5 rounded-full text-[9px] font-black border tracking-wide uppercase ${
                        item.status === "Delivered"
                          ? "bg-emerald-50 text-emerald-700 border-emerald-150"
                          : "bg-rose-50 text-rose-700 border-rose-150"
                      }`}>
                        ● {item.status}
                      </span>
                    </td>

                    <td className="py-3.5 px-4">
                      {item.proofType !== "—" ? (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedProofItem(item);
                          }}
                          className="text-[#0F4C81] hover:text-[#0C447C] font-black hover:underline inline-flex items-center gap-1 text-[11px] cursor-pointer"
                        >
                          <Eye className="size-3.5" />
                          <span>{item.proofType}</span>
                        </button>
                      ) : (
                        <span className="text-gray-300 font-medium">—</span>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

      </div>

      {/* 4. Interactive Proof Review Modal Popup */}
      {selectedProofItem && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-3xs flex items-center justify-center z-50 p-4 select-none animate-fade-in text-left">
          
          <div className="bg-white rounded-xl shadow-xl w-full max-w-[420px] overflow-hidden flex flex-col text-left font-sans select-none border border-gray-150 animate-scale-up">
            
            {/* Modal Header */}
            <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
              <div>
                <h3 className="text-sm sm:text-base font-black text-gray-900">Proof of Delivery</h3>
                <p className="text-[10px] text-gray-400 font-bold mt-0.5">
                  {selectedProofItem.id} • {selectedProofItem.customerName}
                </p>
              </div>
              <button 
                onClick={() => setSelectedProofItem(null)}
                className="text-gray-455 hover:text-gray-700 hover:bg-gray-100 p-1.5 rounded-full transition-colors cursor-pointer"
              >
                <X className="size-4.5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-5 space-y-4">
              
              <div className="grid grid-cols-2 gap-3.5 border-b border-gray-100 pb-4 text-[11px] sm:text-xs">
                <div>
                  <span className="text-[9px] text-gray-400 font-bold block uppercase tracking-wider">Received By</span>
                  <div className="font-extrabold text-gray-800 flex items-center gap-1 mt-1">
                    <User className="size-3.5 text-gray-400" />
                    <span>{selectedProofItem.receivedBy || selectedProofItem.customerName}</span>
                  </div>
                </div>
                <div>
                  <span className="text-[9px] text-gray-400 font-bold block uppercase tracking-wider">Completed At</span>
                  <div className="font-extrabold text-gray-800 flex items-center gap-1 mt-1">
                    <Calendar className="size-3.5 text-gray-400" />
                    <span>{selectedProofItem.completedTime}</span>
                  </div>
                </div>
                <div>
                  <span className="text-[9px] text-gray-400 font-bold block uppercase tracking-wider">Paid Amount</span>
                  <div className="font-extrabold text-gray-800 flex items-center gap-1 mt-1">
                    <span className="text-gray-400 font-extrabold">৳</span>
                    <span>{selectedProofItem.amount.toLocaleString()} ({selectedProofItem.paymentType})</span>
                  </div>
                </div>
                <div>
                  <span className="text-[9px] text-gray-400 font-bold block uppercase tracking-wider">Proof Verification</span>
                  <span className="mt-1 px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-100 font-black text-[9px] uppercase tracking-wider inline-block">
                    ✓ Verified
                  </span>
                </div>
              </div>

              {selectedProofItem.notes && (
                <div className="bg-slate-50 border border-gray-150 rounded-lg p-3 text-[11px] sm:text-xs leading-relaxed font-semibold text-gray-600">
                  <span className="text-[9px] text-gray-400 font-black block uppercase tracking-wider mb-1">Rider Note</span>
                  "{selectedProofItem.notes}"
                </div>
              )}

              <div>
                <span className="text-[9px] text-gray-400 font-black block uppercase tracking-wider mb-2">
                  Uploaded Proof ({selectedProofItem.proofType})
                </span>

                {selectedProofItem.proofType === "Signature" ? (
                  <div className="bg-slate-50 border border-gray-200 rounded-lg p-5 flex flex-col items-center justify-center h-28 relative">
                    <svg className="w-48 h-16" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
                      <path 
                        d="M 20 40 Q 50 10, 80 45 T 140 25 T 180 30" 
                        fill="none" 
                        stroke="#0F4C81" 
                        strokeWidth="2.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                      />
                      <path 
                        d="M 60 30 L 160 30" 
                        fill="none" 
                        stroke="#0F4C81" 
                        strokeWidth="1.5" 
                        strokeLinecap="round" 
                        strokeDasharray="3,3"
                      />
                    </svg>
                    <span className="text-[9px] text-gray-400 font-semibold absolute bottom-2 right-3">Verified Recipient Sign</span>
                  </div>
                ) : (
                  <div className="bg-slate-50 border border-gray-200 rounded-lg overflow-hidden h-32 flex flex-col items-center justify-center gap-1.5 select-none relative p-3">
                    <div className="w-16 h-12 bg-white border border-gray-200 rounded flex items-center justify-center shadow-3xs">
                      <FileText className="size-6.5 text-[#0F4C81] opacity-70" />
                    </div>
                    <span className="text-[10px] font-black text-gray-700">Photo Proof Attached</span>
                    <span className="text-[9px] text-gray-400 font-semibold">package_on_doorstep.jpg · 1.4 MB</span>
                    <span className="text-[9px] text-emerald-600 font-black uppercase tracking-wider bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100 absolute top-2 right-2">
                      JPEG
                    </span>
                  </div>
                )}
              </div>

            </div>

            {/* Modal Footer */}
            <div className="px-5 py-4 bg-gray-50/50 border-t border-gray-100 flex items-center justify-end select-none">
              <button
                onClick={() => setSelectedProofItem(null)}
                className="bg-[#0F4C81] hover:bg-[#0C447C] text-white font-bold py-2 px-5 rounded text-xs transition-colors cursor-pointer"
              >
                Close Record
              </button>
            </div>

          </div>

        </div>
      )}

    </div>
  );
}
