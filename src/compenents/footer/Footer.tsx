import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Room,
  Twitter,
} from "@mui/icons-material";
import React from "react";
import useAppContext from "../../core/app/util/useAppContext";
import "./footer.css";

function Footer() {
  const { appState } = useAppContext();
  console.log("amksnaksk");

  return (
    <footer className="footer">
      <div className="footer__about">
        <h1 className="footer__title">E-Commerce</h1>
        <p className="footer__about__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Voluptatum deleniti
          optio nihil blanditiis aliquid consequuntur. Blanditiis fuga ex
          adipisci aut atque temporibus, beatae laborum, optio earum amet
          quibusdam accusamus voluptatum, id architecto aspernatur odit
          praesentium officia voluptatibus incidunt eaque eum?
        </p>
        <div className="footer__about__social">
          <div
            className="ffooter__about__social--item"
            style={{ color: "#3B5999" }}
          >
            <Facebook />
          </div>
          <div
            className="footer__about__social--item"
            style={{ color: "#E4405F" }}
          >
            <Instagram />
          </div>
          <div
            className="footer__about__social--item"
            style={{ color: "#55ACEE" }}
          >
            <Twitter />
          </div>
        </div>
      </div>

      <div className="footer__links">
        <h3 className="footer__title">Hızlı Linkler</h3>
        <ul className="footer__links--list">
          <li className="footer__links--list__item">Anasayfa</li>
          <li className="footer__links--list__item">Sepet</li>
          <li className="footer__links--list__item">Anasayfa</li>
          <li className="footer__links--list__item">Anasayfa</li>
          <li className="footer__links--list__item">Anasayfa</li>
          <li className="footer__links--list__item">Anasayfa</li>
        </ul>
      </div>
      <div className="footer__contact">
        <h3 className="footer__title">İletişim</h3>
        <ul className="footer__contact--list">
          <li className="footer__contact--list__item">
            <Room style={{ marginRight: "10px" }} /> 622 Dixie Path , South
            Tobinchester 98336
          </li>

          <li className="footer__contact--list__item">
            <Phone style={{ marginRight: "10px" }} /> +1 234 56 78
          </li>
          <li className="footer__contact--list__item">
            <MailOutline style={{ marginRight: "10px" }} /> contact@lama.dev
          </li>
        </ul>
        <div className="footer__contact--payment">
          <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
