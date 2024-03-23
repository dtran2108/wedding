'use client'

import MainGrid from './grids/MainGrid'
import AgendaGrid from './grids/AgendaGrid'
import OurJourneyGrid from './grids/OurJourneyGrid'
import GalleryGrid from './grids/GalleryGrid'
import QuoteGrid from './grids/QuoteGrid'
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog'
import OurStory from './OurStory'
import RSVPGrid from './grids/RSVPGrid'
import CountDownGrid from './grids/CountDownGrid'
import QuestionGrid from './grids/QuestionGrid'

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
      <DialogContent className='max-h-[80vh] overflow-y-scroll rounded-lg no-scrollbar'>
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
      className='min-h-screen md:h-screen w-screen grid grid-cols-12 grid-rows-12 gap-4 md:gap-6 p-4 md:p-8'
      style={{
        backgroundImage: `url('/images/paper-bg.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Grid
        isPopUp={isPopUp}
        popUpTrigger={
          <div className='col-span-4 row-span-2 md:col-span-4 md:row-span-10 w-full h-full'>
            <MainGrid />
          </div>
        }
        popUpContent={<OurStory isPopUp={isPopUp} />}
      />

      <Grid
        isPopUp={isPopUp}
        popUpTrigger={
          <div className='col-span-4 md:col-span-2 md:row-span-4'>
            <RSVPGrid />
          </div>
        }
        popUpContent={<></>}
      />

      <Grid
        isPopUp={isPopUp}
        popUpTrigger={
          <div className='col-span-2 md:col-span-6 row-span-4'>
            <AgendaGrid />
          </div>
        }
        popUpContent={<OurStory isPopUp={isPopUp} />}
      />

      <Grid
        isPopUp={isPopUp}
        popUpTrigger={
          <div className='col-span-2 md:col-span-4 row-span-5'>
            <OurJourneyGrid />
          </div>
        }
        popUpContent={<OurStory isPopUp={isPopUp} />}
      />

      <Grid
        isPopUp={isPopUp}
        popUpTrigger={
          <div className='col-span-2 md:col-span-4 row-span-3'>
            <QuoteGrid />
          </div>
        }
        popUpContent={<OurStory isPopUp={isPopUp} />}
      />

      <Grid
        isPopUp={isPopUp}
        popUpTrigger={
          <div className='col-span-2 md:col-span-4 row-span-5'>
            <GalleryGrid />
          </div>
        }
        popUpContent={<OurStory isPopUp={isPopUp} />}
      />

      <Grid
        isPopUp={isPopUp}
        popUpTrigger={
          <div className='col-span-2 md:col-span-4 row-span-3'>
            <QuestionGrid />
          </div>
        }
        popUpContent={<OurStory isPopUp={isPopUp} />}
      />

      <Grid
        isPopUp={isPopUp}
        popUpTrigger={
          <div className='col-span-2 md:col-span-4 row-span-2'>
            <CountDownGrid />
          </div>
        }
        popUpContent={<OurStory isPopUp={isPopUp} />}
      />
    </div>
  )
}
