import { Events, Featured, Footer, Hero, Menu, Ready } from '@/components';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Featured />
      <Menu />
      <Events />
      <Ready />
    </main>
  );
}
