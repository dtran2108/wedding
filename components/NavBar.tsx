'use client'

import { cn } from '@/lib/utils'
import { Bebas_Neue } from 'next/font/google'
import { Button } from './ui/button'
import Link from 'next/link'
import { Diamond } from 'lucide-react'

export default function NavBar() {
  return (
    <nav className='flex items-center justify-between py-4'>
      <Link href='/'>
        <div className={cn('text-center text-2xl font-bold flex items-center')}>
          <Diamond className='w-4 h-4 mr-2' /> Q&H
        </div>
      </Link>
      <div className='flex items-center space-x-12'>
        <Link href='/our-story'>Our Story</Link>
        <Link href='/gallery'>Gallery</Link>
        <Link href='/schedule'>Schedule</Link>
        <Link href='/details'>Details</Link>
      </div>
      <div>
        <Button variant='outline' className='font-bold text-primary'>
          RSVP
        </Button>
      </div>
    </nav>
  )
}
