import { cn } from '@/lib/utils'

export default function Divider({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn('relative flex py-2 items-center', className)}>
      <div className='flex-grow border-t-2 border-primary'></div>
      <span className='flex-shrink mx-4'>{children}</span>
      <div className='flex-grow border-t-2 border-primary'></div>
    </div>
  )
}
