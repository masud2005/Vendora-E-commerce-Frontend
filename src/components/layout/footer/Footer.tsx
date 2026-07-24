import Link from 'next/link';
import { MapPin, Mail } from 'lucide-react';

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
);

const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
);

export default function Footer() {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gray-200">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-16">

          {/* Column 1: Brand & Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold text-brand-primary-600 tracking-tight">Vendora</span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Leading multi-vendor marketplace connecting authentic brands with discerning shoppers globally. Excellence in e-commerce since 2010.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 rounded-full bg-brand-primary-50 flex items-center justify-center text-brand-primary-600 hover:bg-brand-primary-600 hover:text-white transition-colors">
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-primary-50 flex items-center justify-center text-brand-primary-600 hover:bg-brand-primary-600 hover:text-white transition-colors">
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-primary-50 flex items-center justify-center text-brand-primary-600 hover:bg-brand-primary-600 hover:text-white transition-colors">
                <GithubIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Customer Service */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-6 tracking-wide uppercase text-sm">Customer Service</h3>
            <ul className="space-y-4">
              <li><Link href="#" className="text-gray-500 hover:text-brand-primary-600 text-sm transition-colors">FAQ / Help Center</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-brand-primary-600 text-sm transition-colors">Track Order</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-brand-primary-600 text-sm transition-colors">Returns & Refunds</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-brand-primary-600 text-sm transition-colors">Shipping Policy</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-brand-primary-600 text-sm transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Column 3: Popular Categories */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-6 tracking-wide uppercase text-sm">Popular Categories</h3>
            <ul className="space-y-4">
              <li><Link href="#" className="text-gray-500 hover:text-brand-primary-600 text-sm transition-colors">Electronics</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-brand-primary-600 text-sm transition-colors">Fashion & Apparel</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-brand-primary-600 text-sm transition-colors">Home Appliances</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-brand-primary-600 text-sm transition-colors">Sports & Outdoor</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-brand-primary-600 text-sm transition-colors">Beauty & Personal Care</Link></li>
            </ul>
          </div>

          {/* Column 4: My Account */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-6 tracking-wide uppercase text-sm">My Account</h3>
            <ul className="space-y-4">
              <li><Link href="#" className="text-gray-500 hover:text-brand-primary-600 text-sm transition-colors">Login / Register</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-brand-primary-600 text-sm transition-colors">My Profile</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-brand-primary-600 text-sm transition-colors">Wishlist</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-brand-primary-600 text-sm transition-colors">Order History</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-brand-primary-600 text-sm transition-colors">Reward Points</Link></li>
            </ul>
          </div>

          {/* Column 5: Contact Us & Payments */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-6 tracking-wide uppercase text-sm">Contact Us</h3>

            <div className="flex items-start space-x-3 mb-4">
              <MapPin className="w-5 h-5 text-brand-primary-600 shrink-0 mt-0.5" />
              <span className="text-gray-500 text-sm leading-relaxed">
                123 Commerce Avenue, Suite 500<br />Digital District, NY 10001
              </span>
            </div>

            <div className="flex items-center space-x-3 mb-8">
              <Mail className="w-5 h-5 text-brand-primary-600 shrink-0" />
              <a href="mailto:support@vendora.com" className="text-gray-500 text-sm hover:text-brand-primary-600 transition-colors">
                support@vendora.com
              </a>
            </div>

            <div>
              <p className="text-gray-900 font-medium text-sm mb-4">Accepting Payments</p>
              <div className="flex items-center space-x-2">
                {/* SSLCommerz Mock Logo */}
                <div className="h-8 px-2 flex items-center justify-center bg-gray-50 border border-gray-200 rounded text-[10px] font-bold text-blue-700 tracking-tighter">
                  SSLCOMMERZ
                </div>
                {/* Stripe Mock Logo */}
                <div className="h-8 px-3 flex items-center justify-center bg-gray-50 border border-gray-200 rounded text-xs font-bold text-[#635BFF] tracking-tight">
                  stripe
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-brand-primary-50 py-6 border-t border-brand-primary-100">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-600 text-xs font-medium">
            © {new Date().getFullYear()} Vendora, All Rights Reserved.
          </p>
          <div className="flex space-x-6 text-xs font-medium">
            <Link href="#" className="text-gray-600 hover:text-brand-primary-600 transition-colors">Sitemap</Link>
            <Link href="#" className="text-gray-600 hover:text-brand-primary-600 transition-colors">Terms of Use</Link>
            <Link href="#" className="text-gray-600 hover:text-brand-primary-600 transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-gray-600 hover:text-brand-primary-600 transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
