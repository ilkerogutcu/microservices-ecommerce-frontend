import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import Announcement from "../../compenents/announcement/Announcement";
import Footer from "../../compenents/footer/Footer";
import Navbar from "../../compenents/navbar/Navbar";
import Navigation from "../../compenents/navigation/Navigation";
import Newsletter from "../../compenents/newsletter/Newsletter";
import "./register.css";

function Register() {
  const { invoiceId } = useParams();
  console.log(invoiceId);
  
  return (
    <div>
      <Announcement message="50 TL Üstü Tüm Siparişlerde Kargo Bedava!" />
      <Navbar />
      <Navigation />
      <div className="register">
        <div className="register-container">
          <h1 className="register__title">HESABINI OLUŞTUR</h1>
          <form>
            <input
              className="register__input"
              type="text"
              placeholder="Adınız"
            />
            <input
              className="register__input"
              type="text"
              placeholder="Soyadınız"
            />
            <input
              className="register__input"
              type="email"
              placeholder="E-posta Adresiniz"
            />
            <input
              className="register__input"
              type="text"
              placeholder="Şifreniz"
            />
            <input
              className="register__input"
              type="text"
              placeholder="Şifreniz Tekrar"
            />
            <button className="register__button">KAYIT OL</button>
          </form>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Register;
