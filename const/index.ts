import localFont from 'next/font/local'

export const DEFAULT_BOX_SHADOW = '0px 8px 24px 0px #AE585240'
export const SECTION_STYLE = 'w-full h-full rounded-lg'

export const lovelace = localFont({
  src: '../components/fonts/Lovelace/Lovelace-Text-Regular.otf',
})

export const dreamAvenue = localFont({
  src: '../components/fonts/DreamAvenue/Dream-Avenue.otf',
})

export const scrollToHash = function (element_id: string) {
  const element = document.getElementById(element_id)
  element?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest',
  })
}

export const storiesContent = [
  {
    image: '/images/story-1.jpeg',
    date: 'April 2010',
    title: 'Coffee Catastrophe',
    content:
      "Sarah mistook Jaiden's brand new suit for a napkin holder, accidentally spilling her coffee all over him at a bustling café. Their first encounter involved a dry cleaner, a lot of apologies, and an unexpected bond over stained garments.",
  },
  {
    image: '/images/story-2.jpeg',
    date: 'August 2012',
    title: 'Turbulent Ties',
    content:
      "Sarah, prone to motion sickness, ended up in Jack's lap during a bumpy flight to Paris. Jack, attempting to be suave, mistook her queasy grip for a gesture of affection, leading to an awkward yet oddly cozy journey across the Atlantic.",
  },
  {
    image: '/images/story-3.jpeg',
    date: 'May 2013',
    title: 'Culinary Comedy',
    content:
      "Jack's attempt at a romantic dinner ended with a fire alarm, a burnt lasagna, and a vow to never touch a stove again. Their first date became an impromptu kitchen dance party, complete with takeout pizza and laughter.",
  },
  {
    image: '/images/story-4.jpeg',
    date: 'July 2014 - September 2016',
    title: 'Globetrotting Goofs',
    content:
      "Sarah and Jack's travel adventures included getting lost in translation in Tokyo, accidentally joining a salsa competition in Cuba, and narrowly escaping a flock of determined seagulls in Venice.",
  },
  {
    image: '/images/story-5.jpeg',
    date: 'February 2017',
    title: 'The Cat Ultimatum',
    content:
      'Sarah jokingly threatened Jack with a lifetime of cat-themed decor unless he proposed. Jack, fearing the wrath of ceramic felines, took the hint and began plotting a proposal that would make even the most cynical cat lady swoon.',
  },
  {
    image: '/images/story-6.jpeg',
    date: 'April 2019',
    title: 'The Proposal Prank',
    content:
      "Jack staged an elaborate prank proposal involving a fake ring and a surprise flash mob. Sarah's initial shock turned into laughter when Jack revealed the real ring hidden inside a giant inflatable unicorn.",
  },
  {
    image: '/images/story-7.jpeg',
    date: 'January 2020 - March 2022',
    title: 'Wedding Woes',
    content:
      "From wrestling with stubborn florists to accidentally sending out invitations with the wrong date, Sarah and Jack's wedding planning journey resembled a sitcom script. Each mishap only brought them closer together amidst the chaos.",
  },
]

export const agendaContent = [
  {
    time: '4:30 PM - 7:00 PM',
    content:
      'Reception begins. Dinner is served, toasts, first dance, cake cutting, and bouquet toss.',
    image: '/images/agenda-1.jpeg',
  },
  {
    time: '7:00 PM - 7:30 PM',
    content: 'Bride and groom thank guests and make rounds to each table.',
    image: '/images/agenda-2.jpeg',
  },
  {
    time: '7:30 PM - 9:00 PM',
    content:
      'Dancing and mingling continue. Photo booth and late-night snacks available.',
    image: '/images/agenda-3.jpeg',
  },
  {
    time: '9:00 PM',
    content: 'Last call for alcohol.',
    image: '/images/agenda-4.jpeg',
  },
  {
    time: '9:30 PM',
    content: 'Final dance and farewell.',
    image: '/images/agenda-5.png',
  },
  {
    time: '9:30 PM onwards',
    content: 'Newlyweds depart for honeymoon suite or after-party.',
    image: '/images/agenda-6.jpeg',
  },
]
