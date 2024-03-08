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
      <div className='w-screen h-screen grid grid-cols-4 grid-rows-4 gap-4 grid-flow-col backdrop-blur-lg p-4'>
        <Dialog>
          <DialogTrigger asChild>
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
        <RSVPButton />
        <Dialog>
          <DialogTrigger asChild>
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
        <AgendaButton />
        <MainFrameButton />
        <DressCodeButton />
        <ContactButton />
        <MenuButton />
      </div>
    </div>
  )
}
