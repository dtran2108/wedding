'use client'

import { cn } from '@/lib/utils'
import localFont from 'next/font/local'

const dreamAvenue = localFont({
  src: './fonts/DreamAvenue/Dream-Avenue.otf',
})

export default function HomeSection() {
  const mainStyle = 'w-full h-full rounded-lg'
  const boxShadow = '0px 8px 24px 0px #AE585240'

  const scrollToHash = function (element_id: string) {
    const element = document.getElementById(element_id)
    element?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    })
  }

  return (
    <div
      id='home'
      className='min-h-screen w-screen grid grid-cols-4 grid-rows-3 gap-8 p-12'
    >
      <div
        onClick={() => scrollToHash('gallery')}
        className={cn(
          mainStyle,
          'col-span-4 row-span-2 md:col-span-2 md:row-span-2 cursor-pointer',
          'flex flex-col items-between justify-between p-8'
        )}
        style={{
          backgroundImage: "url('/images/laura-keith.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          boxShadow: boxShadow,
        }}
      >
        <h2 className={'uppercase text-white text-xl text-right'}>
          Laura & <br /> Keith
        </h2>
        <h1
          className={
            (cn(dreamAvenue.className), 'uppercase text-white text-3xl')
          }
        >
          For the two of us, <br />
          home isn&apos;t a place.
        </h1>
      </div>

      <div
        className={cn(
          mainStyle,
          'col-span-4 md:col-span-2 row-span-1 bg-primary text-primary-foreground flex flex-col p-8 items-center justify-center space-y-6'
        )}
        style={{ boxShadow: boxShadow }}
      >
        <h1 className={(cn(dreamAvenue.className), 'text-3xl')}>Agenda</h1>
        <div className='flex items-center justify-evenly w-full'>
          <div
            className='w-[96px] aspect-square rounded-full'
            style={{
              backgroundImage: "url('/images/agenda-1.jpeg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
          <div
            className='w-[96px] aspect-square rounded-full'
            style={{
              backgroundImage: "url('/images/agenda-2.jpeg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
          <div
            className='w-[96px] aspect-square rounded-full'
            style={{
              backgroundImage: "url('/images/agenda-3.jpeg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
        </div>
      </div>

      <div
        className={cn(
          mainStyle,
          'col-span-2 md:col-span-1 row-span-1 bg-secondary text-secondary-foreground p-4 aspect-square md:aspect-auto'
        )}
        style={{ boxShadow: boxShadow }}
      >
        <h1 className={cn(dreamAvenue.className, 'text-3xl text-center')}>
          Our Journey
        </h1>
      </div>

      <div
        className={cn(
          mainStyle,
          'col-span-2 md:col-span-1 row-span-1 aspect-square md:aspect-auto'
        )}
        style={{
          boxShadow: boxShadow,
          backgroundImage: "url('/images/gallery-cover.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      <div
        className={cn(
          mainStyle,
          'col-span-4 row-span-2 md:col-span-2 md:row-span-1 bg-primary text-primary-foreground relative flex flex-col p-6 justify-between'
        )}
        style={{ boxShadow: boxShadow }}
      >
        <h1 className={cn(dreamAvenue.className, 'text-xl')}>
          “If I know what love is, it is because of you.”
        </h1>
        <h2>
          Let your audience know where to find you. <br />
          123 Anywhere St., Any City <br />
          ST 12345
        </h2>
      </div>

      <div
        className={cn(
          mainStyle,
          'col-span-4 md:col-span-2 row-span-1 bg-white text-primary flex flex-col items-center p-6 space-y-4'
        )}
        style={{ boxShadow: boxShadow }}
      >
        <h1 className='text-xl uppercase'>Your Sub-Header Goes Here</h1>
        <p className='text-center'>
          This is prime space! Use it to elaborate on your attention-grabbing
          section title. Explain what this section is about, share some details,
          and give just the right amount of information to get the audience
          hooked.
        </p>
      </div>
    </div>
  )
}
