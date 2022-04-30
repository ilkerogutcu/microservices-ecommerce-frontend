import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import Announcement from "../../compenents/announcement/Announcement";
import Footer from "../../compenents/footer/Footer";
import Navbar from "../../compenents/navbar/Navbar";
import Navigation from "../../compenents/navigation/Navigation";
import Newsletter from "../../compenents/newsletter/Newsletter";
import "./register.css";
import "../../ui/helper.css";
import { IRegister } from "../../types/register";
import authApi from "../../api/AuthApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function Register({ history }: any) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<IRegister>();

  const onSubmit = async (data: IRegister) => {
    await authApi
      .signUp(data)
      .then((res) => {
        toast.success("Email onaylama linkiniz mail adresinize gönderildi");
        setTimeout(() => {
          navigate("/");
        }, 5000);
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
      <div className="register">
        <div className="register-container">
          <h1 className="register__title">HESABINI OLUŞTUR</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="register__input"
              type="text"
              placeholder="Adınız"
              {...register("firstName", {
                required: true,
                maxLength: 60,
                minLength: 2,
              })}
            />
            {errors.firstName?.type === "required" && <p>Adınızı giriniz</p>}
            {errors.firstName?.type === "maxLength" && (
              <p>Adınız maksimum 60 karakterli olabilir</p>
            )}
            {errors.firstName?.type === "minLength" && (
              <p>Adınız minimum 2 karakterli olabilir</p>
            )}
            <input
              className="register__input"
              type="text"
              placeholder="Soyadınız"
              {...register("lastName", {
                required: true,
                maxLength: 60,
                minLength: 2,
              })}
            />
            {errors.lastName?.type === "required" && <p>Soyadınızı giriniz</p>}
            {errors.lastName?.type === "maxLength" && (
              <p>Soyadınız maksimum 60 karakterli olabilir</p>
            )}
            {errors.lastName?.type === "minLength" && (
              <p>Soyadınız minimum 2 karakterli olabilir</p>
            )}
            <input
              className="register__input"
              type="email"
              placeholder="E-posta Adresiniz"
              {...register("email", {
                required: true,
                maxLength: 200,
                minLength: 2,
                pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
              })}
            />
            {errors.email?.type === "required" && (
              <p>E-posta adresinizi giriniz</p>
            )}
            {errors.email?.type === "maxLength" && (
              <p>E-posta adresiniz maksimum 200 karakterli olabilir</p>
            )}
            {errors.email?.type === "minLength" && (
              <p>E-posta adresiniz minimum 2 karakterli olabilir</p>
            )}
            {errors.email?.type === "pattern" && (
              <p>E-posta adresinizi doğru giriniz</p>
            )}

            <input
              className="register__input"
              type="date"
              placeholder="Doğum Tarihiniz"
              {...register("birthDate", {
                required: true,
              })}
            />
            {errors.birthDate?.type === "required" && (
              <p>Doğum tarihinizi giriniz</p>
            )}

            <select
              className="form-control"
              {...register("gender", {
                required: true,
              })}
            >
              <option value="">Cinsiyet seçiniz</option>
              <option key={0} value={0}>
                Erkek
              </option>
              <option key={1} value={1}>
                Kadın
              </option>
              <option key={2} value={2}>
                Diğer
              </option>
              ))
            </select>

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

            <button className="register__button">KAYIT OL</button>
          </form>
        </div>
      </div>
      <Newsletter />
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default Register;
