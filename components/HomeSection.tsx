import MainGrid from './grids/MainGrid'
import AgendaGrid from './grids/AgendaGrid'
import OurJourneyGrid from './grids/OurJourneyGrid'
import GalleryGrid from './grids/GalleryGrid'
import QuoteGrid from './grids/QuoteGrid'
import AvenueGrid from './grids/AvenueGrid'

export default function HomeSection() {
  return (
    <div
      id='home'
      className='min-h-screen w-screen grid grid-cols-4 grid-rows-3 gap-4 md:gap-8 p-4 md:p-12'
    >
      <div className='col-span-4 row-span-2 md:col-span-2 md:row-span-2 w-full h-full'>
        <MainGrid />
      </div>

      <div className='col-span-4 md:col-span-2 row-span-1'>
        <AgendaGrid />
      </div>

      <div className='col-span-2 md:col-span-1 row-span-1'>
        <OurJourneyGrid />
      </div>

      <div className='col-span-2 md:col-span-1 row-span-1'>
        <GalleryGrid />
      </div>

      <div className='block md:hidden col-span-4 md:col-span-2 row-span-1'>
        <QuoteGrid />
      </div>

      <div className='hidden md:block col-span-4 row-span-2 md:col-span-2 md:row-span-1'>
        <AvenueGrid />
      </div>

      <div className='hidden md:block col-span-4 row-span-2 md:col-span-2 md:row-span-1'>
        <QuoteGrid />
      </div>

      <div className='block md:hidden col-span-4 row-span-2 md:col-span-2 md:row-span-1'>
        <AvenueGrid />
      </div>
    </div>
  )
}
