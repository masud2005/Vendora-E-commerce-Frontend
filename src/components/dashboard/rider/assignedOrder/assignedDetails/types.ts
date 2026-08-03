export interface OrderItem {
  name: string;
  qty: string | number;
  price: number;
}

export interface AssignedOrderDetails {
  id: string;
  price: number;
  status: "Assigned" | "Picked Up" | "In Transit" | "Delivered" | "Failed";
  statusStyle: string;
  isCOD: boolean;
  isExpress?: boolean;
  assignedTime: string;
  deadlineTime: string;
  items: OrderItem[];
  pickupName: string;
  pickupLoc: string;
  pickupPhone: string;
  dropName: string;
  dropLoc: string;
  dropPhone: string;
  distance: string;
  eta: string;
  itemsCount: string;
  timeline: { title: string; time?: string; checked: boolean; isFailed?: boolean }[];
  alertMsg?: string;
}
