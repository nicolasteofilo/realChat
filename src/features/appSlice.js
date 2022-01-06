import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  roomId: null,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    ENTER_ROOM: (state, action) => {
      state.roomId = action.payload.roomId;
    },
  },
});

export const { ENTER_ROOM } = appSlice.actions;
export const SelectRoomId = (state) => state.app.roomId;

export default appSlice.reducer;
