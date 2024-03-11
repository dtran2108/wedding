'use client'

import MainGrid from './grids/MainGrid'
import AgendaGrid from './grids/AgendaGrid'
import OurJourneyGrid from './grids/OurJourneyGrid'
import GalleryGrid from './grids/GalleryGrid'
import QuoteGrid from './grids/QuoteGrid'
import AvenueGrid from './grids/AvenueGrid'
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog'
import OurStory from './OurStory'
import Agenda from './Agenda'
import Gallery from './Gallery'

const Grid = ({
  isPopUp,
  popUpTrigger,
  popUpContent,
}: {
  isPopUp?: boolean
  popUpTrigger?: React.ReactNode
  popUpContent?: React.ReactNode
}) => {
  return isPopUp ? (
    <Dialog>
      <DialogTrigger asChild>{popUpTrigger}</DialogTrigger>
      <DialogContent className='max-h-[80vh] overflow-y-scroll rounded-lg'>
        {popUpContent}
      </DialogContent>
    </Dialog>
  ) : (
    popUpTrigger
  )
}

export default function HomeSection({ isPopUp }: { isPopUp?: boolean }) {
  return (
    <div
      id='home'
      className='min-h-screen w-screen grid grid-cols-4 grid-rows-3 gap-4 md:gap-8 p-4 md:p-12'
    >
      <Grid
        isPopUp={isPopUp}
        popUpTrigger={
          <div className='col-span-4 row-span-2 md:col-span-2 md:row-span-2 w-full h-full'>
            <MainGrid />
          </div>
        }
        popUpContent={<OurStory isPopUp={isPopUp} />}
      />

      <Grid
        isPopUp={isPopUp}
        popUpTrigger={
          <div className='col-span-4 md:col-span-2 row-span-1'>
            <AgendaGrid />
          </div>
        }
        popUpContent={<Agenda isPopUp={isPopUp} />}
      />

      <Grid
        isPopUp={isPopUp}
        popUpTrigger={
          <div className='col-span-2 md:col-span-1 row-span-1'>
            <OurJourneyGrid />
          </div>
        }
        popUpContent={<OurStory isPopUp={isPopUp} />}
      />

      <Grid
        isPopUp={isPopUp}
        popUpTrigger={
          <div className='col-span-2 md:col-span-1 row-span-1'>
            <GalleryGrid />
          </div>
        }
        popUpContent={<Gallery isPopUp={isPopUp} />}
      />

      <Grid
        isPopUp={isPopUp}
        popUpTrigger={
          <div className='block md:hidden col-span-4 md:col-span-2 row-span-1'>
            <QuoteGrid />
          </div>
        }
        popUpContent={<OurStory isPopUp={isPopUp} />}
      />

      <Grid
        isPopUp={isPopUp}
        popUpTrigger={
          <div className='hidden md:block col-span-4 row-span-2 md:col-span-2 md:row-span-1'>
            <AvenueGrid />
          </div>
        }
        popUpContent='hello'
      />

      <Grid
        isPopUp={isPopUp}
        popUpTrigger={
          <div className='hidden md:block col-span-4 row-span-2 md:col-span-2 md:row-span-1'>
            <QuoteGrid />
          </div>
        }
        popUpContent={<OurStory isPopUp={isPopUp} />}
      />

      <Grid
        isPopUp={isPopUp}
        popUpTrigger={
          <div className='block md:hidden col-span-4 row-span-2 md:col-span-2 md:row-span-1'>
            <AvenueGrid />
          </div>
        }
        popUpContent='hello'
      />
    </div>
  )
}
