import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import catApi from "../../api/cat";

export const getCat = createAsyncThunk("cat/getCat", catApi.getCat);

export const catSlice = createSlice({
  name: "cat",
  initialState: {
    cat: ""
  },
  extraReducers: {
    [getCat.fulfilled]: (state, action) => {
      state.cat = action.payload.cat;
    }
  }
});

export default catSlice.reducer;