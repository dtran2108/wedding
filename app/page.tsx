import Agenda from '@/components/Agenda'
import Bridesmaid from '@/components/Bridesmaid'
import Contact from '@/components/Contact'
import Gallery from '@/components/Gallery'
import Groomsmen from '@/components/Groomsmen'
import HomeSection from '@/components/HomeSection'
import OurStory from '@/components/OurStory'

export default function Home() {
  return (
    <>
      <HomeSection />
      <OurStory />
      {/* <Bridesmaid />
      <Groomsmen /> */}
      <Agenda />
      <Gallery />
      <Contact />
    </>
  )
}
