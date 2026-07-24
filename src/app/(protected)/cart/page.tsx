"use client";

import CartShopGroup from "@/components/cart/CartShopGroup";
import CartItem from "@/components/cart/CartItem";
import CouponSection from "@/components/cart/CouponSection";
import OrderSummary from "@/components/cart/OrderSummary";
import PeopleAlsoBought from "@/components/cart/PeopleAlsoBought";
import { Info } from "lucide-react";

export default function CartPage() {
  // Static cart data representing the mockup items
  const cartGroups = [
    {
      id: "shop-1",
      shopName: "TechNova Official Store",
      shipsFrom: "Dhaka, BD",
      isVerified: true,
      items: [
        {
          id: "item-1",
          title: "SonicPro 500 Noise-Canceling Wireless Headphones",
          price: 299.0,
          quantity: 1,
          variant: "Variant: Midnight Black | Size: Universal",
          image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=400",
        },
        {
          id: "item-2",
          title: "UrbanSleeve 14\" Minimalist Laptop Case",
          price: 45.0,
          quantity: 2,
          variant: "Variant: Heather Gray | Fabric: Sustainable Felt",
          image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&q=80&w=400",
        },
      ],
    },
    {
      id: "shop-2",
      shopName: "Nordic Home Decor",
      shipsFrom: "Oslo, NO",
      isVerified: true,
      items: [
        {
          id: "item-3",
          title: "Ceramic Essential Oil Diffuser (Handmade)",
          price: 78.0,
          quantity: 1,
          variant: "Variant: Matte White | Material: Organic Clay",
          image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=400",
        },
      ],
    },
  ];

  // Pricing calculations matching the mockup values exactly
  const subtotal = 467.0;
  const itemCount = 4; // 1 (headphones) + 2 (sleeves) + 1 (diffuser)
  const discount = 46.7; // 10% of 467.0
  const shipping = 12.0;
  const tax = 21.15;
  const total = 453.45; // 467.0 - 46.70 + 12.0 + 21.15

  return (
    <div className="min-h-screen bg-brand-primary-50">
      <div className="container mx-auto px-4 py-8">
        
        {/* Page Heading */}
        <div className="flex items-baseline gap-2 mb-6 sm:mb-8">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-gray-900 tracking-tight">
            Your Shopping Cart
          </h1>
          <span className="text-xs sm:text-sm font-medium text-gray-500">
            ({itemCount} items)
          </span>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
          
          {/* Left Column: Cart Items grouped by Shop */}
          <div className="lg:col-span-2 flex flex-col">
            {cartGroups.map((group) => (
              <CartShopGroup
                key={group.id}
                shopName={group.shopName}
                shipsFrom={group.shipsFrom}
                isVerified={group.isVerified}
              >
                {group.items.map((item) => (
                  <CartItem
                    key={item.id}
                    image={item.image}
                    title={item.title}
                    variant={item.variant}
                    price={item.price}
                    quantity={item.quantity}
                  />
                ))}
              </CartShopGroup>
            ))}
          </div>

          {/* Right Column: Order Summary & Coupon */}
          <div className="flex flex-col lg:sticky lg:top-6">
            <CouponSection />
            <OrderSummary
              subtotal={subtotal}
              itemCount={itemCount}
              discount={discount}
              shipping={shipping}
              tax={tax}
              total={total}
            />

            {/* Free Shipping Alert Banner */}
            <div className="mt-4 bg-brand-secondary-50 border border-brand-secondary-200/50 rounded-xl p-4 text-xs font-semibold text-brand-secondary-800 flex items-start gap-2.5 shadow-sm">
              <Info className="size-4 shrink-0 text-brand-teal mt-0.5" />
              <p className="leading-relaxed">
                Enjoy Free Shipping on your next $33 worth of purchases. Add more items to save!
              </p>
            </div>
          </div>
          
        </div>

        {/* Recommended Products Section */}
        <PeopleAlsoBought />

      </div>
    </div>
  );
}
