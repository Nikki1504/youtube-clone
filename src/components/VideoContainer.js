import React from "react";
import useFetchVideos from "../hooks/useFetchVideos";
import VideoCard from "./VideoCard";
import { useSelector } from "react-redux";

const VideoContainer = () => {
  useFetchVideos();

  const videos = useSelector((store) => store.videos.videosList);
  // console.log(videos);

  if (!videos) return null;

  return (
    <div className="grid grid-cols-3 gap-6 p-4">
      {videos.map((video) => (
        <VideoCard key={video.id} info={video} />
      ))}
    </div>
  );
};

export default VideoContainer;
