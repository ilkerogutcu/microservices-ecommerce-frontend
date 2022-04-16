import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React, { useState } from "react";
import { generatePath, Link } from "react-router-dom";
import ROUTES from "../../core/app/route/routes";
import useAppContext from "../../core/app/util/useAppContext";
import "./navbar.css";

function Navbar() {
  const {
    appState: { currentUser, customerBasket },
  } = useAppContext();

  return (
    <nav className="navbar">
      <div className="navbar__search">
        <input placeholder="Ara" className="navbar__search-input" type="text" />
        <Search style={{ color: "gray", fontSize: 16 }} />
      </div>

      <Link style={{ textDecoration: 'none',color:"black"}} to={ROUTES.HOME}>
        <h1 className="logo">E-COMMERCE</h1>
      </Link>

      <div className="navbar__items">
        {currentUser ? (
          <Link to={ROUTES.PROFILE} className="navbar__item">
            Profilim
          </Link>
        ) : (
          <>
            <Link to={ROUTES.REGISTER} className="navbar__item">
              KAYIT OL
            </Link>
            <Link to={ROUTES.LOGIN} className="navbar__item">
              GİRİŞ YAP
            </Link>
          </>
        )}

        <div className="navbar__item">
          <Link to={ROUTES.BASKET.LIST}>
            <Badge badgeContent={customerBasket?.items.length} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
