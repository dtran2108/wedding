import type { Metadata } from 'next'
import { Jomolhari } from 'next/font/google'
import './globals.css'

const jomolhari = Jomolhari({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'Modern Minimalism',
  description: 'Modern Minimalism',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={jomolhari.className}>
        <main>{children}</main>
      </body>
    </html>
  )
}
