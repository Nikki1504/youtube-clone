import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { CHANNEL_DETAILS_API } from "../utils/constants";
import { addChannelInfo } from "../utils/Store/Slice/channelSlice";

const useChannelDetails = (channelId) => {
  const dispatch = useDispatch();

  const fetchChannelDetails = async () => {
    const res = await fetch(CHANNEL_DETAILS_API(channelId));
    const json = await res.json();
    dispatch(addChannelInfo(json.items[0]));
  };

  useEffect(() => {
    if (!channelId) return;

    fetchChannelDetails();
  }, [channelId]);
};

export default useChannelDetails;
