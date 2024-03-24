'use client'

import { SECTION_STYLE, getMotionProps, scrollToHash } from '@/const'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function QuoteGrid() {
  return (
    <motion.div
      onClick={() => scrollToHash('our-story')}
      className={cn(
        SECTION_STYLE,
        'flex bg-yellow text-white flex-col justify-center items-center p-2 lg:p-8 cursor-pointer'
      )}
      {...getMotionProps('#422802')}
    >
      <Image
        className='w-4 h-4 lg:w-8 lg:h-8'
        src='/images/decoration/quote-mark.svg'
        width={30}
        height={30}
        alt='quote mark'
      />
      <p className='text-center text-sm lg:text-md'>
        Anh ơi đừng buồn tình yêu như một dặm đường
        <br /> Đến lúc ta mỏi rồi thì đành nghỉ chân
      </p>
    </motion.div>
  )
}
