import React from "react";
import Announcement from "../../compenents/announcement/Announcement";
import Navigation from "../../compenents/navigation/Navigation";
import Navbar from "../../compenents/navbar/Navbar";
import Slider from "../../compenents/slider/Slider";
import "./home.css";
import ProductList from "../../compenents/product-list/ProductList";
import TopCategories from "../../compenents/top-categories/TopCategories";
import { IProduct } from "../../types/product";
import Newsletter from "../../compenents/newsletter/Newsletter";
import Footer from "../../compenents/footer/Footer";

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
const Home = () => {
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
              <h1 className="home__slide__info--title">AUTUMN COLLECTION</h1>
              <p className="home__slide__info--description">
                DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.
              </p>
              <button className="home__slide__info--button">SHOW NOW</button>
            </div>
          </div>,

          <div className="home__slide" style={{ backgroundColor: "#fcf1ed" }}>
            <div className="home__slide--image">
              <img src="https://i.ibb.co/cXFnLLV/3.png" alt="sa" />
            </div>

            <div className="home__slide__info">
              <h1 className="home__slide__info--title">LOUNGEWEAR LOVE</h1>
              <p className="home__slide__info--description">
                DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.
              </p>
              <button className="home__slide__info--button">SHOW NOW</button>
            </div>
          </div>,
        ]}
      />
      <TopCategories />
      <h1 className="home__title">En Çok Ziyaret Edilen Ürünler</h1>
      <ProductList products={popularProducts} />
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default Home;
