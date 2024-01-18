import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Service/AxiosInstance";

export const fetchRecentBlogs = createAsyncThunk("RecentBlog", async () => {
    try {
        const res = await axiosInstance.get('recentblog');
        return res?.data;
    } catch (error) {
        console.error("Error fetching all blog:", error);
        throw error;
    }
});

const initialState = {
    recent_blog: [],
    loading: 'success'
};

export const RecentBlogSlice = createSlice({
    name: 'RecentBlog',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecentBlogs.pending, (state) => {
                state.loading = "loading";
                state.recent_blog = null;
            })
            .addCase(fetchRecentBlogs.fulfilled, (state, { payload }) => {
                state.loading = "success";
                state.recent_blog = payload;
            })
            .addCase(fetchRecentBlogs.rejected, (state) => {
                state.loading = "rejected";
            });
    }
});
