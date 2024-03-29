import { cn } from '@/lib/utils'
import { Rouge_Script } from 'next/font/google'

const rougeScript = Rouge_Script({ subsets: ['latin'], weight: '400' })

export default function Page() {
  return (
    <main className='container py-16'>
      <div className='flex items-center justify-center'>
        <h1 className={cn(rougeScript.className, 'text-[54px] lg:text-[76px]')}>
          Travel Info
        </h1>
      </div>

      <div className='container mt-4'>
        <h1 className='text-xl font-bold text-gold text-center'>ADDRESS</h1>
        <h1 className='text-center mb-8'>
          <strong>Mai House</strong> | 123 Blossom Lane, Fairytale City, CA
          56789
        </h1>
        <h1 className='text-xl font-bold text-gold text-center'>CONTACT</h1>
        <h1 className='text-center mb-8'>
          <strong>Trần Hữu Nghị</strong> | nghitran@gmail.com |
          +84 927 462 887
        </h1>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.114614851381!2d106.68097357485735!3d10.802532889347804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528da40801315%3A0x7abffbbccb43bb1b!2zTmjDoCBIw6BuZyBUaeG7h2MgQ8aw4bubaSBI4buZaSBOZ2jhu4sgUGjDuiBOaHXhuq1u!5e0!3m2!1svi!2s!4v1707099693699!5m2!1svi!2s'
          width='100%'
          height='450'
          style={{ border: 0 }}
          allowFullScreen={false}
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>
      </div>
    </main>
  )
}
