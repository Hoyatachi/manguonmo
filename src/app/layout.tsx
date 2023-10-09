import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from './container/Header/Header';
import Footer from './container/Footer/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <Header />
      <main>{children}</main>
      <Footer />
    </html>
  );
}
