import { DEFAULT_BOX_SHADOW, dreamAvenue } from '@/const'
import { cn } from '@/lib/utils'
import { MoveRight } from 'lucide-react'

export default function Gallery() {
  return (
    <div className='p-4 py-8 md:p-8 min-h-screen flex flex-col'>
      <div className='flex items-center flex-wrap'>
        <h1 className={cn(dreamAvenue.className, 'text-5xl')}>GALLERY</h1>
        <span className='ml-0 mt-4 md:mt-0 md:ml-12 flex items-center'>
          <p className='mr-2'>Scroll for more</p>
          <MoveRight />
        </span>
      </div>
      <div className='snap-x snap-mandatory flex-1 flex items-center space-x-8 min-w-full overflow-scroll'>
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className='snap-start border border-primary p-2 rounded-lg'
          >
            <div
              className='min-w-[270px] md:min-w-[500px] h-[500px] rounded-lg'
              style={{
                boxShadow: DEFAULT_BOX_SHADOW,
                backgroundImage: `url('/images/gallery-${i + 1}.jpeg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  )
}
