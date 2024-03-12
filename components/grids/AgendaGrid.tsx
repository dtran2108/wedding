'use client'

import {
  DEFAULT_BOX_SHADOW,
  SECTION_STYLE,
  titleFont,
  scrollToHash,
} from '@/const'
import { cn } from '@/lib/utils'

export default function AgendaGrid() {
  return (
    <div
      onClick={() => scrollToHash('agenda')}
      className={cn(
        SECTION_STYLE,
        'bg-primary text-primary-foreground flex flex-col p-2 py-4 md:p-8 items-center justify-center space-y-6 cursor-pointer'
      )}
      style={{ boxShadow: DEFAULT_BOX_SHADOW }}
    >
      <h1 className={cn(titleFont.className, 'text-3xl')}>Lịch trình</h1>
      <div className='flex items-center justify-evenly w-full relative'>
        {Array.from({ length: 3 }).map((item, i) => (
          <div
            key={i}
            className='relative rounded-full border border-white p-1 z-20 bg-primary'
          >
            <div
              className='w-[72px] md:w-[80px] aspect-square rounded-full'
              style={{
                backgroundImage: `url('/images/agenda-${i + 1}.jpeg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
          </div>
        ))}
        <div className='absolute top-[50%] z-10 h-[1px] w-full bg-white'></div>
      </div>
    </div>
  )
}
