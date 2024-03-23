'use client'

import {
  DEFAULT_BOX_SHADOW,
  SECTION_STYLE,
  titleFont,
  scrollToHash,
} from '@/const'
import { cn } from '@/lib/utils'

export default function MainGrid() {
  return (
    <div
      onClick={() => scrollToHash('our-story')}
      className={cn(
        SECTION_STYLE,
        'cursor-pointer flex flex-col items-between justify-between p-8'
      )}
      style={{
        backgroundImage: "url('/images/man-kissing-woman.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='flex items-center justify-end'>
        <h2
          className={cn(titleFont.className, 'text-white text-3xl text-center')}
        >
          Thái Sơn
          <br /> Thùy An
        </h2>
      </div>
      <h1 className={cn(titleFont.className, 'uppercase text-white text-3xl')}>
        12
        <br />
        03
      </h1>
    </div>
  )
}
