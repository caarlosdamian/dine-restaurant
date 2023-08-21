import { Events, Featured, Footer, Hero, Menu } from '@/components';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Featured />
      <Menu />
      <Events />
    </main>
  );
}
