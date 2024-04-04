import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResult } from "../utils/searchSlice";
const Head = () => {
  const [searchInput, setSearchInput] = useState("");
  const [suggestion,setSuggestion] = useState([]);
  const [ showsuggestion,setShowSuggestion] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  const toogleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const getSuggestionSearchdata = async () => {
    console.log(searchInput);
    const response = await fetch(YOUTUBE_SEARCH_API + searchInput);
    const data = await response.json();
    setSuggestion(data[1]);
    //update cache
    dispatch(cacheResult({
      [searchInput] : data[1],
    }))
  };

  useEffect(() => {
    const timer = setTimeout(() => {
    if (searchCache[searchInput]) {
        setSuggestion(searchCache[searchInput]);
    }else{
      getSuggestionSearchdata();
    }}, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchInput]);

  // console.log(searchInput);
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
      <div className="col-span-10 ">
        <div>
          <input
            className="w-1/2 p-2 px-4 border border-gray-400 rounded-l-full"
            type="text"
            placeholder="🔍  Search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
          <button className="border border-gray-400 bg-gray-100 px-5 py-2 rounded-r-full font-semibold ">
            🔍
          </button>
        </div>
        {showsuggestion &&  searchInput && (
          <div className="px-5 py-3  w-[39rem] rounded-lg shadow-md bg-white border border-gray-100 absolute z-10">
            <ul>
              {suggestion.map((s) => (
                <li
                  key={s}
                  className="p-1 pb-2 m-1 shadow-sm hover:bg-gray-100"
                >
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
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
