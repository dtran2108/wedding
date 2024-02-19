'use client'

import NavBar from '@/components/NavBar'
import { cn } from '@/lib/utils'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { Playball } from 'next/font/google'
import { useEffect, useState } from 'react'

gsap.registerPlugin(ScrollTrigger)

const playball = Playball({ subsets: ['latin'], weight: '400' })

export default function Page() {
  const [sections, setSections] = useState<Element[]>([])

  useEffect(() => {
    const storySections = document.querySelectorAll('.story-section')
    setSections(Array.from(storySections))
  }, [])

  useEffect(() => {
    if (sections.length > 0) {
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: '.container',
          pin: true,
          scrub: 1,
        },
      })
    }
  }, [sections])

  const stories = [
    {
      key: 'story1',
      image: "url('/images/story/story-1.jpeg')",
      title: 'Gặp Gỡ: 15 Tháng 6, 2016',
      content:
        'Mai và Tuấn gặp nhau lần đầu trong một buổi học tập tại Đại học Kinh tế. Dù hai người đến từ hai thế giới khác nhau, nhưng họ đã nhanh chóng nảy sinh một mối quan tâm đặc biệt đối với nhau.',
    },
    {
      key: 'story2',
      image: "url('/images/story/story-2.jpeg')",
      title: 'Ngày Đầu Tiên Của Chúng Ta: 25 Tháng 12, 2016',
      content:
        'Mai và Tuấn đã có một ngày Giáng Sinh lãng mạn, dành thời gian chia sẻ những niềm vui và kỷ niệm đặc biệt cùng nhau.',
    },
    {
      key: 'story3',
      image: "url('/images/story/story-3.jpeg')",
      title: 'Bước Tiến Quan Trọng: 14 Tháng 2, 2018',
      content:
        'Tuấn đã thề sẽ dành cả đời cho Mai trong một buổi tối Valentine đầy ý nghĩa, khi anh gửi tặng cô một chiếc nhẫn ước hẹn.',
    },
    {
      key: 'story4',
      image: "url('/images/story/story-4.jpeg')",
      title: 'Chuyến Du Lịch Đặc Biệt: 10 Tháng 7, 2019',
      content:
        'Mai và Tuấn cùng nhau thực hiện một chuyến du lịch đặc biệt đến Đà Nẵng, nơi họ tận hưởng những khoảnh khắc tuyệt vời trên bãi biển và khám phá vẻ đẹp của thành phố này.',
    },
    {
      key: 'story5',
      image: "url('/images/story/story-5.jpeg')",
      title: 'Lời Hứa Trọn Đời: 30 Tháng 4, 2020',
      content:
        'Trong một buổi tối đầy ngọn lửa, Tuấn đã làm lễ cầu hôn trước sự chứng kiến của gia đình và bạn bè thân thiết, hứa sẽ mãi mãi yêu thương và chăm sóc Mai.',
    },
    {
      key: 'story6',
      image: "url('/images/story/story-6.jpeg')",
      title: 'Ngày Hạnh Phúc: 20 Tháng 11, 2021',
      content:
        'Mai và Tuấn chính thức trở thành vợ chồng trong một buổi lễ cưới lãng mạn và ấm áp, tôn vinh tình yêu và sự cam kết của họ.',
    },
    {
      key: 'story7',
      image: "url('/images/story/story-7.jpeg')",
      title: 'Hành Trình Tương Lai: Vĩnh Viễn',
      content:
        'Với tình yêu không ngừng nghỉ và sự hỗ trợ lẫn nhau, Mai và Tuấn sẽ tiếp tục hành trình cuộc sống cùng nhau, xây dựng một tương lai đầy hạnh phúc và ấm áp.',
    },
  ]

  return (
    <div className='container py-4 relative'>
      <NavBar />
      <h1 className='mt-8 text-4xl font-bold mb-8'>Our Story</h1>
      <div className='flex space-x-8'>
        {stories.map((story) => (
          <div
            key={story.key}
            className='story-section min-w-[300px] md:min-w-[370px]'
          >
            <div
              className='w-full h-[300px] rounded-lg'
              style={{
                backgroundImage: story.image,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
            <div className='border border-[#D7DFDE] rounded-lg p-4 mt-4'>
              <h1 className={cn(playball.className, 'font-bold text-2xl')}>
                {story.title.split(':')[0]}
              </h1>
              <p className={cn(playball.className, 'text-sm')}>
                {story.title.split(':')[1]}
              </p>
              <div className='rounded-lg h-[3px] w-[100px] bg-yellow my-2'></div>
              <p className={cn('mt-2 font-light text-sm')}>{story.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
