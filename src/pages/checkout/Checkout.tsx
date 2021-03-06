import { log } from "console";
import React, { useEffect, useState } from "react";
import authApi from "../../api/AuthApi";
import basketApi from "../../api/BasketApi";
import orderApi from "../../api/OrderApi";
import Announcement from "../../compenents/announcement/Announcement";
import Navbar from "../../compenents/navbar/Navbar";
import Navigation from "../../compenents/navigation/Navigation";
import useAppContext from "../../core/app/util/useAppContext";
import { IAddress } from "../../types/address";
import { IBasketCheckout } from "../../types/basketCheckout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./checkout.css";
function Checkout() {
  const {
    appState: { currentUser, customerBasket },
  } = useAppContext();
  const [selectedAddress, setSelectedAddress] = useState<IAddress>();
  const [basketCheckout, setBasketCheckout] = useState<IBasketCheckout>({
    city: "",
    district: "",
    zip: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    addressLine: "",
    addressTitle: "",
    cardNumber: "",
    cardHolderName: "",
    cardExpirationMonth: "",
    cardExpirationYear: "",
    cardSecurityNumber: "",
    buyer: "",
  });
  const [selectedAddressBackgroundColor, setSelectedAddressBackgroundColor] =
    useState<string>("white");

  function GetTotalPrice() {
    let totalPrice = 0;
    if (customerBasket) {
      customerBasket.items.forEach((item) => {
        totalPrice += item.unitPrice;
      });
    }
    return totalPrice;
  }
  function SetAddress(address: IAddress) {
    setSelectedAddress(address);
    setSelectedAddressBackgroundColor("#f5f5f5");
  }
  function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  function StartCheckout() {
    if (selectedAddress && currentUser) {

      setBasketCheckout({
        ...basketCheckout,
        city: selectedAddress.city,
        district: selectedAddress.district,
        zip: selectedAddress.zip,
        firstName: selectedAddress.firstName,
        lastName: selectedAddress.lastName,
        phoneNumber: selectedAddress.phoneNumber,
        addressLine: selectedAddress.addressLine,
        addressTitle: selectedAddress.addressTitle,
        cardHolderName:
          basketCheckout.firstName + " " + basketCheckout.lastName,
        buyer: currentUser?.id,
        email: currentUser?.email,
      });
      basketApi.checkoutBasket(basketCheckout).then(async (response) => {
        let retryCounter = 0;
        let paymentIsSuccessful = false;
        if (response.status === 200) {
          toast.success(
            "??deme bilgileriniz do??ru ise 3D Secure ile ??deme yap??lacak ekrana y??nlendirileceksiniz l??tfen bekleyin."
          );
          await delay(3000);
          while (retryCounter <= 7 && !paymentIsSuccessful) {
            if (currentUser) {
              orderApi
                .GetPaymentHtmlContentOfOrder()
                .then((response) => {
                  paymentIsSuccessful = true;

                  const htmlContent = response.data;
                  const html = document.createElement("html");
                  html.innerHTML = htmlContent;
                  const popup = window.open("", "_blank");
                  if (popup) {
                    popup.document.write(html.innerHTML);
                    popup.document.close();
                    popup.focus();
                  }
                })
                .catch(async (error) => {
                  await delay(3000);
                  retryCounter++;
                });
              await delay(3000);
              retryCounter++;
            } else {
              toast.error("??deme yapmadan ??nce hesab??n??za giri?? yapmal??s??n??z.");
              break;
            }
          }
          if (!paymentIsSuccessful) {
            toast.error(
              "??deme yap??l??rken bir hata olu??tu l??tfen bilgilerinizi kontrol ediniz."
            );
          }
        }
      });
    }
  }

  return (
    <div>
      <Announcement message="50 TL ??st?? T??m Sipari??lerde Kargo Bedava!" />
      <Navbar />
      <Navigation />
      <div className="container">
        <div className="payment-area">
          <div className="head">
            <h1>??deme Se??enekleri</h1>
            <p>
              ??demenizi g??venle <strong>Banka ya da Kredi Kart?? </strong>ile
              yapabilirsiniz.
            </p>
          </div>
          <div className="content">
            <div className="addresses-area">
              <div className="head">
                <h2>Adreslerim</h2>
              </div>
              <div className="address-list">
                {currentUser?.addresses != null ? (
                  currentUser?.addresses.map((address: IAddress) => (
                    <div
                      key={address.id}
                      style={{
                        backgroundColor: selectedAddressBackgroundColor,
                      }}
                      onClick={(e) => SetAddress(address)}
                      className="address-card"
                    >
                      <div className="address-detail">
                        <div className="address-detail-title">
                          {address.addressTitle}
                        </div>
                        <div className="address-detail-content">
                          {address.addressLine}
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>??deme yapmadan ??nce profilinizden adres ekleyiniz!</p>
                )}
              </div>
            </div>
            <div className="head">
              <h2>Kart Bilgileri</h2>
            </div>
            <form className="payment-form">
              <div className="card-info">
                <div className="user-info">
                  <div className="name">
                    <label className="mb-5">Ad</label>
                    <input
                      type="text"
                      value={basketCheckout?.firstName}
                      onChange={(e) =>
                        setBasketCheckout({
                          ...basketCheckout,
                          firstName: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="surname">
                    <label className="mb-5">Soyad</label>
                    <input
                      type="text"
                      value={basketCheckout?.lastName}
                      onChange={(e) =>
                        setBasketCheckout({
                          ...basketCheckout,
                          lastName: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="card-number">
                  <label className="mb-5">Kart Numaras??</label>
                  <input
                    type="text"
                    maxLength={19}
                    value={basketCheckout?.cardNumber}
                    onChange={(e) =>
                      setBasketCheckout({
                        ...basketCheckout,
                        cardNumber: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="pull-date-area">
                  <div className="pull-month-year">
                    <label className="mb-5">Son Kullanma Tarihi</label>
                    <select
                      name="pull-date-month"
                      value={basketCheckout?.cardExpirationMonth}
                      onChange={(e) =>
                        setBasketCheckout({
                          ...basketCheckout,
                          cardExpirationMonth: e.target.value,
                        })
                      }
                    >
                      <option value="">Ay</option>
                      <option value="01">01</option>
                      <option value="02">02</option>
                      <option value="03">03</option>
                      <option value="04">04</option>
                      <option value="05">05</option>
                      <option value="06">06</option>
                      <option value="07">07</option>
                      <option value="08">08</option>
                      <option value="09">09</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                    </select>

                    <select
                      name="pull-date-year"
                      className="ml-5"
                      value={basketCheckout?.cardExpirationYear}
                      onChange={(e) =>
                        setBasketCheckout({
                          ...basketCheckout,
                          cardExpirationYear: e.target.value,
                        })
                      }
                    >
                      <option value="">Y??l</option>
                      <option value="2022">2022</option>
                      <option value="2023">2023</option>
                      <option value="2024">2024</option>
                      <option value="2025">2025</option>
                      <option value="2026">2026</option>
                      <option value="2027">2027</option>
                      <option value="2028">2028</option>
                      <option value="2029">2029</option>
                      <option value="2030">2030</option>
                    </select>
                  </div>

                  <div className="cvv">
                    <div className="cvv-head">
                      <p>CVV</p>
                      <a href="#">
                        <i className="fa-solid fa-circle-info"></i>
                      </a>
                    </div>
                    <input
                      type="text"
                      maxLength={3}
                      value={basketCheckout?.cardSecurityNumber}
                      onChange={(e) =>
                        setBasketCheckout({
                          ...basketCheckout,
                          cardSecurityNumber: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="pay-area">
          <div className="btn-pay disabled" onClick={StartCheckout}>
            ??deme Yap
          </div>
          <div className="check-contract">
            <input type="checkbox" id="pay-check" />
            <p>
              <a href="#" className="contract-link">
                ??n Bilgilendirme Ko??ullar??
              </a>
              'n?? ve
              <a href="#" className="contract-link">
                Mesafeli Sat???? S??zle??mesi
              </a>
              'ni okudum, onayl??yorum.
            </p>
          </div>
          <div className="order-summary">
            <div className="order-head">
              <h2>Sipari?? ??zeti</h2>
            </div>
            <div className="order-content">
              <div className="order-box">
                <p>Ara Toplam</p>
                <p id="sub-total">{GetTotalPrice()}</p>&nbsp;TL
              </div>
              <hr />
              <div className="order-box">
                <p>Toplam</p>
                <p id="total" className="fw-600">
                  {GetTotalPrice()}
                </p>
                &nbsp;TL
              </div>
            </div>
          </div>
          <div className="btn-pay disabled" onClick={StartCheckout}>
            ??deme Yap
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Checkout;
