import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/Store/Slice/appSlice";
import { useSearchParams } from "react-router-dom";
import VideoInfo from "./VideoInfo";
import useChannelDetails from "../hooks/useChannelDetails";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const dispatch = useDispatch();

  const video = useSelector((store) => store.videos.selectedVideo);
  

  useChannelDetails(video?.snippet?.channelId);

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="flex px-4 w-full">
      <div className="flex-1">
        <iframe
          className="rounded-xl w-full aspect-video"
          src={"https://www.youtube.com/embed/" + videoId}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <VideoInfo videoid={videoId} />
        <CommentContainer />
      </div>
      <div className="w-96 shrink-0">
        <LiveChat />
      </div>
    </div>
  );
};

export default WatchPage;
