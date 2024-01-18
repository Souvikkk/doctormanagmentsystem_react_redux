import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Service/AxiosInstance";


const initialState = {
    status: "idle",
    comment_details: [],
};

export const fetchBlogCommentDetails = createAsyncThunk("getblogcomment", async (id) => {
    try {
        const res = await axiosInstance.get(`getblogcomment/${id.id}`);
        return res?.data;
    } catch (error) {
        console.error(error);
        throw error; // rethrow the error to be caught by the rejected action
    }
});

export const GetCommentDetailsSlice = createSlice({
    name: "CommentDetails",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBlogCommentDetails.pending, (state) => {
                state.status = "loading......";
                state.comment_details = {};
            })
            .addCase(fetchBlogCommentDetails.fulfilled, (state, { payload }) => {
                state.status = "idle";
                state.comment_details = payload;
            })
            .addCase(fetchBlogCommentDetails.rejected, (state) => {
                state.status = "Rejected";
            });
    },
});


