"use client";

import React, { useState, useRef, useEffect } from "react";
import OrderDetailsHeader from "./OrderDetailsHeader";
import DeliveryProgressTimeline from "./DeliveryProgressTimeline";
import ParcelContentsTable from "./ParcelContentsTable";
import RouteMapAndStats from "./RouteMapAndStats";
import PartyDetailsCard from "./PartyDetailsCard";
import CashCollectionReminder from "./CashCollectionReminder";
import ProofOfDeliveryModal from "./ProofOfDeliveryModal";
import ReportFailedModal from "./ReportFailedModal";
import { AssignedOrderDetails } from "./types";
import toast from "react-hot-toast";

const failedReasonsList = [
  "Customer unreachable after 3 call attempts",
  "Customer refused the delivery",
  "Incorrect or incomplete address",
  "Customer requested reschedule",
  "Cash not available for COD payment",
  "Parcel damaged in transit",
  "Other reason"
];

interface OrderDetailsContentProps {
  initialOrder: AssignedOrderDetails;
}

export default function OrderDetailsContent({ initialOrder }: OrderDetailsContentProps) {
  // Local active state
  const [order, setOrder] = useState<AssignedOrderDetails>(initialOrder);
  const [isCashCollected, setIsCashCollected] = useState(false);

  // Modals visibility toggles
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFailedModalOpen, setIsFailedModalOpen] = useState(false);

  // Form parameters
  const [activeTab, setActiveTab] = useState<"photo" | "signature">("photo");
  const [receivedBy, setReceivedBy] = useState("");
  const [deliveryNote, setDeliveryNote] = useState("");
  const [modalCashCollected, setModalCashCollected] = useState(false);
  const [photoProof, setPhotoProof] = useState<string | null>(null);

  // Failed modal inputs
  const [selectedReason, setSelectedReason] = useState(failedReasonsList[0]);
  const [otherReasonText, setOtherReasonText] = useState("");

  // Signature canvas drawing pad
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);

  // Sync cash collected state
  useEffect(() => {
    if (isCashCollected) {
      setModalCashCollected(true);
    }
  }, [isCashCollected]);

  // Sync recipient name on load
  useEffect(() => {
    if (order) {
      setReceivedBy(order.dropName);
    }
  }, [order]);

  // Top header button action handlers
  const handleStartNavigation = () => {
    toast.success(`Launching navigation map route to: ${order.dropLoc}`);
  };

  const handleContactSupport = () => {
    toast.success(`Connecting you to Vendora Support Agent for order ${order.id}...`);
  };

  const handleMarkCashCollected = () => {
    setIsCashCollected(true);
    setModalCashCollected(true);
    toast.success(`Collected ৳${order.price.toLocaleString()} in cash successfully!`);
  };

  // Canvas drawing handlers
  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.lineWidth = 3;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#0F4C81";

    let clientX, clientY;
    if ("touches" in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.beginPath();
    ctx.moveTo(x, y);
    setIsDrawing(true);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let clientX, clientY;
    if ("touches" in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearSignature = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const handleUploadPhoto = () => {
    setPhotoProof("/package_mock.jpg");
    toast.success("Delivery photo uploaded successfully!");
  };

  // Submit delivery report
  const handleSubmitDelivery = () => {
    if (order.isCOD && !modalCashCollected) {
      toast.error(`Please confirm cash collection of ৳${order.price.toLocaleString()} before marking delivered.`);
      return;
    }

    if (!receivedBy.trim()) {
      toast.error("Please specify the name of the person who received the parcel.");
      return;
    }

    const timeNow = new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
    const updatedTimeline = order.timeline.map((step) => {
      if (step.title.toLowerCase().includes("delivered")) {
        return { title: "Delivered", time: timeNow, checked: true };
      }
      return step;
    });

    setOrder((prev) => ({
      ...prev,
      status: "Delivered",
      statusStyle: "bg-emerald-50 text-emerald-700 border-emerald-150",
      alertMsg: undefined,
      timeline: updatedTimeline
    }));

    if (order.isCOD) {
      setIsCashCollected(true);
    }

    setIsModalOpen(false);
    toast.success(`Order ${order.id} marked as Delivered!`);
  };

  // Submit failed report
  const handleReportFailedSubmit = () => {
    const timeNow = new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
    const updatedTimeline = order.timeline.map((step) => {
      if (step.title.toLowerCase().includes("delivered") || step.title.toLowerCase().includes("fail")) {
        return { title: "Delivery failed", time: timeNow, checked: true, isFailed: true };
      }
      return step;
    });

    const finalReason = selectedReason === "Other reason" && otherReasonText.trim()
      ? otherReasonText.trim()
      : selectedReason;

    setOrder((prev) => ({
      ...prev,
      status: "Failed",
      statusStyle: "bg-rose-50 text-rose-700 border-rose-150",
      alertMsg: finalReason,
      timeline: updatedTimeline
    }));

    setIsFailedModalOpen(false);
    toast.error(`Order ${order.id} marked as Delivery Failed: ${finalReason}`);
  };

  return (
    <div className="space-y-6 w-full pb-16 text-left">
      
      {/* 1. Page Header with Breadcrumbs & Action Buttons */}
      <OrderDetailsHeader
        order={order}
        onContactSupport={handleContactSupport}
        onStartNavigation={handleStartNavigation}
      />

      {/* 2. Grid split layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start select-none">
        
        {/* Left Column (2/3 width) */}
        <div className="lg:col-span-2 space-y-6">
          <DeliveryProgressTimeline
            order={order}
            onMarkDeliveredClick={() => setIsModalOpen(true)}
            onReportFailedClick={() => setIsFailedModalOpen(true)}
          />

          <ParcelContentsTable order={order} />
        </div>

        {/* Right Column (1/3 width) */}
        <div className="lg:col-span-1 space-y-6">
          <RouteMapAndStats order={order} />

          <PartyDetailsCard
            order={order}
            onCallSeller={() => toast.success(`Calling seller ${order.pickupName}...`)}
            onChatSeller={() => toast.success(`Opening chat dialog with seller ${order.pickupName}...`)}
            onCallCustomer={() => toast.success(`Calling customer ${order.dropName}...`)}
            onNavigateCustomer={handleStartNavigation}
          />

          <CashCollectionReminder
            order={order}
            isCashCollected={isCashCollected}
            onMarkCashCollected={handleMarkCashCollected}
          />
        </div>

      </div>

      {/* 3. Proof of Delivery modal Overlay */}
      <ProofOfDeliveryModal
        order={order}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        receivedBy={receivedBy}
        setReceivedBy={setReceivedBy}
        deliveryNote={deliveryNote}
        setDeliveryNote={setDeliveryNote}
        modalCashCollected={modalCashCollected}
        setModalCashCollected={setModalCashCollected}
        isCashCollected={isCashCollected}
        photoProof={photoProof}
        onUploadPhoto={handleUploadPhoto}
        canvasRef={canvasRef}
        startDrawing={startDrawing}
        draw={draw}
        stopDrawing={stopDrawing}
        clearSignature={clearSignature}
        onSubmitDelivery={handleSubmitDelivery}
      />

      {/* 4. Report Failed Delivery modal Overlay */}
      <ReportFailedModal
        order={order}
        isOpen={isFailedModalOpen}
        onClose={() => setIsFailedModalOpen(false)}
        reasons={failedReasonsList}
        selectedReason={selectedReason}
        setSelectedReason={setSelectedReason}
        otherReasonText={otherReasonText}
        setOtherReasonText={setOtherReasonText}
        onSubmitReport={handleReportFailedSubmit}
      />

    </div>
  );
}
