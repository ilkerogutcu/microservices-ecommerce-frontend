import React, { useState } from "react";
import authApi from "../../api/AuthApi";
import "./reset-password.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../../compenents/footer/Footer";
import Newsletter from "../../compenents/newsletter/Newsletter";
import Announcement from "../../compenents/announcement/Announcement";
import Navbar from "../../compenents/navbar/Navbar";
import Navigation from "../../compenents/navigation/Navigation";
import { IResetPassword } from "../../types/resetPassword";
import { useForm } from "react-hook-form";

function ResetPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<IResetPassword>();
  function getParam(param: string) {
    return new URLSearchParams(window.location.search).get(param);
  }
  const onSubmit = async (data: IResetPassword) => {
    var resetPasswordToken = getParam("token");

    console.log(resetPasswordToken);
    const userId = getParam("userId");
    console.log(userId);
    if (resetPasswordToken && userId) {
      data.resetPasswordToken = resetPasswordToken;
      data.userId = userId;
    } else {
      toast.error("Token bulunamadı veya user id bulunamadı");
      return;
    }

    await authApi
      .resetPassword(data)
      .then((res) => {
        toast.success("Şifreniz başarıyla değiştirildi");
        data.resetPasswordToken = "";
        data.password = "";
        data.confirmPassword = "";
        data.userId = "";
      })
      .catch((err) => {
        if (err.response.data) {
          toast.error("Şifre değiştirme işlemi başarısız");
        }
      });
  };

  return (
    <div>
      <Announcement message="50 TL Üstü Tüm Siparişlerde Kargo Bedava!" />
      <Navbar />
      <Navigation />
      <div className="reset-password">
        <div className="reset-password-container">
          <h1 className="reset-password__title">Şifremi Unuttum</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="register__input"
              type="password"
              placeholder="Şifreniz"
              {...register("password", {
                required: true,
                maxLength: 60,
                minLength: 12,
                pattern:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/,
              })}
            />
            {errors.password?.type === "required" && <p>Şifrenizi giriniz</p>}
            {errors.password?.type === "maxLength" && (
              <p>Şifreniz maksimum 60 karakterli olabilir</p>
            )}
            {errors.password?.type === "minLength" && (
              <p>Şifreniz minimum 12 karakterli olabilir</p>
            )}
            {errors.password?.type === "pattern" && (
              <p>
                Şifreniz en az bir büyük harf, bir küçük harf, bir rakam ve bir
                özel karakter içermeli
              </p>
            )}
            <input
              className="register__input"
              type="password"
              placeholder="Şifreniz Tekrar"
              {...register("confirmPassword", {
                required: true,
                maxLength: 60,
                minLength: 12,
                pattern:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/,
              })}
            />
            {errors.confirmPassword?.type === "required" && (
              <p>Şifrenizi tekrar giriniz</p>
            )}
            {errors.confirmPassword?.type === "maxLength" && (
              <p>Şifreniz maksimum 60 karakterli olabilir</p>
            )}
            {errors.confirmPassword?.type === "minLength" && (
              <p>Şifreniz minimum 12 karakterli olabilir</p>
            )}
            {errors.confirmPassword?.type === "pattern" && (
              <p>
                Şifreniz en az bir büyük harf, bir küçük harf, bir rakam ve bir
                özel karakter içermeli
              </p>
            )}
            <button className="reset-password__button">Gönder</button>
          </form>
        </div>
      </div>
      <Newsletter />
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default ResetPassword;
