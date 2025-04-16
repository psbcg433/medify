// src/redux/slices/searchSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inputValue: "", 
};

const searchSlice = createSlice({
  name: "bookingSearch",
  initialState,
  reducers: {
    setInputValue: (state, action) => {
      state.inputValue = action.payload; 
    },
    clearInputValue: (state) => {
      state.inputValue = "";
    },
  },
});

export const { setInputValue, clearInputValue } = searchSlice.actions;
export default searchSlice.reducer;
