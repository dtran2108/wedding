'use client'

import { cn } from '@/lib/utils'
import { Water_Brush } from 'next/font/google'
import Divider from './Divider'
import { useEffect, useState } from 'react'
import RSVPButton from './RSVPButton'
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog'
import DressCode from './DressCode'
import Menu from './Menu'

const waterBrush = Water_Brush({ subsets: ['latin'], weight: '400' })

export default function HomeSection() {
  const mainStyle = 'w-full h-full border-4 border-primary rounded-lg'

  const scrollToHash = function (element_id: string) {
    const element = document.getElementById(element_id)
    element?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    })
  }

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
      id='home'
      className='min-h-screen w-screen'
      style={{
        backgroundImage: "url('/images/background.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='w-screen h-screen grid lg:grid-cols-4 lg:grid-rows-4 lg:grid-flow-col lg:gap-4 grid-cols-3 grid-rows-4 grid-flow-row gap-2 backdrop-blur-lg p-2 lg:p-4'>
        <div
          onClick={() => scrollToHash('gallery')}
          className={cn(
            mainStyle,
            'col-span-1 row-span-2 cursor-pointer hidden lg:block'
          )}
          style={{
            backgroundImage: "url('/images/1st-grid.jpeg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>

        <RSVPButton className='hidden lg:flex' />

        <div
          className={cn(
            mainStyle,
            'col-span-2 row-span-1 hidden lg:block cursor-pointer'
          )}
          onClick={() => scrollToHash('our-story')}
          style={{
            backgroundImage: "url('/images/3rd-grid.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>

        <div
          className={cn(
            mainStyle,
            'lg:col-span-2 lg:row-span-1 col-span-3 bg-white flex items-center justify-center flex-col px-8 cursor-pointer'
          )}
          onClick={() => scrollToHash('agenda')}
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
            <div className='flex items-center justify-center flex-col text-primary'>
              <h1 className='text-3xl font-bold'>{timeLeft.seconds}</h1>
              <p className='text-sm'>Seconds</p>
            </div>
          </div>
        </div>

        <div
          className={cn(
            mainStyle,
            'overflow-hidden cursor-pointer flex flex-col lg:col-span-2 lg:row-span-2 col-span-3 row-span-2'
          )}
          onClick={() => scrollToHash('our-story')}
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
                <h1 className='text-center text-2xl md:text-4xl font-bold'>
                  Tokyo
                </h1>
                <h1 className='text-center text-2xl md:text-4xl font-bold'>
                  Japan
                </h1>
              </div>
              <div
                className='rounded-t-full w-[150px] md:w-[200px] lg:h-[210px] md:h-[195px] h-[190px]'
                style={{
                  backgroundImage: "url('/images/wedding.jpeg')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'top',
                }}
              ></div>
              <div className={cn(waterBrush.className)}>
                <h1 className='text-center text-2xl md:text-4xl font-bold'>
                  25
                </h1>
                <h1 className='text-center text-2xl md:text-4xl font-bold'>
                  03
                </h1>
                <h1 className='text-center text-2xl md:text-4xl font-bold'>
                  28
                </h1>
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

        <div
          onClick={() => scrollToHash('gallery')}
          className={cn(
            mainStyle,
            'col-span-1 row-span-2 cursor-pointer block lg:hidden'
          )}
          style={{
            backgroundImage: "url('/images/1st-grid.jpeg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>

        <Dialog>
          <DialogTrigger asChild>
            <div
              className={cn(
                mainStyle,
                'col-span-1 row-span-1 p-4 items-center justify-center space-y-6 flex-col bg-white cursor-pointer',
                'hidden lg:flex'
              )}
              onClick={() => scrollToHash('bridesmaids')}
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

        <div
          onClick={() => scrollToHash('contact')}
          className={cn(
            mainStyle,
            'col-span-1 row-span-2 border-none p-1 md:p-2 flex flex-col justify-between items-center cursor-pointer'
          )}
          style={{
            backgroundImage: "url('/images/japanese-restaurant.jpeg')",
            backgroundSize: 'cover',
            backgroundPosition: 'top',
          }}
        >
          <div></div>
          <div className='bg-white rounded-b-lg rounded-t-lg md:rounded-t-none h-full md:h-32 w-full flex items-center justify-center'>
            <div className='p-1'>
              <p className='mb-2 text-sm md:text-md'>
                77 N 6th St, Brooklyn, NY 11249
              </p>
              <h1
                className={cn(
                  waterBrush.className,
                  'text-lg md:text-4xl font-bold'
                )}
              >
                ZENICHI
              </h1>
            </div>
          </div>
        </div>

        <RSVPButton className='flex lg:hidden' />

        <Dialog>
          <DialogTrigger asChild>
            <div
              className={cn(
                mainStyle,
                'col-span-1 row-span-2 bg-white p-4 flex-col items-center justify-center text-center cursor-pointer',
                'hidden lg:flex'
              )}
            >
              <h1
                className={cn(
                  waterBrush.className,
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
      </div>
    </div>
  )
}
