'use client'

import { motion } from 'framer-motion'
import Link from './Link'
import { usePathname } from 'next/navigation'
import Menu from '@/icons/Menu'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

const menus = [
  {
    title: 'Our Story',
    link: '/our-story',
  },
  {
    title: 'Gallery',
    link: '/gallery',
  },
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
    <nav className='sticky top-0 bg-white backdrop-filter backdrop-blur-sm bg-opacity-60 border-b border-gray-200 firefox:bg-opacity-60 z-50'>
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
          <div className='hidden lg:flex space-x-3 lg:space-x-6 text-gray-900'>
            {menus.map((item) => (
              <Link
                key={item.title}
                title={item.title}
                href={item.link}
                isActive={pathname == item.link}
              />
            ))}
          </div>
          <Sheet>
            <SheetTrigger className='block lg:hidden'>
              <Menu className='cursor-pointer' />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>
                  <motion.a
                    whileHover={{
                      color: '#E6C994',
                    }}
                    className='text-2xl text-gray-900 font-semibold'
                    href='/'
                  >
                    D&Đ
                  </motion.a>
                </SheetTitle>
              </SheetHeader>
              <div className='py-4'>
                {menus.map((item) => (
                  <div key={item.title}>
                    <Link
                      title={item.title}
                      href={item.link}
                      isActive={pathname == item.link}
                    />
                  </div>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
