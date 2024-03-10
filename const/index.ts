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
