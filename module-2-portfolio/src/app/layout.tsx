import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppFloatingButton from '@/components/ui/WhatsAppFloatingButton';

export const metadata: Metadata = {
  title: 'Offline to Online (O2O Digital) — #1 Local Business Growth Agency | Jaipur',
  description: 'Transform traditional brick-and-mortar storefronts into high-converting digital powerhouses. Sub-second Jamstack web applications, Google 3-Pack Maps domination, and direct WhatsApp sales pipelines with guaranteed ₹0 monthly hosting bills. Founded by Raja Singh Chauhan, Jaipur, Rajasthan.',
  keywords: [
    'Offline to Online',
    'O2O Digital Studio',
    'Raja Singh Chauhan',
    'Digital growth agency Jaipur',
    'Jamstack web development',
    'Local SEO Google Maps 3-Pack',
    'Doctor clinic website development',
    'Restaurant QR digital menu',
    'Tour and travels website development Jaipur'
  ],
  authors: [{ name: 'Raja Singh Chauhan', url: 'https://bhumikatourandtravels.world' }],
  openGraph: {
    title: 'Offline to Online (O2O Digital Studio) | Raja Singh Chauhan',
    description: 'Transform your offline business into a 24/7 digital growth engine with ₹0 monthly hosting fees.',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className="bg-[#090a12] text-slate-100 min-h-screen flex flex-col selection:bg-violet-600 selection:text-white antialiased">
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
