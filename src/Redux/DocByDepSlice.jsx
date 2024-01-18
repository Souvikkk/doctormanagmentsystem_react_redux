import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Service/AxiosInstance";

const initialState ={
    loading:true,
    doc_by_dep_details:{}
}
export const fetchAllDoctorsbyDEP = createAsyncThunk("/departmentidwisedoctor", async (id) => {
    try {
        const res = await axiosInstance.get(`departmentidwisedoctor/${id}`);
        console.log('GetAllDoctorsbyDEP',res?.data);
        return res?.data;
        
    } catch (error) {
        console.error('error fetching docbydep',error);
        throw error;
    }
});
export const AllDoctorByDepSlice = createSlice({
    name: "AllDoctors",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllDoctorsbyDEP.pending, (state) => {
                state.status = "loading";
                state.doc_by_dep_details = {};
            })
            .addCase(fetchAllDoctorsbyDEP.fulfilled, (state, { payload }) => {
                state.status = "success";
                state.doc_by_dep_details = payload;
            })
            .addCase(fetchAllDoctorsbyDEP.rejected, (state) => {
                state.status = "Rejected";
            });
    },
});

