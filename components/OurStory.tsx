'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { DEFAULT_BOX_SHADOW, titleFont, storiesContent } from '@/const'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import { Button } from './ui/button'

export default function OurStory({ isPopUp }: { isPopUp?: boolean }) {
  const [currentStory, setCurrentStory] = useState(storiesContent[0])

  return (
    <div className='min-h-screen grid grid-cols-4 gap-4 p-4 md:p-8'>
      <div
        className={cn(
          'col-span-4 md:col-span-3 flex flex-col space-y-4',
          isPopUp && 'col-span-4 md:col-span-4'
        )}
      >
        <div
          className={cn(
            'block md:hidden p-6 rounded-lg',
            isPopUp && 'block md:block'
          )}
          style={{ boxShadow: DEFAULT_BOX_SHADOW }}
        >
          <h1 className={cn(titleFont.className, 'text-2xl text-primary')}>
            CÂU CHUYỆN
          </h1>
          <div className='flex items-center space-x-3 mt-4 w-full overflow-scroll'>
            {storiesContent.map((story, i) => (
              <Button
                onClick={() => setCurrentStory(story)}
                variant={
                  currentStory.title == story.title ? 'default' : 'outline'
                }
                key={i}
              >
                {i + 1}. {story.title}
              </Button>
            ))}
          </div>
        </div>
        <div
          className='flex items-center justify-between flex-wrap rounded-lg bg-primary text-primary-foreground py-8 px-6'
          style={{ boxShadow: DEFAULT_BOX_SHADOW }}
        >
          <AnimatePresence mode='wait'>
            <motion.h1
              key={currentStory ? currentStory.title : 'empty'}
              initial={{ x: 10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className={cn(titleFont.className, 'text-4xl')}
            >
              {currentStory?.title}
            </motion.h1>
          </AnimatePresence>
          <AnimatePresence mode='wait'>
            <motion.p
              key={currentStory ? currentStory.title : 'empty'}
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 10, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className={cn(
                titleFont.className,
                'text-xl text-primary-foreground/80'
              )}
            >
              {currentStory.date}
            </motion.p>
          </AnimatePresence>
        </div>
        <div className='flex-1 grid grid-cols-5 gap-4'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentStory ? currentStory.title : 'empty'}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className={cn(
                'col-span-5 sm:col-span-3 rounded-lg h-full w-full min-h-[200px]',
                isPopUp && 'col-span-5 sm:col-span-5'
              )}
              style={{
                backgroundImage: `url('${currentStory.image}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'top',
                boxShadow: DEFAULT_BOX_SHADOW,
              }}
            ></motion.div>
          </AnimatePresence>
          <div
            className={cn(
              'col-span-5 sm:col-span-2 rounded-lg w-full py-8 px-6',
              isPopUp && 'col-span-5 sm:col-span-5'
            )}
            style={{ boxShadow: DEFAULT_BOX_SHADOW }}
          >
            <AnimatePresence mode='wait'>
              <motion.p
                key={currentStory ? currentStory.title : 'empty'}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {currentStory.content}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 1 }}
        className={cn(
          'hidden md:block col-span-1 py-8 px-6 text-secondary rounded-lg',
          isPopUp && 'hidden md:hidden'
        )}
        style={{ boxShadow: DEFAULT_BOX_SHADOW }}
      >
        <h1 className={cn(titleFont.className, 'text-2xl text-primary')}>
          CÂU CHUYỆN
        </h1>
        <div className='ml-2'>
          {storiesContent.map((story, i) => (
            <motion.p
              whileHover={{
                translateX: 10,
              }}
              key={i}
              className={cn(
                'my-6 cursor-pointer',
                currentStory.title == story.title && 'text-primary font-bold'
              )}
              onClick={() => setCurrentStory(story)}
            >
              {i}. {story.title}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
