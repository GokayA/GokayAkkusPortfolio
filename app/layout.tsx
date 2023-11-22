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
    <html lang="en" className="h-full ">
      <body className={`${font.className} antialiased h-full relative`}>
        <Header />
        <main className="relative flex flex-col min-h-screen">
          <div className="flex-grow flex-1">{children}</div>
        </main>
        <Analytics />
      </body>
    </html>
  );
}
