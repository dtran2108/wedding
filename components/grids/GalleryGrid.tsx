import { DEFAULT_BOX_SHADOW, SECTION_STYLE } from '@/const'
import { cn } from '@/lib/utils'

export default function GalleryGrid() {
  return (
    <div
      className={cn(SECTION_STYLE, 'aspect-square md:aspect-auto')}
      style={{
        boxShadow: DEFAULT_BOX_SHADOW,
        backgroundImage: "url('/images/gallery-cover.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    ></div>
  )
}
