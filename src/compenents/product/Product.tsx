import { SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import Rating from "@mui/material/Rating";
import classNames from "classnames";
import React from "react";
import { IProduct } from "../../types/product";

import "./product.css";

interface ProductProps {
  item: IProduct;
  customClassName?: string;
}

function Product({ item, customClassName }: ProductProps) {
  return (
    <div className="product-grid">
      <div className="product-grid__image">
        <a href={item.url} className="image">
          <img src={item.img} alt={item.title} />
        </a>
        <span className="product-grid__discount">{item.discountRate}</span>
        <ul className="product-grid__icons">
          <li>
            <a href={item.url}>
              <ShoppingCartOutlined />
            </a>
          </li>
          <li>
            <a href={item.url}>
              <SearchOutlined />
            </a>
          </li>
        </ul>
        <a href={item.url} className="product-grid__add-to-cart">
          SEPETE EKLE
        </a>
      </div>
      <div className="product-grid__content">
        <h3 className="product-grid__content__title">
          <a href={item.url}>
            <span className="is-bold">{item.brand}</span> {item.title}
          </a>
        </h3>
        <div className="product-grid__content__price">
          ${item.newPrice} <span>${item.oldPrice}</span>
        </div>
        <div className="product-grid__content__rating">
          <Rating name="read-only" value={3} readOnly></Rating>
        </div>
      </div>
    </div>
  );
}

export default Product;
