import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = "https://jsonplaceholder.typicode.com/users";

export const fetchAsyncGet = createAsyncThunk("featch/get", async () => {
  const res = await axios.get(apiUrl);
  return res.data;
});

export const featchSlice = createSlice({
  name: "featch",
  initialState: { users: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncGet.fulfilled, (state, action) => {
      return {
        ...state,
        users: action.payload,
      };
    });
  },
});

export const selectUsers = (state) => state.featch.users;

export default featchSlice.reducer;
