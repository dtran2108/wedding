import { cn } from '@/lib/utils'
import { Rouge_Script } from 'next/font/google'
import Gallery from './Gallery'

const rougeScript = Rouge_Script({ subsets: ['latin'], weight: '400' })

export default function Page() {
  return (
    <main className='relative container py-16'>
      <div className='flex items-center justify-center'>
        <h1 className={cn(rougeScript.className, 'text-[54px] lg:text-[76px]')}>
          Gallery
        </h1>
      </div>
      <Gallery />
    </main>
  )
}
