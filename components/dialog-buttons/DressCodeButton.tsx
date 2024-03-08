'use client'

import DressCode from '../DressCode'
import { Dialog, DialogTrigger } from '../ui/dialog'
import { DialogContent } from '../ui/dialog'

import { cn } from '@/lib/utils'
import { Water_Brush } from 'next/font/google'

const mainStyle = 'w-full h-full border-4 border-primary rounded-lg'
const waterBrush = Water_Brush({ subsets: ['latin'], weight: '400' })

export default function DressCodeButton({ className }: { className?: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild className={className}>
        <div
          className={cn(
            mainStyle,
            'col-span-1 row-span-1 p-4 flex items-center justify-center space-y-6 flex-col bg-white cursor-pointer'
          )}
        >
          <div className='flex items-center justify-center space-x-4'>
            <span className='w-[40px] aspect-square rounded-full bg-[#ffecf5]'></span>
            <span className='w-[40px] aspect-square rounded-full bg-[#ffe7e9]'></span>
            <span className='w-[40px] aspect-square rounded-full bg-[#fdcee0]'></span>
            <span className='w-[40px] aspect-square rounded-full bg-[#f2bfd2]'></span>
          </div>
          <h1
            className={cn(
              waterBrush.className,
              'text-primary font-bold text-3xl text-center'
            )}
          >
            DRESS CODE
          </h1>
        </div>
      </DialogTrigger>
      <DialogContent className='max-h-[500px] overflow-y-scroll'>
        <DressCode />
      </DialogContent>
    </Dialog>
  )
}
