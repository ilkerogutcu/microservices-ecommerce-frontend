import { Add, Remove } from "@mui/icons-material";
import { Rating } from "@mui/material";
import React from "react";
import Announcement from "../../compenents/announcement/Announcement";
import CommentList from "../../compenents/comment-list/CommentList";
import Footer from "../../compenents/footer/Footer";
import Navbar from "../../compenents/navbar/Navbar";
import Navigation from "../../compenents/navigation/Navigation";
import Newsletter from "../../compenents/newsletter/Newsletter";
import ProductList from "../../compenents/product-list/ProductList";
import Slider from "../../compenents/slider/Slider";
import { IComment } from "../../types/comment";
import { IProduct } from "../../types/product";
import "./product-detail.css";
const popularProducts: IProduct[] = [
  {
    id: 1,
    brand: "HyperX",
    title: "Cloud II Gaming Kulaklık Kırmızı",
    url: "#",
    oldPrice: 200,
    newPrice: 150,
    discountRate: "-23%",
    img: "https://reimg-teknosa-cloud-prod.mncdn.com/mnresize/600/600/productimage/125085043/125085043_0_MC/15916678.jpg",
  },
  {
    id: 2,
    brand: "HyperX",
    title: "Cloud II Gaming Kulaklık Kırmızı",
    url: "#",
    oldPrice: 200,
    newPrice: 150,
    discountRate: "-23%",
    img: "https://cdn.shopify.com/s/files/1/0101/4832/products/Angela_Natural_Tee.png?v=1606780388",
  },
  {
    id: 3,
    brand: "HyperX",
    title: "Cloud II Gaming Kulaklık Kırmızı",
    url: "#",
    oldPrice: 200,
    newPrice: 150,
    discountRate: "-23%",
    img: "https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png",
  },
  {
    id: 4,
    brand: "HyperX",
    title: "Cloud II Gaming Kulaklık Kırmızı",
    url: "#",
    oldPrice: 200,
    newPrice: 150,
    discountRate: "-23%",
    img: "https://www.burdastyle.com/pub/media/catalog/product/cache/7bd3727382ce0a860b68816435d76e26/107/BUS-PAT-BURTE-1320516/1170x1470_BS_2016_05_132_front.png",
  },
  {
    id: 5,
    brand: "HyperX",
    title: "Cloud II Gaming Kulaklık Kırmızı",
    url: "#",
    oldPrice: 200,
    newPrice: 150,
    discountRate: "-23%",
    img: "https://images.ctfassets.net/5gvckmvm9289/3BlDoZxSSjqAvv1jBJP7TH/65f9a95484117730ace42abf64e89572/Noissue-x-Creatsy-Tote-Bag-Mockup-Bundle-_4_-2.png",
  },
  {
    id: 6,
    brand: "HyperX",
    title: "Cloud II Gaming Kulaklık Kırmızı",
    url: "#",
    oldPrice: 200,
    newPrice: 150,
    discountRate: "-23%",
    img: "https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png",
  },

  {
    id: 8,
    brand: "HyperX",
    title: "Cloud II Gaming Kulaklık Kırmızı",
    url: "#",
    oldPrice: 200,
    newPrice: 150,
    discountRate: "-23%",
    img: "https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png",
  },
];

const comments: IComment[] = [
  {
    id: 2,
    content:
      "lorem ipsum duaur sleam aemrsad",
    createdAt: new Date(),
    productId: 1,
    rating: 2,
    userId: 3,
    fullName: "ilker öğütcü",
  },
  {
    id: 2,
    content: "lorem ipsum dur sleam aemrsad",
    createdAt: new Date(),
    productId: 1,
    rating: 2,
    userId: 3,
    fullName: "ilker öğütcü",
  },
  {
    id: 2,
    content: "lorem ipsum dur sleam aemrsad",
    createdAt: new Date(),
    productId: 1,
    rating: 2,
    userId: 3,
    fullName: "ilker öğütcü",
  },
  {
    id: 2,
    content: "lorem ipsum dur sleam aemrsad",
    createdAt: new Date(),
    productId: 1,
    rating: 2,
    userId: 3,
    fullName: "ilker öğütcü",
  },
  {
    id: 2,
    content: "lorem ipsum dur sleam aemrsad",
    createdAt: new Date(),
    productId: 1,
    rating: 2,
    userId: 3,
    fullName: "ilker öğütcü",
  },
  {
    id: 2,
    content: "lorem ipsum dur sleam aemrsad",
    createdAt: new Date(),
    productId: 1,
    rating: 2,
    userId: 3,
    fullName: "ilker öğütcü",
  },
  {
    id: 2,
    content: "lorem ipsum dur sleam aemrsad",
    createdAt: new Date(),
    productId: 1,
    rating: 2,
    userId: 3,
    fullName: "ilker öğütcü",
  },
  {
    id: 2,
    content: "lorem ipsum dur sleam aemrsad",
    createdAt: new Date(),
    productId: 1,
    rating: 2,
    userId: 3,
    fullName: "ilker öğütcü",
  },
  {
    id: 2,
    content: "lorem ipsum dur sleam aemrsad",
    createdAt: new Date(),
    productId: 1,
    rating: 2,
    userId: 3,
    fullName: "ilker öğütcü",
  },
  {
    id: 2,
    content: "lorem ipsum dur sleam aemrsad",
    createdAt: new Date(),
    productId: 1,
    rating: 2,
    userId: 3,
    fullName: "ilker öğütcü",
  },
  {
    id: 2,
    content: "lorem ipsum dur sleam aemrsad",
    createdAt: new Date(),
    productId: 1,
    rating: 2,
    userId: 3,
    fullName: "ilker öğütcü",
  },
  {
    id: 2,
    content: "lorem ipsum dur sleam aemrsad",
    createdAt: new Date(),
    productId: 1,
    rating: 2,
    userId: 3,
    fullName: "ilker öğütcü",
  },
  {
    id: 2,
    content: "lorem ipsum dur sleam aemrsad",
    createdAt: new Date(),
    productId: 1,
    rating: 2,
    userId: 3,
    fullName: "ilker öğütcü",
  },
  {
    id: 2,
    content: "lorem ipsum dur sleam aemrsad",
    createdAt: new Date(),
    productId: 1,
    rating: 2,
    userId: 3,
    fullName: "ilker öğütcü",
  },
  {
    id: 3,
    content: "lorem ipsum dur sleam aemrsad",
    createdAt: new Date(),
    productId: 1,
    rating: 3,
    userId: 3,
    fullName: "ilker öğütcü",
  },
];
function ProductDetail() {
  return (
    <div>
      <Announcement message="" />
      <Navbar />
      <Navigation />
      <div className="product-detail">
        <Slider
          customClassName="product-detail__slider"
          items={[
            <img
              className="product-detail__image"
              src="https://reimg-teknosa-cloud-prod.mncdn.com/mnresize/600/600/productimage/125085043/125085043_0_MC/15916678.jpg"
              alt="sa"
            />,

            <img
              className="product-detail__image"
              src="https://cdn.shopify.com/s/files/1/0101/4832/products/Angela_Natural_Tee.png?v=1606780388"
              alt="sa"
            />,
          ]}
        />
        <div className="product-detail__info">
          <div className="product-detail__info__rating-container">
            <Rating name="read-only" value={3} readOnly></Rating>
            <span className="product-detail__info__rating">3.8</span>
            <span className="product-detail__info__rating__count">(4)</span>
            <h6 style={{ marginLeft: "8px" }}>Değerlendirme yazın</h6>
          </div>
          <h1 className="product-detail__info__title">Hyper X Kulaklık</h1>
          <p className="product-detail__info__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            voluptatibus aliquid, provident asperiores veritatis tempora
            laudantium mollitia officia, ut veniam quisquam error cumque natus,
            fugit voluptate omnis aspernatur corrupti reprehenderit. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Commodi consequatur
            ipsum qui placeat laboriosam, sit culpa, explicabo velit odio
            quibusdam, aperiam assumenda veritatis magni! Laborum mollitia omnis
            asperiores itaque sed!
          </p>
          <div className="product-detail__info__price">
            $ 20 <span>$ 50</span>
          </div>
          <div className="product-detail__filter-container has-space-between">
            <div className="product-detail__filter-container__filter ">
              <span className="product-detail__filter-container__filter__title">
                Renk
              </span>
              <div
                className="product-detail__filter-container__filter__color"
                style={{ backgroundColor: "black" }}
              ></div>
              <div
                className="product-detail__filter-container__filter__color"
                style={{ backgroundColor: "green" }}
              ></div>
              <div
                className="product-detail__filter-container__filter__color"
                style={{ backgroundColor: "pink" }}
              ></div>
            </div>

            <div className="product-detail__filter-container__filter">
              <span className="product-detail__filter-container__filter__title">
                Beden
              </span>
              <select className="product-detail__filter-container__filter__options">
                <option>XS</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
                <option>XXL</option>
              </select>
            </div>
          </div>
          <div className="product-detail__info__add-to-card-container">
            <div className="product-detail__info__add-to-card-container__quantity-container">
              <Remove />
              <span className="product-detail__info__add-to-card-container__quantity-container__quantity">
                1
              </span>
              <Add />
            </div>
            <button className="product-detail__info__add-to-card-container__add-to-card">
              Sepete Ekle
            </button>
          </div>
        </div>
      </div>
      <div className="product-detail__comments-container">
        <h3 className="product-detail__comments-container__title">Yorumlar</h3>
        <CommentList comments={comments} />
      </div>
      <h1 className="home__title">En Çok Ziyaret Edilen Ürünler</h1>
      <ProductList products={popularProducts} />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default ProductDetail;
