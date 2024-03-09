'use client'

import { cn } from '@/lib/utils'
import { Dosis } from 'next/font/google'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'

const dosis = Dosis({ subsets: ['latin'], weight: '400' })

export default function RSVPForm() {
  return (
    <div className='py-4'>
      <h1
        className={cn(dosis.className, 'text-center text-5xl font-bold')}
      >
        RSVP
      </h1>
      <p className='text-center'>
        <i>*Please respond by May, 2024</i>
      </p>
      <div className='bg-[#ffecf5]/50 rounded-lg px-4 py-4 mt-2'>
        <div className='grid w-full items-center gap-1.5'>
          <Label htmlFor='name'>YOUR NAME</Label>
          <Input type='text' id='name' placeholder='Enter your name' />
        </div>
        <div className='grid w-full items-center gap-1.5 mt-6'>
          <Label htmlFor='response'>RECEPTION RESPONSE</Label>
          <RadioGroup defaultValue='accept'>
            <div className='flex items-center space-x-2'>
              <RadioGroupItem value='accept' id='accept' />
              <Label htmlFor='accept'>Joyfully accept</Label>
            </div>
            <div className='flex items-center space-x-2'>
              <RadioGroupItem value='decline' id='decline' />
              <Label htmlFor='decline'>Regretfully decline</Label>
            </div>
          </RadioGroup>
        </div>
        <div className='grid w-full items-center gap-1.5 mt-6'>
          <Label htmlFor='plusOne'>WILL YOU BE BRINGING A PLUS ONE?</Label>
          <RadioGroup defaultValue='yes'>
            <div className='flex items-center space-x-2'>
              <RadioGroupItem value='yes' id='yes' />
              <Label htmlFor='yes'>Yes</Label>
            </div>
            <div className='flex items-center space-x-2'>
              <RadioGroupItem value='no' id='no' />
              <Label htmlFor='no'>No</Label>
            </div>
          </RadioGroup>
        </div>
        <div className='grid w-full items-center gap-1.5 mt-6'>
          <Label htmlFor='email'>YOUR EMAIL ADDRESS</Label>
          <Input type='text' id='email' placeholder='Enter your email' />
        </div>
        <div className='grid w-full items-center gap-1.5 mt-6'>
          <Label htmlFor='message'>ANY MESSAGES</Label>
          <Textarea
            id='message'
            placeholder='I promise to dance if you play Dancing Queen by Girls Generation'
          />
        </div>
        <Button className='bg-black mt-6 w-full hover:bg-black/80'>
          SUBMIT
        </Button>
      </div>
    </div>
  )
}
