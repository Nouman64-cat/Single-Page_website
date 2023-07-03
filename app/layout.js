import { Navbar, Footer } from '@/components'
import './globals.css'
import Head from 'next/head'

export const metadata = {
  title: 'Mehndi & Meee',
  description: 'Innovative and creative mehndi designs for all occasions.',
  image: '/flower-art.png',
  icon: '/flower-art.png'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
