import { createSlice } from "@reduxjs/toolkit";

const videosSlice = createSlice({
  name: "videos",
  initialState: {
    videosList: null,
    selectedVideo: null,
  },
  reducers: {
    addVideosList: (state, action) => {
      state.videosList = action.payload;
    },
    addVideoDetails: (state, action) => {
      state.selectedVideo = action.payload;
    },
  },
});

export const { addVideosList, addVideoDetails } = videosSlice.actions;

export default videosSlice.reducer;
