import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='shrink-0 h-full overflow-hidden relative w-[30%] rounded-3xl bg-gray-900'>
        <img className='h-full w-full object-cover object-center opacity-70' src={props.img} alt="" />
        <RightCardContent id={props.id} tag={props.tag} intro={props.intro}/>
    </div>
  )
}

export default RightCard