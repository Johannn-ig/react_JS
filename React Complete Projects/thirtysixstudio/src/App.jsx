import React from 'react'
import Screen from './Screen'

const App = () => {
  return (
    <div className='bg-black min-h-screen w-full text-white flex flex-wrap'>
      <Screen startIndex={0} />
      <Screen startIndex={150}/>
      <Screen startIndex={300}/>
      <Screen startIndex={450}/>
      <Screen startIndex={600}/>
      <Screen startIndex={750}/>
      <Screen startIndex={900}/>
    </div>
  )
}

export default App
