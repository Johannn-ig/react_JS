import React from 'react'
import BgVideo from '../components/home/BgVideo'
import HomeBottonText from '../components/home/HomeBottonText'
import HomeHeroText from '../components/home/HomeHeroText'

const Home = () => {
  return (
    <div>
      <div
      className='h-screen w-full fixed'>
        <BgVideo />
      </div>
      <div
      className='h-screen relative flex flex-col justify-between'>
        <HomeHeroText />
        <HomeBottonText />
      </div>
    </div>
  )
}

export default Home