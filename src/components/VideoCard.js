import React from "react";


const VideoCard = ({ videoinfo }) => {
 // console.log("video = ", videoinfo);

  const { snippet, statistics } = videoinfo;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    
      <div className="p-2 m-2 w-72 shadow-lg rounded-2xl cursor-pointer">
        <img className="rounded-xl" src={thumbnails.medium.url} alt="thumbnail" />
        <h1 className="font-bold text-lg py-2">{title}</h1>
        <h4 className="font-thin">{channelTitle}</h4>
        <p className="font-light">{statistics.viewCount} views</p>
      </div>
  );
}; 

//Hoc implementation
export const AddVideoCard = ({ videoinfo }) => {
  return (
    <div className="p-2 m-2 border border-black">
      <VideoCard videoinfo={videoinfo} />
    </div>
  );
};

export default VideoCard;
