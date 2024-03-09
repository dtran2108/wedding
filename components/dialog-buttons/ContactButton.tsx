'use client'

import Contact from '../Contact'
import { Dialog, DialogTrigger } from '../ui/dialog'
import { DialogContent } from '../ui/dialog'

import { cn } from '@/lib/utils'
import { Dosis } from 'next/font/google'

const mainStyle = 'w-full h-full border-4 border-primary rounded-lg'
const dosis = Dosis({ subsets: ['latin'], weight: '400' })

export default function ContactButton({ className }: { className?: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild className={className}>
        <div
          className={cn(
            mainStyle,
            'col-span-1 row-span-2 border-none p-2 md:p-2 flex flex-col justify-between items-center cursor-pointer'
          )}
          style={{
            backgroundImage: "url('/images/japanese-restaurant.jpeg')",
            backgroundSize: 'cover',
            backgroundPosition: 'top',
          }}
        >
          <div></div>
          <div className='bg-white rounded-b-lg rounded-t-lg md:rounded-t-none h-full md:h-32 w-full flex items-center justify-center'>
            <div className='p-2'>
              <p className='mb-2 text-sm md:text-md'>77 N 6th St, Brooklyn, NY 11249</p>
              <h1 className={cn(dosis.className, 'text-5xl md:text-6xl font-bold')}>
                ZENICHI
              </h1>
            </div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent>
        <div className='max-h-[500px] overflow-y-scroll'>
          <Contact />
        </div>
      </DialogContent>
    </Dialog>
  )
}
