'use client'

import { SECTION_STYLE, titleFont, scrollToHash, getMotionProps } from '@/const'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

export default function OurJourneyGrid() {
  return (
    <motion.div
      onClick={() => scrollToHash('our-story')}
      className={cn(
        SECTION_STYLE,
        'bg-red text-white p-2 md:p-4 md:py-2 cursor-pointer flex flex-col overflow-hidden'
      )}
      {...getMotionProps('#351212')}
    >
      <h1 className={cn(titleFont.className, 'text-lg md:text-2xl')}>
        Hành trình
      </h1>
      <div className='flex flex-1 flex-col justify-evenly space-y-2 md:space-y-4 relative text-sm lg:text-md my-4'>
        <div className='flex items-center md:space-x-8 space-x-4'>
          <span className='w-[16px] aspect-square bg-[#D37676] rotate-45'></span>
          <p>Thảm họa cà phê</p>
        </div>
        <div className='flex items-center md:space-x-8 space-x-4'>
          <span className='w-[16px] aspect-square bg-[#D37676] rotate-45'></span>
          <p>Mối quan hệ hỗn loạn</p>
        </div>
        <div className='flex items-center md:space-x-8 space-x-4'>
          <span className='w-[16px] aspect-square bg-[#D37676] rotate-45'></span>
          <p>Tối hậu thư của mèo</p>
        </div>
        <div className='w-[1px] h-full bg-[#D37676] left-[7.5px] absolute'></div>
      </div>
    </motion.div>
  )
}
