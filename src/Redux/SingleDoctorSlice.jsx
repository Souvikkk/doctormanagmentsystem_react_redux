import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Service/AxiosInstance";

const initialState = {
    status: "idle",
    single_doctor_details: {},
};

export const fetchSingleDoctorDetails = createAsyncThunk("doctordetails", async (id) => {
    try {
        const res = await axiosInstance.get(`doctordetails/${id.id}`);
        console.log('singledocssss',res);
        return res?.data;

    } catch (error) {
        console.error(error);
        throw error; // rethrow the error to be caught by the rejected action
    }
});

export const SingleDoctorSlice = createSlice({
    name: "DoctorDetails",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSingleDoctorDetails.pending, (state) => {
                state.status = "loading";
                state.single_doctor_details = {};
            })
            .addCase(fetchSingleDoctorDetails.fulfilled, (state, { payload }) => {
                state.status = "idle";
                state.single_doctor_details = payload;
            })
            .addCase(fetchSingleDoctorDetails.rejected, (state) => {
                state.status = "Rejected";
            });
    },
});


