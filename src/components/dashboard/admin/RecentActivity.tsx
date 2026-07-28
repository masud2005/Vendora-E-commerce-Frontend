"use client";

import React from "react";
import toast from "react-hot-toast";
import { Eye, MoreVertical } from "lucide-react";

// Mock Recent Platform Activity table data
const recentActivities = [
  {
    timestamp: "2024-06-03 14:22:10",
    adminUser: "Alex Rivera",
    initials: "AR",
    bgInitials: "bg-blue-100 text-blue-700",
    action: "Payout Approval: #PAY-9921",
    status: "COMPLETED",
    statusStyle: "bg-emerald-100 text-emerald-800 border-emerald-250"
  },
  {
    timestamp: "2024-06-03 13:45:05",
    adminUser: "Jane Doe",
    initials: "JD",
    bgInitials: "bg-amber-100 text-amber-700",
    action: "Seller Suspension: 'TechWorld'",
    status: "FLAGGED",
    statusStyle: "bg-rose-100 text-rose-800 border-rose-250"
  },
  {
    timestamp: "2024-06-03 12:10:55",
    adminUser: "Alex Rivera",
    initials: "AR",
    bgInitials: "bg-blue-100 text-blue-700",
    action: "System Update: Config v4.2.1",
    status: "INTERNAL",
    statusStyle: "bg-blue-50 text-blue-700 border-blue-150"
  },
  {
    timestamp: "2024-06-03 11:30:12",
    adminUser: "Mark Smith",
    initials: "MS",
    bgInitials: "bg-purple-100 text-purple-700",
    action: "Promotion: Summer Flash Sale",
    status: "SCHEDULED",
    statusStyle: "bg-[#EEF2FF] text-[#4F46E5] border-indigo-150"
  }
];

export default function RecentActivity() {
  return (
    <div className="bg-white border border-gray-200 rounded p-5 shadow-3xs lg:col-span-2 text-left flex flex-col justify-between">
      <div className="flex items-center justify-between border-b border-gray-100 pb-3">
        <h3 className="text-xs sm:text-sm font-bold text-gray-900">
          Recent Platform Activity
        </h3>
        <button 
          onClick={() => toast.success("Opening audit log settings...")}
          className="p-1 rounded hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-colors cursor-pointer"
        >
          <MoreVertical className="size-4.5" />
        </button>
      </div>

      {/* Responsive Table Wrapper */}
      <div className="overflow-x-auto mt-3.5 scrollbar-none w-full">
        <table className="w-full text-xs text-left min-w-[500px]">
          <thead>
            <tr className="text-[10px] font-bold text-gray-400 uppercase border-b border-gray-150 bg-gray-50/50">
              <th className="py-2.5 px-3">TIMESTAMP</th>
              <th className="py-2.5 px-3">ADMIN USER</th>
              <th className="py-2.5 px-3">ACTION</th>
              <th className="py-2.5 px-3">STATUS</th>
              <th className="py-2.5 px-3 text-center">DETAILS</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 font-medium text-gray-700">
            {recentActivities.map((row, idx) => (
              <tr key={idx} className="hover:bg-gray-50/40 transition-colors">
                <td className="py-3 px-3 text-gray-400 font-bold whitespace-nowrap">{row.timestamp}</td>
                <td className="py-3 px-3 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <span className={`size-6.5 rounded-full flex items-center justify-center text-[10px] font-black shrink-0 ${row.bgInitials}`}>
                      {row.initials}
                    </span>
                    <span className="font-bold text-gray-800">{row.adminUser}</span>
                  </div>
                </td>
                <td className="py-3 px-3 font-semibold text-gray-700">{row.action}</td>
                <td className="py-3 px-3">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-black border uppercase tracking-wider select-none ${row.statusStyle}`}>
                    {row.status}
                  </span>
                </td>
                <td className="py-3 px-3 text-center">
                  <button
                    onClick={() => toast.success(`Viewing logs: ${row.action}`)}
                    className="p-1 rounded hover:bg-gray-100 text-gray-400 hover:text-[#0F4C81] transition-colors cursor-pointer"
                    title="View Audit Log Detail"
                  >
                    <Eye className="size-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
