import { cn } from '@/lib/utils'
import { Neuton } from 'next/font/google'

const neuton = Neuton({ subsets: ['latin'], weight: '400' })

export default function Quote() {
  return (
    <div
      className='relative w-full min-h-[500px] flex items-center justify-center p-8'
      style={{
        backgroundImage: "url('/images/NAU_1755.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className='bg-white/70 w-full md:w-7/12 flex items-center justify-center'>
        <div className='bg-white m-8 flex flex-col items-center justify-center p-8 w-full'>
          <h2
            className={cn(neuton.className, 'text-xl text-[#666] text-center')}
          >
            &quot;INDIVIDUALLY WE ARE WHOLE,
            <br /> BUT
            <br /> TOGETHER WE ARE MORE.&quot;
          </h2>
          <p className={cn(neuton.className, 'text-gold')}>
            - Anne Hathaway
          </p>
        </div>
      </div>
    </div>
  )
}
