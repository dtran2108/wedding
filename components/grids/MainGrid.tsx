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
        backgroundImage: "url('/images/laura-keith.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        boxShadow: DEFAULT_BOX_SHADOW,
      }}
    >
      <div className='flex items-center justify-end'>
        <span className='border-[4px] border-white border-double rounded-[50%] p-6'>
          <h2 className={'text-white text-xl text-center'}>
            Mai & <br /> Tuấn
          </h2>
        </span>
      </div>
      <h1 className={cn(titleFont.className, 'uppercase text-white text-3xl')}>
        Đối với chúng tôi, <br />
        nhà không phải là một nơi
      </h1>
    </div>
  )
}
