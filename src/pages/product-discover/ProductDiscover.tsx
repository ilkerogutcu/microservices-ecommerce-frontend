import React, { Fragment } from "react";
import Announcement from "../../compenents/announcement/Announcement";
import Footer from "../../compenents/footer/Footer";
import Navbar from "../../compenents/navbar/Navbar";
import Navigation from "../../compenents/navigation/Navigation";
import Newsletter from "../../compenents/newsletter/Newsletter";
import ProductList from "../../compenents/product-list/ProductList";
import { IProduct } from "../../types/product";
import "./product-discover.css";

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
function ProductDiscover() {
  return (
    <Fragment>
      <Announcement message="50 TL Üstü Tüm Siparişlerde Kargo Bedava!" />
      <Navbar />
      <Navigation />
      <div className="product-discover">
        <h1 className="product-discover__category-title">Elbise</h1>
        <div className="product-discover__filter-container has-space-between">
          <div className="product-discover__filter-container__filter">
            <span className="product-discover__filter-container__filter__title">
              Ürünleri Filtrele:
            </span>
            <select className="product-discover__filter-container__filter__options">
              <option
                selected
                disabled
                className="product-discover__filter-container__filter__options__option"
              >
                Renk
              </option>
              <option className="product-discover__filter-container__filter__options__option">
                Kırmızı
              </option>
              <option className="product-discover__filter-container__filter__options__option">
                Beyaz
              </option>
              <option className="product-discover__filter-container__filter__options__option">
                Siyah
              </option>
            </select>
            <select className="product-discover__filter-container__filter__options">
              <option
                selected
                disabled
                className="product-discover__filter-container__filter__options__option"
              >
                Renk
              </option>
              <option className="product-discover__filter-container__filter__options__option">
                Kırmızı
              </option>
              <option className="product-discover__filter-container__filter__options__option">
                Beyaz
              </option>
              <option className="product-discover__filter-container__filter__options__option">
                Siyah
              </option>
            </select>
            <select className="product-discover__filter-container__filter__options">
              <option
                selected
                disabled
                className="product-discover__filter-container__filter__options__option"
              >
                Renk
              </option>
              <option className="product-discover__filter-container__filter__options__option">
                Kırmızı
              </option>
              <option className="product-discover__filter-container__filter__options__option">
                Beyaz
              </option>
              <option className="product-discover__filter-container__filter__options__option">
                Siyah
              </option>
            </select>
            <select className="product-discover__filter-container__filter__options">
              <option
                selected
                disabled
                className="product-discover__filter-container__filter__options__option"
              >
                Renk
              </option>
              <option className="product-discover__filter-container__filter__options__option">
                Kırmızı
              </option>
              <option className="product-discover__filter-container__filter__options__option">
                Beyaz
              </option>
              <option className="product-discover__filter-container__filter__options__option">
                Siyah
              </option>
            </select>
            <select className="product-discover__filter-container__filter__options">
              <option
                selected
                disabled
                className="product-discover__filter-container__filter__options__option"
              >
                Renk
              </option>
              <option className="product-discover__filter-container__filter__options__option">
                Kırmızı
              </option>
              <option className="product-discover__filter-container__filter__options__option">
                Beyaz
              </option>
              <option className="product-discover__filter-container__filter__options__option">
                Siyah
              </option>
            </select>
            <select className="product-discover__filter-container__filter__options">
              <option
                selected
                disabled
                className="product-discover__filter-container__filter__options__option"
              >
                Renk
              </option>
              <option className="product-discover__filter-container__filter__options__option">
                Kırmızı
              </option>
              <option className="product-discover__filter-container__filter__options__option">
                Beyaz
              </option>
              <option className="product-discover__filter-container__filter__options__option">
                Siyah
              </option>
            </select>
            <select className="product-discover__filter-container__filter__options">
              <option
                selected
                disabled
                className="product-discover__filter-container__filter__options__option"
              >
                Renk
              </option>
              <option className="product-discover__filter-container__filter__options__option">
                Kırmızı
              </option>
              <option className="product-discover__filter-container__filter__options__option">
                Beyaz
              </option>
              <option className="product-discover__filter-container__filter__options__option">
                Siyah
              </option>
            </select>
            <select className="product-discover__filter-container__filter__options">
              <option
                selected
                disabled
                className="product-discover__filter-container__filter__options__option"
              >
                Renk
              </option>
              <option className="product-discover__filter-container__filter__options__option">
                Kırmızı
              </option>
              <option className="product-discover__filter-container__filter__options__option">
                Beyaz
              </option>
              <option className="product-discover__filter-container__filter__options__option">
                Siyah
              </option>
            </select>
            <select className="product-discover__filter-container__filter__options">
              <option
                selected
                disabled
                className="product-discover__filter-container__filter__options__option"
              >
                Renk
              </option>
              <option className="product-discover__filter-container__filter__options__option">
                Kırmızı
              </option>
              <option className="product-discover__filter-container__filter__options__option">
                Beyaz
              </option>
              <option className="product-discover__filter-container__filter__options__option">
                Siyah
              </option>
            </select>
            <select className="product-discover__filter-container__filter__options">
              <option
                selected
                disabled
                className="product-discover__filter-container__filter__options__option"
              >
                Renk
              </option>
              <option className="product-discover__filter-container__filter__options__option">
                Kırmızı
              </option>
              <option className="product-discover__filter-container__filter__options__option">
                Beyaz
              </option>
              <option className="product-discover__filter-container__filter__options__option">
                Siyah
              </option>
            </select>
            <select className="product-discover__filter-container__filter__options">
              <option
                selected
                disabled
                className="product-discover__filter-container__filter__options__option"
              >
                Renk
              </option>
              <option className="product-discover__filter-container__filter__options__option">
                Kırmızı
              </option>
              <option className="product-discover__filter-container__filter__options__option">
                Beyaz
              </option>
              <option className="product-discover__filter-container__filter__options__option">
                Siyah
              </option>
            </select>
            <select className="product-discover__filter-container__filter__options">
              <option
                selected
                disabled
                className="product-discover__filter-container__filter__options__option"
              >
                Renk
              </option>
              <option className="product-discover__filter-container__filter__options__option">
                Kırmızı
              </option>
              <option className="product-discover__filter-container__filter__options__option">
                Beyaz
              </option>
              <option className="product-discover__filter-container__filter__options__option">
                Siyah
              </option>
            </select>
            <select className="product-discover__filter-container__filter__options">
              <option
                selected
                disabled
                className="product-discover__filter-container__filter__options__option"
              >
                Renk
              </option>
              <option className="product-discover__filter-container__filter__options__option">
                Kırmızı
              </option>
              <option className="product-discover__filter-container__filter__options__option">
                Beyaz
              </option>
              <option className="product-discover__filter-container__filter__options__option">
                Siyah
              </option>
            </select>
            <select className="product-discover__filter-container__filter__options">
              <option
                selected
                disabled
                className="product-discover__filter-container__filter__options__option"
              >
                Beden
              </option>
              <option className="product-discover__filter-container__filter__options__option">
                X
              </option>
              <option className="product-discover__filter-container__filter__options__option">
                L
              </option>
              <option className="product-discover__filter-container__filter__options__option">
                M
              </option>
              <option className="product-discover__filter-container__filter__options__option">
                S
              </option>
            </select>
          </div>
          <div className="product-discover__filter-container__filter">
            <span className="product-discover__filter-container__filter__title">
              Ürünleri Sırala:
            </span>
            <select className="product-discover__filter-container__filter__options">
              <option
                selected
                disabled
                className="product-discover__filter-container__filter__options__option"
              >
                Popülerliğe Göre
              </option>
              <option className="product-discover__filter-container__filter__options__option">
                En Düşükten En Yükseğe
              </option>
              <option className="product-discover__filter-container__filter__options__option">
                En Yüksekten En Düşüğe
              </option>
              <option className="product-discover__filter-container__filter__options__option">
                Yeni Ürünlerden Eskiye
              </option>
              <option className="product-discover__filter-container__filter__options__option">
                Eski Ürünlerden Yeniye
              </option>
            </select>
          </div>
        </div>
      </div>
      <ProductList products={popularProducts} />
      <Newsletter />
      <Footer />
    </Fragment>
  );
}

export default ProductDiscover;
