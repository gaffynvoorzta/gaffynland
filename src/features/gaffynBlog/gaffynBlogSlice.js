import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import gaffynBlogApi from "../../api/gaffynblog";

export const getGaffynBlog = createAsyncThunk("gaffynBlog/getGaffynBlog", gaffynBlogApi.getGaffynBlog);

export const gaffynBlogSlice = createSlice({
  name: "gaffynBlog",
  initialState: {
    blogapi: ""
  },
  extraReducers: {
    [getGaffynBlog.fulfilled]: (state, action) => {
      state.blogapi = action.payload.blogapi;
    }
  }
});

export default gaffynBlogSlice.reducer;