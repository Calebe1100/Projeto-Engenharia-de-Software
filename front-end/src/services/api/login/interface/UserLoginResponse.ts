export interface UserLoginResponse {
  token: string;
  user: UserData;
}

export interface UserData {
  id: string;
  email: string;
  password: string;
}
