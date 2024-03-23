'use client'

import { SECTION_STYLE, titleFont, scrollToHash, getMotionProps } from '@/const'
import { cn } from '@/lib/utils'
import './styles.css'
import { motion } from 'framer-motion'

export default function AgendaGrid() {
  return (
    <motion.div
      onClick={() => scrollToHash('agenda')}
      className={cn(
        SECTION_STYLE,
        'bg-green-500 text-white p-4 cursor-pointer'
      )}
      {...getMotionProps('#1E2627')}
    >
      <div className='flex items-center space-x-3'>
        <h1 className={cn(titleFont.className, 'text-3xl')}>Lịch trình</h1>
        <p>Lễ đính hôn. Lễ cưới chính. Tiệc cưới. Đón khách.</p>
      </div>
      <div className='mt-2 flex flex-col'>
        <div className='flex items-center space-x-2 w-full'>
          <div className='rounded-t-sm bg-green p-2 side-agenda-wrap'>
            <div
              className='w-[calc(100dvh/10)] aspect-square rounded-sm'
              style={{
                backgroundImage: "url('/images/agenda-1.jpeg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
          </div>
          <div className='rounded-sm bg-green p-2 flex-1 flex items-center space-x-2 main-agenda-wrap'>
            <div
              className='min-w-[calc(100dvh/10)] aspect-square rounded-sm'
              style={{
                backgroundImage: "url('/images/agenda-2.jpeg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
            <div>
              <h1 className={cn(titleFont.className)}>09:30</h1>
              <p className='text-sm'>
                Lễ tân bắt đầu.Bữa tối được phục vụ, bánh mì nướng, khiêu vũ đầu
                tiên, cắt bánh và quăng bó hoa.
              </p>
            </div>
          </div>
          <div className='rounded-t-sm bg-green p-2 side-agenda-wrap'>
            <div
              className='w-[calc(100dvh/10)] aspect-square rounded-sm'
              style={{
                backgroundImage: "url('/images/agenda-3.jpeg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
          </div>
        </div>
        <div className='flex space-x-2 flex-1'>
          <div className='flex-1 w-full h-full bg-green rounded-b-sm rounded-tr-sm pt-3 pb-1 px-4'>
            <h1 className={cn(titleFont.className)}>07:30</h1>
            <p className='text-sm'>
              Cô dâu và chú rể cảm ơn khách và làm tròn cho mỗi bàn.
            </p>
          </div>
          <div className='flex-1 w-full h-full bg-green rounded-b-sm rounded-tl-sm pt-3 pb-1 px-4'>
            <h1 className={cn(titleFont.className)}>11:30</h1>
            <p className='text-sm'>
              Khiêu vũ và Mingling tiếp tục.Gian hàng hình ảnh và đồ ăn nhẹ đêm
              khuya có sẵn.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
