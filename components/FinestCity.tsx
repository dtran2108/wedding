import { cn } from '@/lib/utils'
import { Fleur_De_Leah, Neuton } from 'next/font/google'

const allura = Fleur_De_Leah({ subsets: ['latin'], weight: '400' })
const neuton = Neuton({ subsets: ['latin'], weight: '400' })

export default function FinestCity() {
  return (
    <div
      className='relative w-full min-h-[500px] flex items-center justify-center py-8'
      style={{
        backgroundImage: "url('/images/registry.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='my-auto text-center w-9/12 relative z-20 flex flex-col items-center justify-center'>
        <h1
          className={cn(allura.className, 'text-5xl md:text-6xl leading-normal text-black')}
        >
          Americas finest city
        </h1>
        <p className={cn(neuton.className, 'text-center text-black my-4')}>
          Here are some suggestions we think you might enjoy while you are
          visiting sunny San Diego.
        </p>
        <h1
          className={cn(
            allura.className,
            'text-4xl leading-normal text-black mb-4'
          )}
        >
          To do
        </h1>
        <div
          className={cn(neuton.className, 'grid grid-cols-1 md:grid-cols-3 gap-8 max-w-lg')}
        >
          <div className='text-center flex flex-col items-center justify-center'>
            <h1 className='text-black'>RECREATIONAL</h1>
            <a className='text-gold'>Petco Park</a>
            <a className='text-gold'>San Diego Zoo</a>
            <a className='text-gold'>Sea World</a>
            <a className='text-gold'>San Diego County Fair</a>
          </div>
          <div className='text-center flex flex-col items-center justify-center'>
            <h1 className='text-black'>BEACHES</h1>
            <a className='text-gold'>Mission Beach</a>
            <a className='text-gold'>Pacific Beach</a>
            <a className='text-gold'>La Jolla Cove</a>
            <a className='text-gold'>Sunset Cliffs Natural Park</a>
          </div>
          <div className='text-center flex flex-col items-center justify-center'>
            <h1 className='text-black'>CULTURE</h1>
            <a className='text-gold'>Balboa Park</a>
            <a className='text-gold'>USS Midway Museum</a>
            <a className='text-gold'>Birch Aquarium at Scripps</a>
            <a className='text-gold'>MCASD</a>
          </div>
        </div>
        <div className='my-4 h-[1px] w-[100px] bg-black'></div>
        <h1
          className={cn(
            allura.className,
            'text-4xl leading-normal text-black mb-4'
          )}
        >
          To eat
        </h1>
        <div
          className={cn(neuton.className, 'grid grid-cols-1 md:grid-cols-3 gap-8 max-w-lg')}
        >
          <div className='text-center flex flex-col items-center justify-center'>
            <h1 className='text-black'>DOWNTOWN</h1>
            <a className='text-gold'>Petco Park</a>
            <a className='text-gold'>San Diego Zoo</a>
            <a className='text-gold'>Sea World</a>
            <a className='text-gold'>San Diego County Fair</a>
          </div>
          <div className='text-center flex flex-col items-center justify-center'>
            <h1 className='text-black'>HILLCREST</h1>
            <a className='text-gold'>Mission Beach</a>
            <a className='text-gold'>Pacific Beach</a>
            <a className='text-gold'>La Jolla Cove</a>
            <a className='text-gold'>Sunset Cliffs Natural Park</a>
          </div>
          <div className='text-center flex flex-col items-center justify-center'>
            <h1 className='text-black'>PACIFIC BEACH</h1>
            <a className='text-gold'>Balboa Park</a>
            <a className='text-gold'>USS Midway Museum</a>
            <a className='text-gold'>Birch Aquarium at Scripps</a>
            <a className='text-gold'>MCASD</a>
          </div>
        </div>
      </div>
    </div>
  )
}
