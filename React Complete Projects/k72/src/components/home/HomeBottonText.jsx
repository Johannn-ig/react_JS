import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottonText = () => {
  return (
    <div className='flex justify-center gap-[5vw] font-[HeroFont500] mb-2'>
      <div
      className='border-2 leading-none px-8 pt-3 text-[6vw] text-white uppercase rounded-full cursor-pointer'>
        <Link to={'./projects'}>Projects</Link>
      </div>
      <div 
      className='border-2 leading-none px-8 pt-3 text-[6vw] text-white uppercase rounded-full cursor-pointer'>
        <Link to={'./agence'}>Agence</Link>
      </div>
    </div>
  )
}

export default HomeBottonText