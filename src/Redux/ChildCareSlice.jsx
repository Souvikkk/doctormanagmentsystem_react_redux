import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../Service/AxiosInstance"

const initialState={
    all_child_care_data: [],
    status: 'success'
}

export const fetchAllChildCare = createAsyncThunk(
    'child',
    async()=>{
        try{
         const res = await axiosInstance.get('childcare')
         return res?.data
        }catch(error){
            console.log('error fetching chilcare',error);
        }
    }
)

export const ChildCareSlice = createSlice({
    name:"childcare",
    initialState,
    reducers:{},
    extraReducers:(builders)=>{
        builders.addCase(fetchAllChildCare.pending,(state)=>{
            state.status ='loading'
        })
        builders.addCase(fetchAllChildCare.fulfilled,(state,{payload})=>{
            state.status ='success'
            state.all_child_care_data=payload
        })
        builders.addCase(fetchAllChildCare.rejected,(state)=>{
            state.status ='rejected'
        })
    }
})