'use client'

import { DEFAULT_BOX_SHADOW, SECTION_STYLE, scrollToHash } from '@/const'
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
      <h1 className='text-lg md:text-xl uppercase text-center'>
        Your Sub-Header Goes Here
      </h1>
      <p className='text-center text-sm md:tex-md'>
        This is prime space! Use it to elaborate on your attention-grabbing
        section title. Explain what this section is about, share some details,
        and give just the right amount of information to get the audience
        hooked.
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
