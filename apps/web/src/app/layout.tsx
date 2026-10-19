import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'OudGuide — Worldwide Oud & Fragrance Knowledge Portal',
  description: 'OudGuide is a worldwide oud and fragrance knowledge portal, business directory and supplier-matching service.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://oudguide.com'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
