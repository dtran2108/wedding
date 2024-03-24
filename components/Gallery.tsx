'use client'

import { getMotionProps, titleFont } from '@/const'
import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import { MoveLeft, MoveRight } from 'lucide-react'
import { useState } from 'react'

export default function Gallery({ isPopUp }: { isPopUp?: boolean }) {
  const [currentImage, setCurrentImage] = useState(1)

  return (
    <div
      className={cn(
        'p-4 py-8 md:p-8 h-screen flex flex-col',
        isPopUp && 'p-4 md:p-8'
      )}
      style={{
        backgroundImage: `url('/images/paper-bg.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='bg-red rounded-lg p-4 text-white my-4'>
        <h1 className={cn(titleFont.className, 'text-3xl')}>KHO ẢNH</h1>
      </div>
      <div
        className={cn(
          'flex-1 flex flex-col md:grid grid-cols-5 gap-6',
          isPopUp && 'flex flex-col md:flex'
        )}
      >
        <div
          className={cn(
            'h-full w-full col-span-5 md:col-span-4',
            isPopUp && 'col-span-5 md:col-span-5'
          )}
        >
          <div className='p-4 h-full w-full bg-white rounded-lg'>
            <AnimatePresence mode='wait'>
              <motion.div
                key={currentImage}
                initial={{ x: 10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className='rounded-lg h-full w-full'
                style={{
                  backgroundImage: `url('images/gallery-${currentImage}.jpeg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></motion.div>
            </AnimatePresence>
          </div>
        </div>
        <div
          className={cn(
            'col-span-5 md:col-span-1 flex flex-row md:flex-col space-y-0 md:space-y-6 space-x-6 md:space-x-0',
            isPopUp &&
              'col-span-5 md:col-span-5 flex-row md:flex-row space-y-0 md:space-y-0 space-x-6 md:space-x-6'
          )}
        >
          <motion.div
            onClick={() => {
              if (currentImage > 1) {
                setCurrentImage(currentImage - 1)
              }
            }}
            className={cn(
              'rounded-lg h-[200px] md:h-full w-full flex-1 flex flex-col items-center justify-center',
              currentImage > 1
                ? 'cursor-pointer bg-yellow'
                : 'cursor-not-allowed bg-yellow/70',
              isPopUp && 'h-[150px] md:h-[150px]'
            )}
            {...getMotionProps('#422802')}
          >
            <MoveLeft className='w-10 h-10 text-white mb-4' />
            <h1 className='text-white text-lg'>Trước</h1>
          </motion.div>
          <motion.div
            onClick={() => {
              if (currentImage < 10) {
                setCurrentImage(currentImage + 1)
              }
            }}
            className={cn(
              'rounded-lg h-[200px] md:h-full w-full flex-1 flex flex-col items-center justify-center',
              currentImage < 10
                ? 'cursor-pointer bg-blue'
                : 'cursor-not-allowed bg-blue/70',
              isPopUp && 'h-[150px] md:h-[150px]'
            )}
            {...getMotionProps('#040A1E')}
          >
            <MoveRight className='w-10 h-10 text-white mb-4' />
            <h1 className='text-white text-lg'>Sau</h1>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
