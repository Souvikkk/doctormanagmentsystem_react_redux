import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Service/AxiosInstance";
import { toast } from "react-toastify";

export const PostAppointment = createAsyncThunk("MakeAppointment", async (data) => {
    try {
      const res = await axiosInstance.post("createappointment",data);
      console.log('Appointment===>',res?.data);     
      return res?.data;
      
      
    } catch (error) {
      console.log('error posting ',error);
      throw error;
    }
  });

  const initialState = {
    comment: null,
    loading: false,
    error: null,
  };
  
  export const PostAppointmentSlice = createSlice({
    name: "appointment",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(PostAppointment.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(PostAppointment.fulfilled, (state, action) => {
          state.loading = false;
          state.contact = action.payload;
          toast(action?.payload?.message,{
            position: toast.POSITION.TOP_CENTER,
          });
        })
        .addCase(PostAppointment.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
          toast.error("You already have a pending appointment with this doctor. Please wait for approval.",{
            position: toast.POSITION.TOP_CENTER,
          });
        });
    },
  });
  
  
  