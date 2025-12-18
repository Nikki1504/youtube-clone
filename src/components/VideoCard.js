import React from "react";

const VideoCard = ({ info }) => {
  // console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="m-2 cursor-pointer hover:shadow-xl transition-shadow shadow-transparent">
      <img
        className="rounded-xl w-full  aspect-video object-cover"
        alt="thumbnail"
        src={thumbnails.medium.url}
      />

      <ul className="flex-1 overflow-hidden">
        <li className="font-bold py-2 text-sm line-clamp-2">{title}</li>
        <li className="text-gray-600 text-sm">{channelTitle}</li>
        <li className="text-gray-500 text-xs">{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
