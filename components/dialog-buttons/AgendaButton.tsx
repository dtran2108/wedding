'use client'

import { useEffect, useState } from 'react'
import Divider from '../Divider'
import { Dialog, DialogTrigger } from '../ui/dialog'
import { DialogContent } from '../ui/dialog'

import { cn } from '@/lib/utils'
import { Water_Brush } from 'next/font/google'
import Agenda from '../Agenda'

const mainStyle = 'w-full h-full border-4 border-primary rounded-lg'
const waterBrush = Water_Brush({ subsets: ['latin'], weight: '400' })

export default function AgendaButton({ className }: { className?: string }) {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear()
    let difference = +new Date(`04/20/${year}`) - +new Date()

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    }

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    return timeLeft
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
    return () => clearTimeout(timer)
  })

  const [timeLeft, setTimeLeft] = useState<{
    days: number
    hours: number
    minutes: number
    seconds: number
  }>(calculateTimeLeft())

  return (
    <Dialog>
      <DialogTrigger asChild className={className}>
        <div
          className={cn(
            mainStyle,
            'bg-white flex items-center justify-center flex-col px-8 cursor-pointer'
          )}
        >
          <h1 className={cn(waterBrush.className, 'font-bold text-4xl')}>
            Countdown
          </h1>
          <Divider
            className={cn(
              waterBrush.className,
              'font-bold text-3xl text-primary w-full'
            )}
          >
            &
          </Divider>
          <div className='flex items-center justify-around w-full'>
            <div className='flex items-center justify-center flex-col text-primary'>
              <h1 className='text-3xl font-bold'>{timeLeft.days}</h1>
              <p className='text-sm'>Days</p>
            </div>
            <div className='flex items-center justify-center flex-col text-primary'>
              <h1 className='text-3xl font-bold'>{timeLeft.hours}</h1>
              <p className='text-sm'>Hours</p>
            </div>
            <div className='flex items-center justify-center flex-col text-primary'>
              <h1 className='text-3xl font-bold'>{timeLeft.minutes}</h1>
              <p className='text-sm'>Minutes</p>
            </div>
            <div className='flex items-center justify-center flex-col text-primary relative'>
              <h1 className='text-3xl font-bold'>{timeLeft.seconds}</h1>
              <p className='text-sm'>Seconds</p>
            </div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className='max-h-[500px] overflow-y-scroll'>
        <Agenda />
      </DialogContent>
    </Dialog>
  )
}
