import Agenda from '@/components/Agenda'
import Avenue from '@/components/Avenue'
import Gallery from '@/components/Gallery'
import HomeSection from '@/components/HomeSection'
import OurStory from '@/components/OurStory'

export default function Page() {
  return (
    <main className='snap-y snap-mandatory h-screen overflow-scroll no-scrollbar'>
      <div className='snap-start min-h-screen'>
        <HomeSection />
      </div>
      <div className='snap-start min-h-screen' id='our-story'>
        <OurStory />
      </div>
      <div className='snap-start min-h-screen' id='agenda'>
        <Agenda />
      </div>
      <div className='snap-start min-h-screen' id='gallery'>
        <Gallery />
      </div>
      <div className='snap-start min-h-screen' id='avenue'>
        <Avenue />
      </div>
    </main>
  )
}
