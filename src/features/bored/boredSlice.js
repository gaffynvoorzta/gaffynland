import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import boredApi from "../../api/bored";

export const getBored = createAsyncThunk("bored/getBored", boredApi.getBored);

export const boredSlice = createSlice({
  name: "bored",
  initialState: {
    activity: ""
  },
  extraReducers: {
    [getBored.fulfilled]: (state, action) => {
      state.activity = action.payload.activity;
    }
  }
});

export default boredSlice.reducer;