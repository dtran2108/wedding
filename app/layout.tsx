import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const lovelace = localFont({ src: '../components/fonts/Lovelace/Lovelace-Text-Regular.otf' })

export const metadata: Metadata = {
  title: 'Laura & Keith',
  description: 'Laura & Keith',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={lovelace.className}>
        <main>{children}</main>
      </body>
    </html>
  )
}
