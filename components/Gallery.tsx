import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export default function Gallery() {
  return (
    <div className='w-full min-h-[100vh] flex justify-center 2xl:h-[1500px]'>
      <Carousel className='w-full'>
        <CarouselContent>
          {Array.from({ length: 10 }).map((_, index) => (
            <CarouselItem key={index}>
              <div
                className='relative w-full min-h-[100vh] flex items-center flex-col justify-between 2xl:h-[1500px]'
                style={{
                  backgroundImage: "url('/images/gallery/Gallery" + index + ".jpg')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'bottom',
                }}
              ></div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='left-2 md:left-8' />
        <CarouselNext className='right-2 md:right-8' />
      </Carousel>
    </div>
  )
}
