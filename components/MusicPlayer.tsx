'use client'

import { Volume2, VolumeX } from 'lucide-react'
import { useRef, useState } from 'react'

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const togglePlayMusic = () => {
    const audio = document.getElementsByTagName('audio')[0]
    if (audio.paused) {
      audioRef.current?.play()
      setIsPlaying(true)
    } else {
      audioRef.current?.pause()
      setIsPlaying(false)
    }
  }

  return (
    <>
      <audio
        className='hidden'
        ref={audioRef}
        controls
        loop
        playsInline
        src='/audio/i-love-you.mp3'
      ></audio>
      <div
        onClick={togglePlayMusic}
        className='bg-black rounded-full w-[40px] aspect-square flex items-center justify-center cursor-pointer'
      >
        {isPlaying ? (
          <Volume2 className='w-5 h-5' strokeWidth={1.25} />
        ) : (
          <VolumeX className='w-5 h-5' strokeWidth={1.25} />
        )}
      </div>
    </>
  )
}
