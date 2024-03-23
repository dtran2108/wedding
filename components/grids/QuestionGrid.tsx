'use client'

import { SECTION_STYLE, titleFont } from '@/const'
import { cn } from '@/lib/utils'
import Image from 'next/image'

export default function QuestionGrid() {
  return (
    <div
      className={cn(
        SECTION_STYLE,
        'bg-blue text-white p-4 relative overflow-hidden'
      )}
    >
      <Image
        className='absolute -top-6 right-1'
        src='/images/decoration/multi-ellipse-down.svg'
        width={100}
        height={100}
        alt='decoration'
      />
      <h1 className={cn(titleFont.className, 'text-2xl text-white')}>
        Any Question
      </h1>
      <p className='my-2'>Lorem ipsum dolor sit amet consectetur ?</p>
      <p className='my-2'>
        Molestie vel ut libero in eu amet nibh sollicitudin ?
      </p>
      <p>Volutpat vulputate viverra placerat egestas ?</p>
    </div>
  )
}
