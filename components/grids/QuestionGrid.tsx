'use client'

import { SECTION_STYLE, getMotionProps, titleFont } from '@/const'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function QuestionGrid() {
  return (
    <motion.div
      className={cn(
        SECTION_STYLE,
        'bg-blue text-white p-4 py-2 relative overflow-hidden flex flex-col space-y-2 cursor-pointer'
      )}
      {...getMotionProps('#040A1E')}
    >
      <Image
        className='absolute -top-6 right-1'
        src='/images/decoration/multi-ellipse-down.svg'
        width={100}
        height={100}
        alt='decoration'
      />
      <h1 className={cn(titleFont.className, 'text-lg lg:text-2xl text-white')}>
        Câu hỏi thường gặp
      </h1>
      <div className='flex-1 flex flex-col justify-center space-y-1 text-sm lg:text-md'>
        <p>Địa điểm tổ chức lễ cưới ở đâu ?</p>
        <p>Dresscode là gì ?</p>
        <p>Thực đơn tiệc cưới gồm những món nào ?</p>
      </div>
    </motion.div>
  )
}
