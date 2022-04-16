import { Add, Remove } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { generatePath, Link } from "react-router-dom";
import basketApi from "../../api/BasketApi";
import Announcement from "../../compenents/announcement/Announcement";
import Navbar from "../../compenents/navbar/Navbar";
import Navigation from "../../compenents/navigation/Navigation";
import ROUTES from "../../core/app/route/routes";
import { ICustomerBasket } from "../../types/customerBasket";
import "./cart.css";

function Cart() {
  const [customerBasket, setCustomerBasket] = useState<ICustomerBasket>();
  function GetTotalPrice() {
    let totalPrice = 0;
    if (customerBasket) {
      customerBasket.items.forEach((item) => {
        totalPrice += item.unitPrice;
      });
    }
    return totalPrice;
  }
  useEffect(() => {
    (async () => {
      await basketApi.getBasketItems().then((res) => {
        setCustomerBasket(res.data);
      });
    })();
  }, []);
  return (
    <div>
      <Announcement message="50 TL Üstü Tüm Siparişlerde Kargo Bedava!" />
      <Navbar />
      <Navigation />
      <div className="cart">
        <h1 className="cart__title">Sepetiniz</h1>
        <div className="cart-header">
          <Link
            to={generatePath(ROUTES.HOME)}
            className="cart__button--color-white"
          >
            <button className="cart__button--color-white">
              ALIŞVERİŞE DEVAM ET
            </button>
          </Link>
          <span className="cart__total-product-count">
            Alışveriş Sepetiniz : {customerBasket?.items.length}
          </span>
          <Link
            to={generatePath(ROUTES.CHECKOUT)}
            className="cart__button--color-black"
          >
            <button className="cart__button--color-black">
              ALIŞVERİŞE TAMAMLA
            </button>
          </Link>
        </div>

        <div className="cart__container">
          <div className="cart__products">
            {customerBasket?.items.map((item) => (
              <div className="cart__product">
                <div className="cart__product-detail">
                  <img
                    className="cart__product-image"
                    src={item.pictureUrl}
                    alt=""
                  />
                  <div className="cart__product-detail-container">
                    <span className="cart__product-name">
                      <b>Ürün İsmi:</b> {item.productName}
                    </span>
                    <span className="cart__product-stock-code">
                      <b>ID:</b> {item.productId}
                    </span>
                    {item.hexCode ? (
                      <span
                        className="cart__product-color"
                        style={{ backgroundColor: item.hexCode }}
                      />
                    ) : null}

                    <span className="cart__product-size">
                      <b>Beden:</b> {item.size}
                    </span>
                  </div>
                </div>
                <div className="cart__product-price-detail">
                  <div className="cart__product-price-detail__amount-container">
                    {/* <Add /> */}
                    <span className="cart__product-price-detail__amount">
                      Adet: {item.quantity}
                    </span>
                    {/* <Remove /> */}
                  </div>
                  <span className="cart__product-price-detail__price">
                    {item.unitPrice} TL
                  </span>
                </div>
                <br />
              </div>
            ))}
          </div>

          <div className="cart__container-summary">
            <h1 className="cart__container-summary__title">SİPARİŞ ÖZETİNİZ</h1>
            <div className="cart__container-summary__item">
              <span className="cart__container-summary__item-name">
                Toplam sepet tutarı
              </span>
              <span className="cart__container-summary__item-price">
                {GetTotalPrice()} TL
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
