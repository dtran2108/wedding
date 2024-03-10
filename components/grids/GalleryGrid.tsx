'use client'

import { DEFAULT_BOX_SHADOW, SECTION_STYLE, scrollToHash } from '@/const'
import { cn } from '@/lib/utils'

export default function GalleryGrid() {
  return (
    <div
      onClick={() => scrollToHash('gallery')}
      className={cn(
        SECTION_STYLE,
        'aspect-square md:aspect-auto cursor-pointer'
      )}
      style={{
        boxShadow: DEFAULT_BOX_SHADOW,
        backgroundImage: "url('/images/gallery-cover.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    ></div>
  )
}
