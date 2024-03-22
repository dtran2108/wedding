import { DEFAULT_BOX_SHADOW, titleFont } from '@/const'
import { cn } from '@/lib/utils'
import { MoveRight } from 'lucide-react'

export default function Gallery({ isPopUp }: { isPopUp?: boolean }) {
  return (
    <div
      className={cn(
        'p-4 py-8 md:p-8 min-h-screen flex flex-col',
        isPopUp && 'p-4 md:p-4'
      )}
    >
      <div className='flex items-center flex-wrap space-x-3'>
        <h1 className={cn(titleFont.className, 'text-5xl')}>KHO ẢNH</h1>
        <span
          className={cn(
            'ml-0 mt-4 md:mt-0 md:ml-12 flex items-center',
            isPopUp && 'ml-0 mt-4 md:mt-4 md:ml-0'
          )}
        >
          <p className='mr-2'>Cuộn để xem thêm</p>
          <MoveRight strokeWidth={1} />
        </span>
      </div>
      <div className='snap-x snap-mandatory flex-1 flex items-center space-x-8 min-w-full overflow-scroll no-scrollbar'>
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className='snap-start border border-primary p-2 rounded-lg'
          >
            <div
              className={cn(
                'min-w-[270px] md:min-w-[500px] h-[500px] rounded-lg',
                isPopUp && 'min-w-[270px] md:min-w-[270px]'
              )}
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
