import classNames from "classnames";
import React from "react";
import { IProduct } from "../../types/product";
import Product from "../product/Product";
import "./product-list.css";

interface ProductListProps {
  products: IProduct[];
  customClassName?: string;
}
function ProductList({ products, customClassName }: ProductListProps) {
  return (
    <ul className={classNames("product-list", customClassName)}>
      {products.map((product) => (
        <li className="product-list__item">
          <Product item={product} key={product.id} />
        </li>
      ))}
    </ul>
  );
}

export default ProductList;
