'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { Fleur_De_Leah } from 'next/font/google'

const allura = Fleur_De_Leah({ subsets: ['latin'], weight: '400' })

export default function BridalTag({
  type,
  showTag,
  handleCloseMeet,
}: {
  type: 'bridal-party' | 'back'
  showTag: boolean
  handleCloseMeet?: () => void
}) {
  const tagVariants = {
    show: { y: [200, -10, 0], transition: { duration: 0.5, delay: 1.25 } },
    hide: { y: [0, -10, 200], transition: { duration: 0.5 } },
  }

  return (
    <motion.div
      variants={tagVariants}
      animate={showTag ? 'show' : 'hide'}
      className={cn(
        'absolute left-[43%] w-[200px] z-20',
        type == 'bridal-party' ? '-bottom-12' : '-bottom-24 cursor-pointer'
      )}
      onClick={type == 'back' ? handleCloseMeet : () => {}}
    >
      <svg
        className='scale-5'
        width='100%'
        height='auto'
        viewBox='0 0 82 75'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect
          x='5.5'
          y='22.5'
          width='71'
          height='52'
          fill='white'
          fill-opacity='0.5'
        />
        <path
          d='M41 0L76.507 22.5H5.49296L41 0Z'
          fill='white'
          fill-opacity='0.5'
        />
        <rect
          x='11.2181'
          y='24.3759'
          width='59.5638'
          height='43.6242'
          fill='white'
        />
        <path d='M41 5.5L70.7878 24.3758H11.2122L41 5.5Z' fill='white' />
      </svg>
      <div
        className={cn(
          'absolute flex items-center justify-center flex-col text-black text-center',
          type == 'bridal-party' ? 'top-14 left-14' : 'top-12 left-[39%]'
        )}
      >
        {type == 'bridal-party' ? (
          <>
            <h1 className={cn(allura.className, 'text-2xl')}>bridal party</h1>
            <p>PARTY</p>
          </>
        ) : (
          <p>BACK</p>
        )}
      </div>
    </motion.div>
  )
}
