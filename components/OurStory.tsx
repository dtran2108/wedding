'use client'

import { cn } from '@/lib/utils'
import { Fleur_De_Leah, Neuton } from 'next/font/google'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from '@/components/ui/drawer'

const fleur = Fleur_De_Leah({ subsets: ['latin'], weight: '400' })
const neuton = Neuton({ subsets: ['latin'], weight: '400' })

export default function OurStory() {
  return (
    <div className='w-full min-h-[100vh] flex justify-center'>
      <Carousel className='w-full'>
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div
                className='relative w-full min-h-[100vh] flex items-center flex-col justify-between'
                style={{
                  backgroundImage: "url('/images/header.jpg')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'bottom',
                }}
              >
                <div className='absolute w-full h-[100vh] top-0 left-0 bg-black/50 z-10'></div>
                <div className='flex flex-col items-center justify-center my-auto text-center w-9/12 relative z-20'>
                  <h1
                    className={cn(fleur.className, 'leading-normal text-9xl')}
                  >
                    2012
                  </h1>
                  <div className='w-[150px] h-[1px] bg-white mt-4 mb-8'></div>
                  <h2 className='text-xl text-[#b3a192] mb-4'>
                    HE PUT A RING ON IT
                  </h2>
                  <Drawer>
                    <DrawerTrigger asChild>
                      <Button className='rounded-full bg-[#b3a192] w-[65px] h-[65px] text-black hover:bg-[#b3a192]'>
                        <span className='py-0.5 border-t-[1.5px] border-t-black border-b-[1.5px] border-b-black font-bold text-sm'>
                          MORE
                        </span>
                      </Button>
                    </DrawerTrigger>
                    <DrawerContent className='bg-white'>
                      <div className='mx-auto w-full max-w-md'>
                        <div className='p-4 pb-0'>
                          <div className='flex flex-col items-center justify-center my-auto text-center'>
                            <h1
                              className={cn(
                                fleur.className,
                                'leading-normal text-8xl text-[#b3a192]'
                              )}
                            >
                              2012
                            </h1>
                            <h2 className='text-xl text-black my-4'>
                              WINTER WONDERLAND
                            </h2>
                            <div className='w-[150px] h-[1px] bg-black mt-4 '></div>
                            <p className={cn(neuton.className, 'text-black my-8')}>
                              At some point while all this had been happening
                              over the last couple of years, Z. realized that he
                              wanted it all to keep happening, forever. He found
                              the perfect ring and waited until a day after
                              Valentines Day to ask the question, because he
                              just has to be different. He picked up Judie from
                              school and brought her home to candles and
                              champagne. While she was still trying to figure
                              out what was happening he took the opportunity to
                              ask her to marry him. He will never forget the way
                              she looked confused and said, &quot;I&apos;m so sleepy,&quot;
                              with her hands on her head or when he asked if
                              that meant yes, she responded that yes, it did.
                            </p>
                          </div>
                        </div>
                        <DrawerFooter className='flex justify-center items-center'>
                          <DrawerClose asChild>
                            <Button className='rounded-full bg-black w-[60px] h-[60px] text-black hover:bg-black'>
                              <span className='py-0.5 border-t-[1.5px] border-t-white border-b-[1.5px] border-b-white font-bold text-[10px] text-white'>
                                CLOSE
                              </span>
                            </Button>
                          </DrawerClose>
                        </DrawerFooter>
                      </div>
                    </DrawerContent>
                  </Drawer>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='left-8' />
        <CarouselNext className='right-8' />
      </Carousel>
    </div>
  )
}
