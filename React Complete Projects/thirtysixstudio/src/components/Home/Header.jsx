import React from 'react'
import Theme from './Theme'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='mx-2 py-3 flex border-b border-[#F1EDED]'>
      <div className="logo">Thirtysixstudio</div>
      <div className='flex justify-evenly w-full'>
        <Theme />
        <Navbar />
      </div>
    </div>
  )
}

export default Header
