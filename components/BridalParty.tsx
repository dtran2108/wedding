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

  const handleClickMeet = () => {
    setShowBridalTag(false)
    setShowCloseTag(true)
    setShowLeftCurtain(false)
    setShowRightCurtain(false)
  }

  const handleCloseMeet = () => {
    setShowBridalTag(true)
    setShowCloseTag(false)
    setShowLeftCurtain(true)
    setShowRightCurtain(true)
  }

  return (
    <div className='relative w-full grid grid-cols-2 min-h-screen overflow-hidden'>
      <BridalCurtain
        type='left'
        showCurtain={showLeftCurtain}
        handleClickMeet={handleClickMeet}
      />
      <BridalCurtain
        type='right'
        showCurtain={showRightCurtain}
        handleClickMeet={handleClickMeet}
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
