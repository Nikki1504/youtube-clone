import { createSlice } from "@reduxjs/toolkit";

const videosSlice = createSlice({
  name: "videos",
  initialState: {
    videosList: null,
  },
  reducers: {
    addVideosList: (state, action) => {
      state.videosList = action.payload;
    },
  },
});

export const { addVideosList } = videosSlice.actions;

export default videosSlice.reducer;
