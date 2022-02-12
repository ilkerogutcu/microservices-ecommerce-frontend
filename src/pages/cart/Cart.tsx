import { Add, Remove } from "@mui/icons-material";
import React from "react";
import Announcement from "../../compenents/announcement/Announcement";
import Navbar from "../../compenents/navbar/Navbar";
import Navigation from "../../compenents/navigation/Navigation";
import "./cart.css";

function Cart() {
  return (
    <div>
      <Announcement message="50 TL Üstü Tüm Siparişlerde Kargo Bedava!" />
      <Navbar />
      <Navigation />
      <div className="cart">
        <h1 className="cart__title">Sepetiniz</h1>
        <div className="cart-header">
          <button className="cart__button--color-white">
            ALIŞVERİŞE DEVAM ET
          </button>
          <span className="cart__total-product-count">
            Alışveriş Sepetiniz (2)
          </span>
          <button className="cart__button--color-black">
            ALIŞVERİŞE TAMAMLA
          </button>
        </div>

        <div className="cart__container">
          <div className="cart__products">
            <div className="cart__product">
              <div className="cart__product-detail">
                <img
                  className="cart__product-image"
                  src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"
                  alt=""
                />
                <div className="cart__product-detail-container">
                  <span className="cart__product-name">
                    <b>Product:</b> JESSIE THUNDER SHOES
                  </span>
                  <span className="cart__product-stock-code">
                    <b>ID:</b> 93813718293
                  </span>
                  <span
                    className="cart__product-color"
                    style={{ backgroundColor: "black" }}
                  />
                  <span className="cart__product-size">
                    <b>Size:</b> 37.5
                  </span>
                </div>
              </div>
              <div className="cart__product-price-detail">
                <div className="cart__product-price-detail__amount-container">
                  <Add />
                  <span className="cart__product-price-detail__amount">2</span>
                  <Remove />
                </div>
                <span className="cart__product-price-detail__price">$ 30</span>
              </div>
            </div>
            <hr />
            <div className="cart__product">
              <div className="cart__product-detail">
                <img
                  className="cart__product-image"
                  src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"
                  alt=""
                />
                <div className="cart__product-detail-container">
                  <span className="cart__product-name">
                    <b>Product:</b> JESSIE THUNDER SHOES
                  </span>
                  <span className="cart__product-stock-code">
                    <b>ID:</b> 93813718293
                  </span>
                  <span
                    className="cart__product-color"
                    style={{ backgroundColor: "black" }}
                  />
                  <span className="cart__product-size">
                    <b>Size:</b> 37.5
                  </span>
                </div>
              </div>
              <div className="cart__product-price-detail">
                <div className="cart__product-price-detail__amount-container">
                  <Add />
                  <span className="cart__product-price-detail__amount">2</span>
                  <Remove />
                </div>
                <span className="cart__product-price-detail__price">$ 30</span>
              </div>
            </div>
            <hr />

            <div className="cart__product">
              <div className="cart__product-detail">
                <img
                  className="cart__product-image"
                  src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"
                  alt=""
                />
                <div className="cart__product-detail-container">
                  <span className="cart__product-name">
                    <b>Product:</b> JESSIE THUNDER SHOES
                  </span>
                  <span className="cart__product-stock-code">
                    <b>ID:</b> 93813718293
                  </span>
                  <span
                    className="cart__product-color"
                    style={{ backgroundColor: "black" }}
                  />
                  <span className="cart__product-size">
                    <b>Size:</b> 37.5
                  </span>
                </div>
              </div>
              <div className="cart__product-price-detail">
                <div className="cart__product-price-detail__amount-container">
                  <Add />
                  <span className="cart__product-price-detail__amount">2</span>
                  <Remove />
                </div>
                <span className="cart__product-price-detail__price">$ 30</span>
              </div>
            </div>
            <hr />

            <div className="cart__product">
              <div className="cart__product-detail">
                <img
                  className="cart__product-image"
                  src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"
                  alt=""
                />
                <div className="cart__product-detail-container">
                  <span className="cart__product-name">
                    <b>Product:</b> JESSIE THUNDER SHOES
                  </span>
                  <span className="cart__product-stock-code">
                    <b>ID:</b> 93813718293
                  </span>
                  <span
                    className="cart__product-color"
                    style={{ backgroundColor: "black" }}
                  />
                  <span className="cart__product-size">
                    <b>Size:</b> 37.5
                  </span>
                </div>
              </div>
              <div className="cart__product-price-detail">
                <div className="cart__product-price-detail__amount-container">
                  <Add />
                  <span className="cart__product-price-detail__amount">2</span>
                  <Remove />
                </div>
                <span className="cart__product-price-detail__price">$ 30</span>
              </div>
            </div>
            <hr />

            <div className="cart__product">
              <div className="cart__product-detail">
                <img
                  className="cart__product-image"
                  src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"
                  alt=""
                />
                <div className="cart__product-detail-container">
                  <span className="cart__product-name">
                    <b>Product:</b> JESSIE THUNDER SHOES
                  </span>
                  <span className="cart__product-stock-code">
                    <b>ID:</b> 93813718293
                  </span>
                  <span
                    className="cart__product-color"
                    style={{ backgroundColor: "black" }}
                  />
                  <span className="cart__product-size">
                    <b>Size:</b> 37.5
                  </span>
                </div>
              </div>
              <div className="cart__product-price-detail">
                <div className="cart__product-price-detail__amount-container">
                  <Add />
                  <span className="cart__product-price-detail__amount">2</span>
                  <Remove />
                </div>
                <span className="cart__product-price-detail__price">$ 30</span>
              </div>
            </div>
            <hr />

            <div className="cart__product">
              <div className="cart__product-detail">
                <img
                  className="cart__product-image"
                  src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"
                  alt=""
                />
                <div className="cart__product-detail-container">
                  <span className="cart__product-name">
                    <b>Product:</b> JESSIE THUNDER SHOES
                  </span>
                  <span className="cart__product-stock-code">
                    <b>ID:</b> 93813718293
                  </span>
                  <span
                    className="cart__product-color"
                    style={{ backgroundColor: "black" }}
                  />
                  <span className="cart__product-size">
                    <b>Size:</b> 37.5
                  </span>
                </div>
              </div>
              <div className="cart__product-price-detail">
                <div className="cart__product-price-detail__amount-container">
                  <Add />
                  <span className="cart__product-price-detail__amount">2</span>
                  <Remove />
                </div>
                <span className="cart__product-price-detail__price">$ 30</span>
              </div>
            </div>
            <hr />
          </div>

          <div className="cart__container-summary">
            <h1 className="cart__container-summary__title">SİPARİŞ ÖZETİNİZ</h1>
            <div className="cart__container-summary__item">
              <span className="cart__container-summary__item-name">
                Toplam sepet tutarı
              </span>
              <span className="cart__container-summary__item-price">$ 30</span>
            </div>
            <div className="cart__container-summary__item">
              <span className="cart__container-summary__item-name">
                Toplam kargo tutarı
              </span>
              <span className="cart__container-summary__item-price">$ 30</span>
            </div>
            <div className="cart__container-summary__item">
              <span className="cart__container-summary__item-name">Toplam</span>
              <span className="cart__container-summary__item-price">$ 30</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
