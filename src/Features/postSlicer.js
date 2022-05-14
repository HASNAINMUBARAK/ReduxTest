import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPost = createAsyncThunk("post/getPost/pending", async () => {
  const { data } = await axios.get("https://restcountries.com/v2/all");
  return data;
});

const initialState = {
  post: [],
  postLoading: false,
  postSuccess: false,
  postFailed: false,
};

const post = createSlice({
  name: "post",
  initialState,

  extraReducers: {
    [getPost.pending]: (state) => {
      state.postLoading = true;
      state.postSuccess = false;
      state.postFailed = false;
    },
    [getPost.fulfilled]: (state, action) => {
      state.postSuccess = true;
      state.postFailed = false;
      state.postLoading = false;
      state.post = action.payload;
    },
    [getPost.rejected]: (state) => {
      state.postFailed = true;
      state.postSuccess = false;
      state.postLoading = false;
    },
  },
});

export default post.reducer;
