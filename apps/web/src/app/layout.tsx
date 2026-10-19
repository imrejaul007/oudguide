import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'OudGuide — Worldwide Oud & Fragrance Knowledge Portal',
  description: 'OudGuide is a worldwide oud and fragrance knowledge portal, business directory and supplier-matching service.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://oudguide.com'),
  icons: {
    icon: [
      { url: '/favicon.png', sizes: 'any', type: 'image/png' },
      { url: '/icon.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
