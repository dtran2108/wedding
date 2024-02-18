import type { Metadata } from 'next'
import { Playfair } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar'
import { cn } from '@/lib/utils'

const playFair = Playfair({ subsets: ['latin'], weight: '400' })

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
      <body className={cn(playFair.className, 'bg-white')}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
