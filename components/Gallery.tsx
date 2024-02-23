import { cn } from '@/lib/utils'
import { Water_Brush } from 'next/font/google'
import Image from 'next/image'

const waterBrush = Water_Brush({ subsets: ['latin'], weight: '400' })

export default function Gallery() {
  return (
    <div>
      <h1
        className={cn(waterBrush.className, 'text-center text-5xl font-bold')}
      >
        Gallery
      </h1>
      <div className='grid grid-cols-4 gap-2 mt-8'>
        <div
          className='w-full aspect-square border-4 border-primary rounded-lg'
          style={{
            backgroundImage: "url('/images/gallery-1.jpeg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div
          className='w-full aspect-square border-4 border-primary rounded-lg'
          style={{
            backgroundImage: "url('/images/gallery-2.jpeg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div
          className='w-full aspect-square border-4 border-primary rounded-lg'
          style={{
            backgroundImage: "url('/images/gallery-3.jpeg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div
          className='w-full aspect-square border-4 border-primary rounded-lg'
          style={{
            backgroundImage: "url('/images/gallery-4.jpeg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div
          className='w-full aspect-square border-4 border-primary rounded-lg'
          style={{
            backgroundImage: "url('/images/gallery-5.jpeg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div
          className='w-full aspect-square border-4 border-primary rounded-lg'
          style={{
            backgroundImage: "url('/images/gallery-6.jpeg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div
          className='w-full aspect-square border-4 border-primary rounded-lg'
          style={{
            backgroundImage: "url('/images/gallery-7.jpeg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div
          className='w-full aspect-square border-4 border-primary rounded-lg'
          style={{
            backgroundImage: "url('/images/gallery-8.jpeg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div
          className='w-full aspect-square border-4 border-primary rounded-lg'
          style={{
            backgroundImage: "url('/images/gallery-9.jpeg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div
          className='w-full aspect-square border-4 border-primary rounded-lg'
          style={{
            backgroundImage: "url('/images/gallery-10.jpeg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div
          className='w-full aspect-square border-4 border-primary rounded-lg'
          style={{
            backgroundImage: "url('/images/gallery-1.jpeg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div
          className='w-full aspect-square border-4 border-primary rounded-lg'
          style={{
            backgroundImage: "url('/images/gallery-2.jpeg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div
          className='w-full aspect-square border-4 border-primary rounded-lg'
          style={{
            backgroundImage: "url('/images/gallery-3.jpeg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div
          className='w-full aspect-square border-4 border-primary rounded-lg'
          style={{
            backgroundImage: "url('/images/gallery-4.jpeg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div
          className='w-full aspect-square border-4 border-primary rounded-lg'
          style={{
            backgroundImage: "url('/images/gallery-5.jpeg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
      </div>
    </div>
  )
}
