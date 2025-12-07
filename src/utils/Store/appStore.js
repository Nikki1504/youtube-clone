import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./Slice/appSlice";

const appStore = configureStore({
  reducer: {
    app: appSlice,
  },
});

export default appStore;
