import { Modal } from "@mui/material";
import React, { useEffect, useState } from "react";
import authApi from "../../api/AuthApi";
import Announcement from "../../compenents/announcement/Announcement";
import Footer from "../../compenents/footer/Footer";
import Navbar from "../../compenents/navbar/Navbar";
import Navigation from "../../compenents/navigation/Navigation";
import Newsletter from "../../compenents/newsletter/Newsletter";
import { ISignIn } from "../../types/signIn";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./login.css";
import { Navigate } from "react-router-dom";

function Login() {
  const [twoFactorAuthTrigger, setTwoFactorAuthTrigger] = useState(false);
  const [signIn, setSignIn] = useState<ISignIn>({ email: "", password: "" });
  const [signInWithTwoFactor, setSignInWithTwoFactor] = useState({ code: "" });
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await authApi
      .signIn(signIn)
      .then((res) => {
        toast.success(
          "2 Faktörlü Doğrulama Kodunuz Kayıtlı Olduğunuz Mail Adresinize Gönderildi"
        );
        setTwoFactorAuthTrigger(!twoFactorAuthTrigger);
      })
      .catch((err) => {
        if (err.response.data) {
          console.log(err.response.data);
          const error = err.response.data;
          toast.error(error);
        }
      });
  };

  const handleSignInWithTwoFactor = async (e: any) => {
    e.preventDefault();
    if (twoFactorAuthTrigger) {
      if (signInWithTwoFactor.code.length === 6) {
        await authApi
          .signIn2FA({ code: signInWithTwoFactor.code, email: signIn.email })
          .then((res) => {
            toast.success("Giriş Başarılı");
            console.log(res.data);
            localStorage.setItem("token", res.data.jwtToken);
          })
          .catch((err) => {
            if (err.response.data) {
              console.log(err.response.data);
              const error = err.response.data;
              toast.error(error);
            }
          });
      } else {
        toast.error("6 Haneli Doğrulama Kodu Giriniz");
      }
    }
  };
  return (
    <div>
      <Announcement message="50 TL Üstü Tüm Siparişlerde Kargo Bedava!" />
      <Navbar />
      <Navigation />
      <div className="login">
        <div className="login-container">
          <h1 className="login__title">GİRİŞ YAP</h1>
          {!twoFactorAuthTrigger && (
            <form onSubmit={handleSubmit}>
              <input
                className="login__input"
                type="email"
                value={signIn?.email}
                placeholder="E-posta Adresiniz"
                onChange={(e) =>
                  setSignIn({ ...signIn, email: e.target.value })
                }
              />
              <input
                className="login__input"
                type="password"
                value={signIn?.password}
                onChange={(e) =>
                  setSignIn({ ...signIn, password: e.target.value })
                }
                placeholder="Şifreniz"
              />
              <button className="login__button">GİRİŞ YAP</button>
            </form>
          )}
          {twoFactorAuthTrigger && (
            <form onSubmit={handleSignInWithTwoFactor}>
              <input
                className="login__input"
                type="text"
                placeholder="2 Faktörlü Doğrulama Kodunuz"
                value={signInWithTwoFactor?.code}
                onChange={(e) =>
                  setSignInWithTwoFactor({
                    ...signInWithTwoFactor,
                    code: e.target.value,
                  })
                }
              />
              <button
                onClick={(e) => setTwoFactorAuthTrigger(!twoFactorAuthTrigger)}
                className="login__button"
              >
                GERİ DÖN
              </button>
              <button className="login__button">GİRİŞ YAP</button>
            </form>
          )}
        </div>
      </div>
      <Newsletter />
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default Login;
