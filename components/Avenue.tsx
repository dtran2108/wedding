import { DEFAULT_BOX_SHADOW, titleFont } from '@/const'
import { cn } from '@/lib/utils'
import { Home, PhoneCall } from 'lucide-react'

export default function Avenue({ isPopUp }: { isPopUp?: boolean }) {
  return (
    <div className='min-h-screen p-8 flex flex-col'>
      <h1 className={cn(titleFont.className, 'text-5xl mb-4')}>ĐỊA ĐIỂM</h1>
      <div className='flex-1 grid grid-cols-3 gap-4'>
        <div
          className={cn(
            'w-full rounded-lg col-span-3 md:col-span-2 p-2 border border-secondary',
            isPopUp && 'col-span-3 md:col-span-3'
          )}
          style={{ boxShadow: DEFAULT_BOX_SHADOW }}
        >
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.380393166596!2d106.68680248025244!3d10.782149931693272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f9c4935f865%3A0xa2c53d4836a0780e!2sKh%C3%A1ch%20s%E1%BA%A1n%20Mai%20House%20Saigon!5e0!3m2!1svi!2s!4v1708671078905!5m2!1svi!2s'
            width='100%'
            className='h-full rounded-lg'
            style={{ border: '0' }}
            allowFullScreen
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
        <div
          className={cn(
            'flex flex-col space-y-4 col-span-3 md:col-span-1',
            isPopUp && 'col-span-3 md:col-span-3'
          )}
        >
          <div
            className='rounded-lg p-4 flex flex-col space-y-2'
            style={{ boxShadow: DEFAULT_BOX_SHADOW }}
          >
            <div className='rounded-lg p-4 py-6 flex items-center space-x-4 bg-primary/5'>
              <span className='rounded-full bg-primary/20 text-primary p-2'>
                <Home strokeWidth={1} className='w-5 h-5' />
              </span>
              <div>
                <p className='text-secondary/70'>Địa chỉ</p>
                <h1 className='text-secondary'>
                  1-3-5, Ngô Thời Nhiệm, Võ Thị Sáu, Quận 3, Thành phố Hồ Chí
                  Minh, Việt Nam
                </h1>
              </div>
            </div>
            <div className='rounded-lg p-4 py-6 flex items-center space-x-4 bg-primary/5'>
              <span className='rounded-full bg-primary/20 text-primary p-2'>
                <PhoneCall strokeWidth={1} className='w-5 h-5' />
              </span>
              <div>
                <p className='text-secondary/70'>Số điện thoại</p>
                <h1 className='text-secondary'>0912368712</h1>
              </div>
            </div>
          </div>
          <div
            className='flex-1 w-full min-h-[300px] h-full rounded-lg'
            style={{
              boxShadow: DEFAULT_BOX_SHADOW,
              backgroundImage: "url('/images/avenue.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
        </div>
      </div>
    </div>
  )
}
