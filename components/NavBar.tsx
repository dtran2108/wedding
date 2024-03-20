'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function NavBar() {
  const scrollToHash = function (element_id: string) {
    const element = document.getElementById(element_id)
    element?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    })
  }

  return (
    <nav className='flex px-8 items-center space-x-16 justify-start md:justify-center bg-black/70 py-3 sticky top-0 text-[#b2b2b2] z-30 text-sm overflow-x-scroll w-full no-scrollbar'>
      <motion.span
        onClick={() => scrollToHash('our-story')}
        whileHover={{ scale: 1.1 }}
        className='cursor-pointer whitespace-nowrap'
      >
        OUR STORY
      </motion.span>
      <motion.span
        onClick={() => scrollToHash('gallery')}
        whileHover={{ scale: 1.1 }}
        className='cursor-pointer whitespace-nowrap'
      >
        GALLERY
      </motion.span>
      <motion.span
        onClick={() => scrollToHash('festivities')}
        whileHover={{ scale: 1.1 }}
        className='cursor-pointer whitespace-nowrap'
      >
        RECEPTION
      </motion.span>
      <motion.span
        onClick={() => scrollToHash('add-to-our-story')}
        whileHover={{ scale: 1.1 }}
        className='cursor-pointer whitespace-nowrap'
      >
        THANK YOU
      </motion.span>
    </nav>
  )
}
