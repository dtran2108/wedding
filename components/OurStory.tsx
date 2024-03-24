'use client'

import { titleFont, storiesContent, getMotionProps } from '@/const'
import { cn } from '@/lib/utils'
import { useRef, useState } from 'react'
import { useScroll } from 'react-use'
import { AnimatePresence, motion } from 'framer-motion'

export default function OurStory({ isPopUp }: { isPopUp?: boolean }) {
  const mobileStoryListWrap = useRef<HTMLDivElement>(null)

  return (
    <div
      className={cn(
        'min-h-screen grid grid-cols-1 lg:grid-cols-5 gap-4 p-4 md:p-8',
        isPopUp && 'grid-cols-1 lg:grid-cols-1'
      )}
      style={{
        backgroundImage: `url('/images/paper-bg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='flex flex-col space-y-4'>
        <div
          className={cn(
            'bg-blue p-4 rounded-lg w-full text-white text-3xl text-center',
            titleFont.className
          )}
        >
          CÂU CHUYỆN
        </div>
        <div className='flex-1 w-full rounded-lg h-full bg-red p-4 text-white'>
          <h1 className={cn(titleFont.className, 'text-xl mb-4')}>
            Giới thiệu cô dâu chú rể
          </h1>
          <p className='text-sm text-white/80'>
            Ngày hôm nay, cô dâu Mai xinh đẹp, tài năng và chú rể Tuấn thông
            minh, thành đạt trong lĩnh vực công nghệ kết hôn sau nhiều năm hẹn
            hò. Họ gặp nhau trong chuyến du lịch và nhanh chóng hấp dẫn lẫn
            nhau.
          </p>
        </div>
      </div>
      <motion.div
        className='group w-full h-full rounded-lg bg-green p-4 text-white'
        {...getMotionProps('#1C251C')}
      >
        <p>Tháng Tư 2010</p>
        <h1 className={cn(titleFont.className, 'text-xl mb-4')}>
          Thảm họa cà phê
        </h1>
        <AnimatePresence mode='wait'>
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className='text-sm text-white/80 hidden group-hover:block'
          >
            Mai nhầm bộ đồ mới của Tuấn cho một người giữ khăn ăn, vô tình làm
            đổ cà phê của cô lên khắp anh ta tại một quán cà phê nhộn nhịp.Cuộc
            gặp gỡ đầu tiên của họ liên quan đến một máy giặt khô, rất nhiều lời
            xin lỗi và một trái phiếu bất ngờ đối với các sản phẩm may mặc màu.
          </motion.p>
        </AnimatePresence>
      </motion.div>
      <motion.div
        className='group w-full h-full rounded-lg bg-green-500 p-4 text-white'
        {...getMotionProps('#1C251C')}
      >
        <p>Tháng Tám 2012</p>
        <h1 className={cn(titleFont.className, 'text-xl mb-4')}>
          Mối quan hệ hỗn loạn
        </h1>
        <p className='text-sm text-white/80 hidden group-hover:block'>
          Mai, dễ bị say tàu xe, kết thúc trong lòng Tuấn trong một chuyến bay
          gập ghềnh đến Paris.Tuấn, cố gắng trở thành người đàn ông, nhầm lẫn
          nắm bắt sự kìm kẹp của cô ấy về một cử chỉ tình cảm, dẫn đến một hành
          trình ấm cúng nhưng lúng túng trên Đại Tây Dương.
        </p>
      </motion.div>
      <motion.div
        className='group w-full h-full rounded-lg bg-green-700 p-4 text-white'
        {...getMotionProps('#1C251C')}
      >
        <p>Tháng Năm 2013</p>
        <h1 className={cn(titleFont.className, 'text-xl mb-4')}>
          Hài kịch ẩm thực
        </h1>
        <p className='text-sm text-white/80 hidden group-hover:block'>
          Nỗ lực của Tuấn trong một bữa tối lãng mạn kết thúc bằng một chuông
          báo cháy, một lasagna bị cháy và lời thề sẽ không bao giờ chạm vào bếp
          lò nữa.Cuộc hẹn đầu tiên của họ đã trở thành một bữa tiệc khiêu vũ nhà
          bếp đầy ngẫu hứng, hoàn thành với pizza và tiếng cười.
        </p>
      </motion.div>
      <motion.div
        className='group w-full h-full rounded-lg bg-green-900 p-4 text-white'
        {...getMotionProps('#1C251C')}
      >
        <p>Tháng Một 2020</p>
        <h1 className={cn(titleFont.className, 'text-xl mb-4')}>
          Tai ương đám cưới
        </h1>
        <p className='text-sm text-white/80 hidden group-hover:block'>
          Từ vật lộn với những người bán hoa bướng bỉnh đến vô tình gửi lời mời
          với ngày sai, hành trình lập kế hoạch đám cưới của Mai và Tuấn giống
          như một kịch bản sitcom.Mỗi tai nạn chỉ đưa họ lại gần nhau hơn giữa
          sự hỗn loạn.
        </p>
      </motion.div>
    </div>
  )
}
