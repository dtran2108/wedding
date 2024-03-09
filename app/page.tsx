import Agenda from '@/components/Agenda'
import Bridesmaid from '@/components/Bridesmaid'
import Contact from '@/components/Contact'
import Gallery from '@/components/Gallery'
import Groomsmen from '@/components/Groomsmen'
import HomeSection from '@/components/HomeSection'
import OurStory from '@/components/OurStory'

export default function Home() {
  return (
    <main className='snap-y snap-mandatory h-screen overflow-scroll'>
      <div className='snap-start min-h-screen'>
        <HomeSection />
      </div>
      {/* <div className='snap-start min-h-screen'>
        <OurStory />
      </div>
      <div className='snap-start min-h-screen'>
        <Agenda />
      </div>
      <div className='snap-start min-h-screen'>
        <Gallery />
      </div>
      <div className='snap-start min-h-screen'>
        <Contact />
      </div> */}
    </main>
  )
}
