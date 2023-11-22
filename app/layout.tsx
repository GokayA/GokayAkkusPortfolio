import Header from '@/components/Header';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';

const font = Open_Sans({ weight: '300', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GokayAkkus',
  description: 'GokayAkkus Portfolio Site',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="antialiased">
      <body className={font.className}>
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
