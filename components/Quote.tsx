import { cn } from '@/lib/utils'
import { Neuton } from 'next/font/google'

const neuton = Neuton({ subsets: ['latin'], weight: '400' })

export default function Quote() {
  return (
    <div
      className='relative w-full min-h-[400px] flex items-center justify-center p-8'
      style={{
        backgroundImage: "url('/images/quote.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'top',
      }}
    >
      <div className='bg-white/70 w-full md:w-7/12 flex items-center justify-center'>
        <div className='bg-white m-8 flex flex-col items-center justify-center p-8'>
          <h2
            className={cn(neuton.className, 'text-xl text-[#666] text-center')}
          >
            &quot;THE PROBABILITY OF SEPARATE WORLDS MEETING IS VERY SMALL.
            <br /> THE LURE OF IT IS IMMENSE.
            <br /> WE SEND STARSHIPS. WE FALL IN LOVE.&quot;
          </h2>
          <p className={cn(neuton.className, 'text-gold')}>
            - Jeanette Winterson
          </p>
        </div>
      </div>
    </div>
  )
}
