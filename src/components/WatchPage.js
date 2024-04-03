import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {closeMenu} from "../utils/appSlice"
import {  useSearchParams } from 'react-router-dom';
const WatchPage = () => {
const dispatch = useDispatch(); 

const [searchparam] = useSearchParams();
console.log(searchparam.get("v"));
useEffect(()=>{
    dispatch(closeMenu());
},[])
  
  return (
    <div className='p-5 '>
      <iframe
        width="1200"
        height="600"
        src={
          "https://www.youtube.com/embed/"+ searchparam.get("v")
        }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default WatchPage