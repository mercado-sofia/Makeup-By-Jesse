import './globals.css'
import Navbar from '@/components/NavTop'
import Footer from '@/components/Footer'
import ScrollToTopButton from '@/components/ScrollToTopButton'

import { Oswald, Roboto } from 'next/font/google'

const oswald = Oswald({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Makeup by Jesse',
  description: 'Bringing out your natural beauty',
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <ScrollToTopButton />
      </body>
    </html>
  )
}