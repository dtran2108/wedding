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
import Festivities from '@/components/Festivities'
import BridalParty from '@/components/BridalParty'

const allura = Fleur_De_Leah({ subsets: ['latin'], weight: '400' })
const neuton = Neuton({ subsets: ['latin'], weight: '400' })

export default function Home() {
  return (
    <main className='min-h-screen'>
      <div
        className='relative w-full min-h-[100vh] flex items-center flex-col justify-between py-4'
        style={{
          backgroundImage: "url('/images/NAU_1700.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
        }}
      >
        <div className='absolute w-full h-[100vh] top-0 left-0 bg-black/60 z-10'></div>
        <div className='my-auto text-center w-9/12 md:w-6/12 relative z-20' style={{top: -60}}>
          <h1 className='text-4xl'>
            LĐ <span className={allura.className}>&</span> TD
          </h1>
          <Divider>
            <span className='text-md md:text-2xl'>20.04.2024</span>
          </Divider>
          <h1 className={cn(allura.className, 'text-6xl md:text-7xl my-8')}>
            Lam Điền
            <br />& 
            <br />Thanh Duy
          </h1>
          <Divider>
            <span className='text-md md:text-2xl'>ARE GETTING MARRIED</span>
          </Divider>
        </div>
      </div>
      <NavBar />
      <div id='our-story'>
        <OurStory />
        <Quote />
      </div>
      <div id='gallery'>
        <Gallery />
      </div>
      <div id='festivities'>
        <Festivities />
      </div>
      <div
        id='add-to-our-story'
        className='relative w-full min-h-[1250px] flex justify-center py-8 md:min-h-[1600px]'
        style={{
          backgroundImage: "url('/images/footer.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: '45% 47%',
          padding: '32px'
        }}
      >
        <div className=' text-center relative z-20 flex flex-col max-w-lg'>
          <h1
            className={cn(
              allura.className,
              'text-4xl md:text-6xl leading-normal text-gold'
            )}
          >
            A note from <br/>the Bride and Groom
          </h1>
          <p className={cn(neuton.className, 'text-left text-black mt-4')}>
          Dear Family and Friends,
          </p>
          <p className={cn(neuton.className, 'text-left text-black mt-4')}>
We are over the moon to share this important day with all of you. For us, we are celebrating so much more than a wedding, but a lifelong commitment we hope to be filled with laughter, love and understanding.
          </p>
          <p className={cn(neuton.className, 'text-left text-black mt-4')}>
We look forward to having you join us to celebrate our special milestone. Without the support of each one of you, we would not be who we are today, or have found one another. Having you as witnesses as we step into this journey together means the world to us and for that we are truly grateful.
          </p>
          <p className={cn(allura.className, 'text-right text-black text-xl mt-4')}>
            With love,
          </p>
          <p className={cn(neuton.className, 'text-right text-black')}>
            Dien and Duy
          </p>
        </div>
      </div>
    </main>
  )
}
