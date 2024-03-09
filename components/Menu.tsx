import { cn } from '@/lib/utils'
import { Dosis } from 'next/font/google'

const dosis = Dosis({ subsets: ['latin'], weight: '400' })

export default function Menu() {
  return (
    <div>
      <h1
        className={cn(
          dosis.className,
          'text-center text-5xl font-bold mt-4'
        )}
      >
        Wedding Menu
      </h1>
      <div className='mt-8 flex flex-col items-center justify-center'>
        <h2 className={cn(dosis.className, 'text-2xl font-bold text-primary')}>
          Main Course
        </h2>
        <p>Herb-Crusted Filet Mignon</p>
        <p>Mushroom Risotto</p>
        <p>Stuffed Bell Peppers</p>
        <h2 className={cn(dosis.className, 'text-2xl font-bold mt-4 text-primary')}>
          Dessert
        </h2>
        <p>Wedding Cake</p>
        <p>Assorted Miniature Desserts</p>
        <p>Gourmet Ice Cream Bar</p>
      </div>
    </div>
  )
}
