'use client'

import {
  DEFAULT_BOX_SHADOW,
  SECTION_STYLE,
  dreamAvenue,
  scrollToHash,
} from '@/const'
import { cn } from '@/lib/utils'

export default function MainGrid() {
  return (
    <div
      onClick={() => scrollToHash('gallery')}
      className={cn(
        SECTION_STYLE,
        'cursor-pointer flex flex-col items-between justify-between p-8'
      )}
      style={{
        backgroundImage: "url('/images/laura-keith.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        boxShadow: DEFAULT_BOX_SHADOW,
      }}
    >
      <div className='flex items-center justify-end'>
        <span className='border border-white border-double rounded-[50%] p-6'>
          <h2 className={'text-white text-xl text-center'}>
            Laura & <br /> Keith
          </h2>
        </span>
      </div>
      <h1
        className={(cn(dreamAvenue.className), 'uppercase text-white text-3xl')}
      >
        For the two of us, <br />
        home isn&apos;t a place.
      </h1>
    </div>
  )
}
