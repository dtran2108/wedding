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
import Gallery from './Gallery'
import Agenda from './Agenda'
import Avenue from './Avenue'
import RSVPForm from './RSVPForm'

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
      <DialogContent className='max-h-[90vh] overflow-y-scroll rounded-lg no-scrollbar'>
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
      className='h-screen w-screen grid grid-cols-12 grid-rows-12 lg:grid-rows-12 gap-2 lg:gap-6 p-2 lg:p-8'
      style={{
        backgroundImage: `url('/images/paper-bg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Grid
        isPopUp={isPopUp}
        popUpTrigger={
          <div className='col-span-12 row-span-4 lg:col-span-4 lg:row-span-10'>
            <MainGrid />
          </div>
        }
        popUpContent={<OurStory isPopUp={isPopUp} />}
      />

      <Grid
        isPopUp={true}
        popUpTrigger={
          <div className='col-span-12 row-span-2 lg:col-span-2 lg:row-span-5'>
            <RSVPGrid />
          </div>
        }
        popUpContent={<RSVPForm />}
      />

      <Grid
        isPopUp={isPopUp}
        popUpTrigger={
          <div className='hidden lg:block col-span-2 md:col-span-6 row-span-5'>
            <AgendaGrid />
          </div>
        }
        popUpContent={<Agenda isPopUp={isPopUp} />}
      />

      <Grid
        isPopUp={isPopUp}
        popUpTrigger={
          <div className='col-span-7 row-span-3 lg:col-span-4 lg:row-span-4'>
            <OurJourneyGrid />
          </div>
        }
        popUpContent={<OurStory isPopUp={isPopUp} />}
      />

      <Grid
        isPopUp={isPopUp}
        popUpTrigger={
          <div className='block lg:hidden col-span-5 row-span-3'>
            <GalleryGrid />
          </div>
        }
        popUpContent={<Gallery isPopUp={isPopUp} />}
      />

      <Grid
        isPopUp={isPopUp}
        popUpTrigger={
          <div className='hidden lg:block lg:col-span-4 lg:row-span-3'>
            <QuoteGrid />
          </div>
        }
        popUpContent={<OurStory isPopUp={isPopUp} />}
      />

      <Grid
        isPopUp={isPopUp}
        popUpTrigger={
          <div className='hidden lg:block col-span-2 md:col-span-4 row-span-5'>
            <GalleryGrid />
          </div>
        }
        popUpContent={<Gallery isPopUp={isPopUp} />}
      />

      <Grid
        isPopUp={isPopUp}
        popUpTrigger={
          <div className='hidden lg:block col-span-2 md:col-span-4 row-span-4'>
            <QuestionGrid />
          </div>
        }
        popUpContent={<Avenue isPopUp={isPopUp} />}
      />

      <Grid
        isPopUp={isPopUp}
        popUpTrigger={
          <div className='col-span-12 row-span-1 lg:col-span-4 lg:row-span-3'>
            <CountDownGrid />
          </div>
        }
        popUpContent={<Agenda isPopUp={isPopUp} />}
      />

      <Grid
        isPopUp={isPopUp}
        popUpTrigger={
          <div className='block lg:hidden col-span-12 row-span-2'>
            <QuestionGrid />
          </div>
        }
        popUpContent={<Avenue isPopUp={isPopUp} />}
      />
    </div>
  )
}
