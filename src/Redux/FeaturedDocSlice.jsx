import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Service/AxiosInstance";

export const fetchFeaturedDoc = createAsyncThunk("doc",async()=>{
    try{
       const res = await axiosInstance.get('featured')
       return res?.data
    }catch(error){
        console.log("Error fetching doc");
        throw error
    }
})

const initialState = {
    doctor_data :[],
    status:'success'
}
export const FeaturedDoctorsSlice = createSlice({
    name:'featured_doctors',
    initialState,
    reducers:{},
    extraReducers:(builders)=>{
        builders.addCase(fetchFeaturedDoc.pending,(state)=>{
            state.status = 'loading'
        })
        builders.addCase(fetchFeaturedDoc.fulfilled,(state,{payload})=>{
            state.status='success'
            state.doctor_data=payload
        })
        builders.addCase(fetchFeaturedDoc.rejected,(state)=>{
            state.status ='error'
        })
    }
})