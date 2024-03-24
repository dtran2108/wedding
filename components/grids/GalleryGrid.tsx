'use client'

import { SECTION_STYLE, getMotionProps, scrollToHash } from '@/const'
import { cn } from '@/lib/utils'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

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

    setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext()
      } else {
        api.scrollTo(0)
      }
    }, 2000)
  }, [api])

  return (
    <motion.div
      onClick={() => scrollToHash('gallery')}
      className={cn(
        SECTION_STYLE,
        'bg-orange p-2 lg:p-4 flex flex-col space-y-2 cursor-pointer'
      )}
      {...getMotionProps('#3D1F11')}
    >
      <Carousel setApi={setApi} className='w-full h-full flex-1'>
        <CarouselContent className='w-full'>
          {Array.from({ length: 3 }).map((_, index) => (
            <CarouselItem key={index}>
              <div
                className='relative left-2 w-full h-[125px] lg:h-[calc(100dvh/4.7)] rounded-lg bg-white'
                style={{
                  backgroundImage: `url('/images/gallery-${index + 1}.jpeg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className='py-2 flex items-center justify-center space-x-1'>
        {Array.from({ length: count }).map((_, index) => (
          <span
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={cn(
              current == index + 1 ? 'bg-[#3E3232]' : 'bg-white',
              'w-[8px] h-[8px] rounded-full cursor-pointer'
            )}
          ></span>
        ))}
      </div>
    </motion.div>
  )
}
