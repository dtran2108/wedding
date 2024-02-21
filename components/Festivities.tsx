'use client'

import { cn } from '@/lib/utils'
import { Fleur_De_Leah, Neuton } from 'next/font/google'
import { Button } from './ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel'
import { useState } from 'react'
import { motion } from 'framer-motion'

const allura = Fleur_De_Leah({ subsets: ['latin'], weight: '400' })
const neuton = Neuton({ subsets: ['latin'], weight: '400' })

export default function Festivities() {
  const [showMap, setShowMap] = useState(false)

  const show = {
    opacity: 1,
    display: 'flex',
  }

  const hide = {
    opacity: 0,
    transitionEnd: {
      display: 'none',
    },
  }

  return (
    <div className='w-full min-h-[800px] relative'>
      <div className='absolute z-10 top-0 left-0 w-full'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109269.67252053325!2d106.81252837818198!3d10.545142192032152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31754061b083f329%3A0x912801646ee59f4b!2zS2h1IER1IEzhu4tjaCBTaW5oIFRow6FpIEThuqduIFjDonk!5e0!3m2!1svi!2s!4v1708483786680!5m2!1svi!2s'
          width='100%'
          height='800px'
          style={{ border: 0 }}
          allowFullScreen
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>
        <motion.div
          animate={showMap ? hide : show}
          className={cn(
            'absolute w-full h-[800px] top-0 left-0 bg-black/80 z-20 flex flex-col items-center pt-8 space-y-4'
          )}
        >
          <h1 className={cn(allura.className, 'text-6xl text-center')}>
            Festivities
          </h1>
          <p className='text-center'>
            SATURDAY <br />
            JUNE 22, 2013
          </p>
          <Carousel className='w-9/12'>
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className='w-full flex items-center justify-center'>
                    <div className='relative left-8 z-30 w-[500px] aspect-square rounded-full bg-white/10 flex items-center justify-center'>
                      <div
                        className='w-[450px] aspect-square rounded-full'
                        style={{
                          backgroundImage: "url('/images/header.jpg')",
                          backgroundSize: 'cover',
                          backgroundPosition: 'bottom',
                        }}
                      ></div>
                    </div>
                    <div className='relative right-8 w-[500px] aspect-square rounded-full bg-white/10 flex items-center justify-center z-20'>
                      <div className='w-[450px] aspect-square rounded-full bg-white flex flex-col space-y-4 justify-center items-center p-4'>
                        <p className='text-gold'>CEREMONY, 5PM</p>
                        <h3
                          className={cn(
                            allura.className,
                            'text-2xl text-black'
                          )}
                        >
                          Central Beach, coronado
                        </h3>
                        <p
                          className={cn(
                            neuton.className,
                            'text-black text-center px-4'
                          )}
                        >
                          The happy couple will say “I do” with their toes in
                          the sand at 5pm at Central Beach in Coronado, CA.
                          Facing the ocean, the ceremony will be held where RH
                          Dana Place meets Ocean Boulevard (to the right of the
                          Hotel Del Coronado villas), where there is a line of
                          palm trees in the sand heading towards the water.
                          Guests may park at any available street parking.
                        </p>
                        <p
                          className={cn(
                            neuton.className,
                            'text-gold text-center'
                          )}
                        >
                          Download Directions
                          <br />
                          Map of Events
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </motion.div>
      </div>
      <Button
        className={cn(
          'absolute z-30 bottom-12 left-[47%] rounded-full w-[70px] h-[70px]',
          showMap
            ? 'bg-black text-white hover:bg-black'
            : 'bg-[#b3a192] text-black hover:bg-[#b3a192]'
        )}
        onClick={() => setShowMap(!showMap)}
      >
        <span
          className={cn(
            'py-0.5 border-t border-b font-bold text-sm',
            showMap
              ? 'border-t-white border-b-white'
              : 'border-t-black border-b-black'
          )}
        >
          {showMap ? (
            'CLOSE'
          ) : (
            <span>
              LIVE <br /> MAP
            </span>
          )}
        </span>
      </Button>
    </div>
  )
}
