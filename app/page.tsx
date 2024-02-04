'use client'

import Image from 'next/image'
import background from '@/public/images/background.jpeg'
import { WindSong } from 'next/font/google'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import AnimatedTextWord from '@/components/AnimatedTextWord'

const windSong = WindSong({ subsets: ['latin'], weight: '400' })

export default function Home() {
  return (
    <main>
      <div
        className='absolute -top-0 min-h-screen w-screen flex justify-center'
        style={{
          backgroundImage: `url(${background.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      >
        <div className='flex flex-col mt-40'>
          <AnimatedTextWord text="WE'RE GETTING MARRIED!" />
          <AnimatedTextWord
            className={cn(windSong.className, 'text-[76px]')}
            text='Luân + Yến'
          />
          <div className='flex items-center justify-end'>
            <AnimatedTextWord text='02.04.2024' />
          </div>
        </div>
      </div>
    </main>
  )
}
