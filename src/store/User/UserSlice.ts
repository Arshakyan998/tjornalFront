import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ErrorDataRequest, InitalState, UserDataResponse } from "./types";
import Axios from "../../axios";
import {
  UserRequesData,
  UserRequesDataForRegistration,
} from "../../types/types";
import { AxiosError } from "axios";
export const getUser = createAsyncThunk(
  "get/userByData",
  async (body: UserRequesData, ThunkApi) => {
    try {
      const response = await Axios.post<UserDataResponse>("/auth", body);
      const data = response.data;

      return ThunkApi.fulfillWithValue(data);
    } catch (error) {
      return ThunkApi.rejectWithValue(
        ((error as AxiosError).response?.data as ErrorDataRequest).message
      );
    }
  }
);

export const getMe = createAsyncThunk(
  "get/me",
  async (_: undefined, ThunkApi) => {
    try {
      const response = await Axios.get<UserDataResponse>("/auth/me");
      const data = response.data;

      return ThunkApi.fulfillWithValue(data);
    } catch (error) {
      return ThunkApi.rejectWithValue(
        ((error as AxiosError).response?.data as ErrorDataRequest).message
      );
    }
  }
);

export const createUser = createAsyncThunk(
  "create/user",
  async (body: UserRequesDataForRegistration, ThunkApi) => {
    try {
      const response = await Axios.post<UserDataResponse>(
        "/auth/registration",
        body
      );
      const data = response.data;

      return ThunkApi.fulfillWithValue(data);
    } catch (error) {
      return ThunkApi.rejectWithValue(
        ((error as AxiosError).response?.data as ErrorDataRequest).message
      );
    }
  }
);

const userSlice = createSlice({
  initialState: {
    user: {},
    error: "",
    loading: false,
  } as InitalState,
  name: "user",
  reducers: {},
  extraReducers: {
    [getUser.pending.type || getMe.pending.type]: (state) => {
      state.loading = true;
    },
    [getUser.fulfilled.type || getMe.fulfilled.type]: (
      state,
      action: PayloadAction<UserDataResponse>
    ) => {
      state.loading = false;
      state.error = "";
      state.user = action.payload;
    },
    [getUser.rejected.type || getMe.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    [getMe.pending.type]: (state) => {
      state.loading = true;
    },
    [getMe.fulfilled.type]: (
      state,
      action: PayloadAction<UserDataResponse>
    ) => {
      state.loading = false;
      state.error = "";
      state.user = action.payload;
    },
    [getMe.rejected.type]: (state) => {
      state.loading = false;
    },

    [createUser.pending.type]: (state) => {
      state.loading = true;
    },
    [createUser.fulfilled.type]: (
      state,
      action: PayloadAction<UserDataResponse>
    ) => {
      state.loading = false;
      state.error = "";
      state.user = action.payload;
    },
    [createUser.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default userSlice;
