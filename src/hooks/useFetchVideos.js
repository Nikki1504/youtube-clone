import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import { addVideosList } from "../utils/Store/Slice/videosSlice";

const useFetchVideos = () => {
  const dispatch = useDispatch();
  const videosList = useSelector((store) => store.videos.videosList);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    console.log(json.items);
    dispatch(addVideosList(json.items));
  };
  useEffect(() => {
    getVideos();
  }, []);
};

export default useFetchVideos;
