import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppFloatingButton from '@/components/ui/WhatsAppFloatingButton';

export const metadata: Metadata = {
  title: 'Offline to Online (O2O Digital) — #1 Local Business Digital Growth Studio | Jaipur',
  description: 'Turn your offline business into a 24x7 customer magnet. Jamstack web design, Google 3-Pack Maps ranking, and automated WhatsApp leads at ₹0 monthly server costs. Founded by Raja Singh Chauhan, Jaipur, Rajasthan.',
  keywords: [
    'Offline to Online',
    'O2O Digital',
    'Raja Singh Chauhan',
    'Digital marketing agency Jaipur',
    'Website development Jaipur',
    'Local SEO Google Maps',
    'Tour and travels website development',
    'Doctor clinic website Jaipur',
    'Jamstack web design India'
  ],
  authors: [{ name: 'Raja Singh Chauhan', url: 'https://bhumikatourandtravels.world' }],
  openGraph: {
    title: 'Offline to Online (O2O Digital) | By Raja Singh Chauhan',
    description: 'Transform traditional offline Indian businesses into high-converting digital powerhouses at ₹0 monthly server cost.',
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
    <html lang="en" className="dark">
      <body className="bg-[#080c14] text-slate-100 min-h-screen flex flex-col selection:bg-indigo-500 selection:text-white antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
