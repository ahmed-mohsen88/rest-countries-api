import { createSlice } from "@reduxjs/toolkit";

// my slice
const day_night = createSlice({
  name: "day_night",
  initialState: {
    ReduxDay_night: false,
  },
  reducers: {
    setReduxDayNight: (state, action) => {
      console.log(action.payload);
      state.ReduxDay_night = action.payload.ReduxDay_night;
    },
  },
});

export const { setReduxDayNight } = day_night.actions;
export const day_nightState = (state) => state.day_night.ReduxDay_night;

export default day_night.reducer;
