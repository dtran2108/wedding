import { cn } from '@/lib/utils'
import { Water_Brush } from 'next/font/google'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

const waterBrush = Water_Brush({ subsets: ['latin'], weight: '400' })

export default function Agenda() {
  const timeline = [
    {
      time: '4:30 PM - 7:00 PM',
      content:
        'Reception begins. Dinner is served, toasts, first dance, cake cutting, and bouquet toss.',
      image: '/images/agenda-1.jpeg',
    },
    {
      time: '7:00 PM - 7:30 PM',
      content: 'Bride and groom thank guests and make rounds to each table.',
      image: '/images/agenda-2.jpeg',
    },
    {
      time: '7:30 PM - 9:00 PM',
      content:
        'Dancing and mingling continue. Photo booth and late-night snacks available.',
      image: '/images/agenda-3.jpeg',
    },
    {
      time: '9:00 PM',
      content: 'Last call for alcohol.',
      image: '/images/agenda-4.jpeg',
    },
    {
      time: '9:30 PM',
      content: 'Final dance and farewell.',
      image: '/images/agenda-5.png',
    },
    {
      time: '9:30 PM onwards',
      content: 'Newlyweds depart for honeymoon suite or after-party.',
      image: '/images/agenda-6.jpeg',
    },
  ]

  return (
    <div
      id='agenda'
      className='min-h-screen w-screen'
      style={{
        backgroundImage: "url('/images/background.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='w-full min-h-screen backdrop-blur-lg p-4'>
        <div className='w-full min-h-full flex-1 border-4 border-primary rounded-lg bg-white p-4 flex flex-col'>
          <h1
            className={cn(
              waterBrush.className,
              'text-center text-5xl font-bold'
            )}
          >
            Agenda
          </h1>
          <div className='mt-8 flex items-center justify-center flex-1'>
            <Carousel className='w-full max-w-lg md:max-w-[70%] h-full flex items-center justify-center'>
              <CarouselContent>
                {timeline.map((item, index) => (
                  <CarouselItem key={index}>
                    <div
                      key={index}
                      className='w-full h-[calc(100vh-10rem)] border-4 border-primary rounded-lg bg-white p-4 flex flex-col justify-center items-center'
                    >
                      <h1
                        className={cn(
                          waterBrush.className,
                          'text-3xl font-bold text-center'
                        )}
                      >
                        {item.time}
                      </h1>
                      <p className='text-center'>{item.content}</p>
                      <div
                        className='flex-1 w-full rounded-lg mt-4'
                        style={{
                          backgroundImage: `url('${item.image}')`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                        }}
                      ></div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  )
}
