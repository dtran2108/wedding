import { cn } from '@/lib/utils'
import { Dosis } from 'next/font/google'

const dosis = Dosis({ subsets: ['latin'], weight: '400' })

export default function Agenda() {
  const timeline = [
    {
      time: '4:30 PM - 7:00 PM',
      content:
        'Reception begins. Dinner is served, toasts, first dance, cake cutting, and bouquet toss.',
      image: '/images/agenda-1.jpeg',
    },
    {
      time: '7:00 PM - 7:30 PM',
      content: 'Bride and groom thank guests and make rounds to each table.',
      image: '/images/agenda-2.jpeg',
    },
    {
      time: '7:30 PM - 9:00 PM',
      content:
        'Dancing and mingling continue. Photo booth and late-night snacks available.',
      image: '/images/agenda-3.jpeg',
    },
    {
      time: '9:00 PM',
      content: 'Last call for alcohol.',
      image: '/images/agenda-4.jpeg',
    },
    {
      time: '9:30 PM',
      content: 'Final dance and farewell.',
      image: '/images/agenda-5.png',
    },
    {
      time: '9:30 PM onwards',
      content: 'Newlyweds depart for honeymoon suite or after-party.',
      image: '/images/agenda-6.jpeg',
    },
  ]

  return (
    <div>
      <h1
        className={cn(
          dosis.className,
          'text-center text-5xl font-bold mt-2'
        )}
      >
        Agenda
      </h1>
      <div className='mt-8 grid grid-cols-1 gap-2'>
        {timeline.map((item, i) => (
          <div
            key={i}
            className='w-full aspect-square border-4 border-primary rounded-lg bg-white p-4 flex flex-col justify-center items-center'
          >
            <h1
              className={cn(
                dosis.className,
                'text-3xl font-bold text-center'
              )}
            >
              {item.time}
            </h1>
            <p className='text-center'>{item.content}</p>
            <div
              className='flex-1 h-full w-full rounded-lg mt-4'
              style={{
                backgroundImage: `url('${item.image}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  )
}
