import { Footer } from '@/components';
import './globals.css';
import type { Metadata } from 'next';
import { League_Spartan } from 'next/font/google';

const inter = League_Spartan({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dine',
  description: 'Dine restaurant',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
