'use client'

import { SECTION_STYLE } from '@/const'
import { cn } from '@/lib/utils'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel'
import { useEffect, useState } from 'react'

export default function GalleryGrid() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div className={cn(SECTION_STYLE, 'bg-orange p-4 flex flex-col space-y-2')}>
      <Carousel setApi={setApi} className='w-full h-full flex-1'>
        <CarouselContent className=''>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className='w-full h-[200px] rounded-lg bg-white'></div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className='py-2 flex items-center justify-center space-x-1'>
        {Array.from({ length: count }).map((_, index) => (
          <span
            onClick={() => api?.scrollTo(index)}
            className={cn(
              current == index + 1 ? 'bg-[#3E3232]' : 'bg-white',
              'w-[8px] h-[8px] rounded-full cursor-pointer'
            )}
          ></span>
        ))}
      </div>
    </div>
  )
}
