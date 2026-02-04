import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const [userData, setUserData] = useState([]);

  const data = async ()=>{
    const response = await axios.get('https://picsum.photos/v2/list?page=3')

    setUserData(response.data)

    console.log(response.data);
    
  }

  useEffect(function(){
    data()
  },[])

  let printUserData = 'No data'
  if(printUserData.length > 0){
    printUserData = userData.map(function (elem, idx) {
          return (
            <div key={idx} className='w-1/4 px-5 py-2'>
             <img 
             src={elem.download_url} alt="" />
             <h2>{elem.author}</h2>
            </div>
          )
          })
  }

  return (
    <div className='overflow-auto bg-black text-white min-h-screen'>
    <div>{printUserData}</div>
    </div>
  )
}

export default App