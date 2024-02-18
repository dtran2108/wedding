'use client'

import gsap from 'gsap'
import { createElement, useRef } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export default function Gallery() {
  const preview = useRef<HTMLDivElement>(null)
  const previewContainer = useRef<HTMLDivElement>(null)

  async function handleImageClick(newImage: string) {
    await gsap.to('.preview', { duration: 1, left: '-100%' })
    const newImg = document.createElement('div')
    newImg.className = 'preview w-[500px] h-[600px] absolute right-[100%]'
    newImg.style.backgroundImage = `url('${newImage}')`
    newImg.style.backgroundSize = 'cover'
    newImg.style.backgroundPosition = 'center center'
    previewContainer.current?.appendChild(newImg)
    previewContainer.current?.removeChild(previewContainer.current?.children[0])

    await gsap.to(newImg, { duration: 1, right: '0%' })
  }

  return (
    <>
      <div className='hidden container lg:flex justify-around mt-8'>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-8 max-h-[600px] overflow-y-scroll'>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
            <div
              key={item}
              className='flex items-center flex-col justify-center cursor-pointer'
              onClick={() =>
                handleImageClick(`/images/gallery/gallery-${item}.jpg`)
              }
            >
              <p>{item}</p>
              <div
                className='w-[100px] h-[100px]'
                style={{
                  backgroundImage: `url('/images/gallery/gallery-${item}.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center center',
                }}
              ></div>
            </div>
          ))}
        </div>
        <div
          ref={previewContainer}
          className='relative w-[250px] lg:w-[500px] lg:h-[600px] overflow-hidden ml-8'
        >
          <div
            className='preview w-[250px] lg:w-[500px] lg:h-[600px] absolute'
            style={{
              backgroundImage: `url('/images/gallery/gallery-1.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
            }}
          ></div>
        </div>
      </div>
      <div className='container w-full block lg:hidden mt-8'>
        <Carousel>
          <CarouselContent>
            {Array.from({ length: 12 }).map((_, index) => (
              <CarouselItem key={index}>
                <div
                  className='w-full h-[350px]'
                  style={{
                    backgroundImage: `url('/images/gallery/gallery-${
                      index + 1
                    }.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                  }}
                ></div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  )
}
