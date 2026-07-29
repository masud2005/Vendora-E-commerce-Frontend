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
  Headset
} from "lucide-react";

export interface MenuItem {
  title: string;
  href: string;
  icon: any;
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
  
  // ২. Seller/Merchant এর জন্য ডেমো মেনু:
  seller: [
    { title: "Overview", href: "/seller", icon: LayoutGrid },
    { title: "My Products", href: "/seller/products", icon: Package },
    { title: "Orders Received", href: "/seller/orders", icon: ShoppingCart },
    { title: "Analytics", href: "/seller/analytics", icon: BarChart3 },
    { title: "Store Settings", href: "/seller/settings", icon: Settings }
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
  
  // ৪. Delivery Rider এর জন্য ডেমো মেনু:
  rider: [
    { title: "Deliveries Map", href: "/rider", icon: LayoutGrid },
    { title: "Active Orders", href: "/rider/active", icon: Bike },
    { title: "Payout History", href: "/rider/payouts", icon: DollarSign },
    { title: "Rider Settings", href: "/rider/settings", icon: Settings }
  ]
};
