'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { Hexagon } from 'lucide-react'
import { Fleur_De_Leah } from 'next/font/google'

const allura = Fleur_De_Leah({ subsets: ['latin'], weight: '400' })

export default function BridalCurtain({
  type,
  handleClickMeet,
  showCurtain,
}: {
  type: 'left' | 'right'
  handleClickMeet: () => void
  showCurtain: boolean
}) {
  const transitionDirection = type == 'left' ? -1000 : 1000

  const curtainVariants = {
    show: {
      x: [transitionDirection, 0],
      transition: { duration: 0.5, delay: 0.75 },
    },
    hide: {
      x: [0, transitionDirection],
      transition: { duration: 0.5, delay: 0.75 },
    },
  }

  return (
    <motion.div
      variants={curtainVariants}
      animate={showCurtain ? 'show' : 'hide'}
      className={cn(
        'w-full min-h-screen flex flex-col items-center justify-center space-y-4',
        type == 'left' ? 'text-black' : 'text-white'
      )}
      style={{
        backgroundImage: `url('/images/bridal-party-${type}.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        className='group cursor-pointer flex flex-col items-center justify-center space-y-3'
        onClick={handleClickMeet}
      >
        <p>MEET THE</p>
        <h1 className={cn(allura.className, 'text-5xl md:text-7xl')}>
          {type == 'left' ? 'brides maids' : 'grooms men'}
        </h1>
        <div
          className={cn(
            'h-[1px] w-[100px]',
            type == 'left' ? 'bg-black' : 'bg-white'
          )}
        ></div>
        <Hexagon className='hidden group-hover:block w-5 h-5' />
      </div>
    </motion.div>
  )
}
