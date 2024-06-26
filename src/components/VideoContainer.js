import React, { useEffect, useState } from 'react'
import {YOUTUBE_VIDEOS_URL} from "../utils/constants"
import VideoCard,{AddVideoCard} from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos,setVideos] = useState([]);
  const getVideo = async () => {
    const response = await fetch(YOUTUBE_VIDEOS_URL);
    const data = await response.json();
    //console.log(data);
    setVideos(data.items);
  }

  useEffect(()=>{
    getVideo();
  },[])
  return (
    <div className="px-2 flex flex-wrap justify-start">
      {videos[0] && <AddVideoCard videoinfo={videos[0]} />}
      {videos.map((video, index) => (
        <Link to={"/watch?v=" + video.id} key={index}>
          <VideoCard videoinfo={video} />
        </Link>
      ))}
    </div>
  );
}

export default VideoContainer