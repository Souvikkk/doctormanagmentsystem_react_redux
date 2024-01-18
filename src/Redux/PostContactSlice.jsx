import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Service/AxiosInstance";
import { toast } from "react-toastify";

export const postContact = createAsyncThunk(
    "contact",
    async(data)=>{
        try{
         const res = await axiosInstance.post('createcontact',data)
         console.log("contact",res);
         return res?.data
        }catch(error){
            console.log('error posting contact',error);
        }
    }
)
const initialState ={
    loading:true,
    error:null,
    contact:null
}

export const PostContactSlice = createSlice({
    name:'post_contact',
    initialState,
    reducers:{},
    extraReducers:(builders)=>{
        builders.addCase(postContact.pending,(state)=>{
            state.loading=true
            state.error=null
        })
        builders.addCase(postContact.fulfilled,(state,{payload})=>{
            state.loading=false
            state.error=null
            state.contact=payload
            if(payload.status === 200){
                toast("successfull", {
                    position: toast.POSITION.TOP_CENTER,
                  });
            }
            console.log("Fulfilled payload:", payload);
            
        })
        builders.addCase(postContact.rejected,(state)=>{
            state.loading=false
            toast.error("Your concerns was received", {
                position: toast.POSITION.TOP_CENTER,
              });
        })
    }
    
})