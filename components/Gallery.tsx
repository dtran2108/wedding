'use client'

import { cn } from '@/lib/utils'
import { Water_Brush } from 'next/font/google'
import { Dialog, DialogTrigger, DialogContent } from './ui/dialog'

const waterBrush = Water_Brush({ subsets: ['latin'], weight: '400' })

export default function Gallery() {
  const imageList = [
    '/images/gallery-1.jpeg',
    '/images/gallery-2.jpeg',
    '/images/gallery-3.jpeg',
    '/images/gallery-4.jpeg',
    '/images/gallery-5.jpeg',
    '/images/gallery-6.jpeg',
    '/images/gallery-7.jpeg',
    '/images/gallery-8.jpeg',
    '/images/gallery-9.jpeg',
    '/images/gallery-10.jpeg',
    '/images/gallery-1.jpeg',
    '/images/gallery-2.jpeg',
    '/images/gallery-3.jpeg',
    '/images/gallery-4.jpeg',
    '/images/gallery-5.jpeg',
    '/images/gallery-3.jpeg',
    '/images/gallery-4.jpeg',
    '/images/gallery-5.jpeg',
    '/images/gallery-3.jpeg',
    '/images/gallery-4.jpeg',
    '/images/gallery-5.jpeg',
    '/images/gallery-3.jpeg',
    '/images/gallery-4.jpeg',
    '/images/gallery-5.jpeg',
  ]

  return (
    <div>
      <h1
        className={cn(waterBrush.className, 'text-center text-5xl font-bold')}
      >
        Gallery
      </h1>
      <div className='grid grid-cols-4 gap-2 mt-8'>
        {imageList.map((imageUrl, i) => (
          <Dialog>
            <DialogTrigger asChild>
              <div
                key={imageUrl + 't' + i}
                className='w-full aspect-square border-4 border-primary rounded-lg cursor-pointer'
                style={{
                  backgroundImage: `url('${imageUrl}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
            </DialogTrigger>
            <DialogContent className='p-2 w-full max-w-lg md:max-w-[800px]'>
              <div
                className='w-full aspect-video border-4 border-primary rounded-lg cursor-pointer'
                style={{
                  backgroundImage: `url('${imageUrl}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  )
}
