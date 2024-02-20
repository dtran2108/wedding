import { cn } from '@/lib/utils'
import { Fleur_De_Leah, Neuton } from 'next/font/google'
import Image from 'next/image'

const allura = Fleur_De_Leah({ subsets: ['latin'], weight: '400' })
const neuton = Neuton({ subsets: ['latin'], weight: '400' })

export default function Registry() {
  return (
    <div
      className='relative w-full min-h-[500px] flex items-center justify-center py-8'
      style={{
        backgroundImage: "url('/images/registry.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='my-auto text-center w-9/12 relative z-20 flex flex-col items-center justify-center'>
        <h1
          className={cn(allura.className, 'text-6xl leading-normal text-black')}
        >
          Registry
        </h1>
        <p className={cn(neuton.className, 'text-center text-black my-8')}>
          What we want most for our wedding is to have all of our friends and
          family there to celebrate the occasion with us, and so, more than
          anything we would simply enjoy your presence. (We mean it!) That said,
          we also enjoy dishware and shiny new four-slice toasters too, so if
          you really would like to get us something, you can find some
          suggestions here:
        </p>
        <div className='grid grid-cols-3 gap-8 max-w-md'>
          <div className='py-8 border-t border-t-black border-b border-b-black flex items-center justify-center'>
            <Image
              src='/images/amazon-logo.svg'
              width={100}
              height={100}
              alt='amazon logo'
            />
          </div>
          <div className='py-8 border-t border-t-black border-b border-b-black flex items-center justify-center'>
            <Image
              src='/images/amazon-logo.svg'
              width={100}
              height={100}
              alt='amazon logo'
            />
          </div>
          <div className='py-8 border-t border-t-black border-b border-b-black flex items-center justify-center'>
            <Image
              src='/images/amazon-logo.svg'
              width={100}
              height={100}
              alt='amazon logo'
            />
          </div>
        </div>
        <p className={cn(neuton.className, 'text-center text-black my-8')}>
          Please send any gifts to our home in Chicago, as we will not be able
          to bring them with us from San Diego.
        </p>
      </div>
    </div>
  )
}
