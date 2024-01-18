import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Service/AxiosInstance";

export const FetchAllBlogs = createAsyncThunk("All_Blog", async () => {
    try {
        const res = await axiosInstance.get(`allblog`);
        return res?.data;
    } catch (error) {
        console.error("Error fetching all blog:", error);
        throw error;
    }
});



const initialState = {
    all_blog_data: [],
    status: 'success'
};

export const AllBlogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(FetchAllBlogs.pending, (state) => {
                state.status = "loading";
                state.all_blog_data = null;
            })
            .addCase(FetchAllBlogs.fulfilled, (state, { payload }) => {
                state.status = "success";
                state.all_blog_data = payload;
            })
            .addCase(FetchAllBlogs.rejected, (state) => {
                state.status = "rejected";
            });
    }
});
