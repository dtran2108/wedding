'use client'

import Menu from '../Menu'
import { Dialog, DialogTrigger } from '../ui/dialog'
import { DialogContent } from '../ui/dialog'

import { cn } from '@/lib/utils'
import { Dosis } from 'next/font/google'

const mainStyle = 'w-full h-full border-4 border-primary rounded-lg'
const dosis = Dosis({ subsets: ['latin'], weight: '400' })

export default function MenuButton({ className }: { className?: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild className={className}>
        <div
          className={cn(
            mainStyle,
            'col-span-1 row-span-2 bg-white p-4 flex flex-col items-center justify-center text-center cursor-pointer'
          )}
        >
          <h1
            className={cn(
              dosis.className,
              'text-2xl text-primary font-bold mb-2'
            )}
          >
            WEDDING MENU
          </h1>
          <div className='flex-1 w-full grid grid-cols-2 gap-2'>
            <div
              className='rounded-lg border-2 border-primary w-full aspect-square'
              style={{
                backgroundImage: "url('/images/menu-1.jpeg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
            <div
              className='rounded-lg border-2 border-primary w-full aspect-square'
              style={{
                backgroundImage: "url('/images/menu-2.jpeg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
            <div
              className='rounded-lg border-2 border-primary w-full aspect-square'
              style={{
                backgroundImage: "url('/images/menu-3.jpeg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
            <div
              className='rounded-lg border-2 border-primary w-full aspect-square'
              style={{
                backgroundImage: "url('/images/menu-4.jpeg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent>
        <div className='max-h-[500px] overflow-y-scroll'>
          <Menu />
        </div>
      </DialogContent>
    </Dialog>
  )
}
