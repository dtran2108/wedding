'use client'

import OurStory from '../OurStory'
import { Dialog, DialogTrigger } from '../ui/dialog'
import { DialogContent } from '../ui/dialog'

import { cn } from '@/lib/utils'
import { Water_Brush } from 'next/font/google'

const mainStyle = 'w-full h-full border-4 border-primary rounded-lg'
const waterBrush = Water_Brush({ subsets: ['latin'], weight: '400' })

export default function MainFrameButton({ className }: { className?: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild className={className}>
        <div
          className={cn(
            mainStyle,
            'col-span-2 row-span-2 overflow-hidden cursor-pointer flex flex-col'
          )}
        >
          <div
            className='relative flex items-center justify-center flex-col p-4'
            style={{
              backgroundImage: "url('/images/5th-grid.jpeg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className='absolute bg-white/80 left-0 top-0 w-full h-full z-10'></div>
            <h1
              className={cn(
                waterBrush.className,
                'font-bold text-4xl w-full text-center mb-4 relative z-20'
              )}
            >
              {' '}
              Evelyn & Jaiden
            </h1>
            <div className='flex items-center justify-evenly w-full relative z-20'>
              <div className={cn(waterBrush.className)}>
                <h1 className='text-center text-4xl font-bold'>Tokyo</h1>
                <h1 className='text-center text-4xl font-bold'>Japan</h1>
              </div>
              <div
                className='rounded-t-full w-[200px] h-[210px]'
                style={{
                  backgroundImage: "url('/images/wedding.jpeg')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'top',
                }}
              ></div>
              <div className={cn(waterBrush.className)}>
                <h1 className='text-center text-4xl font-bold'>25</h1>
                <h1 className='text-center text-4xl font-bold'>03</h1>
                <h1 className='text-center text-4xl font-bold'>28</h1>
              </div>
            </div>
          </div>
          <div
            className={cn(
              waterBrush.className,
              'bg-white py-4 text-primary flex-1 text-2xl flex items-center justify-center'
            )}
          >
            Love you like a love song baby
          </div>
        </div>
      </DialogTrigger>
      <DialogContent>
        <div className='max-h-[500px] overflow-y-scroll'>
          <OurStory />
        </div>
      </DialogContent>
    </Dialog>
  )
}
