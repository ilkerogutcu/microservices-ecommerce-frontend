export interface ISignIn {
  email: string;
  password: string;
}

export interface ISignInResponse {
  id: string;
  email: string;
  roles: string[];
  jwtToken: string;
}
