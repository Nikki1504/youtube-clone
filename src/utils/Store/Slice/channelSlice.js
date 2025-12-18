import { createSlice } from "@reduxjs/toolkit";

const channelSlice = createSlice({
  name: "channel",
  initialState: {
    channelInfo: null,
  },
  reducers: {
    addChannelInfo: (state, action) => {
      state.channelInfo = action.payload;
    },
  },
});

export const { addChannelInfo } = channelSlice.actions;
export default channelSlice.reducer;
