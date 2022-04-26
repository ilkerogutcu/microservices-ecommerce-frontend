export interface IResetPassword {
  userId: string;
  resetPasswordToken: string;
  password: string;
  confirmPassword: string;
}
