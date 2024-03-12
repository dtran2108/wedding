import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='min-h-screen w-screen flex items-center justify-center flex-col space-y-3 p-3'>
      <h1 className='text-4xl text-center'>
        Vui lòng điều hướng đến một trong các trang sau
      </h1>
      <div className='flex items-center justify-center space-x-4'>
        <Link href='/scroll'>
          <Button size='lg'>Scroll</Button>
        </Link>
        <Link href='/pop-up'>
          <Button size='lg' variant='secondary'>
            Pop up
          </Button>
        </Link>
      </div>
    </main>
  )
}
