'use client'

import { cn } from '@/lib/utils'
import { Fleur_De_Leah, Neuton } from 'next/font/google'
import { motion } from 'framer-motion'
import { bridesmaids, groomsmen } from './BridalParty'

const allura = Fleur_De_Leah({ subsets: ['latin'], weight: '400' })
const neuton = Neuton({ subsets: ['latin'], weight: '400' })

export default function BridalContent({
  contentType,
  showContent,
  currentPerson,
  setCurrentPerson,
}: {
  contentType: 'groomsmen' | 'bridesmaids'
  showContent: boolean
  currentPerson: any
  setCurrentPerson: any
}) {
  const show = {
    opacity: 1,
    display: 'flex',
  }

  const hide = {
    opacity: 0,
    transitionEnd: {
      display: 'none',
    },
  }

  return (
    <motion.div
      animate={showContent ? show : hide}
      className={cn(
        'absolute text-black w-full top-0 left-0 z-10 min-h-[90vh] flex flex-col items-center py-8'
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
        {(contentType == 'bridesmaids' ? bridesmaids : groomsmen).map(
          (person) => (
            <div
              key={person.name}
              onClick={() => setCurrentPerson(person)}
              className={cn(
                'rounded-full w-[170px] aspect-square border border-white shadow-lg flex items-center justify-center hover:opacity-100 cursor-pointer',
                currentPerson.name == person.name ? 'opacity-100' : 'opacity-50'
              )}
            >
              <div
                className='rounded-full w-[150px] aspect-square'
                style={{
                  backgroundImage: `url('${person.image}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'top',
                }}
              ></div>
            </div>
          )
        )}
      </div>
      <div
        className={cn(
          'mt-4',
          contentType == 'groomsmen' ? 'text-white' : 'text-black'
        )}
      >
        <h3 className='text-xl text-center'>{currentPerson.name}</h3>
        <p className='text-center'>{currentPerson.role}</p>
      </div>
      <p
        className={cn(
          neuton.className,
          'mt-8 text-center max-w-lg',
          contentType == 'groomsmen' ? 'text-white' : 'text-black'
        )}
      >
        {currentPerson.thoughts}
      </p>
    </motion.div>
  )
}
