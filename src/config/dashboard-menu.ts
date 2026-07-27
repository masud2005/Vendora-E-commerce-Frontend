import {
  LayoutDashboard,
  ClipboardList,
  Wallet,
  MessageSquare,
  Bell,
  Settings,
  Package,
  ShoppingCart,
  BarChart3,
  Users,
  CheckSquare,
  Layers,
  Bike,
  DollarSign
} from "lucide-react";

export interface MenuItem {
  title: string;
  href: string;
  icon: any;
}

export const roleMenuConfigs: Record<string, MenuItem[]> = {
  // ১. Customer/User এর জন্য আপলোড করা ইমেজ অনুযায়ী মেনু সেটআপ:
  user: [
    { title: "Overview", href: "/dashboard/overview", icon: LayoutDashboard },
    { title: "Orders", href: "/dashboard/orders", icon: ClipboardList },
    { title: "Wallet", href: "/dashboard/wallet", icon: Wallet },
    { title: "Reviews", href: "/dashboard/reviews", icon: MessageSquare },
    { title: "Notifications", href: "/dashboard/notifications", icon: Bell },
    { title: "Settings", href: "/dashboard/settings", icon: Settings }
  ],
  
  // ২. Seller/Merchant এর জন্য ডেমো মেনু:
  seller: [
    { title: "Overview", href: "/seller", icon: LayoutDashboard },
    { title: "My Products", href: "/seller/products", icon: Package },
    { title: "Orders Received", href: "/seller/orders", icon: ShoppingCart },
    { title: "Analytics", href: "/seller/analytics", icon: BarChart3 },
    { title: "Store Settings", href: "/seller/settings", icon: Settings }
  ],
  
  // ৩. Admin এর জন্য ডেমো মেনু:
  admin: [
    { title: "Platform Overview", href: "/admin", icon: LayoutDashboard },
    { title: "Manage Sellers", href: "/admin/sellers", icon: Users },
    { title: "Product Approvals", href: "/admin/approvals", icon: CheckSquare },
    { title: "Categories", href: "/admin/categories", icon: Layers },
    { title: "Platform Settings", href: "/admin/settings", icon: Settings }
  ],
  
  // ৪. Delivery Rider এর জন্য ডেমো মেনু:
  rider: [
    { title: "Deliveries Map", href: "/rider", icon: LayoutDashboard },
    { title: "Active Orders", href: "/rider/active", icon: Bike },
    { title: "Payout History", href: "/rider/payouts", icon: DollarSign },
    { title: "Rider Settings", href: "/rider/settings", icon: Settings }
  ]
};
