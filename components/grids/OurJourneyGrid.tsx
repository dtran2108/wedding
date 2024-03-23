'use client'

import { SECTION_STYLE, titleFont, scrollToHash } from '@/const'
import { cn } from '@/lib/utils'

export default function OurJourneyGrid() {
  return (
    <div
      onClick={() => scrollToHash('our-story')}
      className={cn(
        SECTION_STYLE,
        'bg-red text-white p-6 cursor-pointer flex flex-col'
      )}
    >
      <h1 className={cn(titleFont.className, 'text-xl md:text-3xl')}>
        Hành trình
      </h1>
      <div className='flex flex-1 flex-col justify-center space-y-8 relative'>
        <div className='flex items-center space-x-8'>
          <span className='w-[20px] aspect-square bg-[#D37676] rotate-45'></span>
          <p>Thảm họa cà phê</p>
        </div>
        <div className='flex items-center space-x-8'>
          <span className='w-[20px] aspect-square bg-[#D37676] rotate-45'></span>
          <p>Mối quan hệ hỗn loạn</p>
        </div>
        <div className='flex items-center space-x-8'>
          <span className='w-[20px] aspect-square bg-[#D37676] rotate-45'></span>
          <p>Tối hậu thư của mèo</p>
        </div>
        <div className='w-[1px] h-full bg-[#D37676] left-[9.5px] absolute'></div>
      </div>
    </div>
  )
}
