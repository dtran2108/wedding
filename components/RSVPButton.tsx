'use client'

import RSVPForm from './RSVPForm'
import { Dialog, DialogTrigger } from './ui/dialog'
import { DialogContent } from './ui/dialog'

import { cn } from '@/lib/utils'
import { Dosis } from 'next/font/google'

const mainStyle = 'w-full h-full border-4 border-primary rounded-lg'
const dosis = Dosis({ subsets: ['latin'], weight: '400' })

export default function RSVPButton({ className }: { className?: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild className={className}>
        <div
          className={cn(
            mainStyle,
            'col-span-1 row-span-1 bg-white flex items-center justify-center flex-col space-y-3 cursor-pointer'
          )}
        >
          <h1
            className={cn(
              dosis.className,
              'font-bold text-primary text-2xl md:text-4xl'
            )}
          >
            RSVP
          </h1>
        </div>
      </DialogTrigger>
      <DialogContent className='max-h-[500px] overflow-y-scroll'>
        <RSVPForm />
      </DialogContent>
    </Dialog>
  )
}
