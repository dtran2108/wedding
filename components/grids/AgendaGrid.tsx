import { DEFAULT_BOX_SHADOW, SECTION_STYLE, dreamAvenue } from '@/const'
import { cn } from '@/lib/utils'

export default function AgendaGrid() {
  return (
    <div
      className={cn(
        SECTION_STYLE,
        'bg-primary text-primary-foreground flex flex-col p-8 items-center justify-center space-y-6'
      )}
      style={{ boxShadow: DEFAULT_BOX_SHADOW }}
    >
      <h1 className={(cn(dreamAvenue.className), 'text-3xl')}>Agenda</h1>
      <div className='flex items-center justify-evenly w-full'>
        <div
          className='w-[96px] aspect-square rounded-full'
          style={{
            backgroundImage: "url('/images/agenda-1.jpeg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div
          className='w-[96px] aspect-square rounded-full'
          style={{
            backgroundImage: "url('/images/agenda-2.jpeg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div
          className='w-[96px] aspect-square rounded-full'
          style={{
            backgroundImage: "url('/images/agenda-3.jpeg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
      </div>
    </div>
  )
}
