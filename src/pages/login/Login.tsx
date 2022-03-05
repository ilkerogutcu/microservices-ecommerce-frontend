import React from "react";
import Announcement from "../../compenents/announcement/Announcement";
import Footer from "../../compenents/footer/Footer";
import Navbar from "../../compenents/navbar/Navbar";
import Navigation from "../../compenents/navigation/Navigation";
import Newsletter from "../../compenents/newsletter/Newsletter";
import "./login.css";

function Login() {
  return (
    <div>
      <Announcement message="50 TL Üstü Tüm Siparişlerde Kargo Bedava!" />
      <Navbar />
      <Navigation />
      <div className="login">
        <div className="login-container">
          <h1 className="login__title">GİRİŞ YAP</h1>
          <form>
            <input
              className="login__input"
              type="email"
              placeholder="E-posta Adresiniz"
            />
            <input
              className="login__input"
              type="text"
              placeholder="Şifreniz"
            />
            <button className="login__button">GİRİŞ YAP</button>
          </form>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Login;
