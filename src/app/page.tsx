import HeroSlider from '@/components/home/HeroSlider';
import ShopByCategory from '@/components/home/ShopByCategory';
import FlashSale from '@/components/home/FlashSale';
import TrendingProducts from '@/components/home/TrendingProducts';

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-transparent font-sans">
      <HeroSlider />
      <ShopByCategory />
      <FlashSale />
      <TrendingProducts />
    </div>
  );
}
