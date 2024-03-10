import { DEFAULT_BOX_SHADOW, SECTION_STYLE, dreamAvenue } from '@/const'
import { cn } from '@/lib/utils'
import Image from 'next/image'

export default function AvenueGrid() {
  return (
    <div
      className={cn(
        SECTION_STYLE,
        'flex bg-primary text-primary-foreground relative flex-col p-6 justify-between space-y-8 overflow-hidden'
      )}
      style={{ boxShadow: DEFAULT_BOX_SHADOW }}
    >
      <h1 className={cn(dreamAvenue.className, 'text-lg md:text-xl')}>
        “If I know what love is, it is because of you.”
      </h1>
      <h2 className='text-[12px] md:text-lg max-w-[150px] md:max-w-full'>
        Let your audience know where to find you. <br />
        123 Anywhere St., Any City <br />
        ST 12345
      </h2>
      <Image
        className='absolute -right-4 -top-8 md:-top-6 md:right-0'
        alt='cover'
        src={'/images/quote-img.svg'}
        width={100}
        height={200}
      />
    </div>
  )
}
