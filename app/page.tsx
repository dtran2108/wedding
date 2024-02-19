import { cn } from '@/lib/utils'
import { Volume2 } from 'lucide-react'
import { Parisienne, Playball } from 'next/font/google'
import Image from 'next/image'

const parisienne = Parisienne({ subsets: ['latin'], weight: '400' })
const playball = Playball({ subsets: ['latin'], weight: '400' })

export default function Home() {
  return (
    <div className='min-h-screen p-4'>
      <div className='grid grid-cols-1 md:grid-cols-5 gap-4'>
        <div className='col-span-5 md:col-span-3 flex flex-col w-full space-y-4'>
          <div
            className='rounded-lg w-full h-[500px] p-6 flex items-end flex-col'
            style={{
              backgroundImage: "url('/images/wedding-calls.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <h2 className='text-2xl text-black/60'>Wedding Calls</h2>
            <h1 className={cn(parisienne.className, 'text-6xl mt-2')}>
              Mai & Tuan
            </h1>
          </div>
          <div className='rounded-lg w-full h-[150px] bg-blue p-8 flex items-center justify-center'>
            <div className='ml-auto flex items-center justify-center flex-col'>
              <h2 className='text-xl text-black/60'>Romantic</h2>
              <h1 className='text-2xl text-black'>Activity Schedule</h1>
            </div>
            <div className='mx-auto w-[1px] h-[90px] bg-black'></div>
            <div className='mr-auto  flex items-center justify-center flex-col'>
              <h2 className='text-xl text-black/60'>5-star quality</h2>
              <h1 className='text-2xl text-black'>Main Courses</h1>
            </div>
          </div>
        </div>
        <div className='col-span-5 md:col-span-2 flex flex-col w-full space-y-4'>
          <div className='grid grid-cols-2 gap-4'>
            <div
              className={cn(
                playball.className,
                'flex flex-col items-center justify-center space-y-4 w-full aspect-square bg-[#D7DFDE] rounded-lg'
              )}
            >
              <p>17:00 PM</p>
              <h1 className='text-4xl'>25 Feb.</h1>
              <p>2024</p>
            </div>
            <div
              className='flex flex-col items-end justify-between w-full h-auto bg-[#D7DFDE] rounded-lg'
              style={{
                backgroundImage: "url('/images/contact.png')",
                backgroundSize: 'cover',
                backgroundPosition: '-95px 0px',
              }}
            >
              <div className='bg-white rounded-lg w-[40px] aspect-square flex items-center justify-center cursor-pointer'>
                <Volume2 className='w-5 h-5' strokeWidth={1.25} />
              </div>
              <div className={cn(playball.className, 'text-right p-2')}>
                <p>Contact me</p>
                <h1 className='text-xl'>Ngo Minh Tuan</h1>
                <p>0933456789</p>
              </div>
            </div>
          </div>
          <div
            className='w-full h-full rounded-lg relative p-4'
            style={{
              backgroundImage: "url('/images/mai-house.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className='w-full h-full bg-white opacity-75 absolute top-0 left-0 z-10'></div>
            <div className='relative z-20'>
              <h2 className='text-2xl text-black/60'>Venue</h2>
              <h1 className={cn(parisienne.className, 'text-6xl mt-2')}>
                Mai House
              </h1>
            </div>
            <div className='flex justify-end absolute bottom-4 right-4 z-20'>
              <span className='w-[62px] h-[62px] rounded-lg bg-white mt-auto flex items-center justify-center'>
                <Image
                  src={'/images/mai-house-qr.png'}
                  width={50}
                  height={50}
                  alt='mai house qr'
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
