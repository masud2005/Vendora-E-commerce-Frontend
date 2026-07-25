export const baseProducts = [
  { id: 1, title: "ProStream Wireless Noise Cancelling Headphones", brand: "Apple", price: 299.00, oldPrice: 399.00, rating: 4.8, reviews: 1200, inStock: true, category: "Audio", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=400", badge: { text: "-25% OFF", type: "discount" as const } },
  { id: 2, title: "Executive Series Genuine Leather Carry-all Case", brand: "Sony", price: 185.00, rating: 4.9, reviews: 452, inStock: false, category: "Mens", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=400", badge: { text: "NEW ARRIVAL", type: "new" as const } },
  { id: 3, title: 'UltraCurve 34" Panoramic Workspace Monitor', brand: "Samsung", price: 649.00, rating: 4.7, reviews: 890, inStock: true, category: "Laptops", image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=400" },
  { id: 4, title: "Precision Flow Mechanical Productivity Keyboard", brand: "Bose", price: 129.00, rating: 4.6, reviews: 125, inStock: true, category: "Laptops", image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&q=80&w=400" },
  { id: 5, title: "AirPods Pro (2nd Generation)", brand: "Apple", price: 249.00, rating: 4.9, reviews: 5000, inStock: true, category: "Audio", image: "https://images.unsplash.com/photo-1605464315542-bda3e2f4e605?auto=format&fit=crop&q=80&w=400" },
  { id: 6, title: "Galaxy Watch 6 Classic", brand: "Samsung", price: 399.00, rating: 4.5, reviews: 320, inStock: false, category: "Smartphones", image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&q=80&w=400" },
  { id: 7, title: "Sony WH-1000XM5 Wireless Headphones", brand: "Sony", price: 348.00, rating: 4.8, reviews: 890, inStock: true, category: "Audio", image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=400" },
  { id: 8, title: "Bose SoundLink Flex Bluetooth Portable Speaker", brand: "Bose", price: 149.00, rating: 4.7, reviews: 154, inStock: true, category: "Audio", image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&q=80&w=400" },
  { id: 9, title: "Dell XPS 15 OLED Laptop", brand: "Dell", price: 1899.00, rating: 4.7, reviews: 210, inStock: true, category: "Laptops", image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=400" },
  { id: 10, title: "Asus ROG Swift 27\" Gaming Monitor", brand: "Asus", price: 799.00, rating: 4.6, reviews: 340, inStock: true, category: "Laptops", image: "https://images.unsplash.com/photo-1542393545-10f5cde2c810?auto=format&fit=crop&q=80&w=400" },
  { id: 11, title: "iPhone 15 Pro Max 256GB", brand: "Apple", price: 1199.00, rating: 4.9, reviews: 3400, inStock: true, category: "Smartphones", image: "https://images.unsplash.com/photo-1695048133142-1a20a5bf616f?auto=format&fit=crop&q=80&w=400" },
  { id: 12, title: "Samsung Galaxy S24 Ultra", brand: "Samsung", price: 1299.00, rating: 4.8, reviews: 1800, inStock: true, category: "Smartphones", image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&q=80&w=400" }
];

export const generateProducts = () => {
  const products = [];
  for (let i = 0; i < 4; i++) {
    products.push(...baseProducts.map(p => ({
      ...p,
      id: p.id + (i * 100),
      price: p.price * (1 - (i * 0.05)),
      rating: p.rating - (i * 0.1)
    })));
  }
  return products;
};

export const MOCK_PRODUCTS = generateProducts();

export const SHOP_CATEGORY_MAP: Record<string, { parent: string, label: string }> = {
  "Laptops": { parent: "Electronics", label: "Laptops & Computers" },
  "Smartphones": { parent: "Electronics", label: "Mobile & Tablets" },
  "Audio": { parent: "Electronics", label: "Audio & Headphones" },
  "Mens": { parent: "Fashion", label: "Men's Clothing" },
  "Womens": { parent: "Fashion", label: "Women's Clothing" },
  "Home": { parent: "Home & Living", label: "Home & Living" },
};
