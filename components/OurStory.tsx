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
const stories = [
  {
    year: 2011,
    title: 'Duy and Dien\'s journey started',
    place: '',
    content: 'Duy and Dien\'s journey started in high school as classmates. Although they didn\'t date back then, their friendship laid the foundation for a beautiful love story to unfold later in life.',
    image: '/images/stories/Story1.jpg'
  },
  {
    year: 2014,
    title: '',
    place: '',
    content: 'As fate would have it, Duy and Dien found themselves attending the same university after high school. This new chapter in their lives brought them closer and sparked a romantic connection between them. '
    + 'Their shared experience marked the start of a heartfelt love story filled with growth, companionship and mutual support.',
    image: '/images/header.jpg'
  },
  {
    year: 2017,
    title: '',
    place: '',
    content: 'When Duy embarked on a year-long study abroad adventure, they faced the test of distance the first time in their relationship. Despite the challenges of being apart, their love and commitment transcended borders, ' 
    + 'strengthening their bond and deepening their connection.',
    image: '/images/header.jpg'
  },
  {
    year: 2018,
    title: '',
    place: '',
    content: 'As Duy returned, it was now Dien\'s turn to venture into her own journey abroad for further studies, presenting new tests and adventures for the couple. ' 
    + 'As they navigated the challenges of being apart together, their support and dedication to each other remained unwavering, and their relationship preserved and strengthened.',
    image: '/images/header.jpg'
  },
  {
    year: 2022,
    title: '',
    place: '',
    content: 'After realizing that they are the one in each other\'s lives, in a romantic gesture, Duy traveled to Paris to surprise Dien with a heartfelt proposal, and she said yes. In the City of Love, he put a ring on her ' 
    + 'finger, marking a beautiful milestone in their relationship filled with love, adventure, and a promising future together.',
    image: '/images/header.jpg'
  },
  {
    year: 2024,
    title: '',
    place: '',
    content: 'Now, after thirteen years since their first encounter and a decade of love, they choose forever, knowing their love was meant to last a lifetime. ' 
    + 'Join Dien and Duy as they take you on their journey of everlasting love and true companionship!',
    image: '/images/header.jpg'
  }
]

export default function OurStory() {
  return (
    <div className='w-full min-h-[100vh] flex justify-center'>
      <Carousel className='w-full'>
        <CarouselContent>
          {Array.from({ length: stories.length }).map((_, index) => (
            <CarouselItem key={index}>
              <div
                className='relative w-full min-h-[100vh] flex items-center flex-col justify-between'
                style={{
                  backgroundImage: "url('" + stories[index].image + "')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'bottom',
                }}
              >
                <div className='absolute w-full h-[100vh] top-0 left-0 bg-black/50 z-10'></div>
                <div className='flex flex-col items-center justify-center my-auto text-center w-9/12 relative z-20'>
                  <h1
                    className={cn(fleur.className, 'leading-normal text-7xl md:text-9xl')}
                  >
                    {stories[index].year}
                  </h1>
                  <div className='w-[150px] h-[1px] bg-white mt-4 mb-8'></div>
                  <h2 className='text-xl text-[#b3a192] mb-4'>
                    {stories[index].title.toUpperCase()}
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
                              {stories[index].year}
                            </h1>
                            <h2 className='text-xl text-black my-4'>
                              {stories[index].place.toUpperCase()}
                            </h2>
                            <div className='w-[150px] h-[1px] bg-black mt-4 '></div>
                            <p
                              className={cn(
                                neuton.className,
                                'text-black my-8'
                              )}
                            >
                              {stories[index].content}
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
        <CarouselPrevious className='left-2 md:left-8' />
        <CarouselNext className='right-2 md:right-8' />
      </Carousel>
    </div>
  )
}
