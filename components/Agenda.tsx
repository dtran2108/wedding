import { cn } from '@/lib/utils'
import { Water_Brush } from 'next/font/google'

const waterBrush = Water_Brush({ subsets: ['latin'], weight: '400' })

export default function Agenda() {
  const timeline = [
    {
      time: '4:30 PM - 7:00 PM',
      content:
        'Reception begins. Dinner is served, toasts, first dance, cake cutting, and bouquet toss.',
      image: '/images/1st-grid.jpeg',
    },
    {
      time: '7:00 PM - 7:30 PM',
      content: 'Bride and groom thank guests and make rounds to each table.',
      image: '/images/1st-grid.jpeg',
    },
    {
      time: '7:30 PM - 9:00 PM',
      content:
        'Dancing and mingling continue. Photo booth and late-night snacks available.',
      image: '/images/1st-grid.jpeg',
    },
    {
      time: '9:00 PM',
      content: 'Last call for alcohol.',
      image: '/images/1st-grid.jpeg',
    },
    {
      time: '9:30 PM',
      content: 'Final dance and farewell.',
      image: '/images/1st-grid.jpeg',
    },
    {
      time: '9:30 PM onwards',
      content: 'Newlyweds depart for honeymoon suite or after-party.',
      image: '/images/1st-grid.jpeg',
    },
  ]

  return (
    <div
      id='agenda'
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
            Agenda
          </h1>
          <div className='mt-8 grid grid-cols-3 gap-4'>
            {timeline.map((item, i) => (
              <div
                key={i}
                className='w-full aspect-square border-4 border-primary rounded-lg bg-white p-4 flex flex-col justify-center items-center'
              >
                <h1
                  className={cn(
                    waterBrush.className,
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
      </div>
    </div>
  )
}
