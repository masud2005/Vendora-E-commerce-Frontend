import HeroSlider from '@/components/home/HeroSlider';
import ShopByCategory from '@/components/home/ShopByCategory';
import FlashSale from '@/components/home/FlashSale';
import TrendingProducts from '@/components/home/TrendingProducts';
import BestSellingProducts from '@/components/home/BestSellingProducts';
import OfficialPartners from '@/components/home/OfficialPartners';
import NewArrivals from '@/components/home/NewArrivals';
import FeaturedSellers from '@/components/home/FeaturedSellers';
import PromoBanners from '@/components/home/PromoBanners';
import RecentlyViewed from '@/components/home/RecentlyViewed';

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-transparent font-sans">
      <HeroSlider />
      <ShopByCategory />
      <FlashSale />
      <TrendingProducts />
      <OfficialPartners />
      <NewArrivals />
      <BestSellingProducts />
      <FeaturedSellers />
      <PromoBanners />
      <RecentlyViewed />
    </div>
  );
}
