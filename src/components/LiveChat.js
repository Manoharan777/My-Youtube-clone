import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import {addMessage} from  "../utils/chatSlice";
import { useDispatch, useSelector } from "react-redux";
import { generateRandomName, makeRandomMessage } from "../utils/helper";
const LiveChat = () => {
  const [liveMessage,setLivemessage] = useState("")
  const dispatch = useDispatch();
  const chatmsg = useSelector((store) => store.chat.messages);
    useEffect(()=>{
       const timer =  setInterval(()=>{
//API Polling...
dispatch(
  addMessage({
    name: generateRandomName(),
    message: makeRandomMessage(20) + "🎇🔥",
  })
);
        },1000);

        return ()=> clearInterval(timer);
    },[])

    const handleSubmit = (e) => {
e.preventDefault();
dispatch(addMessage({
  name: "John-Test_User",
  message: liveMessage,
}));
setLivemessage("");

    }
  return (
    <>
      <div className="p-2 ml-2 border border-black w-full h-[600px] bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {chatmsg.map((chatmg, index) => (
          <ChatMessage
            key={index}
            name={chatmg.name}
            message={chatmg.message}
          />
        ))}
      </div>
      <form
        className=" mx-2 border border-black w-full"
        onSubmit={handleSubmit}
      >
        <input
          className="border w-96 ml-4 border-slate-400 p-2"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLivemessage(e.target.value);
          }}
        />
        <button className="p-2 m-2 rounded bg-gray-700 text-white">Send</button>
      </form>
    </>
  );
}

export default LiveChat 