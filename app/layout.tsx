import type { Metadata } from 'next'
import { Oranienbaum } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar'

const oranienbaum = Oranienbaum({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'Wedding',
  description: 'wedding invitation',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={oranienbaum.className}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
