export interface UserLoginResponse {
  token: string;
  user: UserData;
  name: string;
}

export interface UserData {
  id: string;
  email: string;
  name: string;
  password: string;
}
