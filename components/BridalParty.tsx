'use client'

import { useState } from 'react'
import BridalCurtain from './BridalCurtain'
import BridalTag from './BridalTag'
import BridalContent from './BridalContent'

export const bridesmaids = [
  {
    name: 'ALINA NGUYEN',
    image: '/images/woman.jpeg',
    role: 'MAID OF HONOR',
    thoughts:
      "Alina and I were the unlikliest of friends, until we both discovered each other's love for karaoke. We met in 2005 and over the years, she has become one of my very best friends. She is particularly excited for the wedding, as her support for straight marriage has been unwavering. Even though she's busy traveling the world, she still makes a point to be there for me.",
  },
  {
    name: 'KATE GAFFNEY',
    image: '/images/woman.jpeg',
    role: 'BRIDESMAID',
    thoughts:
      "Kate and I met when I got a job at Digitaria taking over her role as the new receptionist. We became really good work buddies and over time, really great friends. During the beginning of our friendship, I had no idea she was working as a double agent for Z. That's just how good she is. Now she's in LA pursuing her dreams and I'm in Chicago pursuing mine. And when we get together, we pick up right where we left off... making funny Asian jokes.",
  },
  {
    name: 'MADISON LE',
    image: '/images/woman.jpeg',
    role: 'BRIDESMAID',
    thoughts:
      "Maddy and I met shortly after graduating high school. We had so much in common (middle name, last name, we both were manicurists), we started telling people we were related. We decided to become roomies in 2006 and lived together for a year. During that time, we've had plenty of fond memories, including the time we wore the cutest shoes to Tijuana and couldn't walk back to the car or once, we left the doctor's office with burnt fingers and were so pitiful, we started whining in Vietnamese. Good times",
  },
  {
    name: 'LYDIA CRAM',
    image: '/images/woman.jpeg',
    role: 'BRIDESMAID, SISTER OF THE BRIDE',
    thoughts:
      "Lydia (or as I call her, Nga) is the hostess with the mostess. Ever since I can remember, she's been baking and cooking for me. I've never met anyone else who enjoys food as much as she does. If you bump into her at the wedding, be sure to thank her for all the delicious sweets at the dessert table. And don't forget to try her dreamt up cocktail, SugaWataPinq (which Z. named). Seriously, she dreamt the recipe. Ask her.",
  },
]

export const groomsmen = [
  {
    name: 'MAXX HENRY-FRAZER',
    image: '/images/man.jpeg',
    role: 'BEST MAN, BROTHER OF THE GROOM',
    thoughts:
      "Maxx is my older brother and has been my best friend my entire life. Luck of the draw I know, but he's always had my back and been there when I needed him. I have lived with him on two coasts, been completely broke with him, been flush, partied all night, worked long hours, and a hundred other things. When I think back on my best memories he is there for a lot of them and will continue to be. I couldn't ask for a better person to be my Best Man.",
  },
  {
    name: 'JAMES "CHIP" PETERSEN',
    image: '/images/man.jpeg',
    role: 'GROOMSMAN, BROTHER OF THE GROOM',
    thoughts:
      'After a certain amount of time, for better or worse, people can’t help being family. I met Chip 25 years ago and he has been a part of my life ever since. Wherever we are in the world he’s one of the people I reach out to, sharing my victories and my losses. We grew up together from, playing with toys, first dates, starting college, moving out on our own, and now starting our own families, Chip has been there with me through it all.',
  },
  {
    name: 'JUSTIN ALLEN',
    image: '/images/man.jpeg',
    role: 'GROOMSMAN',
    thoughts: `I met Justin at Fresno State. You know how everyone has a friend who is "That guy?" Justin is my "That Guy" and I wouldn't have it any other way. He's been keeping me honest for the last 15 years and I have been trying to keep him out of trouble. Neither of us is always successful. Justin always keeps it real, because that's all he knows how to do. If you ask him for his opinion about something you'll never be disappointed.`,
  },
  {
    name: 'NICK BARKER',
    image: '/images/man.jpeg',
    role: 'GROOMSMAN',
    thoughts:
      'If you asked me to remember two things that happened in college where Nick wasn’t there, I could do it. I would run into trouble if you asked for a third thing. When I met Nick at 18, we both would have sworn we knew everything there was to know. That was not true. We managed to figure a lot of it out together and make a lot of great memories along the way, both back in school and in San Diego.',
  },
]

export default function BridalParty() {
  const [showBridalTag, setShowBridalTag] = useState(true)
  const [showCloseTag, setShowCloseTag] = useState(false)
  const [showLeftCurtain, setShowLeftCurtain] = useState(true)
  const [showRightCurtain, setShowRightCurtain] = useState(true)
  const [showContent, setShowContent] = useState(true)
  const [contentType, setContentType] = useState<'bridesmaids' | 'groomsmen'>(
    'bridesmaids'
  )

  const [currentPerson, setCurrentPerson] = useState(
    contentType == 'bridesmaids' ? bridesmaids[0] : groomsmen[0]
  )

  const handleClickMeet = (type: 'bridesmaids' | 'groomsmen') => {
    setShowBridalTag(false)
    setShowCloseTag(true)
    setShowLeftCurtain(false)
    setShowRightCurtain(false)
    setShowContent(true)
    setContentType(type)
    setCurrentPerson(type == 'bridesmaids' ? bridesmaids[0] : groomsmen[0])
  }

  const handleCloseMeet = () => {
    setShowBridalTag(true)
    setShowCloseTag(false)
    setShowLeftCurtain(true)
    setShowRightCurtain(true)
    setShowContent(false)
  }

  return (
    <div className='relative w-full grid grid-cols-2 min-h-[90vh] overflow-hidden'>
      <BridalContent
        currentPerson={currentPerson}
        setCurrentPerson={setCurrentPerson}
        contentType={contentType}
        showContent={showContent}
      />
      <BridalCurtain
        type='left'
        showCurtain={showLeftCurtain}
        handleClickMeet={() => handleClickMeet('bridesmaids')}
      />
      <BridalCurtain
        type='right'
        showCurtain={showRightCurtain}
        handleClickMeet={() => handleClickMeet('groomsmen')}
      />
      <BridalTag type='bridal-party' showTag={showBridalTag} />
      <BridalTag
        type='back'
        showTag={showCloseTag}
        handleCloseMeet={handleCloseMeet}
      />
    </div>
  )
}
