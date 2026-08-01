export type ProductReview = {
  author: string;
  label: string;
  date: string;
  rating: number;
  title: string;
  excerpt: string;
  verified: boolean;
};

export type AdminProduct = {
  id: number;
  title: string;
  brand: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  inStock: boolean;
  category: string;
  subcategory: string;
  seller: string;
  sellerRating: string;
  sku: string;
  status: "PENDING" | "APPROVED";
  badge?: { text: string; tone: "amber" | "emerald" | "blue" };
  images: string[];
  colors: { name: string; hex: string }[];
  sizes: string[];
  description: string;
  warranty: string;
  bundle: { title: string; price: string; image: string }[];
  reviewsData: ProductReview[];
};

export const ADMIN_PRODUCTS: AdminProduct[] = [
  {
    id: 1,
    title: "Apex TKL Mechanical Keyboard",
    brand: "Apex",
    price: 189.99,
    oldPrice: 239.99,
    rating: 4.8,
    reviews: 1243,
    inStock: true,
    category: "Electronics",
    subcategory: "Peripherals",
    seller: "TechTrend Solutions",
    sellerRating: "98% Positive Feedback (45k sales)",
    sku: "VEN-77291-KB",
    status: "PENDING",
    badge: { text: "BEST SELLER", tone: "amber" },
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1555617117-08fda1bc8d60?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=1000&q=80"
    ],
    colors: [
      { name: "Graphite", hex: "#2F3747" },
      { name: "Fog", hex: "#CBD5E1" },
      { name: "Ocean", hex: "#1E3A8A" }
    ],
    sizes: ["One Size"],
    
    description:
      "The Apex TKL is built for creators and power users who want compact performance without giving up comfort. Its hot-swappable design, durable aluminum frame, and tuned stabilizers deliver a quieter, more controlled typing experience for work or play.",
    
    warranty: "Includes a 2-year manufacturer warranty and 30-day hassle-free return policy if the item is unused and in original condition.",
    bundle: [
      {
        title: "Elite Wrist Rest",
        price: "$29.99",
        image: "https://images.unsplash.com/photo-1516044734145-07f0fdb2b2e0?auto=format&fit=crop&w=400&q=80"
      },
      {
        title: "Premium Switch Puller Kit",
        price: "$15.00",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80"
      },
      {
        title: "Keyboard Carry Case",
        price: "$45.00",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80"
      }
    ],
    reviewsData: [
      {
        author: "James D.",
        label: "Verified Buyer",
        date: "2 days ago",
        rating: 5,
        title: "Incredible sound stage!",
        excerpt: "The typing feel is amazing and the build quality is premium. I use it every day for editing and gaming.",
        verified: true
      },
      {
        author: "Maria S.",
        label: "Verified Buyer",
        date: "1 week ago",
        rating: 5,
        title: "Build quality is superb",
        excerpt: "Feels solid on the desk and the acoustics are cleaner than most boards in this range.",
        verified: true
      }
    ]
  },
  {
    id: 2,
    title: "QuietFlow Pro Wireless ANC",
    brand: "QuietFlow",
    price: 299.0,
    oldPrice: 399.0,
    rating: 4.9,
    reviews: 2431,
    inStock: true,
    category: "Audio",
    subcategory: "Headphones",
    seller: "AudioPhile Global",
    sellerRating: "98% Positive Feedback (45k sales)",
    sku: "VEN-0021-HP",
    status: "APPROVED",
    badge: { text: "BEST SELLER", tone: "amber" },
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1518441902117-f0a1b2f63f1b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1518441313147-44f0f4a0f1da?auto=format&fit=crop&w=1000&q=80"
    ],
    colors: [
      { name: "Midnight Charcoal", hex: "#2F3542" },
      { name: "Cloud", hex: "#CBD5E1" },
      { name: "Royal Blue", hex: "#1D4ED8" }
    ],
    sizes: ["One Size"],
    
    description:
      "The QuietFlow Pro is designed for users who want immersive audio and long wear comfort. The balanced sound profile, adaptive ANC, and premium materials make it a reliable everyday headset for commuting, meetings, and entertainment.",
    
    warranty: "Includes a 2-year manufacturer warranty and 30-day hassle-free return policy if the item is unused and in original condition.",
    bundle: [
      {
        title: "Elite Headphones Stand",
        price: "$299.00",
        image: "https://images.unsplash.com/photo-1518441902117-f0a1b2f63f1b?auto=format&fit=crop&w=400&q=80"
      },
      {
        title: "Premium Hard Case",
        price: "$29.99",
        image: "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&w=400&q=80"
      },
      {
        title: "Walnut Desk Stand",
        price: "$45.00",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80"
      }
    ],
    reviewsData: [
      {
        author: "James D.",
        label: "Verified Buyer",
        date: "2 days ago",
        rating: 5,
        title: "Incredible sound stage!",
        excerpt: "The noise cancellation is on par with the biggest brands in the market. Comfort is amazing for long flights.",
        verified: true
      },
      {
        author: "Maria S.",
        label: "Verified Buyer",
        date: "1 week ago",
        rating: 5,
        title: "Build quality is superb",
        excerpt: "The brushed metal feels very premium. It doesn't feel like cheap plastic at all.",
        verified: true
      }
    ]
  },
  {
    id: 3,
    title: "ThermoSmart Hub V3",
    brand: "ThermoSmart",
    price: 145.5,
    rating: 4.7,
    reviews: 842,
    inStock: true,
    category: "Home",
    subcategory: "Automation",
    seller: "SmartHome Direct",
    sellerRating: "96% Positive Feedback (18k sales)",
    sku: "VEN-8812-SM",
    status: "PENDING",
    badge: { text: "NEW ARRIVAL", tone: "blue" },
    images: [
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1491921120787-8f5d1c9d0a8f?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1000&q=80"
    ],
    colors: [
      { name: "Stone", hex: "#334155" },
      { name: "Mist", hex: "#CBD5E1" },
      { name: "Cobalt", hex: "#1D4ED8" }
    ],
    sizes: ["One Size"],
    
    description:
      "The ThermoSmart Hub V3 gives sellers a compact, reliable smart-home control center. It is built for stable connectivity, simple pairing, and practical automation scenarios.",
    
    warranty: "Includes a 1-year manufacturer warranty and a 30-day return policy for unused items.",
    bundle: [
      {
        title: "Smart Sensor Pack",
        price: "$49.00",
        image: "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=400&q=80"
      },
      {
        title: "Wall Mount Kit",
        price: "$19.99",
        image: "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?auto=format&fit=crop&w=400&q=80"
      },
      {
        title: "Premium Cable Set",
        price: "$25.00",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80"
      }
    ],
    reviewsData: [
      {
        author: "James D.",
        label: "Verified Buyer",
        date: "3 days ago",
        rating: 5,
        title: "Solid automation hub",
        excerpt: "Pairing was quick and the app control is stable. Great value for connected home setups.",
        verified: true
      },
      {
        author: "Maria S.",
        label: "Verified Buyer",
        date: "1 week ago",
        rating: 4,
        title: "Very polished product",
        excerpt: "The build feels premium and it integrates well with my existing smart devices.",
        verified: true
      }
    ]
  }
];

export function getAdminProductById(id: number | string) {
  return ADMIN_PRODUCTS.find((product) => String(product.id) === String(id));
}
