import { DEFAULT_BOX_SHADOW, SECTION_STYLE, dreamAvenue } from '@/const'
import { cn } from '@/lib/utils'
import Image from 'next/image'

export default function AvenueGrid() {
  return (
    <div
      className={cn(
        SECTION_STYLE,
        'flex bg-primary text-primary-foreground relative flex-col p-6 justify-between'
      )}
      style={{ boxShadow: DEFAULT_BOX_SHADOW }}
    >
      <h1 className={cn(dreamAvenue.className, 'text-xl')}>
        “If I know what love is, it is because of you.”
      </h1>
      <h2>
        Let your audience know where to find you. <br />
        123 Anywhere St., Any City <br />
        ST 12345
      </h2>
      <Image
        className='absolute right-0 top-1'
        alt='cover'
        src={'/images/quote-img.svg'}
        width={100}
        height={200}
      />
    </div>
  )
}
