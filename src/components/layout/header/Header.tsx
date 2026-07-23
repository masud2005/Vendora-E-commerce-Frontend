import TopBar from './TopBar';
import MiddleBar from './MiddleBar';
import BottomNav from './BottomNav';

export default function Header() {
  return (
    <header className="flex flex-col w-full relative z-50">
      <TopBar />
      <MiddleBar />
      <BottomNav />
    </header>
  );
}
