import './globals.css';
import Script from 'next/script';
import { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import Home from './page';

export const metadata: Metadata = {
  metadataBase: new URL('https://clerk-next-app.vercel.app/'),
  title: 'Next.js Clerk Template',
  description: 'A simple and powerful Next.js template featuring authentication and user management powered by Clerk.',
  openGraph: { images: ['/og.png'] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <Home />
      </body>
    </html>
  );
}
