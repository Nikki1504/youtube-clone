import React from "react";
import useFetchVideos from "../hooks/useFetchVideos";
import VideoCard from "./VideoCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  useFetchVideos();

  const videos = useSelector((store) => store.videos.videosList);

  if (!videos) return null;

  return (
    <div className="grid grid-cols-3 gap-6 p-4">
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id}>
          <VideoCard key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
