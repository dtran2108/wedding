import { cn } from '@/lib/utils'
import { Water_Brush } from 'next/font/google'
import Image from 'next/image'
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel'

const waterBrush = Water_Brush({ subsets: ['latin'], weight: '400' })

export default function Gallery() {
  const imageList = [
    '/images/gallery-1.jpeg',
    '/images/gallery-2.jpeg',
    '/images/gallery-3.jpeg',
    '/images/gallery-4.jpeg',
    '/images/gallery-5.jpeg',
    '/images/gallery-6.jpeg',
    '/images/gallery-7.jpeg',
    '/images/gallery-8.jpeg',
    '/images/gallery-9.jpeg',
    '/images/gallery-10.jpeg',
    '/images/gallery-1.jpeg',
    '/images/gallery-2.jpeg',
    '/images/gallery-3.jpeg',
    '/images/gallery-4.jpeg',
    '/images/gallery-5.jpeg',
    '/images/gallery-3.jpeg',
    '/images/gallery-4.jpeg',
    '/images/gallery-5.jpeg',
    '/images/gallery-3.jpeg',
    '/images/gallery-4.jpeg',
    '/images/gallery-5.jpeg',
    '/images/gallery-3.jpeg',
    '/images/gallery-4.jpeg',
    '/images/gallery-5.jpeg',
  ]

  return (
    <div
      id='gallery'
      className='min-h-screen w-screen'
      style={{
        backgroundImage: "url('/images/background.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='w-full min-h-screen backdrop-blur-lg p-4'>
        <div className='w-full min-h-[calc(100vh-2rem)] border-4 border-primary rounded-lg bg-white p-4 flex flex-col  justify-center'>
          <h1
            className={cn(
              waterBrush.className,
              'text-center text-5xl font-bold'
            )}
          >
            Gallery
          </h1>
          <div className='flex items-center justify-center mt-8'>
            <Carousel
              opts={{
                align: 'start',
              }}
              className='w-full max-w-[calc(100vw-15rem)]'
            >
              <CarouselContent>
                {imageList.map((imageUrl, i) => (
                  <CarouselItem key={i} className='md:basis-1/2 lg:basis-1/3'>
                    <Dialog key={imageUrl + 't' + i}>
                      <DialogTrigger asChild>
                        <div
                          className='w-full aspect-square border-4 border-primary rounded-lg cursor-pointer'
                          style={{
                            backgroundImage: `url('${imageUrl}')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                          }}
                        ></div>
                      </DialogTrigger>
                      <DialogContent className='p-2 w-full max-w-lg md:max-w-[800px]'>
                        <div
                          className='w-full aspect-video border-4 border-primary rounded-lg cursor-pointer'
                          style={{
                            backgroundImage: `url('${imageUrl}')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                          }}
                        ></div>
                      </DialogContent>
                    </Dialog>
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
