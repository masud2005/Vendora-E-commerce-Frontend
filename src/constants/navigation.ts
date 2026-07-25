export const TOP_BAR_LINKS = [
  { label: 'Track Your Order', href: '/track-order' },
  { label: 'Become a Seller', href: '/seller/register' },
];

export const MAIN_NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Flash Sale', href: '/flash-sale', icon: 'zap' },
  { label: 'New Arrivals', href: '/new-arrivals' },
  { label: 'Best Sellers', href: '/best-sellers' },
  { label: 'Brands', href: '/brands' },
  { label: 'Shops', href: '/shops' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '/contact' },
];

export const MEGA_MENU_CATEGORIES = [
  {
    title: 'Electronics',
    links: [
      { label: 'Mobile & Tablets', href: '/shops?category=Smartphones', value: 'Smartphones' },
      { label: 'Laptops & Computers', href: '/shops?category=Laptops', value: 'Laptops' },
      { label: 'Audio & Gadgets', href: '/shops?category=Audio', value: 'Audio' },
    ],
  },
  {
    title: 'Fashion',
    links: [
      { label: "Men's Apparel", href: '/shops?category=Mens', value: 'Mens' },
      { label: "Women's Fashion", href: '/shops?category=Womens', value: 'Womens' },
    ],
  },
  {
    title: 'Home & Kitchen',
    links: [
      { label: 'Home & Living', href: '/shops?category=Home', value: 'Home' },
    ],
  },
];
