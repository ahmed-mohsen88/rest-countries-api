import { createSlice } from "@reduxjs/toolkit";

// my slice
const borderSlice = createSlice({
  name: "borderSlice",
  initialState: {
    border: "",
  },
  reducers: {
    setReduxBorder: (state, action) => {
      //   console.log(action.payload);
      state.border = action.payload;
    },
  },
});

export const { setReduxBorder } = borderSlice.actions;
export const borderState = (state) => state.borderSlice;

export default borderSlice.reducer;
