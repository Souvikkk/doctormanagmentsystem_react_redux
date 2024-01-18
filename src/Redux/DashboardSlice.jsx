import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Service/AxiosInstance";

const initialState = {
    status: "idle",
    user_dash: [],
};

export const fetchDashboard = createAsyncThunk("UserDashboard", async (id) => {
    try {
        const res = await axiosInstance.get(`userdash/${id}`);
        console.log('DashBoard',res?.data);
        return res?.data?.data;
    } catch (error) {
        console.error(error);
        throw error; // rethrow the error to be caught by the rejected action
    }
});

export const DashboardSlice = createSlice({
    name: "UserDash",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDashboard.pending, (state) => {
                state.status = "loading......";
                state.user_dash = {};
            })
            .addCase(fetchDashboard.fulfilled, (state, { payload }) => {
                state.status = "idle";
                state.user_dash = payload;
            })
            .addCase(fetchDashboard.rejected, (state) => {
                state.status = "Rejected";
            });
    },
});


