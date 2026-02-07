import React from 'react'
import BgVideo from './BgVideo'

const HomeHeroText = () => {
  return (
    <div className='text-center text-white leading-none tracking-wide'>
      <div className='font-[HeroFont300] text-[8vw] uppercase'>The spark who</div>
      <div className='font-[HeroFont300] text-[8vw] uppercase flex justify-center'><div className='h-30 w-70 rounded-full overflow-hidden'><BgVideo /></div>generates</div>
      <div className='font-[HeroFont300] text-[8vw] uppercase'>there creativity</div>
    </div>
  )
}

export default HomeHeroText