import {
  LayoutGrid,
  Package,
  Heart,
  User,
  MessageSquareText,
  Wallet,
  Settings,
  Bell,
  ShoppingCart,
  BarChart3,
  Users,
  CheckSquare,
  Layers,
  Bike,
  DollarSign,
  Store,
  Shapes,
  Megaphone,
  Banknote,
  LineChart,
  Headset,
  ClipboardList,
  Boxes,
  MapPin,
  History,
  Headphones
} from "lucide-react";

export interface MenuItem {
  title: string;
  href: string;
  icon: any;
  badge?: string | number;
  badgeType?: "danger" | "warning"; // danger = red bubble, warning = beige pill
}

export const roleMenuConfigs: Record<string, MenuItem[]> = {
  // ১. Customer/User এর জন্য আপলোড করা ইমেজ অনুযায়ী মেনু ও আইকন সেটআপ:
  user: [
    { title: "Overview", href: "/dashboard", icon: LayoutGrid },
    { title: "Orders", href: "/dashboard/orders", icon: Package },
    { title: "Wallet", href: "/dashboard/wallet", icon: Wallet },
    { title: "Reviews", href: "/dashboard/reviews", icon: MessageSquareText },
    { title: "Notifications", href: "/dashboard/notifications", icon: Bell },
    { title: "Settings", href: "/dashboard/settings", icon: Settings }
  ],
  // ২. Seller/Merchant এর জন্য আপলোড করা ইমেজ অনুযায়ী মেনু ও আইকন সেটআপ:
  seller: [
    { title: "Overview", href: "/seller", icon: LayoutGrid },
    { title: "Orders & Fulfillment", href: "/seller/orders", icon: ShoppingCart },
    { title: "Products & Inventory", href: "/seller/products", icon: Package },
    { title: "Marketing & Discount", href: "/seller/marketing", icon: Megaphone },
    { title: "Analytics", href: "/seller/analytics", icon: LineChart },
    { title: "Message", href: "/seller/messages", icon: MessageSquareText },
    { title: "Wallet & Settings", href: "/seller/settings", icon: Settings }
  ],
  
  // ৩. Admin এর জন্য আপলোড করা ইমেজ অনুযায়ী মেনু ও আইকন সেটআপ:
  admin: [
    { title: "Overview", href: "/admin", icon: LayoutGrid },
    { title: "User Management", href: "/admin/userManagement", icon: Users },
    { title: "Seller Management", href: "/admin/sellerMangement", icon: Store },
    { title: "Product Management", href: "/admin/productManagement", icon: Package },
    { title: "Marketing", href: "/admin/marketing", icon: Megaphone },
    { title: "Financials", href: "/admin/financials", icon: Banknote },
    { title: "Analytics", href: "/admin/analytics", icon: LineChart },
    { title: "CMS & Support", href: "/admin/cms", icon: Headset },
    { title: "Settings", href: "/admin/settings", icon: Settings }
  ],
  
  // ৪. Delivery Rider এর জন্য ইমেজ অনুযায়ী মেনু ও আইকন সেটআপ:
  rider: [
    { title: "Overview", href: "/rider", icon: LayoutGrid },
    { title: "Assigned Orders", href: "/rider/assigned", icon: ClipboardList, badge: 5, badgeType: "danger" },
    { title: "Pickup Queue", href: "/rider/pickup", icon: Boxes },
    { title: "Live Tracking", href: "/rider/tracking", icon: MapPin, badge: "Beta", badgeType: "warning" },
    { title: "Delivery History", href: "/rider/history", icon: History },
    { title: "Earnings", href: "/rider/earnings", icon: Wallet },
    { title: "COD Collection", href: "/rider/cod", icon: Banknote },
    { title: "Support Chat", href: "/rider/support", icon: Headphones }
  ]
};
