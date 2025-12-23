import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./Slice/appSlice";
import videosSlice from "./Slice/videosSlice";
import channelSlice from "./Slice/channelSlice";
import searchSlice from "./Slice/searchSlice";
import chatSlice from "./Slice/chatSlice";

const appStore = configureStore({
  reducer: {
    app: appSlice,
    videos: videosSlice,
    channel: channelSlice,
    search: searchSlice,
    chat: chatSlice,
  },
});

export default appStore;
