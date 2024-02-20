'use client'

import Link from 'next/link'

export default function NavBar() {
  return (
    <nav className='container flex items-center justify-evenly bg-black/70 py-3 sticky top-0 text-[#b2b2b2] z-30 text-sm'>
      <Link href='#our-story'>OUR STORY</Link>
      <Link href='#gallery'>GALLERY</Link>
      <Link href='#bridal-party'>BRIDAL PARTY</Link>
      <Link href='#festivities'>FESTIVITIES</Link>
      <Link href='#registry'>TRAVEL</Link>
      <Link href='#to-do'>TO DO/TO EAT</Link>
      <Link href='#add-to-our-story'>ADD TO OUR STORY</Link>
    </nav>
  )
}
