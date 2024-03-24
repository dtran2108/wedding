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
          src="https://maps.google.com/maps?width=100%25&amp;height=800&amp;hl=en&amp;q=The%20Myst%20Dong%20Khoi,%20hotel,%20Ho%20Chi%20Minh%20City,%20Vietnam+(Duy%20&amp;%20Dien's%20Wedding)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
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
          Wedding reception 
          </h1>
          <p className='text-center'>
            SATURDAY <br />
            APRIL 20, 2024
          </p>
          <Carousel className='w-9/12'>
            <CarouselContent>
              {Array.from({ length: 1 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className='w-full flex items-center justify-center'>
                    <div className='relative left-8 z-30 w-[500px] aspect-square rounded-full bg-white/10 flex items-center justify-center'>
                      <div
                        className='w-[450px] aspect-square rounded-full'
                        style={{
                          backgroundImage: "url('/images/hotel.png')",
                          backgroundSize: 'cover',
                          backgroundPosition: 'bottom',
                        }}
                      ></div>
                    </div>
                    <div className='relative right-8 w-[500px] aspect-square rounded-full bg-white/10 flex items-center justify-center z-20'>
                      <div className='w-[450px] aspect-square rounded-full bg-white flex flex-col space-y-4 justify-center items-center p-4'>
                        <p className='text-gold'>RECEPTION, 6PM</p>
                        <h3
                          className={cn(
                            allura.className,
                            'text-2xl text-black'
                          )}
                        >
                          The Myst Dong Khoi
                        </h3>
                        <p
                          className={cn(
                            neuton.className,
                            'text-black text-center px-4'
                          )}
                        >
                          You are invited to join their intimate wedding celebration at 6pm at Ery Hall, the Myst Dong Khoi hotel. 
<br />Guests are invited to come as they are. You are welcomed to dress either comfortably or fancily at the celebration. Your presence is what truly matters!
<br />Guests may park at the parking lot available at the hotel. However, you are encouraged to embrace the party spirit by utilizing public transportation for a night of festivities and drinks. Cheers!
                        </p>
                        <a
                          className={cn(
                            neuton.className,
                            'text-gold text-center'
                          )}
                          href='https://www.google.com/maps/dir//the%20myst%20dong%20khoi%20hotel'
                          target='_blank'
                        >
                          Download Directions
                        </a>
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
      <div
        className={cn(
          'absolute z-30 bottom-12 rounded-full w-full h-[70px]'
        )}
        style = {{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
        >
        <Button
          className={cn(
            'absolute z-30 bottom-12 rounded-full w-[70px] h-[70px]',
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
    </div>
  )
}
