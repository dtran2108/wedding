'use client'

import React from 'react'
import { motion } from 'framer-motion'

const AnimatedTextWord = ({
  text,
  className,
}: {
  text: string
  className?: string
}) => {
  const words = text.split(' ')

  // Variants for Container of words.
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  }

  // Variants for each word.

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.div
      className={className}
      style={{ overflow: 'hidden', display: 'flex', flexWrap: 'wrap' }}
      variants={container}
      initial='hidden'
      animate='visible'
    >
      {words.map((word, index) => (
        <motion.span
         className='text-center'
          variants={child}
          style={{ marginRight: '12px' }}
          key={index}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}

export default AnimatedTextWord
