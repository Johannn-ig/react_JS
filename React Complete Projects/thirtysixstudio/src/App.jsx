import React from 'react'
import Screen from './Screen'
import data from './data'

const App = () => {
  return (
    <div className='bg-black min-h-screen w-full text-white flex flex-wrap'>
      {data.map((item, index)=>(
        <div key={index}>
          {item.map((screendetas, index)=>{
            <Screen details={screendetas} />
          })}
        </div>
      ))}
    </div>
  )
}

export default App
