import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex p-1 m-1 shadow-sm items-center'>
      <img
        src="https://static01.nyt.com/newsgraphics/2020/11/12/fake-people/4b806cf591a8a76adfc88d19e90c8c634345bf3d/fallbacks/mobile-05.jpg"
        alt="user"
        className="w-10 rounded-full"
      />
      <div className="pl-2">
        <span className="text-lg font-bold">{name} </span>
        <span className="font-light">{message}</span>
      </div>
    </div>
  );
}

export default ChatMessage