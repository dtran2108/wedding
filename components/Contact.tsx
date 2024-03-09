import { cn } from '@/lib/utils'
import { Dosis } from 'next/font/google'

const dosis = Dosis({ subsets: ['latin'], weight: '400' })

export default function Contact() {
  return (
    <div>
      <h1
        className={cn(
          dosis.className,
          'text-center text-5xl font-bold mt-4'
        )}
      >
        Venue
      </h1>
      <div className='mt-8 grid grid-cols-1 gap-2'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.380393166596!2d106.68680248025244!3d10.782149931693272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f9c4935f865%3A0xa2c53d4836a0780e!2sKh%C3%A1ch%20s%E1%BA%A1n%20Mai%20House%20Saigon!5e0!3m2!1svi!2s!4v1708671078905!5m2!1svi!2s'
          width='100%'
          className='rounded-lg col-span-2'
          height='300'
          style={{ border: '0' }}
          allowFullScreen
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>
        <div className='w-full bg-[#ffe7e9] rounded-lg p-4'>
          <div>
            <p className='text-gray-500'>Address</p>
            <p className='text-black font-bold'>
              77 N 6th St, Brooklyn, NY 11249
            </p>
          </div>
          <div className='mt-8'>
            <p className='text-gray-500'>Phone Number</p>
            <p className='text-black font-bold'>0912368712</p>
          </div>
        </div>
      </div>
    </div>
  )
}
