import React from 'react'
import RightCard from './RIghtCard'

const RightContent = (props) => {
  return (
    <div className="h-full w-2/3 overflow-x-auto gap-5 py-4 flex flex-nowrap">
      {props.data.map((elem, idx) => (
        <RightCard key={idx} id={idx} img={elem.img} intro={elem.intro} tag={elem.tag}/>
      ))}
    </div>
  );
}

export default RightContent