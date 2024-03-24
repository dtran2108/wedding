import { titleFont } from '@/const'
import { cn } from '@/lib/utils'

export default function Avenue({ isPopUp }: { isPopUp?: boolean }) {
  return (
    <div
      className={cn(
        'p-8 flex flex-col space-y-4',
        isPopUp ? 'min-h-screen' : 'lg:h-screen min-h-screen'
      )}
      style={{
        backgroundImage: `url('/images/paper-bg.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='flex flex-col lg:flex-row space-x-0 lg:space-x-4 space-y-4 lg:space-y-0 items-center'>
        <div
          className={cn(
            titleFont.className,
            'rounded-lg p-4 bg-red text-3xl text-white w-full lg:w-fit'
          )}
        >
          THÔNG TIN QUAN TRỌNG
        </div>
        <div
          className={cn(
            titleFont.className,
            'bg-yellow text-2xl text-white p-4 rounded-lg w-full lg:w-fit'
          )}
        >
          ĐỊA CHỈ
        </div>
        <div className='bg-white p-4 px-8 rounded-lg flex items-center space-x-2 h-full flex-1 w-full lg:w-fit'>
          1-3-5, Ngô Thời Nhiệm, Võ Thị Sáu, Quận 3, Thành phố Hồ Chí Minh, Việt
          Nam
        </div>
      </div>
      <div className='flex-1 h-full w-full p-4 rounded-lg bg-white flex flex-col lg:flex-row items-center space-x-0 lg:space-x-4 space-y-4 lg:space-y-0'>
        <div className='flex flex-col space-y-4 lg:col-span-1 col-span-5 w-full lg:w-fit'>
          <div
            className={cn(
              'w-full bg-green-500 text-2xl p-4 text-white rounded-lg',
              titleFont.className
            )}
          >
            MENU
          </div>
          <div className='flex-1 w-full rounded-lg bg-green p-4 text-white'>
            <h1 className='font-bold text-md lg:text-lg'>Khai Vị</h1>
            <p className='text-sm lg:text-md'>Gỏi Ngó Sen Tôm Thịt</p>
            <p className='text-sm lg:text-md'>Súp Măng Cua</p>
            <h1 className='font-bold text-md lg:text-lg mt-2 lg:mt-4'>
              Món Chính
            </h1>
            <p className='text-sm lg:text-md'>Cà Ri Đồ Biển</p>
            <p className='text-sm lg:text-md'>Gà Quay Làng Nước</p>
            <p className='text-sm lg:text-md'>Bò Lúc Lắc</p>
            <p className='text-sm lg:text-md'>Cá Hồi Sốt Me</p>
            <p className='text-sm lg:text-md'>Canh Chua Tôm</p>
            <h1 className='font-bold text-md lg:text-lg mt-2 lg:mt-4'>
              Tráng Miệng
            </h1>
            <p className='text-sm lg:text-md'>Chè Ba Màu</p>
            <p className='text-sm lg:text-md'>Bánh Flan</p>
            <p className='text-sm lg:text-md'>Mâm Trái Cây Nhiệt Đới Tươi</p>
          </div>
        </div>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.380393166596!2d106.68680248025244!3d10.782149931693272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f9c4935f865%3A0xa2c53d4836a0780e!2sKh%C3%A1ch%20s%E1%BA%A1n%20Mai%20House%20Saigon!5e0!3m2!1svi!2s!4v1708671078905!5m2!1svi!2s'
          width='100%'
          className='rounded-lg lg:col-span-4 col-span-5 h-full'
          style={{ border: '0' }}
          allowFullScreen
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>
      </div>
      <div className='flex flex-col lg:flex-row space-x-0 lg:space-x-4 space-y-4 lg:space-y-0 items-center'>
        <div
          className={cn(
            titleFont.className,
            'bg-orange text-white p-4 rounded-lg w-full lg:w-fit'
          )}
        >
          SỐ ĐIỆN THOẠI
        </div>
        <div className='bg-white p-4 px-8 rounded-lg flex items-center space-x-2 h-full flex-1 w-full lg:w-fit'>
          0912368712
        </div>
        <div
          className={cn(
            titleFont.className,
            'bg-blue text-white p-4 rounded-lg w-full lg:w-fit'
          )}
        >
          DRESSCODE
        </div>
        <div className='bg-white p-4 rounded-lg flex space-x-2 h-full w-full lg:w-fit'>
          <div className='w-[30px] aspect-square rounded-sm bg-green'></div>
          <div className='w-[30px] aspect-square rounded-sm bg-green-500'></div>
          <div className='w-[30px] aspect-square rounded-sm bg-green-900'></div>
        </div>
      </div>
    </div>
  )
}
