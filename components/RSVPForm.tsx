'use client'

import { cn } from '@/lib/utils'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { titleFont } from '@/const'

export default function RSVPForm() {
  return (
    <div
      className='p-4'
      style={{
        backgroundImage: `url('/images/paper-bg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h1 className={cn(titleFont.className, 'text-center text-5xl font-bold')}>
        RSVP
      </h1>
      <p className='text-center'>
        <i>*Vui lòng trả lời trước tháng Năm, 2024</i>
      </p>
      <div className='rounded-lg px-4 py-4 mt-2'>
        <div className='grid w-full items-center gap-1.5'>
          <Label htmlFor='name'>TÊN CỦA BẠN</Label>
          <Input type='text' id='name' placeholder='Nhập tên' />
        </div>
        <div className='grid w-full items-center gap-1.5 mt-6'>
          <Label htmlFor='response'>CÂU TRẢ LỜI</Label>
          <RadioGroup defaultValue='accept'>
            <div className='flex items-center space-x-2'>
              <RadioGroupItem value='accept' id='accept' />
              <Label htmlFor='accept'>Rất hoan hỉ tham dự</Label>
            </div>
            <div className='flex items-center space-x-2'>
              <RadioGroupItem value='decline' id='decline' />
              <Label htmlFor='decline'>Tiếc nuối từ chối</Label>
            </div>
          </RadioGroup>
        </div>
        <div className='grid w-full items-center gap-1.5 mt-6'>
          <Label htmlFor='plusOne'>BẠN CÓ BẠN ĐI CÙNG KHÔNG?</Label>
          <RadioGroup defaultValue='yes'>
            <div className='flex items-center space-x-2'>
              <RadioGroupItem value='yes' id='yes' />
              <Label htmlFor='yes'>Có</Label>
            </div>
            <div className='flex items-center space-x-2'>
              <RadioGroupItem value='no' id='no' />
              <Label htmlFor='no'>Không</Label>
            </div>
          </RadioGroup>
        </div>
        <div className='grid w-full items-center gap-1.5 mt-6'>
          <Label htmlFor='email'>ĐỊA CHỈ EMAIL</Label>
          <Input type='text' id='email' placeholder='Nhập địa chỉ email' />
        </div>
        <div className='grid w-full items-center gap-1.5 mt-6'>
          <Label htmlFor='message'>TIN NHẮN THÊM</Label>
          <Textarea
            id='message'
            placeholder='Tôi hứa sẽ nhảy nếu bạn bật My Boy bởi Girls Generation'
          />
        </div>
        <Button className='bg-black mt-6 w-full hover:bg-black/80'>GỬI</Button>
      </div>
    </div>
  )
}
