'use client'

import { SECTION_STYLE, titleFont, scrollToHash, getMotionProps } from '@/const'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

export default function MainGrid() {
  return (
    <motion.div
      onClick={() => scrollToHash('our-story')}
      className={cn(
        SECTION_STYLE,
        'cursor-pointer flex flex-col items-between justify-between p-8'
      )}
      style={{
        backgroundImage: "url('/images/man-kissing-woman.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      {...getMotionProps('#3D1F11')}
    >
      <div className='flex items-center justify-end'>
        <h2
          className={cn(titleFont.className, 'text-white text-3xl text-center')}
        >
          Thái Sơn
          <br /> Thùy An
        </h2>
      </div>
      <h1 className={cn(titleFont.className, 'uppercase text-white text-3xl')}>
        12
        <br />
        03
      </h1>
    </motion.div>
  )
}
