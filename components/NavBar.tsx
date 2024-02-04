'use client'

import { motion } from 'framer-motion'
import Link from './Link'

export default function NavBar() {
  return (
    <nav className='sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200 firefox:bg-opacity-90'>
      <div className='max-w-5xl mx-auto px-4'>
        <div className='flex items-center justify-between h-16'>
          <span className='text-2xl text-gray-900 font-semibold'>L&Y</span>
          <div className='flex space-x-6 text-gray-900'>
            <Link title='Our Story' href='#!' />
            <Link title='Schedule' href='#!' />
            <Link title='Details' href='#!' />
            <Link title='Things to do' href='#!' />
            <Link title='Places to stay' href='#!' />
            <Link title='Travel Info' href='#!' />
          </div>
        </div>
      </div>
    </nav>
  )
}
