'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { Hexagon } from 'lucide-react'
import { Fleur_De_Leah, Neuton } from 'next/font/google'
import { useState } from 'react'
import BridalCurtain from './BridalCurtain'
import BridalTag from './BridalTag'

const allura = Fleur_De_Leah({ subsets: ['latin'], weight: '400' })
const neuton = Neuton({ subsets: ['latin'], weight: '400' })

export default function BridalParty() {
  const [showBridalTag, setShowBridalTag] = useState(true)
  const [showCloseTag, setShowCloseTag] = useState(false)
  const [showLeftCurtain, setShowLeftCurtain] = useState(true)
  const [showRightCurtain, setShowRightCurtain] = useState(true)
  const [showContent, setShowContent] = useState(true)
  const [contentType, setContentType] = useState('bridesmaids')

  const handleClickMeet = (type: 'bridesmaids' | 'groomsmen') => {
    setShowBridalTag(false)
    setShowCloseTag(true)
    setShowLeftCurtain(false)
    setShowRightCurtain(false)
    setShowContent(true)
    setContentType(type)
  }

  const handleCloseMeet = () => {
    setShowBridalTag(true)
    setShowCloseTag(false)
    setShowLeftCurtain(true)
    setShowRightCurtain(true)
    setShowContent(false)
  }

  return (
    <div className='relative w-full grid grid-cols-2 min-h-[90vh] overflow-hidden'>
      <div
        className={cn(
          'absolute text-black w-full top-0 left-0 z-10 min-h-[90vh]',
          showContent ? 'flex flex-col items-center py-8' : 'hidden'
        )}
        style={{
          backgroundImage: `url('/images/${contentType}.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h1
          className={cn(
            allura.className,
            'text-6xl',
            contentType == 'groomsmen' ? 'text-white' : 'text-black'
          )}
        >
          {contentType}
        </h1>
        <div className='grid grid-cols-4 gap-16 my-8'>
          {Array.from({ length: 4 }).map((_, index) => (
            <div className='rounded-full w-[170px] aspect-square border border-white shadow-lg flex items-center justify-center opacity-50 hover:opacity-100 cursor-pointer'>
              <div
                className='rounded-full w-[150px] aspect-square'
                style={{
                  backgroundImage: `url('/images/${
                    contentType == 'groomsmen' ? 'man' : 'woman'
                  }.jpeg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'top',
                }}
              ></div>
            </div>
          ))}
        </div>
        <div
          className={cn(
            'mt-4',
            contentType == 'groomsmen' ? 'text-white' : 'text-black'
          )}
        >
          <h3 className='text-xl text-center'>ALINA NGUYEN</h3>
          <p className='text-center'>MAID OF HONOR</p>
        </div>
        <p
          className={cn(
            neuton.className,
            'mt-8 text-center max-w-lg',
            contentType == 'groomsmen' ? 'text-white' : 'text-black'
          )}
        >
          Alina and I were the unlikliest of friends, until we both discovered
          each other's love for karaoke. We met in 2005 and over the years, she
          has become one of my very best friends. She is particularly excited
          for the wedding, as her support for straight marriage has been
          unwavering. Even though she's busy traveling the world, she still
          makes a point to be there for me.
        </p>
      </div>
      <BridalCurtain
        type='left'
        showCurtain={showLeftCurtain}
        handleClickMeet={() => handleClickMeet('bridesmaids')}
      />
      <BridalCurtain
        type='right'
        showCurtain={showRightCurtain}
        handleClickMeet={() => handleClickMeet('groomsmen')}
      />
      <BridalTag type='bridal-party' showTag={showBridalTag} />
      <BridalTag
        type='back'
        showTag={showCloseTag}
        handleCloseMeet={handleCloseMeet}
      />
    </div>
  )
}
