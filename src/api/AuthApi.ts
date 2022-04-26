import apiHandler from "../core/network/apiHandler";
import NetworkManager from "../core/network/NetworkManager";
import { IAddAddressToUser } from "../types/addAddressToUser";
import { IRegister } from "../types/register";
import { IResetPassword } from "../types/resetPassword";
import { ISignIn, ISignInResponse } from "../types/signIn";
import { IUser } from "../types/user";

const authApi = {
  getCurrentUser() {
    return apiHandler<IUser>(NetworkManager, "get", "accounts/me");
  },
  signUp(payload: IRegister) {
    return apiHandler<string>(NetworkManager, "post", "accounts/sign-up", {
      payload,
    });
  },
  signIn(payload: ISignIn) {
    return apiHandler<string>(NetworkManager, "post", "accounts/sign-in", {
      payload,
    });
  },
  signIn2FA({ code, email }: { code: string; email: string }) {
    return apiHandler<ISignInResponse>(
      NetworkManager,
      "post",
      "accounts/sign-in/2FA",
      {
        payload: {
          code,
          email,
        },
      }
    );
  },
  forgotPassword(payload: { email: string }) {
    return apiHandler<IRegister>(
      NetworkManager,
      "post",
      "accounts/forgot-password",
      {
        payload,
      }
    );
  },
  resetPassword(payload: IResetPassword) {
    return apiHandler<IRegister>(
      NetworkManager,
      "post",
      "accounts/reset-password",
      {
        payload,
      }
    );
  },
  addAddress(payload: IAddAddressToUser) {
    return apiHandler<IAddAddressToUser>(
      NetworkManager,
      "post",
      "accounts/me/addresses",
      {
        payload,
      }
    );
  },
  updateAddress(payload: { addressId: string; address: IAddAddressToUser }) {
    return apiHandler<IAddAddressToUser>(
      NetworkManager,
      "put",
      `accounts/me/addresses/${payload.addressId}`,
      {
        payload,
      }
    );
  },
  deleteAddress(addressId: string) {
    return apiHandler<IAddAddressToUser>(
      NetworkManager,
      "delete",
      `accounts/me/addresses/${addressId}`
    );
  },
  changePassword(payload: {
    oldPassword: string;
    newPassword: string;
    confirmNewPassword: string;
  }) {
    return apiHandler<any>(
      NetworkManager,
      "post",
      "accounts/me/change-password",
      {
        payload,
      }
    );
  },
};

export default authApi;
