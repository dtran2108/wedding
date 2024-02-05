import AnimatedTextWord from '@/components/AnimatedTextWord'
import { cn } from '@/lib/utils'
import { WindSong } from 'next/font/google'

const windSong = WindSong({ subsets: ['latin'], weight: '400' })

export default function Page() {
  return (
    <main className='relative container py-16'>
      <div className='flex items-center justify-center'>
        <AnimatedTextWord
          className={cn(windSong.className, 'text-[54px] lg:text-[76px]')}
          text='Details'
        />
        <div
          className='hidden lg:block absolute top-16 right-32 rounded-lg w-[150px] h-[150px] shadow-lg border rotate-6 z-5'
          style={{
            backgroundImage: `url('/images/details-1.JPG')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        ></div>
      </div>
      <div className='flex flex-col items-center justify-center mt-8 relative z-10'>
        <h1 className='text-xl text-center font-bold text-gold'>
          IMPORTANT INFORMATION
        </h1>
        <p className='mt-4 text-center'>
          <strong>Wedding Date and Time: </strong>Saturday, June 18, 2024 | 4:30
          PM | Please arrive on time to ensure you don&apos;t miss any special
          moments!
        </p>
        <p className='text-center'>
          <strong>Ceremony Location: </strong>Enchanting Gardens Manor | 123
          Blossom Lane, Fairytale City, CA 56789
        </p>
        <p className='text-center'>
          <strong>Dress Code: </strong>Formal | Embrace the enchantment with
          hints of gold and sage green in your attire!
        </p>
        <p className='text-center'>
          <strong>Contact Information: </strong>Cinderella Events |
          contact@cinderellaevents.com | Fairy Godmother - 555-1234
        </p>
      </div>

      <div
        className='hidden lg:block absolute top-54 left-24 rounded-lg w-[150px] h-[150px] shadow-lg border rotate-6 z-5'
        style={{
          backgroundImage: `url('/images/details-2.JPG')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      ></div>

      <div className='flex flex-col items-center justify-center mt-16 relative z-10'>
        <h1 className='text-xl text-center font-bold text-gold'>MENU</h1>
        <p className='mt-4 text-center text-rose'>Appetizers</p>
        <p className='text-center'>
          <strong>Caprese Skewers</strong> (Fresh mozzarella, cherry tomatoes,
          and basil drizzled with balsamic glaze.)
        </p>
        <p className='text-center'>
          <strong>Smoked Salmon Canapés</strong> (Smoked salmon on crisp toast
          points with herbed cream cheese and capers)
        </p>
        <p className='text-center'>
          <strong>Stuffed Mushrooms</strong> (Mushrooms stuffed with a blend of
          spinach, feta, and breadcrumbs)
        </p>
        <p className='mt-4 text-center text-rose'>Salads</p>
        <p className='text-center'>
          <strong>Mixed Greens Salad</strong> (Mixed baby greens, candied
          pecans, crumbled goat cheese, and a champagne vinaigrette)
        </p>
        <p className='text-center'>
          <strong>Caesar Salad</strong> (Romaine lettuce, parmesan cheese,
          croutons, and classic Caesar dressing)
        </p>
        <p className='mt-4 text-center text-rose'>Main Courses</p>
        <p className='text-center'>
          <strong>Filet Mignon</strong> (Grilled filet mignon served with a red
          wine reduction)
        </p>
        <p className='text-center'>
          <strong>Lemon Herb Chicken</strong> (Roasted chicken breast with a
          lemon and herb glaze)
        </p>
        <p className='text-center'>
          <strong>Vegetarian Risotto</strong> (Creamy risotto with seasonal
          vegetables and Parmesan cheese)
        </p>
      </div>
    </main>
  )
}
