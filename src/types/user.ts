export interface IUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  twoFactorEnabled: boolean;
  birthDate: Date;
  addresses: any;
}
