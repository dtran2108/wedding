'use client'

import { motion } from 'framer-motion'
import Link from './Link'

export default function NavBar() {
  return (
    <nav className='sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200 firefox:bg-opacity-90'>
      <div className='max-w-5xl mx-auto px-4'>
        <div className='flex items-center justify-between h-16'>
          <motion.a
            whileHover={{
              color: '#E6C994',
            }}
            className='text-2xl text-gray-900 font-semibold'
            href='/'
          >
            L&Y
          </motion.a>
          <div className='flex space-x-6 text-gray-900'>
            <Link title='Our Story' href='/our-story' />
            <Link title='Schedule' href='/schedule' />
            <Link title='Details' href='/details' />
            <Link title='Travel Info' href='/travel-info' />
          </div>
        </div>
      </div>
    </nav>
  )
}
