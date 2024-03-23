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
        Câu hỏi thường gặp
      </h1>
      <p className='my-2'>Địa điểm tổ chức lễ cưới ở đâu ?</p>
      <p className='my-2'>Dresscode là gì ?</p>
      <p>Thực đơn tiệc cưới gồm những món nào ?</p>
    </div>
  )
}
