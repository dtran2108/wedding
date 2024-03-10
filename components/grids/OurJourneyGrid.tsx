import { DEFAULT_BOX_SHADOW, SECTION_STYLE, dreamAvenue } from '@/const'
import { cn } from '@/lib/utils'
import Image from 'next/image'

export default function OurJourneyGrid() {
  return (
    <div
      className={cn(
        SECTION_STYLE,
        'bg-secondary text-secondary-foreground p-4 aspect-square md:aspect-auto flex flex-col items-center justify-start overflow-hidden relative'
      )}
      style={{ boxShadow: DEFAULT_BOX_SHADOW }}
    >
      <h1 className={cn(dreamAvenue.className, 'text-xl md:text-3xl text-center')}>
        Our Journey
      </h1>
      <Image
        className='absolute top-12 md:top-16'
        src={'/images/journey-decoration.svg'}
        alt='decoration'
        width={100}
        height={70}
      />
    </div>
  )
}
