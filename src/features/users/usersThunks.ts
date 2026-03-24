import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (_, thunkApi) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );
      if (!response.ok) {
        throw new Error("404");
      }
      return await response.json();
    } catch (error) {
      return thunkApi.rejectWithValue(`Failed to fetch users ${error}`);
    }
  },
);
