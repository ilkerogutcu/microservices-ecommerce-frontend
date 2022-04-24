import { SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import Rating from "@mui/material/Rating";
import classNames from "classnames";
import React from "react";
import { generatePath, Link } from "react-router-dom";
import ROUTES from "../../core/app/route/routes";
import useProductDetail from "../../hooks/useProductDetail";
import { IProduct } from "../../types/product";
import { IProductCardViewModel } from "../../types/productCardViewModel";

import "./product.css";

interface ProductProps {
  item: IProductCardViewModel;
  customClassName?: string;
}

function Product({ item, customClassName }: ProductProps) {

  return (
    <div className="product-grid">
      <div className="product-grid__image">
        <Link
          to={generatePath(ROUTES.PRODUCT.DETAIL, { id: item.id })}
          className="image"
        >
          <img  src={item.thumbnailImageUrl} alt={item.name} />
        </Link>
        <span className="product-grid__discount">{item.discountRate}</span>
        <ul className="product-grid__icons">
          <li>
            <a href={item.thumbnailImageUrl}>
              <ShoppingCartOutlined />
            </a>
          </li>
          <li>
            <a href={item.thumbnailImageUrl}>
              <SearchOutlined />
            </a>
          </li>
        </ul>
        <a href={item.thumbnailImageUrl} className="product-grid__add-to-cart">
          SEPETE EKLE
        </a>
      </div>
      <div className="product-grid__content">
        <h3 className="product-grid__content__title">
          <a href={item.thumbnailImageUrl}>
            <span className="is-bold">{item.brand}</span> {item.name}
          </a>
        </h3>
        <div className="product-grid__content__price">
          ${item.salePrice} <span>${item.listPrice}</span>
        </div>
        <div className="product-grid__content__rating">
          <Rating
            name="half-rating-read"
            value={item.ratingAverage}
            precision={0.5}
            readOnly
          />
        </div>
      </div>
    </div>
  );
}

export default Product;
