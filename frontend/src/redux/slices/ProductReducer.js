import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
  name: 'modal',
  initialState: false,
  reducers: {
    toogleState: (state) => {
      if (state === false) {
        return true
      }
      return false;
    },
   
  },
});

export const { toogleState } = toggleSlice.actions;

export default toggleSlice.reducer;
