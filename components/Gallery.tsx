import { cn } from '@/lib/utils'
import { Water_Brush } from 'next/font/google'
import Image from 'next/image'

const waterBrush = Water_Brush({ subsets: ['latin'], weight: '400' })

export default function Gallery() {
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
        <div className='w-full h-full border-4 border-primary rounded-lg bg-white p-4'>
          <h1
            className={cn(
              waterBrush.className,
              'text-center text-5xl font-bold'
            )}
          >
            Gallery
          </h1>
          <div className='grid grid-cols-5 gap-4 mt-8'>
            <div
              className='w-full aspect-square border-4 border-primary rounded-lg'
              style={{
                backgroundImage: "url('/images/1st-grid.jpeg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
            <div
              className='w-full aspect-square border-4 border-primary rounded-lg'
              style={{
                backgroundImage: "url('/images/1st-grid.jpeg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
            <div
              className='w-full aspect-square border-4 border-primary rounded-lg'
              style={{
                backgroundImage: "url('/images/1st-grid.jpeg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
            <div
              className='w-full aspect-square border-4 border-primary rounded-lg'
              style={{
                backgroundImage: "url('/images/1st-grid.jpeg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
            <div
              className='w-full aspect-square border-4 border-primary rounded-lg'
              style={{
                backgroundImage: "url('/images/1st-grid.jpeg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
            <div
              className='w-full aspect-square border-4 border-primary rounded-lg'
              style={{
                backgroundImage: "url('/images/1st-grid.jpeg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
            <div
              className='w-full aspect-square border-4 border-primary rounded-lg'
              style={{
                backgroundImage: "url('/images/1st-grid.jpeg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
            <div
              className='w-full aspect-square border-4 border-primary rounded-lg'
              style={{
                backgroundImage: "url('/images/1st-grid.jpeg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
            <div
              className='w-full aspect-square border-4 border-primary rounded-lg'
              style={{
                backgroundImage: "url('/images/1st-grid.jpeg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
            <div
              className='w-full aspect-square border-4 border-primary rounded-lg'
              style={{
                backgroundImage: "url('/images/1st-grid.jpeg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
            <div
              className='w-full aspect-square border-4 border-primary rounded-lg'
              style={{
                backgroundImage: "url('/images/1st-grid.jpeg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
            <div
              className='w-full aspect-square border-4 border-primary rounded-lg'
              style={{
                backgroundImage: "url('/images/1st-grid.jpeg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
            <div
              className='w-full aspect-square border-4 border-primary rounded-lg'
              style={{
                backgroundImage: "url('/images/1st-grid.jpeg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
            <div
              className='w-full aspect-square border-4 border-primary rounded-lg'
              style={{
                backgroundImage: "url('/images/1st-grid.jpeg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
            <div
              className='w-full aspect-square border-4 border-primary rounded-lg'
              style={{
                backgroundImage: "url('/images/1st-grid.jpeg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}
