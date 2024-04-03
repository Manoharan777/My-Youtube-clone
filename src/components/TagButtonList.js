import React from 'react'
import Button from './Button'
const TagButtonList = () => {

  const btnList = ["All","Music","Games","Vlogs","Cricket","Football","News","Live","Cinema","Dance","Fasion","Drama","Game shows","Mixes","Tutorials"]
  return (
    <div className='flex justify-center m-1'>
      {btnList.map((btn, index) => (
        <Button key={index} name = {btn}/>
      ))}
    </div>
  );
}

export default TagButtonList