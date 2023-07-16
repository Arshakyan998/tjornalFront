export interface UserRequesData {
  email: string;
  password: string;
}

export interface UserRequesDataForRegistration extends UserRequesData {
  fullName: string;
}
