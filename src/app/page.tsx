import HeroSlider from '@/components/home/HeroSlider';
import ShopByCategory from '@/components/home/ShopByCategory';

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-transparent font-sans">
      <HeroSlider />
      <ShopByCategory />
    </div>
  );
}
