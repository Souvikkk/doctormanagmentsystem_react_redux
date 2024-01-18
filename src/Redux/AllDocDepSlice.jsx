import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Service/AxiosInstance";




export const fetchAllDocDepSlice = createAsyncThunk("alldoctordepartment", async () => {
    try {
        const res = await axiosInstance.get('alldoctordepartment');
        return res?.data;
    } catch (error) {
        console.error("Error fetching all Doc Dep:", error);
        throw error;
    }
});



const initialState = {
    all_doc_dep_data: [],
    status: 'success'
};

export const AllDocDepSlice = createSlice({
    name: 'AllDocDep',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllDocDepSlice.pending, (state) => {
                state.status = "loading";
                state.all_doc_dep_data = null;
            })
            .addCase(fetchAllDocDepSlice.fulfilled, (state, { payload }) => {
                state.status = "success";
                state.all_doc_dep_data = payload;
            })
            .addCase(fetchAllDocDepSlice.rejected, (state) => {
                state.status = "rejected";
            });
    }
});
