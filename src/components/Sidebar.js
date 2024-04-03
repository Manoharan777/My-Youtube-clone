import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen); 
  //Early return pattern
  if(!isMenuOpen) return null;
  return (
    <div className=" p-5 pr-14 shadow-lg w-48 text-lg ">
      <ul className="my-3">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Shorts</li>
        <li>Subscription</li>
      </ul>
      <hr />
      <ul className="my-3">
        <li>History</li>
        <li>Your Videos</li>
        <li>Watch Later</li>
        <li>Liked Videos</li>
      </ul>
      <hr />
      <h1 className="font-bold text-lg mt-2">Subscription</h1>
      <ul className="my-3">
        <li>Paridhabangal</li>
        <li>VJ siddhu vlogs</li>
        <li>Movie buff</li>
      </ul>
      <hr />
      <h1 className="font-bold text-lg mt-2">Explore</h1>
      <ul className="my-3">
        <li>Music</li>
        <li>Sports</li>
        <li>Games</li>
        <li>Movies</li>
      </ul>
      <hr />

      <ul className="my-3">
        <li>Setting</li>
        <li>Report history</li>
        <li>Help</li>
        <li>Send feedback</li>
      </ul>
    </div>
  );
}

export default Sidebar