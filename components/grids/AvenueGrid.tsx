'use client'

import {
  DEFAULT_BOX_SHADOW,
  SECTION_STYLE,
  titleFont,
  scrollToHash,
} from '@/const'
import { cn } from '@/lib/utils'
import Image from 'next/image'

export default function AvenueGrid() {
  return (
    <div
      onClick={() => scrollToHash('avenue')}
      className={cn(
        SECTION_STYLE,
        'flex bg-primary text-primary-foreground relative flex-col p-6 justify-between space-y-8 overflow-hidden cursor-pointer'
      )}
      style={{ boxShadow: DEFAULT_BOX_SHADOW }}
    >
      <h1 className={cn(titleFont.className, 'text-lg md:text-xl')}>
        “Nếu tôi biết tình yêu là gì, là nhờ có em”
      </h1>
      <h2 className='text-[12px] md:text-md max-w-[150px] md:max-w-full'>
        Khách sạn Mai House Saigon. <br />
        1-3-5, Ngô Thời Nhiệm, Võ Thị Sáu, Quận 3 <br />
        Thành phố Hồ Chí Minh, Việt Nam
      </h2>
      <Image
        className='absolute -right-4 -top-8 md:-top-6 md:right-0'
        alt='cover'
        src={'/images/quote-img.svg'}
        width={100}
        height={200}
      />
    </div>
  )
}
