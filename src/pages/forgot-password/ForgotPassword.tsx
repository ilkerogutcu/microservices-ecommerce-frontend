import React, { useState } from "react";
import authApi from "../../api/AuthApi";
import "./forgot-password.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../../compenents/footer/Footer";
import Newsletter from "../../compenents/newsletter/Newsletter";
import Announcement from "../../compenents/announcement/Announcement";
import Navbar from "../../compenents/navbar/Navbar";
import Navigation from "../../compenents/navigation/Navigation";

function ForgotPassword() {
  const [forgotPassword, setForgotPassword] = useState({ email: "" });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await authApi
      .forgotPassword(forgotPassword)
      .then((res) => {
        toast.success("Mail sistemde kayıtlı ise mail gönderilecektir");
      })
      .catch((err) => {
        if ((err.status = 400)) {
          toast.error(err.response.data);
        }
      });
  };
  return (
    <div>
      <Announcement message="50 TL Üstü Tüm Siparişlerde Kargo Bedava!" />
      <Navbar />
      <Navigation />
      <div className="forgot-password">
        <div className="forgot-password-container">
          <h1 className="forgot-password__title">Şifremi Unuttum</h1>

          <form onSubmit={handleSubmit}>
            <input
              className="forgot-password__input"
              type="email"
              value={forgotPassword?.email}
              placeholder="E-posta Adresiniz"
              onChange={(e) =>
                setForgotPassword({ ...forgotPassword, email: e.target.value })
              }
            />
            <button className="forgot-password__button">Gönder</button>
          </form>
        </div>
      </div>
      <Newsletter />
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default ForgotPassword;
