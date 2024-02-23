import { cn } from '@/lib/utils'
import { Water_Brush } from 'next/font/google'

const waterBrush = Water_Brush({ subsets: ['latin'], weight: '400' })

export default function Groomsmen() {
  return (
    <div
      id='groomsmen'
      className='w-screen'
      style={{
        backgroundImage: "url('/images/background.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='w-full h-full backdrop-blur-lg p-4'>
        <div className='w-full h-full border-4 border-primary rounded-lg bg-white p-4'>
          <h1
            className={cn(
              waterBrush.className,
              'text-center text-5xl font-bold mt-4'
            )}
          >
            Groomsmen
          </h1>
          <div className='grid grid-cols-3 gap-4'>
            <div className='w-full p-4 flex flex-col space-y-4 items-center justify-center'>
              <div
                className='rounded-full w-40 aspect-square border-4 border-primary'
                style={{
                  backgroundImage: "url('/images/groom-1.jpeg')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
              <h1
                className={cn(
                  waterBrush.className,
                  'text-center text-primary text-3xl font-bold'
                )}
              >
                Alina Nguyen
              </h1>
              <p className='text-center text-sm'>
                Alina and I were the unlikliest of friends, until we both
                discovered each other's love for karaoke. We met in 2005 and
                over the years, she has become one of my very best friends. She
                is particularly excited for the wedding, as her support for
                straight marriage has been unwavering. Even though she's busy
                traveling the world, she still makes a point to be there for me.
              </p>
            </div>
            <div className='w-full p-4 flex flex-col space-y-4 items-center justify-center'>
              <div
                className='rounded-full w-40 aspect-square border-4 border-primary'
                style={{
                  backgroundImage: "url('/images/groom-2.jpeg')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
              <h1
                className={cn(
                  waterBrush.className,
                  'text-center text-primary text-3xl font-bold'
                )}
              >
                Kate Gaffney
              </h1>
              <p className='text-center text-sm'>
                Kate and I met when I got a job at Digitaria taking over her
                role as the new receptionist. We became really good work buddies
                and over time, really great friends. During the beginning of our
                friendship, I had no idea she was working as a double agent for
                Z. That's just how good she is. Now she's in LA pursuing her
                dreams and I'm in Chicago pursuing mine. And when we get
                together, we pick up right where we left off... making funny
                Asian jokes.
              </p>
            </div>
            <div className='w-full p-4 flex flex-col space-y-4 items-center justify-center'>
              <div
                className='rounded-full w-40 aspect-square border-4 border-primary'
                style={{
                  backgroundImage: "url('/images/groom-3.jpeg')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
              <h1
                className={cn(
                  waterBrush.className,
                  'text-center text-primary text-3xl font-bold'
                )}
              >
                Madison Le
              </h1>
              <p className='text-center text-sm'>
                Maddy and I met shortly after graduating high school. We had so
                much in common (middle name, last name, we both were
                manicurists), we started telling people we were related. We
                decided to become roomies in 2006 and lived together for a year.
                During that time, we've had plenty of fond memories, including
                the time we wore the cutest shoes to Tijuana and couldn't walk
                back to the car or once, we left the doctor's office with burnt
                fingers and were so pitiful, we started whining in Vietnamese.
                Good times
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
