import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import React from "react";

import "./top-products-item.css";

interface TopProductsItemProps {
  item: any;
  customClassName?: string;
}

function TopProductsItem({ item, customClassName }: TopProductsItemProps) {
  return (
    <div className="top-products-item">
      <div className="top-products-item__circle"></div>
      <img className="top-products-item__img" src={item.img} alt={item.title} />
      <div className="top-products-item__info">
        <div className="top-products-item__info--icon">
          <ShoppingCartOutlined />
        </div>
        <div className="top-products-item__info--icon">
          <SearchOutlined />
        </div>
        <div className="top-products-item__info--icon">
          <FavoriteBorderOutlined />
        </div>
      </div>
    </div>
  );
}

export default TopProductsItem;
