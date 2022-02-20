import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import jokeApi from "../../api/joke";

export const getJoke = createAsyncThunk("joke/getJoke", jokeApi.getJoke);

export const jokeSlice = createSlice({
  name: "joke",
  initialState: {
    activity: "",
    axoltl: "",
    blogapi: ""
  },
  extraReducers: {
    [getJoke.fulfilled]: (state, action) => {
      state.activity = action.payload.activity;
      state.axoltl = action.payload.axoltl;
      state.blogapi = action.payload.blogapi;
    }
  }
});

export default jokeSlice.reducer;