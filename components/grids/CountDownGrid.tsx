'use client'

import { SECTION_STYLE, titleFont } from '@/const'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function CountDownGrid() {
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
    <div
      className={cn(
        SECTION_STYLE,
        'bg-green text-white p-4 relative overflow-hidden flex flex-col items-center justify-center'
      )}
    >
      <Image
        className='absolute top-0 left-0'
        src='/images/decoration/count-down-left.svg'
        width={20}
        height={100}
        alt='decoration'
      />
      <p className='text-center'>Hãy sẵn sàng với chúng tôi</p>
      <h1 className={cn(titleFont.className, 'text-2xl text-center')}>
        {timeLeft.days} Ngày, {timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}
      </h1>
      <Image
        className='absolute top-0 right-0'
        src='/images/decoration/count-down-right.svg'
        width={20}
        height={100}
        alt='decoration'
      />
    </div>
  )
}
