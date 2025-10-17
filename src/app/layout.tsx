//import Link from 'next/link'
import Header from '@/components/Header';
import Footer from '../components/Footer';
import './globals.css'; // Import global styles if you have them
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Pawan Parmar - Next.js Course Dashboard',
  description: 'A dashboard built with Next.js and Tailwind CSS',
};
 
export default function RootLayout({ children }) {
      return (
        <html lang="en">
          <body>
            <Header />
            <main>{children}</main>
            <Footer />
          </body>
        </html>
      );
    }