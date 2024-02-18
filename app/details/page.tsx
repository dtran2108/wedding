import { cn } from '@/lib/utils'
import { Rouge_Script } from 'next/font/google'
import Image from 'next/image'

const rougeScript = Rouge_Script({ subsets: ['latin'], weight: '400' })

export default function Page() {
  return (
    <main className='relative container py-16'>
      <div className='flex items-center justify-center'>
        <h1 className={cn(rougeScript.className, 'text-[54px] lg:text-[76px]')}>
          Details
        </h1>
        <div
          className='hidden lg:block absolute top-16 right-32 rounded-lg w-[150px] h-[150px] shadow-lg border rotate-6 z-5'
          style={{
            backgroundImage: `url('/images/details-1.jpg')`,
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
          <strong>Ceremony Location: </strong>Mai House | 123 Blossom Lane,
          Fairytale City, CA 56789
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

      <div className='flex flex-col items-center justify-center mt-16 relative z-10'>
        <h1 className='text-xl text-center font-bold text-gold'>THE CREW</h1>
        <div className='mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 w-full'>
          <div className='flex items-center justify-center flex-col'>
            <Image
              src='/images/best-man.png'
              alt='best man'
              width={210}
              height={210}
            />
            <h1 className={cn(rougeScript.className, 'text-4xl mb-4')}>
              John Doe
            </h1>
            <h1>BEST MAN</h1>
            <p className='text-center text-sm px-16 mt-4'>
              The charismatic and enigmatic best man. With charm and mystery in
              equal measure, he adds intrigue to every celebration. Join us as
              we uncover the secrets behind Marcus Kingsley, the best man with a
              story to tell.
            </p>
          </div>
          <div className='flex items-center justify-center flex-col'>
            <Image
              src='/images/maid-of-honor.png'
              alt='maid-of-honor'
              width={150}
              height={150}
            />
            <h1 className={cn(rougeScript.className, 'text-4xl mb-4')}>
              Jane Doe
            </h1>
            <h1>MAID OF HONOR</h1>
            <p className='text-center text-sm px-16 mt-4'>
              The epitome of elegance and intrigue as the ultimate maid of
              honor. Uncover her captivating story as she navigates the world of
              weddings with finesse and mystery.
            </p>
          </div>
        </div>
      </div>

      <div className='flex flex-col items-center justify-center mt-16 relative z-10'>
        <h1 className='text-xl text-center font-bold text-gold'>THE VENUE</h1>
        <p className='text-center'>
          <strong>Mai House</strong> | 123 Blossom Lane, Fairytale City, CA
          56789
        </p>
        <div className='mt-4 grid grid-cols-1 md:grid-cols-3 gap-4'>
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className='rounded-lg w-56 h-56 shadow-lg border'
              style={{
                backgroundImage: `url('/images/mai-house/mai-house-${item}.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className='flex flex-col items-center justify-center mt-16 relative z-10'>
        <h1 className='text-xl text-center font-bold text-gold'>THE MENU</h1>
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
