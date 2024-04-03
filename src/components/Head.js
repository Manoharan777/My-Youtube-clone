import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch  = useDispatch();

  const toogleMenuHandler = () => {
   dispatch(toggleMenu());
  }
  return (
    <div className="grid grid-flow-col p-2 my-2 shadow-lg">
      <div className="flex col-span-1 cursor-pointer">
        <img
          onClick={() => toogleMenuHandler()}
          className="h-10 "
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png"
          alt="hamburger"
        />
        <img
          className="h-14 mx-2 "
          src="https://www.freeiconspng.com/thumbs/youtube-logo-png/youtube-logo-png-transparent-image-5.png"
          alt="youtube-logo"
        />
      </div>
      <div className="col-span-10 text-center">
        <input
          className="w-1/2 p-2 px-4 border border-gray-400 rounded-l-full"
          type="text"
          placeholder="Search"
        />
        <button className="border border-gray-400 bg-gray-100 px-5 py-2 rounded-r-full font-semibold ">
          🔍
        </button>
      </div>
      <div className="col-span-1 cursor-pointer">
        <img
          className="h-10"
          src="https://static.vecteezy.com/system/resources/thumbnails/019/879/186/small/user-icon-on-transparent-background-free-png.png"
          alt="user-logo"
        />
      </div>
    </div>
  );
};

export default Head;
