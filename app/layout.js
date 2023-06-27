import './globals.css'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import Header from '@/components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Light-it Challenge',
  description: 'Code challenge for Light-it',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        </body>
    </html>
  )
}
