import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Service/AxiosInstance";

export const FetchAllDep = createAsyncThunk(
    'alldept',
    async()=>{
        try{
          const res = await axiosInstance.get('alldepartment')
          console.log('alldep',res);
          return res?.data
        }catch(error){
               console.log('error fetching alldept',error);
        }
    }
)
const initialState ={
    loading :false,
    alldept_data: []
}
export const AllDepOnlySlice = createSlice({
    name:'dept',
    initialState,
    reducers:{},
    extraReducers:(builders)=>{
        builders.addCase(FetchAllDep.pending,(state)=>{
            state.loading=true
        })
        builders.addCase(FetchAllDep.fulfilled,(state,{payload})=>{
            state.loading=false
            state.alldept_data=payload
        })
        builders.addCase(FetchAllDep.rejected,(state)=>{
            state.loading=false
        })
    }
})