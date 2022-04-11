import React, { useEffect, useState } from "react";
import Announcement from "../../compenents/announcement/Announcement";
import Navigation from "../../compenents/navigation/Navigation";
import Navbar from "../../compenents/navbar/Navbar";
import Slider from "../../compenents/slider/Slider";
import "./home.css";
import ProductList from "../../compenents/product-list/ProductList";
import TopCategories from "../../compenents/top-categories/TopCategories";
import { IProduct } from "../../types/product";
import { IProductCardViewModel } from "../../types/productCardViewModel";

import Newsletter from "../../compenents/newsletter/Newsletter";
import Footer from "../../compenents/footer/Footer";
import catalogApi from "../../api/CatalogApi";

const Home = () => {
  const [topProducts, setTopProducts] = useState<IProductCardViewModel[]>([]);
  useEffect(() => {
    (async () => {
      await catalogApi.getTopProducts().then((res) => {
        setTopProducts(res.data);
      });
    })();
  }, []);
  return (
    <div>
      <Announcement message="50 TL Üstü Tüm Siparişlerde Kargo Bedava!" />
      <Navbar />
      <Navigation />
      <Slider
        items={[
          <div className="home__slide" style={{ backgroundColor: "#fcf1ed" }}>
            <div className="home__slide--image">
              <img src="https://i.ibb.co/DG69bQ4/2.png" alt="sa" />
            </div>

            <div className="home__slide__info">
              <h1 className="home__slide__info--title">Sonbahar Koleksiyonu</h1>
              <p className="home__slide__info--description">
                Mükemmel ürünlerden yararlanın.
              </p>
              <button className="home__slide__info--button">Alışverişe Başla</button>
            </div>
          </div>,

          <div className="home__slide" style={{ backgroundColor: "#fcf1ed" }}>
            <div className="home__slide--image">
              <img src="https://i.ibb.co/cXFnLLV/3.png" alt="sa" />
            </div>

            <div className="home__slide__info">
              <h1 className="home__slide__info--title">Yaz Koleksiyonu</h1>
              <p className="home__slide__info--description">
                Mükemmel ürünlerden yararlanın.
              </p>
              <button className="home__slide__info--button">Alışverişe Başla</button>
            </div>
          </div>,
        ]}
      />
      <TopCategories />
      <h1 className="home__title">En Çok Ziyaret Edilen Ürünler</h1>
      <ProductList products={topProducts} />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
