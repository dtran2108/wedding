'use client'

import {
  DEFAULT_BOX_SHADOW,
  SECTION_STYLE,
  scrollToHash,
  titleFont,
} from '@/const'
import { cn } from '@/lib/utils'
import Image from 'next/image'

export default function QuoteGrid() {
  return (
    <div
      onClick={() => scrollToHash('our-story')}
      className={cn(
        SECTION_STYLE,
        'flex bg-yellow text-white flex-col justify-center items-center p-8 cursor-pointer'
      )}
    >
      <Image
        src='/images/decoration/quote-mark.svg'
        width={30}
        height={30}
        alt='quote mark'
      />
      <p className='text-center'>
        Anh ơi đừng buồn tình yêu như một dặm đường
        <br /> Đến lúc ta mỏi rồi thì đành nghỉ chân
      </p>
    </div>
  )
}
