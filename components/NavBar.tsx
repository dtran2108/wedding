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
    <nav className='flex items-center justify-evenly bg-black/70 py-3 sticky top-0 text-[#b2b2b2] z-30 text-sm'>
      <motion.span
        onClick={() => scrollToHash('our-story')}
        whileHover={{ scale: 1.1 }}
        className='cursor-pointer'
      >
        OUR STORY
      </motion.span>
      <motion.span
        onClick={() => scrollToHash('gallery')}
        whileHover={{ scale: 1.1 }}
        className='cursor-pointer'
      >
        GALLERY
      </motion.span>
      <motion.span
        onClick={() => scrollToHash('bridal-party')}
        whileHover={{ scale: 1.1 }}
        className='cursor-pointer'
      >
        BRIDAL PARTY
      </motion.span>
      <motion.span
        onClick={() => scrollToHash('festivities')}
        whileHover={{ scale: 1.1 }}
        className='cursor-pointer'
      >
        FESTIVITIES
      </motion.span>
      <motion.span
        onClick={() => scrollToHash('registry')}
        whileHover={{ scale: 1.1 }}
        className='cursor-pointer'
      >
        TRAVEL
      </motion.span>
      <motion.span
        onClick={() => scrollToHash('to-do')}
        whileHover={{ scale: 1.1 }}
        className='cursor-pointer'
      >
        TO DO/TO EAT
      </motion.span>
      <motion.span
        onClick={() => scrollToHash('add-to-our-story')}
        whileHover={{ scale: 1.1 }}
        className='cursor-pointer'
      >
        ADD TO OUR STORY
      </motion.span>
    </nav>
  )
}
