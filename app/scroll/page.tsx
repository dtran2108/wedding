import HomeSection from '@/components/HomeSection'
import OurStory from '@/components/OurStory'

export default function Page() {
  return (
    <main className='snap-y snap-mandatory h-screen overflow-scroll'>
      <div className='snap-start min-h-screen'>
        <HomeSection />
      </div>
      <div className='snap-start min-h-screen' id='our-story'>
        <OurStory />
      </div>
      {/* <div className='snap-start min-h-screen'>
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
