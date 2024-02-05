import AnimatedTextWord from '@/components/AnimatedTextWord'
import { cn } from '@/lib/utils'
import { WindSong } from 'next/font/google'
import TimelineItem from './TimelineItem'

const windSong = WindSong({ subsets: ['latin'], weight: '400' })

export default function Page() {
  return (
    <main className='relative container py-16'>
      <div className='flex items-center justify-center'>
        <AnimatedTextWord
          className={cn(windSong.className, 'text-[76px]')}
          text='Schedule'
        />
      </div>
      <div className='flex justify-around'>
        <div className='my-6'>
          <TimelineItem
            time='4:30 PM'
            title='Before the Ceremony'
            subTitle='Guests Arrive'
          >
            Welcome drinks and snacks. <br />
            Ushers assist with seating. <br />
            Background music sets the mood.
          </TimelineItem>

          <TimelineItem
            time='5:30 PM'
            title='Ceremony'
            subTitle='Wedding Ceremony'
          >
            Processional (bride, groom, wedding party). <br />
            Exchange of vows and rings. <br />
            Pronouncement of marriage. <br />
            Recessional.
          </TimelineItem>

          <TimelineItem
            time='6:00 PM'
            title='Cocktail Hour'
            subTitle='Cocktail reception'
          >
            Cocktail reception. <br />
            Appetizers served. <br />
            Photo booth and guestbook signing. <br />
            Background music continues.
          </TimelineItem>

          <TimelineItem
            time='7:00 PM'
            title='Reception'
            subTitle='Grand Entrance'
          >
            Introductions of the wedding party. <br />
            Welcome speech by the couple.
          </TimelineItem>

          <TimelineItem time='7:30 PM' title='' subTitle='Dinner'>
            Buffet or plated dinner service. <br />
            Toasts by the best man and maid of honor.
          </TimelineItem>
        </div>
        <div className='hidden lg:block'>
          <div
            className='rounded-lg w-[250px] h-[250px] shadow-lg border rotate-6'
            style={{
              backgroundImage: `url('/images/schedule-1.JPG')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
            }}
          ></div>
          <div
            className='rounded-lg w-[250px] h-[250px] shadow-lg border -rotate-6'
            style={{
              backgroundImage: `url('/images/schedule-2.JPG')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
            }}
          ></div>
          <div
            className='rounded-lg w-[250px] h-[250px] shadow-lg border'
            style={{
              backgroundImage: `url('/images/schedule-3.JPG')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
            }}
          ></div>
          <div
            className='rounded-lg w-[250px] h-[250px] shadow-lg border rotate-12'
            style={{
              backgroundImage: `url('/images/schedule-4.JPG')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
            }}
          ></div>
        </div>
      </div>
    </main>
  )
}
