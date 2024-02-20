import Divider from '@/components/Divider'
import NavBar from '@/components/NavBar'
import { cn } from '@/lib/utils'
import { Fleur_De_Leah, Neuton } from 'next/font/google'
import OurStory from '@/components/OurStory'
import Gallery from '@/components/Gallery'
import Quote from '@/components/Quote'
import Registry from '@/components/Registry'
import RestYourHead from '@/components/RestYourHead'
import FinestCity from '@/components/FinestCity'

const allura = Fleur_De_Leah({ subsets: ['latin'], weight: '400' })
const neuton = Neuton({ subsets: ['latin'], weight: '400' })

export default function Home() {
  return (
    <main className='min-h-screen'>
      <div
        className='relative w-full min-h-[100vh] flex items-center flex-col justify-between py-4'
        style={{
          backgroundImage: "url('/images/header.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
        }}
      >
        <div className='absolute w-full h-[100vh] top-0 left-0 bg-black/60 z-10'></div>
        <div className='my-auto text-center w-9/12 md:w-6/12 relative z-20'>
          <h1 className='text-4xl'>
            D <span className={allura.className}>&</span> Đ
          </h1>
          <Divider>
            <span className='text-md md:text-2xl'>20.04.2024</span>
          </Divider>
          <h1 className={cn(allura.className, 'text-7xl md:text-8xl leading-normal my-8')}>
            Duy
            <br />& Điền
          </h1>
          <Divider>
            <span className='text-md md:text-2xl'>ARE GETTING MARRIED</span>
          </Divider>
        </div>
      </div>
      <NavBar />
      <div id='our-story'>
        <OurStory />
      </div>
      <div id='gallery'>
        <Gallery />
        <Quote />
      </div>
      <div id='registry'>
        <Registry />
        <RestYourHead />
      </div>
      <div id='to-do'>
        <FinestCity />
      </div>
      <div
        id='add-to-our-story'
        className='relative w-full min-h-[750px] flex justify-center py-8'
        style={{
          backgroundImage: "url('/images/add-to-our-story.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
        }}
      >
        <div className=' text-center w-9/12 relative z-20 flex flex-col max-w-lg'>
          <h1
            className={cn(
              allura.className,
              'text-4xl md:text-6xl leading-normal text-gold'
            )}
          >
            Add to our story
          </h1>
          <h2
            className={cn(
              neuton.className,
              'text-center text-black my-4 font-bold'
            )}
          >
            #DUYANDDIEN
          </h2>
          <p className={cn(neuton.className, 'text-center text-black')}>
            Capture memories at any point during the festivities and post them
            to Instagram using #duyanddien and they will be projected throughout
            the reception. All photos will also be viewable here after the
            event.
          </p>
          <p className={cn(neuton.className, 'text-center text-black mt-4')}>
            Photos: True Photography | Instagram Feed
          </p>
          <p className={cn(neuton.className, 'text-center text-black')}>
            Videography: Rustic Red Studio
          </p>
          <p className={cn(neuton.className, 'text-center text-black my-4')}>
            If you have any questions, please email us at: judieandz@gmail.com
          </p>
          <p className={cn(allura.className, 'text-center text-black text-xl')}>
            Love
          </p>
          <p className={cn(neuton.className, 'text-center text-black')}>
            J & Z
          </p>
        </div>
      </div>
    </main>
  )
}
