import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import catalogApi from "../../api/CatalogApi";
import categoryApi from "../../api/CategoryApi";
import Announcement from "../../compenents/announcement/Announcement";
import Footer from "../../compenents/footer/Footer";
import Navbar from "../../compenents/navbar/Navbar";
import Navigation from "../../compenents/navigation/Navigation";
import Newsletter from "../../compenents/newsletter/Newsletter";
import ProductList from "../../compenents/product-list/ProductList";
import { IProduct } from "../../types/product";
import { IProductCardViewModel } from "../../types/productCardViewModel";
import "./product-discover.css";

function ProductDiscover() {
  const { id } = useParams();
  const [products, setProducts] = useState<IProductCardViewModel[]>([]);
  const [categoryName, setCategoryName] = useState<string>("");

  useEffect(() => {
    (async () => {
      try {
        if (id) {
          const { data } = await catalogApi.getProductsByCategory(id);
          setProducts(data.data);
          const category = await categoryApi.getCategoryById(id);
          setCategoryName(category.data.name);
        }
      } catch (error) {
        if (error instanceof Error) {
          console.log(error.message);
        }
      }
    })();
  }, [id]);

  return (
    <Fragment>
      <Announcement message="50 TL Üstü Tüm Siparişlerde Kargo Bedava!" />
      <Navbar />
      <Navigation />
      <div className="product-discover">
        <h1 className="product-discover__category-title">{categoryName}</h1>
        <div className="product-discover__filter-container has-space-between">
          {/* <div className="product-discover__filter-container__filter">
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
          </div> */}
        </div>
      </div>
      <hr/>
      <ProductList products={products} />
      <Newsletter />
      <Footer />
    </Fragment>
  );
}

export default ProductDiscover;
