'use client'

import { cn } from '@/lib/utils'
import { Dialog, DialogTrigger } from './ui/dialog'
import { DialogContent } from './ui/dialog'
import Gallery from './Gallery'
import OurStory from './OurStory'
import RSVPButton from './dialog-buttons/RSVPButton'
import AgendaButton from './dialog-buttons/AgendaButton'
import MainFrameButton from './dialog-buttons/MainFrameButton'
import DressCodeButton from './dialog-buttons/DressCodeButton'
import ContactButton from './dialog-buttons/ContactButton'
import MenuButton from './dialog-buttons/MenuButton'

const mainStyle = 'w-full h-full border-4 border-primary rounded-lg'

export default function HomeSection() {
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
      <div className='w-screen min-h-screen grid lg:grid-cols-4 lg:grid-rows-4 lg:grid-flow-col lg:gap-4 grid-cols-3 grid-rows-4 grid-flow-row gap-2 backdrop-blur-lg p-2 lg:p-4'>
        <Dialog>
          <DialogTrigger asChild className='hidden lg:block'>
            <div
              className={cn(mainStyle, 'col-span-1 row-span-2 cursor-pointer')}
              style={{
                backgroundImage: "url('/images/1st-grid.jpeg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
          </DialogTrigger>
          <DialogContent className='max-h-[500px] overflow-y-scroll'>
            <Gallery />
          </DialogContent>
        </Dialog>
        <RSVPButton className='hidden lg:flex' />
        <Dialog>
          <DialogTrigger asChild className='hidden lg:block'>
            <div
              className={cn(mainStyle, 'col-span-2 row-span-1 cursor-pointer')}
              style={{
                backgroundImage: "url('/images/3rd-grid.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
          </DialogTrigger>
          <DialogContent className='max-h-[500px] overflow-y-scroll'>
            <OurStory />
          </DialogContent>
        </Dialog>
        <AgendaButton className='lg:col-span-2 lg:row-span-1 col-span-3' />
        <MainFrameButton className='lg:col-span-2 lg:row-span-2 col-span-3 row-span-2' />
        <Dialog>
          <DialogTrigger asChild className='block lg:hidden'>
            <div
              className={cn(mainStyle, 'col-span-1 row-span-2 cursor-pointer')}
              style={{
                backgroundImage: "url('/images/1st-grid.jpeg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
          </DialogTrigger>
          <DialogContent className='max-h-[500px] overflow-y-scroll'>
            <Gallery />
          </DialogContent>
        </Dialog>
        <DressCodeButton className='hidden lg:flex' />
        <ContactButton />
        <RSVPButton className='flex lg:hidden' />
        <MenuButton className='hidden lg:block' />
      </div>
    </div>
  )
}
