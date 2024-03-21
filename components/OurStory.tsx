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
    year: 'Chapter 1',
    title: 'The first encounter',
    content: 'It was 2011 when Duy and Dien first crossed paths as high school classmates. It would be nice to label them as high school ' 
    + 'sweethearts, however, they unfortunately didn’t hit it off right away. He didn’t find her particularly remarkable while she also didn’t ' 
    + 'take a liking to him at first. Nonetheless, as they shared the same classroom, they gradually developed a friendly bond, ' 
    + 'and that friendship laid the foundation for a beautiful love story to unfold later in life.',
    image: '/images/stories/Story1.jpg'
  },
  {
    year: 'Chapter 2',
    title: 'Friends to Lovers',
    content: 'As fate would have it, Duy and Dien found themselves attending the same university after high school. This new chapter ' 
    + 'in their lives brought them closer and sparked a romantic connection between them. He was captivated by her through a song, and she found herself ' 
    + 'drawn to him because of an umbrella. As people always say - the rest is history. They navigated college life, studying and enjoying parties together. ' 
    + 'Their bond strengthened with each passing day, culminating in a heartfelt love story filled with growth, companionship and mutual support.',
    image: '/images/header.jpg'
  },
  {
    year: 'Chapter 3',
    title: 'Love across continents',
    content: 'In 2017, when Duy embarked on a study abroad adventure, they faced the test of distance the first time in their relationship. It was a ' 
    + 'stressful and emotional time - the timezone difference, the lack of physical contact, and the yearning made them struggle, ' 
    + 'but those problems also make them stronger and taught them the importance of communication, empathy and understanding. ',
    content2: 'Duy returned after a year, but it was now Dien’s turn to venture into her own journey abroad for further studies. The second time didn’t ' 
    + 'make it easier for them, especially due to its extended duration and the added complication of the pandemic. Despite all the challenges of being ' 
    + 'separated, their dedication and commitment transcended borders, strengthening their bond and deepening their connection. It was a love that ' 
    + 'distance defied. And they clearly saw that they should never be apart again.',
    image: '/images/header.jpg'
  },
  {
    year: 'Chapter 4',
    title: 'The promise of forever',
    content: 'After realizing that they are the one in each other’s lives, in a blissful summer day in 2022, Duy traveled to Paris to surprise Dien with a heartfelt ' 
    + 'proposal, and she said yes! In the City of Love, he put a ring on her finger, marking a beautiful milestone in their relationship filled with ' 
    + 'love, adventure, and a promising future together.',
    image: '/images/header.jpg'
  },
  {
    year: 'Chapter 5',
    title: 'Happily ever after',
    content: 'Now, after thirteen years since their first encounter and a decade of love, they choose forever, knowing their love was meant to last a lifetime.',
    content2: 'Join Dien and Duy as they take you on their journey of everlasting love and true companionship!',
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
                              {stories[index].title.toUpperCase()}
                            </h2>
                            <div className='w-[150px] h-[1px] bg-black mt-4 '></div>
                            <p
                              className={cn(
                                neuton.className,
                                'text-black my-8'
                              )}
                            >
                              {stories[index].content}
                              {stories[index].content2 ? <br/> : ''}
                              {stories[index].content2 ? <br/> : ''}
                              {stories[index].content2 ? stories[index].content2 : ''}
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
