//import Link from 'next/link'
import type { ReactNode } from 'react';
import Header from '@/components/Header';
import Footer from '../components/Footer';
import './globals.css'; // Import global styles if you have them
import { Metadata } from 'next';
import { Inter, Roboto_Mono} from 'next/font/google'
 
export const metadata: Metadata = {
  title: 'Pawan Parmar - Next.js Course Dashboard',
  description: 'A dashboard built with Next.js and Tailwind CSS',
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
})
 
export default function RootLayout({ children }: { children: ReactNode }) {
      return (
        <html lang="en" className={roboto_mono.className}>
          <body>
            <Header />
            <main className='h-[80vh]'>{children}</main>
            <Footer />
          </body>
        </html>
      );
    }