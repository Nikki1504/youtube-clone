import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./Slice/appSlice";
import videosSlice from "./Slice/videosSlice";

const appStore = configureStore({
  reducer: {
    app: appSlice,
    videos: videosSlice,
  },
});

export default appStore;
