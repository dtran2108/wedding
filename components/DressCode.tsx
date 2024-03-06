import { cn } from '@/lib/utils'
import { Water_Brush } from 'next/font/google'
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog'

const waterBrush = Water_Brush({ subsets: ['latin'], weight: '400' })

export default function DressCode() {
  const imageList = ['/images/gallery-1.jpeg', '/images/gallery-2.jpeg']

  return (
    <div>
      <h1
        className={cn(
          waterBrush.className,
          'text-center text-5xl font-bold mt-4'
        )}
      >
        Dress Code Suggestion
      </h1>
      <div className='grid grid-cols-2 gap-2 mt-8'>
        {imageList.map((imageUrl, i) => (
          <Dialog key={imageUrl + 't' + i}>
            <DialogTrigger asChild>
              <div
                className='w-full aspect-square border-4 border-primary rounded-lg cursor-pointer'
                style={{
                  backgroundImage: `url('${imageUrl}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
            </DialogTrigger>
            <DialogContent className='p-2 w-full max-w-lg md:max-w-[800px]'>
              <div
                className='w-full aspect-video border-4 border-primary rounded-lg cursor-pointer'
                style={{
                  backgroundImage: `url('${imageUrl}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  )
}
