import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ROUTES from "../../core/app/route/routes";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__search">
        <input placeholder="Ara" className="navbar__search-input" type="text" />
        <Search style={{ color: "gray", fontSize: 16 }} />
      </div>

      <h1 className="logo">E-COMMERCE</h1>
      <div className="navbar__items">
        <Link to={ROUTES.REGISTER} className="navbar__item">
          KAYIT OL
        </Link>
        <Link to={ROUTES.LOGIN} className="navbar__item">
          GİRİŞ YAP
        </Link>

        <div className="navbar__item">
          <Badge badgeContent={4} color="primary">
            <ShoppingCartOutlined />
          </Badge>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
