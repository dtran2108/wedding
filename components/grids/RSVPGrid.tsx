'use client'

import { SECTION_STYLE, getMotionProps, titleFont } from '@/const'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function RSVPGrid() {
  return (
    <motion.div
      className={cn(
        SECTION_STYLE,
        'bg-yellow p-4 relative overflow-hidden cursor-pointer'
      )}
      {...getMotionProps('#422802')}
    >
      <h1 className={cn(titleFont.className, 'text-sm lg:text-lg text-right text-white')}>
        RSVP
        <br />
        Vui lòng xác nhận tham dự trước
        <br /> Ngày 12 tháng 3<br />
        Rất mong đón tiếp quý vị.
      </h1>
      <Image
        className='absolute -bottom-4 left-1'
        src='/images/decoration/multi-ellipse.svg'
        width={100}
        height={100}
        alt='decoration'
      />
    </motion.div>
  )
}
