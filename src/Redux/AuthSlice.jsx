import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Service/AxiosInstance";
import { toast } from "react-toastify";

const initialState = {
  loading: false,
  userData: {},
  LogoutToggle: false,
  redirectReg: null,
  redirectTo: null,
};

export const postRegister = createAsyncThunk("register", async (data) => {
  try {
    const response = await axiosInstance.post("register", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log("register", response);
    return response?.data;
  } catch (error) {
    console.log("error in register", error);
  }
});

export const postLogin = createAsyncThunk("login", async (data) => {
  try {
    const response = await axiosInstance.post("login", data);
    console.log("login", response);
    return response?.data;
  } catch (error) {
    console.log("error in login", error);
  }
});

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset_redirectReg: (state, { payload }) => {
      state.redirectReg = payload;
    },
    reset_redirectLog: (state, { payload }) => {
      state.redirectTo = payload;
      
    },
    Logout: (state, { payload }) => {
      localStorage.clear();
      // state.redirectTo='/login'
      state.LogoutToggle=false
    },
    check_token: (state, { payload }) => {
        let token = localStorage.getItem("token");
        if (token !== undefined && token !== null) {
          state.LogoutToggle = true;
        }
      },
  },
  extraReducers: (builders) => {
    
    builders.addCase(postRegister.pending, (state) => {
      state.loading = true;
    });
    builders.addCase(postRegister.fulfilled, (state, { payload }) => {
        state.loading = false;
      state.redirectReg = "/login";
      toast.success(payload.message);
      
      
    });
    builders.addCase(postRegister.rejected, (state,{payload}) => {
      state.loading = false;
      toast.error(payload.message);
    });
// login

    builders.addCase(postLogin.pending, (state) => {
      state.loading = true;
    });
    builders.addCase(postLogin.fulfilled, (state, { payload }) => {
      if (payload?.status === 200) {
        localStorage.setItem("token", payload?.token);
        localStorage.setItem("name", payload?.data?.name);
        localStorage.setItem("email", payload?.data?.email);
        localStorage.setItem("image", payload?.data?.image);
        localStorage.setItem("phone", payload?.data?.phone);
        localStorage.setItem("id", payload?.data?._id);

        state.loading = false;
        state.LogoutToggle = true;
        state.redirectTo = "/";
        toast.success(payload.message);
      }    
    });
    builders.addCase(postLogin.rejected, (state,{payload}) => {
      state.loading = false;
      toast.success(payload.message);
    });
  },
});
export const { reset_redirectReg ,reset_redirectLog,Logout,check_token,RegLog } = AuthSlice.actions;
