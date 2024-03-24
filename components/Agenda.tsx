'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { DEFAULT_BOX_SHADOW, agendaContent, titleFont } from '@/const'
import { cn } from '@/lib/utils'
import { useRef, useState } from 'react'
import { Button } from './ui/button'
import { useScroll } from 'react-use'
import { ChevronLeftCircle, ChevronRightCircle } from 'lucide-react'

export default function Agenda({ isPopUp }: { isPopUp?: boolean }) {
  const [currentAgenda, setCurrentAgenda] = useState(agendaContent[0])
  const mobileListWrap = useRef<HTMLDivElement>(null)
  const { x: currentListXPos, y } = useScroll(mobileListWrap)

  return (
    <div
      className={cn(
        'min-h-screen grid grid-cols-4 gap-4 p-4 md:p-8',
        isPopUp && 'p-4 md:p-4'
      )}
      style={{
        backgroundImage: `url('/images/paper-bg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <motion.div
        initial={{ opacity: 1 }}
        className={cn(
          'hidden md:block col-span-1 py-8 px-6 text-secondary rounded-lg bg-white',
          isPopUp && 'hidden md:hidden'
        )}
      >
        <h1 className={cn(titleFont.className, 'text-3xl text-orange')}>
          LỊCH TRÌNH
        </h1>
        <div className='ml-2'>
          {agendaContent.map((event, i) => (
            <motion.p
              whileHover={{
                translateX: 10,
              }}
              key={i}
              className={cn(
                'my-6 cursor-pointer',
                currentAgenda.time == event.time && 'text-orange font-bold'
              )}
              onClick={() => setCurrentAgenda(event)}
            >
              {event.time}
            </motion.p>
          ))}
        </div>
      </motion.div>
      <div
        className={cn(
          'col-span-4 md:col-span-3 flex flex-col space-y-4',
          isPopUp && 'col-span-4 md:col-span-4'
        )}
      >
        <div
          className={cn(
            'block md:hidden p-6 rounded-lg bg-white',
            isPopUp && 'block md:block'
          )}
        >
          <div className='flex items-center space-x-2'>
            <h1 className={cn(titleFont.className, 'text-3xl text-orange')}>
              LỊCH TRÌNH
            </h1>
            {currentListXPos > 0 && (
              <ChevronLeftCircle
                className='w-4 h-4 bg-white rounded-full text-gray'
                strokeWidth={1.5}
              />
            )}
            {currentListXPos <
              (mobileListWrap.current?.scrollWidth || 1) -
                (mobileListWrap.current?.offsetWidth || 0) && (
              <ChevronRightCircle
                className='w-4 h-4 bg-white rounded-full text-gray'
                strokeWidth={1.5}
              />
            )}
          </div>
          <div
            className='flex items-center space-x-3 mt-4 w-full overflow-scroll no-scrollbar'
            ref={mobileListWrap}
          >
            {agendaContent.map((event, i) => (
              <Button
                onClick={() => setCurrentAgenda(event)}
                variant={
                  currentAgenda.time == event.time ? 'secondary' : 'outline'
                }
                key={i}
              >
                {event.time}
              </Button>
            ))}
          </div>
        </div>
        <div className='flex items-center justify-between flex-wrap rounded-lg bg-secondary text-secondary-foreground py-8 px-6'>
          <AnimatePresence mode='wait'>
            <motion.h1
              key={currentAgenda ? currentAgenda.time : 'empty'}
              initial={{ x: 10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className={cn(titleFont.className, 'text-4xl')}
            >
              {currentAgenda?.time}
            </motion.h1>
          </AnimatePresence>
        </div>
        <div className='flex-1 grid grid-cols-5 gap-4'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentAgenda ? currentAgenda.time : 'empty'}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className={cn(
                'col-span-5 sm:col-span-3 rounded-lg h-full w-full min-h-[200px]',
                isPopUp && 'col-span-5 sm:col-span-5'
              )}
              style={{
                backgroundImage: `url('${currentAgenda.image}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'top',
              }}
            ></motion.div>
          </AnimatePresence>
          <div
            className={cn(
              'col-span-5 sm:col-span-2 rounded-lg w-full py-8 px-6 bg-white',
              isPopUp && 'col-span-5 sm:col-span-5'
            )}
          >
            <AnimatePresence mode='wait'>
              <motion.p
                key={currentAgenda ? currentAgenda.time : 'empty'}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {currentAgenda.content}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}
