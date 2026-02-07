import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'

const Agence = () => {

  const imageDivRef = useRef(null)
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function(){
    gsap.to(imageDivRef.current,{
      scrollTrigger:{
        trigger:imageDivRef.current,
        markers:true,
        start:'top 24.5%',
        end:'top -80%',
        scrub: true,
        pin:true
      }
    })
  })

  return (
    <div>
      <div className='section1'>
        <div ref={imageDivRef} className='absolute w-[15vw] top-48 left-[30vw] rounded-3xl bg-red-200 overflow-hidden'>
          <img src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7" alt="" />
        </div>
        <div className='relative font-[HeroFont500]'>
          <div className='mt-[55vh]'>
            <h1 className='text-[20vw] uppercase leading-[18vw] text-center '>Soixan7t <br /> Twelve</h1>
          </div>
          <div className='pl-[47%] mt-20'>
            <p className='text-5xl w-full'><span className='ml-50'>Our</span> curiosity fuels our creativity. We remain humble and say no to big egos, even yours. A brand is alive. She has values, a personality, a history. If we forget that, we can make good numbers in the short term, but we kill it in the long term. This is why we are committed to giving perspective, to building influential brands.</p>
          </div>
        </div>
      </div>
      <div className="section2 h-screen"></div>
    </div>
  )
}

export default Agence