import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Service/AxiosInstance";
import { toast } from "react-toastify";

export const PostComment = createAsyncThunk("PostBlogComment", async (data) => {
  try {
    const res = await axiosInstance.post("createblogcomment", data);
    console.log("postblogcmnt", res?.data);

    return res?.data;
  } catch (error) {
    throw error;
  }
});

const initialState = {
  comment: null,
  loading: false,
  error: null,
};

export const PostBlogCommentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(PostComment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(PostComment.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.comment = payload;
        toast(payload?.message, {
          position: toast.POSITION.TOP_CENTER,
        });
      })
      .addCase(PostComment.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload.error.message;
        toast("You have to login first!", {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  },
});
