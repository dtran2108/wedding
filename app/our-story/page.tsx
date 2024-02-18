import { cn } from '@/lib/utils'
import { Rouge_Script } from 'next/font/google'
import Image from 'next/image'

const rougeScript = Rouge_Script({ subsets: ['latin'], weight: '400' })

export default function Page() {
  return (
    <main className='relative container py-16'>
      <div className='flex items-center justify-center'>
        <h1 className={cn(rougeScript.className, 'text-[54px] lg:text-[76px]')}>
          Our Story
        </h1>
      </div>
      <div className='mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 w-full'>
        <div className='flex items-center justify-center flex-col'>
          <Image
            src='/images/best-man.png'
            alt='best man'
            width={210}
            height={210}
          />
          <h1 className={cn(rougeScript.className, 'text-4xl mb-4')}>
            Tom Hilton
          </h1>
          <h1>THE GROOM</h1>
          <p className='text-center text-sm mt-4'>
            The charismatic and enigmatic best man. With charm and mystery in
            equal measure, he adds intrigue to every celebration. Join us as we
            uncover the secrets behind Marcus Kingsley, the best man with a
            story to tell.
          </p>
        </div>
        <div className='flex items-center justify-center flex-col'>
          <Image
            src='/images/maid-of-honor.png'
            alt='maid-of-honor'
            width={150}
            height={150}
          />
          <h1 className={cn(rougeScript.className, 'text-4xl mb-4')}>
            Sarah Johnson
          </h1>
          <h1>THE BRIDE</h1>
          <p className='text-center text-sm mt-4'>
            The epitome of elegance and intrigue as the ultimate maid of honor.
            Uncover her captivating story as she navigates the world of weddings
            with finesse and mystery.
          </p>
        </div>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 w-full mt-16'>
        <div
          className='w-full h-[500px]'
          style={{
            backgroundImage: `url('/images/gallery/gallery-1.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        ></div>
        <div>
          <h1 className='text-2xl'>Coffee Catastrophe (April 2010)</h1>
          <p className='mt-8'>
            Sarah mistook Jack's brand new suit for a napkin holder,
            accidentally spilling her coffee all over him at a bustling café.
            Their first encounter involved a dry cleaner, a lot of apologies,
            and an unexpected bond over stained garments.
          </p>
        </div>
        <div className='hidden lg:block'>
          <h1 className='text-2xl text-right'>Turbulent Ties (August 2012)</h1>
          <p className='mt-8'>
            Sarah, prone to motion sickness, ended up in Jack's lap during a
            bumpy flight to Paris. Jack, attempting to be suave, mistook her
            queasy grip for a gesture of affection, leading to an awkward yet
            oddly cozy journey across the Atlantic.
          </p>
        </div>
        <div
          className='w-full h-[500px]'
          style={{
            backgroundImage: `url('/images/gallery/gallery-2.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        ></div>
        <div className='block lg:hidden'>
          <h1 className='text-2xl text-right'>Turbulent Ties (August 2012)</h1>
          <p className='mt-8'>
            Sarah, prone to motion sickness, ended up in Jack's lap during a
            bumpy flight to Paris. Jack, attempting to be suave, mistook her
            queasy grip for a gesture of affection, leading to an awkward yet
            oddly cozy journey across the Atlantic.
          </p>
        </div>
        <div className='hidden lg:block'>
          <h1 className='text-2xl text-right'>Turbulent Ties (August 2012)</h1>
          <p className='mt-8'>
            Sarah, prone to motion sickness, ended up in Jack's lap during a
            bumpy flight to Paris. Jack, attempting to be suave, mistook her
            queasy grip for a gesture of affection, leading to an awkward yet
            oddly cozy journey across the Atlantic.
          </p>
        </div>
        <div
          className='w-full h-[500px]'
          style={{
            backgroundImage: `url('/images/gallery/gallery-3.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        ></div>
        <div className='block lg:hidden'>
          <h1 className='text-2xl text-right'>Turbulent Ties (August 2012)</h1>
          <p className='mt-8'>
            Sarah, prone to motion sickness, ended up in Jack's lap during a
            bumpy flight to Paris. Jack, attempting to be suave, mistook her
            queasy grip for a gesture of affection, leading to an awkward yet
            oddly cozy journey across the Atlantic.
          </p>
        </div>
      </div>
    </main>
  )
}
