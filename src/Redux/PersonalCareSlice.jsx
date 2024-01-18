import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Service/AxiosInstance";

const initialState={
    all_personal_care_data: [],
    status: 'success'
}

export const fetchAllPersonalCare = createAsyncThunk("personalcare", async () => {
    try {
        const res = await axiosInstance.get('personalcare');
        return res?.data;
    } catch (error) {
        console.error("Error fetching all personal care:", error);
        throw error;
    }
});

export const PersonalCareSlice = createSlice({
    name:'personalcaree',
    initialState,
    reducers:{},
    extraReducers:(builders)=>{
        builders.addCase(fetchAllPersonalCare.pending,(state)=>{
            state.status='loading'
            state.all_personal_care_data=null
        })
        builders.addCase(fetchAllPersonalCare.fulfilled,(state,{payload})=>{
            state.status='success'
            state.all_personal_care_data=payload
        })
        builders.addCase(fetchAllPersonalCare.rejected,(state)=>{
            state.status='rejected'
           
        })
    }
})