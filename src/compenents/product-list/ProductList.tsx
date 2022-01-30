import React from "react";
import { IProduct } from "../../types/product";
import Product from "../product/Product";
import "./product-list.css";
const popularProducts = [
  {
    id: 1,
    brand: "HyperX",
    title: "Cloud II Gaming Kulaklık Kırmızı",
    url: "#",
    oldPrice: "200",
    newPrice: "150",
    discountRate: "-23%",
    img: "https://reimg-teknosa-cloud-prod.mncdn.com/mnresize/600/600/productimage/125085043/125085043_0_MC/15916678.jpg",
  },
  {
    id: 2,
    brand: "HyperX",
    title: "Cloud II Gaming Kulaklık Kırmızı",
    url: "#",
    oldPrice: "200",
    newPrice: "150",
    discountRate: "-23%",
    img: "https://cdn.shopify.com/s/files/1/0101/4832/products/Angela_Natural_Tee.png?v=1606780388",
  },
  {
    id: 3,
    brand: "HyperX",
    title: "Cloud II Gaming Kulaklık Kırmızı",
    url: "#",
    oldPrice: "200",
    newPrice: "150",
    discountRate: "-23%",
    img: "https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png",
  },
  {
    id: 4,
    brand: "HyperX",
    title: "Cloud II Gaming Kulaklık Kırmızı",
    url: "#",
    oldPrice: "200",
    newPrice: "150",
    discountRate: "-23%",
    img: "https://www.burdastyle.com/pub/media/catalog/product/cache/7bd3727382ce0a860b68816435d76e26/107/BUS-PAT-BURTE-1320516/1170x1470_BS_2016_05_132_front.png",
  },
  {
    id: 5,
    brand: "HyperX",
    title: "Cloud II Gaming Kulaklık Kırmızı",
    url: "#",
    oldPrice: "200",
    newPrice: "150",
    discountRate: "-23%",
    img: "https://images.ctfassets.net/5gvckmvm9289/3BlDoZxSSjqAvv1jBJP7TH/65f9a95484117730ace42abf64e89572/Noissue-x-Creatsy-Tote-Bag-Mockup-Bundle-_4_-2.png",
  },
  {
    id: 6,
    brand: "HyperX",
    title: "Cloud II Gaming Kulaklık Kırmızı",
    url: "#",
    oldPrice: "200",
    newPrice: "150",
    discountRate: "-23%",
    img: "https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png",
  },

  {
    id: 8,
    brand: "HyperX",
    title: "Cloud II Gaming Kulaklık Kırmızı",
    url: "#",
    oldPrice: "200",
    newPrice: "150",
    discountRate: "-23%",
    img: "https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png",
  },
];
interface ProductListProps{
  products:IProduct[]
}
function ProductList() {
  return (
    <ul className="product-list">
      {popularProducts.map((product) => (
        <li className="product-list__item">
          <Product item={product} key={product.id} />
        </li>
      ))}
    </ul>
  );
}

export default ProductList;
