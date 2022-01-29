import React from "react";
import Announcement from "../../compenents/announcement/Announcement";
import Navigation from "../../compenents/navigation/Navigation";
import Navbar from "../../compenents/navbar/Navbar";
import Slider from "../../compenents/slider/Slider";
import "./home.css";
import TopCategories from "../../compenents/top-categories/TopCategories";
import TopProducts from "../../compenents/top-products/TopProducts";
const Home = () => {
  return (
    <div>
      <Announcement message="50 TL Üstü Tüm Siparişlerde Kargo Bedava!" />
      <Navbar />
      <Navigation/>
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
      <TopCategories/>
      <TopProducts/>
    </div>
  );
};

export default Home;
