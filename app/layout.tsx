import type { Metadata } from 'next'
import './globals.css'
import { contentFont } from '@/const'

export const metadata: Metadata = {
  title: 'Mai & Tuấn',
  description: 'Mai & Tuấn',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={contentFont.className}>
        <main>{children}</main>
      </body>
    </html>
  )
}
