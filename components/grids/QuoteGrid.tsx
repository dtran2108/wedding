'use client'

import {
  DEFAULT_BOX_SHADOW,
  SECTION_STYLE,
  scrollToHash,
  titleFont,
} from '@/const'
import { cn } from '@/lib/utils'

export default function QuoteGrid() {
  return (
    <div
      onClick={() => scrollToHash('our-story')}
      className={cn(
        SECTION_STYLE,
        'flex bg-white text-primary flex-col items-center p-6 space-y-4 cursor-pointer'
      )}
      style={{ boxShadow: DEFAULT_BOX_SHADOW }}
    >
      <h1
        className={cn(
          'text-lg md:text-xl uppercase text-center',
          titleFont.className
        )}
      >
        Câu nói yêu thích
      </h1>
      <p className='text-center text-sm md:tex-md'>
        Trong tim em, chỉ có một ngôi nhà, một nơi mà anh luôn được chào đón,
        một nơi mà tình yêu chúng ta chắp cánh. Hôm nay, chúng ta hợp thành một,
        để xây dựng tổ ấm này bằng tất cả những yêu thương và hy vọng của chúng
        ta.
      </p>
      <div className='mt-8 flex flex-col items-center justify-center flex-1'>
        <div className='flex items-center space-x-2'>
          <div className='bg-primary h-[1px] w-[50px] md:w-[70px]'></div>
          <div className='h-[12px] md:h-[16px] aspect-square rounded-full border border-primary'></div>
          <div className='bg-primary h-[1px] w-[50px] md:w-[70px]'></div>
        </div>
        <div className='bg-primary h-[1px] w-[200px] md:w-[300px] mt-2'></div>
      </div>
    </div>
  )
}
