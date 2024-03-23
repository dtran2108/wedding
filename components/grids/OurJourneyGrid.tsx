'use client'

import { SECTION_STYLE, titleFont, scrollToHash } from '@/const'
import { cn } from '@/lib/utils'

export default function OurJourneyGrid() {
  return (
    <div
      onClick={() => scrollToHash('our-story')}
      className={cn(SECTION_STYLE, 'bg-red text-white p-6 cursor-pointer')}
    >
      <h1 className={cn(titleFont.className, 'text-xl md:text-3xl mb-8')}>
        Hành trình
      </h1>
      <div className='flex flex-col justify-center space-y-4'>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Molestie vel ut libero in eu amet nibh sollicitudin.</p>
        <p>
          Volutpat vulputate viverra placerat egestas scelerisque eget
          vestibulum.
        </p>
      </div>
    </div>
  )
}
