export interface UserDataResponse {
  _id: string;
  fullName: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  token: string;
}

export interface ErrorDataRequest {
  message: string;
  error: "Not Found";
}

export interface InitalState {
  user: UserDataResponse;
  error: string;
  loading: boolean;
}
