"use client";

import React, { use } from "react";
import OrderDetailsContent from "@/components/dashboard/rider/assignedOrder/assignedDetails/OrderDetailsContent";
import { AssignedOrderDetails } from "@/components/dashboard/rider/assignedOrder/assignedDetails/types";

// Complete Database representing details of all 9 orders
const ordersDb: Record<string, AssignedOrderDetails> = {
  "VD-90244": {
    id: "#VD-90244",
    price: 2100,
    status: "Failed",
    statusStyle: "bg-rose-50 text-rose-700 border-rose-150",
    isCOD: true,
    assignedTime: "Jun 1, 09:00 AM",
    deadlineTime: "Deliver by 01:00 PM",
    items: [{ name: "Wooden Wall Shelf", qty: "x", price: 2100 }],
    pickupName: "Oak & Iron",
    pickupLoc: "Warehouse 4, Block B, Bashundhara R/A",
    pickupPhone: "+880 1999 110 552",
    dropName: "Rezaul Karim",
    dropLoc: "House 21, Road 9, Nikunja 2",
    dropPhone: "+880 1633 887 112",
    distance: "7.1 km",
    eta: "28 min",
    itemsCount: "1 item(s)",
    alertMsg: "Customer unreachable after 3 call attempts",
    timeline: [
      { title: "Order assigned", time: "09:00 AM", checked: true },
      { title: "Picked up from seller", time: "09:35 AM", checked: true },
      { title: "In transit", time: "10:10 AM", checked: true },
      { title: "Delivery failed", time: "12:05 PM", checked: true, isFailed: true }
    ]
  },
  "VD-90210": {
    id: "#VD-90210",
    price: 990,
    status: "Delivered",
    statusStyle: "bg-emerald-50 text-emerald-700 border-emerald-150",
    isCOD: true,
    assignedTime: "Jun 1, 10:15 AM",
    deadlineTime: "Deliver by 03:00 PM",
    items: [{ name: "Smart Home Hub", qty: "x", price: 990 }],
    pickupName: "EcoHome Tech",
    pickupLoc: "Plot 12, Block C, Mirpur 10",
    pickupPhone: "+880 1788 233 490",
    dropName: "Shakil Ahmed",
    dropLoc: "House 6, Road 2, Kazipara",
    dropPhone: "+880 1522 990 120",
    distance: "1.8 km",
    eta: "8 min",
    itemsCount: "1 item(s)",
    timeline: [
      { title: "Order assigned", time: "10:15 AM", checked: true },
      { title: "Picked up from seller", time: "10:45 AM", checked: true },
      { title: "In transit", time: "11:05 AM", checked: true },
      { title: "Delivered", time: "11:20 AM", checked: true }
    ]
  },
  "VD-90301": {
    id: "#VD-90301",
    price: 1750,
    status: "Delivered",
    statusStyle: "bg-emerald-50 text-emerald-700 border-emerald-150",
    isCOD: true,
    assignedTime: "Jun 1, 09:30 AM",
    deadlineTime: "Deliver by 01:00 PM",
    items: [{ name: "Premium Leather Wallet", qty: "x", price: 1750 }],
    pickupName: "Chronos Luxe",
    pickupLoc: "Suites 4B, Road 11, Banani",
    pickupPhone: "+880 1811 405 921",
    dropName: "Mahmudul Hasan",
    dropLoc: "House 88, Road 4, Mohakhali DOHS",
    dropPhone: "+880 1744 556 122",
    distance: "2.9 km",
    eta: "14 min",
    itemsCount: "1 item(s)",
    timeline: [
      { title: "Order assigned", time: "09:30 AM", checked: true },
      { title: "Picked up from seller", time: "10:10 AM", checked: true },
      { title: "In transit", time: "10:35 AM", checked: true },
      { title: "Delivered", time: "10:50 AM", checked: true }
    ]
  },
  "VD-90288": {
    id: "#VD-90288",
    price: 4300,
    status: "Delivered",
    statusStyle: "bg-emerald-50 text-emerald-700 border-emerald-150",
    isCOD: false,
    isExpress: true,
    assignedTime: "Jun 1, 11:00 AM",
    deadlineTime: "Deliver by 01:30 PM",
    items: [{ name: "Action Sports Camera", qty: "x", price: 4300 }],
    pickupName: "Velo Sports",
    pickupLoc: "Shops 15, Road 27, Dhanmondi",
    pickupPhone: "+880 1922 889 004",
    dropName: "Ayesha Siddika",
    dropLoc: "Flat 2A, Lalmatia Block D",
    dropPhone: "+880 1622 778 991",
    distance: "3.7 km",
    eta: "18 min",
    itemsCount: "1 item(s)",
    timeline: [
      { title: "Order assigned", time: "11:00 AM", checked: true },
      { title: "Picked up from seller", time: "11:20 AM", checked: true },
      { title: "In transit", time: "11:40 AM", checked: true },
      { title: "Delivered", time: "11:55 AM", checked: true }
    ]
  },
  "VD-90355": {
    id: "#VD-90355",
    price: 890,
    status: "In Transit",
    statusStyle: "bg-yellow-50 text-yellow-755 border-yellow-250",
    isCOD: false,
    assignedTime: "Jun 1, 09:15 AM",
    deadlineTime: "Deliver by 11:00 AM",
    items: [{ name: "Smart LED Bulb Pack (3pcs)", qty: "x", price: 890 }],
    pickupName: "EcoHome Tech",
    pickupLoc: "Plot 12, Block C, Mirpur 10",
    pickupPhone: "+880 1788 233 490",
    dropName: "Imran Kabir",
    dropLoc: "House 3, Road 5, Pallabi",
    dropPhone: "+880 1522 990 120",
    distance: "5.5 km",
    eta: "22 min",
    itemsCount: "3 item(s)",
    timeline: [
      { title: "Order assigned", time: "09:15 AM", checked: true },
      { title: "Picked up from seller", time: "09:50 AM", checked: true },
      { title: "In transit", time: "10:15 AM", checked: true },
      { title: "Pending delivery", checked: false }
    ]
  },
  "VD-90376": {
    id: "#VD-90376",
    price: 5680,
    status: "In Transit",
    statusStyle: "bg-yellow-50 text-yellow-755 border-yellow-250",
    isCOD: true,
    isExpress: true,
    assignedTime: "Jun 1, 09:20 AM",
    deadlineTime: "Deliver by 11:30 AM",
    items: [{ name: "Minimalist Wood Planter", qty: "x", price: 5680 }],
    pickupName: "Oak & Iron",
    pickupLoc: "Warehouse 4, Block B, Bashundhara R/A",
    pickupPhone: "+880 1999 110 552",
    dropName: "Farhana Islam",
    dropLoc: "Apt 9C, Lake View Heights, Baridhara",
    dropPhone: "+880 1633 887 112",
    distance: "3.2 km",
    eta: "15 min",
    itemsCount: "1 item(s)",
    timeline: [
      { title: "Order assigned", time: "09:20 AM", checked: true },
      { title: "Picked up from seller", time: "09:55 AM", checked: true },
      { title: "In transit", time: "10:20 AM", checked: true },
      { title: "Pending delivery", checked: false }
    ]
  },
  "VD-90399": {
    id: "#VD-90399",
    price: 2450,
    status: "In Transit",
    statusStyle: "bg-yellow-50 text-yellow-755 border-yellow-250",
    isCOD: true,
    assignedTime: "Jun 3, 08:30 AM",
    deadlineTime: "Deliver by 12:00 PM",
    items: [
      { name: "Running Shoes UK-9", qty: "x", price: 2100 },
      { name: "Sports Socks", qty: "x", price: 350 }
    ],
    pickupName: "Velo Sports",
    pickupLoc: "Shop 7, Rifles Square, Dhanmondi 2",
    pickupPhone: "+880 1521 330 887",
    dropName: "Sabbir Rahman",
    dropLoc: "House 19, Road 12A, Gulshan 1",
    dropPhone: "+880 1877 445 129",
    distance: "4.8 km",
    eta: "19 min",
    itemsCount: "2 item(s)",
    timeline: [
      { title: "Order assigned", time: "08:30 AM", checked: true },
      { title: "Picked up from seller", time: "09:05 AM", checked: true },
      { title: "In transit", time: "08:02 PM", checked: true },
      { title: "Delivered", checked: false }
    ]
  },
  "VD-90412": {
    id: "#VD-90412",
    price: 3240,
    status: "Assigned",
    statusStyle: "bg-blue-50 text-blue-700 border-blue-150",
    isCOD: true,
    isExpress: true,
    assignedTime: "Jun 1, 09:00 AM",
    deadlineTime: "Deliver by 12:30 PM",
    items: [{ name: "Minimalist Desk Mat", qty: "x", price: 3240 }],
    pickupName: "Chronos Luxe",
    pickupLoc: "Suites 4B, Road 11, Banani",
    pickupPhone: "+880 1811 405 921",
    dropName: "Nusrat Jahan",
    dropLoc: "House 42, Road 7, Sector 4, Uttara",
    dropPhone: "+880 1633 887 112",
    distance: "6.4 km",
    eta: "26 min",
    itemsCount: "2 item(s)",
    timeline: [
      { title: "Order assigned", time: "09:00 AM", checked: true },
      { title: "Pending pickup from seller", checked: false },
      { title: "In transit", checked: false },
      { title: "Pending delivery", checked: false }
    ]
  },
  "VD-90418": {
    id: "#VD-90418",
    price: 1190,
    status: "Assigned",
    statusStyle: "bg-blue-50 text-blue-700 border-blue-150",
    isCOD: false,
    assignedTime: "Jun 1, 10:00 AM",
    deadlineTime: "Deliver by 01:00 PM",
    items: [{ name: "RGB Underglow Strip", qty: "x", price: 1190 }],
    pickupName: "EcoHome Tech",
    pickupLoc: "Plot 12, Block C, Mirpur 10",
    pickupPhone: "+880 1788 233 490",
    dropName: "Tanvir Ahmed",
    dropLoc: "Flat 5B, Green Villa, Shewrapara",
    dropPhone: "+880 1522 990 120",
    distance: "2.1 km",
    eta: "10 min",
    itemsCount: "1 item(s)",
    timeline: [
      { title: "Order assigned", time: "10:00 AM", checked: true },
      { title: "Pending pickup from seller", checked: false },
      { title: "In transit", checked: false },
      { title: "Pending delivery", checked: false }
    ]
  }
};

export default function OrderDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  
  // Normalize parameters: remove hashes, URL encodings and upper case it to make it match accurately
  const orderId = resolvedParams.id
    .replace(/%23/gi, "")
    .replace("#", "")
    .toUpperCase()
    .trim();

  const order = ordersDb[orderId] || ordersDb["VD-90244"]; // default fallback to first if not found

  return <OrderDetailsContent initialOrder={order} />;
}
