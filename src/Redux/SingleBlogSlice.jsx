import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Service/AxiosInstance";

const initialState = {
    status: "idle",
    single_blog: {},
};

export const fetchSingleBlogDetails = createAsyncThunk("SingleBlog", async (id) => {
    try {
        const res = await axiosInstance.get(`singleblog/${id.id}`);
        // console.log('Slice======>',res?.data);
        return res?.data;
    } catch (error) {
        console.error(error);
        throw error; // rethrow the error to be caught by the rejected action
    }
});

export const SingleBlogSlice = createSlice({
    name: "SingleBlog",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSingleBlogDetails.pending, (state) => {
                state.status = "loading";
                state.single_blog = {};
            })
            .addCase(fetchSingleBlogDetails.fulfilled, (state, { payload }) => {
                state.status = "idle";
                state.single_blog = payload;
            })
            .addCase(fetchSingleBlogDetails.rejected, (state) => {
                state.status = "Rejected";
            });
    },
});

