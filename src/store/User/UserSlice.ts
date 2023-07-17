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
      const response = await Axios.post<
        UserRequesDataForRegistration,
        { data: UserDataResponse }
      >("/auth/registration", body);
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
    loadingforGetMeByToken: true,
  } as InitalState,
  name: "user",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUser.pending.type, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getUser.fulfilled.type,
      (state, action: PayloadAction<UserDataResponse>) => {
        state.loading = false;
        state.error = "";
        state.user = action.payload;
      }
    );
    builder.addCase(
      getUser.rejected.type,
      (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.error = action.payload;
      }
    );

    builder.addCase(getMe.pending.type, (state) => {
      state.loadingforGetMeByToken = true;
    });
    builder.addCase(
      getMe.fulfilled.type,
      (state, action: PayloadAction<UserDataResponse>) => {
        state.loadingforGetMeByToken = false;
        state.error = "";
        state.user = action.payload;
      }
    );
    builder.addCase(getMe.rejected.type, (state) => {
      state.loadingforGetMeByToken = false;
    });

    builder.addCase(createUser.pending.type, (state) => {
      state.loading = true;
    });
    builder.addCase(
      createUser.fulfilled.type,
      (state, action: PayloadAction<UserDataResponse>) => {
        state.loading = false;
        state.error = "";
        state.user = action.payload;
      }
    );

    builder.addCase(
      createUser.rejected.type,
      (state, action: PayloadAction<string>) => {
        state.error = action.payload;
      }
    );
  },
});

export default userSlice;
