import HomeSection from '@/components/HomeSection'

export default function Page() {
  return (
    <main className='h-screen overflow-scroll'>
      {/* <main className='snap-y snap-mandatory h-screen overflow-scroll'> */}
      <div className='min-h-screen'>
        {/* <div className='snap-start min-h-screen'> */}
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