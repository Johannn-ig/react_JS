import React, { useState } from 'react'


const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (e)=>{
    e.preventDefault()

    const storedTask = [...task]
    storedTask.push({title,details})

    setTask(storedTask)
    

    setTitle('')
    setDetails('')
    
  }

  const deleteNotes = (idx)=>{
      const copyTask = [...task]
      console.log(copyTask)
      
      copyTask.splice(idx,1)
      setTask(copyTask)
    }
  
  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className='flex lg:w-1/2 flex-col gap-4 px-15 pt-25'>
        <input
          type="text"
          placeholder='Enter Notes Heading'
          className='outline-none text-[20px] px-5 py-2 border-2 rounded' 
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value)
          }}
        />
        <textarea
          placeholder='Enter Notes Details'
          className='outline-none text-[20px] h-40 px-5 py-2 border-2 rounded'
          value={details}
          onChange={(e)=>{
            setDetails(e.target.value)
          }}
        ></textarea>
        <button className='bg-white text-black px-5 py-2 rounded text-[22px] font-medium'>Add Notes</button>
      </form>
      <div className='lg:w-1/2 pt-10 px-15 bg-black'>
        <h1 className='text-3xl font-bold'>Your Notes</h1>
        <div className='flex flex-wrap gap-4 mt-5 overflow-auto h-[80vh]'>
          {task.map(function (elem, idx) {
          return (
            <div key={idx} className="h-fit  w-full rounded-xl p-5 text-black bg-white relative">
              <h2 
                className='absolute right-5 top-3 cursor-pointer'
                onClick={()=>{
                  deleteNotes(idx)
                }}
              >X</h2>
              <h3 className='leading-tight text-xl font-medium'>{elem.title}</h3>
              <p className='mt-2 leading-tight'>{elem.details}</p>
            </div>
          )
          })}
        </div>
      </div>
    </div>
  )
}

export default App 