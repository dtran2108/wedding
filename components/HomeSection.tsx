import { cn } from '@/lib/utils'
import { Water_Brush } from 'next/font/google'
import Image from 'next/image'
import Divider from './Divider'

const waterBrush = Water_Brush({ subsets: ['latin'], weight: '400' })

export default function HomeSection() {
  const mainStyle = 'w-full h-full border-4 border-primary rounded-lg'

  return (
    <div
      id='home'
      className='min-h-screen w-screen'
      style={{
        backgroundImage: "url('/images/background.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='w-screen h-screen grid grid-cols-4 grid-rows-4 gap-4 grid-flow-col backdrop-blur-lg p-4'>
        <div
          className={cn(mainStyle, 'col-span-1 row-span-2')}
          style={{
            backgroundImage: "url('/images/1st-grid.jpeg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div
          className={cn(
            mainStyle,
            'col-span-1 row-span-1 bg-white flex items-center justify-center flex-col space-y-3'
          )}
        >
          <Image
            src='/images/registration.png'
            width={100}
            height={100}
            alt='registration QR'
          />
          <h1
            className={cn(
              waterBrush.className,
              'font-bold text-primary text-2xl'
            )}
          >
            REGISTRATION
          </h1>
        </div>
        <div
          className={cn(mainStyle, 'col-span-2 row-span-1')}
          style={{
            backgroundImage: "url('/images/3rd-grid.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div
          className={cn(
            mainStyle,
            'col-span-2 row-span-1 bg-white flex items-center justify-center flex-col px-8'
          )}
        >
          <h1 className={cn(waterBrush.className, 'font-bold text-4xl')}>
            Countdown
          </h1>
          <Divider
            className={cn(
              waterBrush.className,
              'font-bold text-3xl text-primary w-full'
            )}
          >
            &
          </Divider>
          <div className='flex items-center justify-around w-full'>
            <div className='flex items-center justify-center flex-col text-primary'>
              <h1 className='text-4xl font-bold'>15</h1>
              <p>Days</p>
            </div>
            <div className='flex items-center justify-center flex-col text-primary'>
              <h1 className='text-4xl font-bold'>15</h1>
              <p>Hours</p>
            </div>
            <div className='flex items-center justify-center flex-col text-primary'>
              <h1 className='text-4xl font-bold'>38</h1>
              <p>Minutes</p>
            </div>
          </div>
        </div>
        <div className={cn(mainStyle, 'col-span-2 row-span-2 overflow-hidden')}>
          <div
            className='relative flex items-center justify-center flex-col p-4'
            style={{
              backgroundImage: "url('/images/5th-grid.jpeg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className='absolute bg-white/80 left-0 top-0 w-full h-full z-10'></div>
            <h1
              className={cn(
                waterBrush.className,
                'font-bold text-5xl w-full text-center mb-4 relative z-20'
              )}
            >
              {' '}
              Evelyn & Jaiden
            </h1>
            <div className='flex items-center justify-evenly w-full relative z-20'>
              <div className={cn(waterBrush.className)}>
                <h1 className='text-center text-4xl font-bold'>Tokyo</h1>
                <h1 className='text-center text-4xl font-bold'>Japan</h1>
              </div>
              <div
                className='rounded-t-full w-[200px] h-[215px]'
                style={{
                  backgroundImage: "url('/images/wedding.jpeg')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'top',
                }}
              ></div>
              <div className={cn(waterBrush.className)}>
                <h1 className='text-center text-4xl font-bold'>25</h1>
                <h1 className='text-center text-4xl font-bold'>03</h1>
                <h1 className='text-center text-4xl font-bold'>28</h1>
              </div>
            </div>
          </div>
          <div
            className={cn(
              waterBrush.className,
              'bg-white py-4 text-primary text-2xl flex items-center justify-center'
            )}
          >
            Love you like a love song baby
          </div>
        </div>
        <div
          className={cn(
            mainStyle,
            'col-span-1 row-span-1 p-4 flex items-center justify-center space-y-6 flex-col bg-white'
          )}
        >
          <div className='flex items-center justify-center space-x-4'>
            <span className='w-[40px] aspect-square rounded-full bg-[#ffecf5]'></span>
            <span className='w-[40px] aspect-square rounded-full bg-[#ffe7e9]'></span>
            <span className='w-[40px] aspect-square rounded-full bg-[#fdcee0]'></span>
            <span className='w-[40px] aspect-square rounded-full bg-[#f2bfd2]'></span>
          </div>
          <h1
            className={cn(
              waterBrush.className,
              'text-primary font-bold text-3xl'
            )}
          >
            DRESS CODE
          </h1>
        </div>
        <div
          className={cn(
            mainStyle,
            'col-span-1 row-span-2 border-none p-2 flex flex-col justify-between items-center'
          )}
          style={{
            backgroundImage: "url('/images/japanese-restaurant.jpeg')",
            backgroundSize: 'cover',
            backgroundPosition: 'top',
          }}
        >
          <div></div>
          <div className='bg-white rounded-b-lg h-32 w-full flex items-center justify-center'>
            <div>
              <p className='mb-2'>77 N 6th St, Brooklyn, NY 11249</p>
              <h1 className={cn(waterBrush.className, 'text-4xl font-bold')}>
                ZENKICHI
              </h1>
            </div>
          </div>
        </div>
        <div
          className={cn(
            mainStyle,
            'col-span-1 row-span-2 bg-white p-4 flex flex-col items-center justify-center text-center'
          )}
        >
          <h1
            className={cn(
              waterBrush.className,
              'text-2xl text-primary font-bold mb-4'
            )}
          >
            WEDDING MENU
          </h1>
          <h2 className={cn(waterBrush.className, 'text-2xl font-bold')}>
            Main Course
          </h2>
          <p>Herb-Crusted Filet Mignon</p>
          <p>Mushroom Risotto</p>
          <p>Stuffed Bell Peppers</p>
          <h2 className={cn(waterBrush.className, 'text-2xl font-bold mt-4')}>
            Dessert
          </h2>
          <p>Wedding Cake</p>
          <p>Assorted Miniature Desserts</p>
          <p>Gourmet Ice Cream Bar</p>
        </div>
      </div>
    </div>
  )
}
