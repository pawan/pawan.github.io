//import Link from 'next/link'
import type { ReactNode } from 'react';
import Header from '@/components/Header';
import Footer from '../components/Footer';
import './globals.css'; // Import global styles if you have them
import { Metadata } from 'next';
import { Inter, Roboto_Mono} from 'next/font/google'
 
export const metadata: Metadata = {
  title: 'Pawan Parmar',
  description: 'A personal website showcasing my work and projects',
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
            <main className="min-h-[60vh] sm:min-h-[70vh] md:min-h-[75vh] lg:min-h-[80vh] py-8 sm:py-12">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                {children}
              </div>
            </main>
            <Footer />
          </body>
        </html>
      );
    }