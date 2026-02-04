import React from 'react'
import { MoveRight } from 'lucide-react'

const RightCardContent = (props) => {
  return (
        <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
            <h2 className='bg-white rounded-full h-10 w-10 flex justify-center items-center text-2xl font-semibold'>{props.id+1}</h2>
            <div>
                <p className='text-lg leading-relaxed text-white mb-1'>{props.intro}</p>
                <div className='flex justify-between'>
                    <button className='bg-blue-600 text-white font-medium px-7 py-3 rounded-full'>{props.tag}</button>
                    <button className='bg-blue-600 text-white font-medium px-3 py-3 rounded-full'><MoveRight /></button>
                </div>
            </div>
        </div>  
        )
}

export default RightCardContent