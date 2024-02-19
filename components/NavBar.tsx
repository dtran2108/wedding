'use client'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Menu } from 'lucide-react'
import Link from 'next/link'

export default function NavBar() {
  return (
    <Dialog>
      <DialogTrigger>
        <span className='w-[40px] h-[40px] absolute top-16 right-8 rounded-full p-2 flex items-center justify-center border border-secondary'>
          <Menu className='w-4 h-4' />
        </span>
      </DialogTrigger>
      <DialogContent className='w-[300px]'>
        <DialogHeader className='flex flex-col items-end'>
          <DialogTitle className='text-right text-xl'>MAI & TUAN</DialogTitle>
          <div className='rounded-lg h-[3px] w-[100px] bg-yellow mt-4'></div>
        </DialogHeader>
        <div className='flex flex-col items-center space-y-4 my-8'>
          <div>
            <Link href='/'>Home</Link>
          </div>
          <div>
            <Link href='/our-story'>Our Story</Link>
          </div>
          <div>
            <Link href='/schedule'>Schedule</Link>
          </div>
          <div>
            <Link href='/gallery'>Gallery</Link>
          </div>
          <div>
            <Link href='/contact'>Contact</Link>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
