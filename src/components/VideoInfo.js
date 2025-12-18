import React, { useState } from "react";
import { useSelector } from "react-redux";
import useVideoDetails from "../hooks/useVideoDetails";
import {
  ArrowDownToLine,
  Bookmark,
  Share2,
  Share2Icon,
  ThumbsDown,
  ThumbsUp,
} from "lucide-react";

const VideoInfo = ({ videoid }) => {
  const [showMore, setShowMore] = useState(false);
  const video = useSelector((store) => store.videos.selectedVideo);
  const channel = useSelector((store) => store.channel.channelInfo);

  useVideoDetails(videoid);

  return (
    <div>
      <div className="px-2 mt-4 max-w-4xl">
        {/* TITLE */}
        <h1 className="text-lg font-semibold">{video?.snippet?.title}</h1>

        {/* CHANNEL + ACTIONS */}
        <div className="flex justify-between items-center mt-3">
          {/* LEFT */}
          <div className="flex items-center gap-3">
            {/* Channel Image */}
            <img
              src={channel?.snippet?.thumbnails?.default?.url}
              alt="channel"
              className="w-10 h-10 rounded-full"
            />

            <div>
              <p className="font-semibold text-sm">
                {video?.snippet?.channelTitle}
              </p>
              <p className="text-xs text-gray-500">
                {Number(channel?.statistics?.subscriberCount).toLocaleString()}
                subscribers
              </p>
            </div>

            <button className="ml-4 bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-neutral-800">
              Subscribe
            </button>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-3">
            {/* Like */}
            <button className="flex items-center gap-2 text-black font-semibold bg-neutral-100 px-4 py-2 rounded-full hover:bg-neutral-200">
              <ThumbsUp size={20} />
              <span className="text-sm">
                {Number(video?.statistics?.likeCount).toLocaleString()}
              </span>
            </button>

            {/* Share */}
            <button className="flex items-center gap-2 text-black font-semibold bg-neutral-100 px-4 py-2 rounded-full hover:bg-neutral-200">
              <Share2 size={20} />
              <span className="text-sm">Share</span>
            </button>
            <button className="flex items-center gap-2 text-black font-semibold bg-neutral-100 px-4 py-2 rounded-full hover:bg-neutral-200">
              <ArrowDownToLine size={20} />
              <span className="text-sm">Download</span>
            </button>
            <button className="flex items-center gap-2 text-black font-semibold bg-neutral-100 px-4 py-2 rounded-full hover:bg-neutral-200">
              <Bookmark size={20} />
              <span className="text-sm">Save</span>
            </button>
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className="mt-4 bg-neutral-100 p-3 rounded-lg text-sm">
          <h3 className="">{video?.statistics?.viewCount} views </h3>
          <p
            className={`whitespace-pre-line ${showMore ? "" : "line-clamp-3"}`}
          >
            {video?.snippet?.description}
          </p>

          <button
            onClick={() => setShowMore(!showMore)}
            className="mt-1 text-sm font-semibold text-gray-700 hover:underline"
          >
            {showMore ? "Show less" : "More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoInfo;
