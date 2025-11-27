import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Providers } from '@/components/Providers'

export const metadata: Metadata = {
  title: 'SHOP.CO - Find Clothes That Matches Your Style',
  description: 'Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.',
  keywords: ['fashion', 'clothing', 'ecommerce', 'shopping', 'shop', 'clothes', 'style'],
  authors: [{ name: 'SHOP.SAKU' }],
  icons: {
    icon: '/icon',
    apple: '/apple-icon',
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'SHOP.CO - Find Clothes That Matches Your Style',
    description: 'Browse through our diverse range of meticulously crafted garments',
    url: 'https://e-commerce-website-only-next-js-niv.vercel.app',
    siteName: 'SHOP.CO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SHOP.CO - Find Clothes That Matches Your Style',
    description: 'Browse through our diverse range of meticulously crafted garments',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
