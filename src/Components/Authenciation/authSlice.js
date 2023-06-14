import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userAPI from "../../APIs/userAPI";

export const registerThunk = createAsyncThunk(
  "users/register",
  async (payload) => {
    const data = (await userAPI.register(payload)).data;
    localStorage.setItem("jwt", data.access_token);
    localStorage.setItem("user", JSON.stringify(data.user));
    return data.user;
  }
);

export const loginThunk = createAsyncThunk("users/login", async (payload) => {
  const data = (await userAPI.login(payload)).data;
  localStorage.setItem("jwt", data.access_token);
  localStorage.setItem("user", JSON.stringify(data.user));
  return data.user;
});

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    currentUser: JSON.parse(localStorage.getItem("user")) || {},
  },
  reducers: {
    logout: (state, action) => {
      localStorage.removeItem("user");
      localStorage.removeItem("jwt");
      state.currentUser = {};
    },
  },
  extraReducers: {
    "user/register/fulfilled": (state, action) => {
    },
    "user/login/fulfilled": (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
