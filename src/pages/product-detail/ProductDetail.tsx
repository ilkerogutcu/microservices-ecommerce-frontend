import { Add, Remove } from "@mui/icons-material";
import { Rating } from "@mui/material";
import { log } from "console";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import catalogApi from "../../api/CatalogApi";
import Announcement from "../../compenents/announcement/Announcement";
import CommentList from "../../compenents/comment-list/CommentList";
import Footer from "../../compenents/footer/Footer";
import Navbar from "../../compenents/navbar/Navbar";
import Navigation from "../../compenents/navigation/Navigation";
import Newsletter from "../../compenents/newsletter/Newsletter";
import ProductList from "../../compenents/product-list/ProductList";
import Slider from "../../compenents/slider/Slider";
import useProductDetail from "../../hooks/useProductDetail";
import { IComment } from "../../types/comment";
import { IProduct } from "../../types/product";
import { IProductDetails } from "../../types/productDetails";
import "./product-detail.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const comments: IComment[] = [
  {
    id: 2,
    content: "lorem ipsum duaur sleam aemrsad",
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
  const { id } = useParams();
  const { productDetails, loading, error } = useProductDetail();
  const [quantity, setQuantity] = useState(1);
  const [currentProduct, setCurrentProduct] = useState<IProductDetails>();
  const [comments, setComments] = useState<IComment[]>([]);

  useEffect(() => {
    (async () => {
      try {
        if (id) {
          const { data } = await catalogApi.getCommentsOfProduct(id);
          setComments(data);
        }
      } catch (error) {
        if (error instanceof Error) {
          toast(error.message);
        }
      }
    })();
  }, []);

  const changeCurrentProduct = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const productId = event.target.value;

    const product = productDetails.find((product) => product.id === productId);

    setCurrentProduct(product);
  };

  return loading ? (
    <p>loading</p>
  ) : (
    <div>
      <Announcement message="50 TL Üstü Tüm Siparişlerde Kargo Bedava!" />
      <Navbar />
      <Navigation />
      <div className="product-detail">
        <Slider
          customClassName="product-detail__slider"
          items={productDetails[0].imageUrls.map((url) => (
            <img className="product-detail__image" src={url} alt="sa" />
          ))}
        />
        <div className="product-detail__info">
          <div className="product-detail__info__rating-container">
            <Rating name="read-only" value={productDetails[0].ratingAverage} readOnly></Rating>
            <span className="product-detail__info__rating">
              {productDetails[0].ratingAverage}
            </span>
            <span className="product-detail__info__rating__count">
              {productDetails[0].ratingCount}
            </span>
            <h6 style={{ marginLeft: "8px" }}>Değerlendirme yazın</h6>
          </div>
          <h1 className="product-detail__info__title">
            {productDetails[0].brand} {productDetails[0].name}
          </h1>
          <p className="product-detail__info__description">
            {productDetails[0].longDescription}
          </p>
          <div className="product-detail__info__price">
            TRY {productDetails[0].salePrice}{" "}
            <span>TRY {productDetails[0].listPrice}</span>
          </div>
          <div className="product-detail__filter-container has-space-between">
            <div className="product-detail__filter-container__filter ">
              <span className="product-detail__filter-container__filter__title">
                Renk
              </span>
              {productDetails.map((product) => (
                <div
                  className="product-detail__filter-container__filter__color"
                  style={{ backgroundColor: product.hexCode }}
                  onClick={(e) => setCurrentProduct(product)}
                ></div>
              ))}
            </div>

            <div className="product-detail__filter-container__filter">
              <span className="product-detail__filter-container__filter__title">
                Beden
              </span>
              <select
                className="product-detail__filter-container__filter__options"
                onChange={changeCurrentProduct}
              >
                <option selected disabled>
                  Beden seç
                </option>
                {productDetails.map((product) => (
                  <option value={product.id}>{product.size}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="product-detail__info__add-to-card-container">
            <div className="product-detail__info__add-to-card-container__quantity-container">
              <Remove onClick={DecreaseQuantity} />
              <span className="product-detail__info__add-to-card-container__quantity-container__quantity">
                {quantity}
              </span>
              <Add onClick={IncreaseQuantity} />
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
      <ProductList products={[]} />
      <Newsletter />
      <Footer />
      <ToastContainer />
    </div>
  );

  function DecreaseQuantity() {
    if (currentProduct) {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    } else {
      setQuantity(0);
    }
  }
  function IncreaseQuantity() {
    if (currentProduct) {
      if (currentProduct.stockQuantity > quantity) {
        setQuantity(quantity + 1);
      }
    }
  }
}

export default ProductDetail;
