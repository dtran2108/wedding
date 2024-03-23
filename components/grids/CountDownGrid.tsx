'use client'

import { SECTION_STYLE, titleFont } from '@/const'
import { cn } from '@/lib/utils'
import Image from 'next/image'

export default function CountDownGrid() {
  return (
    <div
      className={cn(
        SECTION_STYLE,
        'bg-green text-white p-4 relative overflow-hidden flex flex-col items-center justify-center'
      )}
    >
      <Image
        className='absolute top-0 left-0'
        src='/images/decoration/count-down-left.svg'
        width={20}
        height={100}
        alt='decoration'
      />
      <p className='text-center'>Get ready with us</p>
      <h1 className={cn(titleFont.className, 'text-2xl text-center')}>
        72:01:83
      </h1>
      <Image
        className='absolute top-0 right-0'
        src='/images/decoration/count-down-right.svg'
        width={20}
        height={100}
        alt='decoration'
      />
    </div>
  )
}
