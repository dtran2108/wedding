'use client'

import { motion } from 'framer-motion'
import Link from './Link'
import { usePathname } from 'next/navigation'

const menus = [
  {
    title: 'Schedule',
    link: '/schedule',
  },
  {
    title: 'Details',
    link: '/details',
  },
  {
    title: 'Travel Info',
    link: '/travel-info',
  },
]

export default function NavBar() {
  const pathname = usePathname()

  return (
    <nav className='sticky top-0 bg-white backdrop-filter backdrop-blur-md bg-opacity-40 border-b border-gray-200 firefox:bg-opacity-40 z-50'>
      <div className='max-w-5xl mx-auto px-4'>
        <div className='flex items-center justify-between h-16'>
          <motion.a
            whileHover={{
              color: '#E6C994',
            }}
            className='text-2xl text-gray-900 font-semibold'
            href='/'
          >
            D&Đ
          </motion.a>
          <div className='flex space-x-3 lg:space-x-6 text-gray-900'>
            {menus.map((item) => (
              <Link
                key={item.title}
                title={item.title}
                href={item.link}
                isActive={pathname == item.link}
              />
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
