import React from 'react'
import { MoveUpRight } from 'lucide-react';
import HeroText from './HeroText';

const LeftContent = () => {
  return (
    <div className='h-full flex flex-col justify-between w-1/3'>
        <HeroText />
        <div className='m-6'>
            <MoveUpRight size={70}/>
        </div>
    </div>
  )
}

export default LeftContent