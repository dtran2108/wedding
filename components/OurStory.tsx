import { cn } from '@/lib/utils'
import { Dosis } from 'next/font/google'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

const dosis = Dosis({ subsets: ['latin'], weight: '400' })

export default function OurStory() {
  const stories = [
    {
      image: '/images/story-1.jpeg',
      date: 'April 2010',
      title: 'Coffee Catastrophe',
      content:
        "Sarah mistook Jaiden's brand new suit for a napkin holder, accidentally spilling her coffee all over him at a bustling café. Their first encounter involved a dry cleaner, a lot of apologies, and an unexpected bond over stained garments.",
    },
    {
      image: '/images/story-2.jpeg',
      date: 'August 2012',
      title: 'Turbulent Ties',
      content:
        "Sarah, prone to motion sickness, ended up in Jack's lap during a bumpy flight to Paris. Jack, attempting to be suave, mistook her queasy grip for a gesture of affection, leading to an awkward yet oddly cozy journey across the Atlantic.",
    },
    {
      image: '/images/story-3.jpeg',
      date: 'May 2013',
      title: 'Culinary Comedy',
      content:
        "Jack's attempt at a romantic dinner ended with a fire alarm, a burnt lasagna, and a vow to never touch a stove again. Their first date became an impromptu kitchen dance party, complete with takeout pizza and laughter.",
    },
    {
      image: '/images/story-4.jpeg',
      date: 'July 2014 - September 2016',
      title: 'Globetrotting Goofs',
      content:
        "Sarah and Jack's travel adventures included getting lost in translation in Tokyo, accidentally joining a salsa competition in Cuba, and narrowly escaping a flock of determined seagulls in Venice.",
    },
    {
      image: '/images/story-5.jpeg',
      date: 'February 2017',
      title: 'The Cat Ultimatum',
      content:
        'Sarah jokingly threatened Jack with a lifetime of cat-themed decor unless he proposed. Jack, fearing the wrath of ceramic felines, took the hint and began plotting a proposal that would make even the most cynical cat lady swoon.',
    },
    {
      image: '/images/story-6.jpeg',
      date: 'April 2019',
      title: 'The Proposal Prank',
      content:
        "Jack staged an elaborate prank proposal involving a fake ring and a surprise flash mob. Sarah's initial shock turned into laughter when Jack revealed the real ring hidden inside a giant inflatable unicorn.",
    },
    {
      image: '/images/story-7.jpeg',
      date: 'January 2020 - March 2022',
      title: 'Wedding Woes',
      content:
        "From wrestling with stubborn florists to accidentally sending out invitations with the wrong date, Sarah and Jack's wedding planning journey resembled a sitcom script. Each mishap only brought them closer together amidst the chaos.",
    },
  ]

  return (
    <div
      id='our-story'
      className='min-h-screen w-screen'
      style={{
        backgroundImage: "url('/images/background.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='w-full min-h-screen backdrop-blur-lg p-4 flex'>
        <div className='w-full min-h-full flex-1 border-4 border-primary rounded-lg bg-white p-4 flex flex-col'>
          <h1
            className={cn(
              dosis.className,
              'text-center text-5xl font-bold'
            )}
          >
            Our Story
          </h1>
          <div className='mt-8 flex items-center justify-center flex-1'>
            <Carousel className='w-full max-w-xs sm:max-w-[400px] md:max-w-[70%] h-full flex items-center justify-center'>
              <CarouselContent>
                {stories.map((story, index) => (
                  <CarouselItem key={index}>
                    <div
                      key={index}
                      className='w-[250px] sm:w-[400px] md:w-full border-4 border-primary rounded-lg bg-white p-2 flex flex-col items-center justify-between'
                      style={{
                        backgroundImage: `url('${story.image}')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'top',
                      }}
                    >
                      <div className='min-h-[300px] md:min-h-[400px]'></div>
                      <div className='bg-white rounded-b-lg p-2 w-full flex items-center justify-center'>
                        <div>
                          <p className='mb-2'>{story.date}</p>
                          <h1
                            className={cn(
                              dosis.className,
                              'text-2xl md:text-4xl font-bold'
                            )}
                          >
                            {story.title}
                          </h1>
                          <p className='mt-4 text-sm md:text-md'>
                            {story.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className='hidden md:flex' />
              <CarouselNext className='hidden md:flex' />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  )
}
