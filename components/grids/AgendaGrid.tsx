'use client'

import {
  SECTION_STYLE,
  titleFont,
  scrollToHash,
} from '@/const'
import { cn } from '@/lib/utils'

export default function AgendaGrid() {
  return (
    <div
      onClick={() => scrollToHash('agenda')}
      className={cn(SECTION_STYLE, 'bg-green-500 text-white p-4')}
    >
      <div className='flex items-center space-x-3'>
        <h1 className={cn(titleFont.className, 'text-3xl')}>Lịch trình</h1>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </div>
    </div>
  )
}
