import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import dogApi from "../../api/dog";

export const getDog = createAsyncThunk("dog/getDog", dogApi.getDog);

export const dogSlice = createSlice({
  name: "dog",
  initialState: {
    dog: ""
  },
  extraReducers: {
    [getDog.fulfilled]: (state, action) => {
      state.dog = action.payload.dog;
    }
  }
});

export default dogSlice.reducer;