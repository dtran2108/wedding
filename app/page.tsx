import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Playfair, Playfair_Display } from 'next/font/google'
import Image from 'next/image'

const playfair = Playfair_Display({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='min-h-screen container mt-24'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
        <div>
          <h2 className={cn(playfair.className, 'text-5xl leading-normal')}>
            20.04.2024
          </h2>
          <h2 className={cn(playfair.className, 'text-5xl leading-normal')}>
            We're getting married!
          </h2>
          <h1 className={cn(playfair.className, 'text-7xl leading-normal')}>
            Quân - Hiền
          </h1>
          <p className='text-[#baad9e] mt-4 w-9/12'>
            Get ready to witness a love story take center stage as two hearts
            become one in a joyous celebration of forever!
          </p>
          <Button className='mt-8'>RSVP</Button>
        </div>
        <div className='relative hidden lg:block'>
          <div
            className='w-[300px] h-[120%] mx-auto absolute -top-12 left-24 z-10'
            style={{
              backgroundImage: `url('/images/cover-3.jpeg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
            }}
          ></div>
          <div
            className='w-[200px] h-[150px] mx-auto absolute left-[50%] z-9'
            style={{
              backgroundImage: `url('/images/cover-2.jpeg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
            }}
          ></div>
          <div
            className='w-[150px] h-[200px] mx-auto absolute bottom-0 z-20 rounded-t-full'
            style={{
              backgroundImage: `url('/images/cover-1.jpeg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
            }}
          ></div>
        </div>
      </div>
    </main>
  )
}
