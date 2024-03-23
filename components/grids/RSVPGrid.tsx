'use client'

import { SECTION_STYLE, titleFont } from '@/const'
import { cn } from '@/lib/utils'
import Image from 'next/image'

export default function RSVPGrid() {
  return (
    <div
      className={cn(SECTION_STYLE, 'bg-yellow p-4 relative overflow-hidden')}
    >
      <h1 className={cn(titleFont.className, 'text-lg text-right text-white')}>
        Lorem ipsum
        <br /> dolor sit amet consectetur. Sed ornare nisl egestas nulla
        hendrerit nisl varius justo convallis.
      </h1>
      <Image
        className='absolute -bottom-4 left-1'
        src='/images/decoration/multi-ellipse.svg'
        width={100}
        height={100}
        alt='decoration'
      />
    </div>
  )
}
