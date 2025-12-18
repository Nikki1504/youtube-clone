import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addVideoDetails } from "../utils/Store/Slice/videosSlice";

const useVideoDetails = (videoId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!videoId) return;

    const fetchVideoDetails = async () => {
      const res = await fetch(
        "https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=" +
          videoId +
          "&key=" +
          process.env.REACT_APP_YOUTUBE_API_KEY
      );
      const json = await res.json();
      dispatch(addVideoDetails(json.items[0]));
    };

    fetchVideoDetails();
  }, [videoId]);
};

export default useVideoDetails;
